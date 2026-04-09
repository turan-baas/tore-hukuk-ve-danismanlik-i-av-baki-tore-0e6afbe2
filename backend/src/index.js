import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || parseInt(process.argv.find((a, i) => process.argv[i - 1] === '--port') || '6000', 10);
const PROJECT_ID = process.env.PROJECT_ID || '';
const PROJECT_NAME = process.env.PROJECT_NAME || '';
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
const PORTAL_API_URL = process.env.PORTAL_API_URL || 'https://portal.pinrise.io/api/portal/forms/submit';

// Database
const dbPath = path.join(__dirname, '..', 'data', 'database.db');
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS form_submissions (
    id TEXT PRIMARY KEY,
    form_type TEXT DEFAULT 'contact',
    name TEXT,
    email TEXT,
    phone TEXT,
    message TEXT,
    data_json TEXT,
    source_url TEXT,
    forwarded INTEGER DEFAULT 0,
    created_at TEXT NOT NULL
  );
`);

const app = express();

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, project: PROJECT_ID, name: PROJECT_NAME });
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message, formType, ...extra } = req.body || {};

  if (!name && !email && !message) {
    return res.status(400).json({ error: 'At least name, email, or message is required' });
  }

  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  const dataJson = JSON.stringify({ ...req.body });

  db.prepare(`INSERT INTO form_submissions (id, form_type, name, email, phone, message, data_json, source_url, forwarded, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`).run(
    id, formType || 'contact', name || null, email || null, phone || null, message || null,
    dataJson, req.headers.referer || null, now
  );

  console.log(`[${PROJECT_NAME}] New ${formType || 'contact'}: ${name || 'anonymous'} — ${(message || '').slice(0, 80)}`);

  // Forward to portal API (fire-and-forget)
  forwardToPortal(id, formType || 'contact', req.body, req.headers.referer);

  res.json({ success: true, id });
});

// Forward submission to portal
async function forwardToPortal(id, formType, data, sourceUrl) {
  try {
    const res = await fetch(PORTAL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectId: PROJECT_ID, formType, data, sourceUrl }),
    });
    if (res.ok) {
      db.prepare('UPDATE form_submissions SET forwarded = 1 WHERE id = ?').run(id);
    }
  } catch (err) {
    console.error(`Forward failed for ${id}: ${err.message}`);
  }
}

// Retry queue — forward unforwarded submissions every 60s
setInterval(() => {
  const pending = db.prepare('SELECT * FROM form_submissions WHERE forwarded = 0 ORDER BY created_at ASC LIMIT 10').all();
  for (const sub of pending) {
    const data = JSON.parse(sub.data_json || '{}');
    forwardToPortal(sub.id, sub.form_type, data, sub.source_url);
  }
}, 60000);

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT} for ${PROJECT_NAME} (${PROJECT_ID})`);
});
