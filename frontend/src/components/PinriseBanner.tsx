'use client';
import { useEffect, useState } from 'react';

const translations: Record<string, { title: string; subtitle: string; buy: string; popup: string; popup2: string }> = {
  tr: { title: 'Bu web sitesini satın almak ister misiniz?', subtitle: 'Profesyonel web siteniz hazır. Hemen sahip olun!', buy: 'Satın Al', popup: 'Bu site sizin için özel olarak tasarlandı!', popup2: 'Kaçırmayın! Web siteniz hazır ve sizi bekliyor.' },
  en: { title: 'Want to buy this website?', subtitle: 'Your professional website is ready. Own it now!', buy: 'Buy Now', popup: 'This site was built just for you!', popup2: "Don't miss out! Your website is ready and waiting." },
  de: { title: 'Möchten Sie diese Website kaufen?', subtitle: 'Ihre professionelle Website ist fertig. Jetzt sichern!', buy: 'Jetzt kaufen', popup: 'Diese Seite wurde speziell für Sie erstellt!', popup2: 'Nicht verpassen! Ihre Website ist bereit.' },
  fr: { title: 'Vous souhaitez acheter ce site web ?', subtitle: 'Votre site professionnel est prêt. Faites-en le vôtre !', buy: 'Acheter', popup: 'Ce site a été créé spécialement pour vous !', popup2: 'Ne manquez pas cette opportunité !' },
  es: { title: '¿Quieres comprar este sitio web?', subtitle: 'Tu sitio web profesional está listo. ¡Hazte con él!', buy: 'Comprar', popup: '¡Este sitio fue creado especialmente para ti!', popup2: '¡No te lo pierdas! Tu sitio web está listo.' },
  nl: { title: 'Wilt u deze website kopen?', subtitle: 'Uw professionele website is klaar. Maak hem nu de uwe!', buy: 'Nu kopen', popup: 'Deze website is speciaal voor u gemaakt!', popup2: 'Mis het niet! Uw website is klaar.' },
  ar: { title: 'هل تريد شراء هذا الموقع؟', subtitle: 'موقعك الاحترافي جاهز. احصل عليه الآن!', buy: 'اشترِ الآن', popup: 'تم تصميم هذا الموقع خصيصاً لك!', popup2: 'لا تفوت الفرصة! موقعك جاهز.' },
  pt: { title: 'Quer comprar este site?', subtitle: 'Seu site profissional está pronto. Garanta o seu!', buy: 'Comprar', popup: 'Este site foi feito especialmente para você!', popup2: 'Não perca! Seu site está pronto.' },
  it: { title: 'Vuoi acquistare questo sito web?', subtitle: 'Il tuo sito professionale è pronto. Fallo tuo!', buy: 'Acquista', popup: 'Questo sito è stato creato apposta per te!', popup2: 'Non perdere questa opportunità!' },
  ru: { title: 'Хотите купить этот сайт?', subtitle: 'Ваш профессиональный сайт готов. Сделайте его своим!', buy: 'Купить', popup: 'Этот сайт создан специально для вас!', popup2: 'Не упустите! Ваш сайт готов.' },
};

function getTexts() {
  if (typeof document === 'undefined') return translations.en;
  const lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
  return translations[lang] || translations.en;
}

export default function PinriseBanner() {
  const [show, setShow] = useState(false);
  const [t, setT] = useState(translations.en);
  const buyUrl = "https://portal.pinrise.io/buy/0e6afbe2-d7ac-4c99-9e6c-21e2b00dfaa2";

  useEffect(() => {
    setT(getTexts());
    fetch('https://portal.pinrise.io/api/portal/projects/0e6afbe2-d7ac-4c99-9e6c-21e2b00dfaa2/status')
      .then(r => r.json())
      .then(d => { if (!d.isPaid) setShow(true); })
      .catch(() => {
        // Fallback to local status file
        fetch('/pinrise-status.json')
          .then(r => r.json())
          .then(d => { if (!d.isPaid) setShow(true); })
          .catch(() => {});
      });
  }, []);

  if (!show) return null;

  return (
    <div style={{position:'fixed',bottom:0,left:0,right:0,zIndex:999999,background:'linear-gradient(135deg,#1a1a2e,#16213e)',color:'#fff',padding:'16px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',fontFamily:'-apple-system,sans-serif',boxShadow:'0 -4px 12px rgba(0,0,0,0.15)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:2}}>
        <span style={{fontSize:15,fontWeight:600}}>{t.title}</span>
        <span style={{fontSize:12,color:'#94a3b8'}}>{t.subtitle}</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <a href={buyUrl} style={{background:'linear-gradient(135deg,#e8a838,#f0b84d)',color:'#000',padding:'10px 24px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:14,boxShadow:'0 2px 8px rgba(232,168,56,0.3)'}}>
          {t.buy}
        </a>
        <button onClick={() => setShow(false)} style={{background:'none',border:'none',color:'#64748b',fontSize:20,cursor:'pointer',padding:'4px 8px'}}>
          ✕
        </button>
      </div>
    </div>
  );
}
