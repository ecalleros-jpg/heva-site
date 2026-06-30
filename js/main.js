/* ============================================================
   HEVA — main.js
   Nav scroll · Hamburger · Language toggle · Reveal
   ============================================================ */

// ── NAV SCROLL ──────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });
nav.classList.toggle('scrolled', window.scrollY > 24);

// ── HAMBURGER ────────────────────────────────────────────────
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('open');
  drawer.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

drawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    drawer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ── LANGUAGE TOGGLE ──────────────────────────────────────────
const T = {
  es: {
    'nav-ai':       'Asistente IA',
    'nav-cobro':    'Cobro Global',
    'nav-plat':     'Plataforma',
    'nav-wallet':   'Wallet',
    'nav-fin':      'Financiamiento',
    'nav-cta':      'Hablar con nosotros',
    'hero-eye':     'Making Healthcare Borderless',
    'hero-h1a':     'Cobra desde antes',
    'hero-h1b':     'que el paciente llegue.',
    'hero-sub':     'Infraestructura de IA y pagos para la medicina internacional. Tus pacientes de EE.UU., bien atendidos. Tu clínica, bien pagada.',
    'hero-wa':      'Habla con un especialista',
    'hero-demo':    'Agenda una demo',
    'hook-text':    'de tus pacientes internacionales dudan entre su consulta y cirugía. No por la medicina. Por el proceso de pago.',
    'hook-coda':    'heva lo resuelve.',
    'ai-eye':       'heva AI · Asistente',
    'ai-h2':        'Tu clínica atiende 24/7. Aunque tú no estés.',
    'ai-p':         'El asistente IA responde en WhatsApp e Instagram, cotiza procedimientos con tus precios, califica leads y agenda citas automáticamente.',
    'ai-b1':        'Responde en el idioma del paciente',
    'ai-b2':        'Genera cotizaciones instantáneas',
    'ai-b3':        'Escala al equipo cuando se necesita',
    'ai-b4':        'Disponible 24/7, sin días de descanso',
    'ai-cta':       'Conocer el asistente →',
    'cobro-eye':    'Cobro Global',
    'cobro-h2':     'Acepta cualquier tarjeta. De cualquier país.',
    'cobro-p':      'Sin terminal extra. Cobra a distancia antes de la cita con links de pago, depósitos e invoices directamente desde tu inbox.',
    'cobro-b1':     '+190 países — Visa, Mastercard, Amex, Discover',
    'cobro-b2':     'Cobra a distancia antes de la cita',
    'cobro-b3':     'Financiamiento para pacientes de EE.UU.',
    'cobro-b4':     'Invoices y seguimiento en un solo lugar',
    'cobro-cta':    'Ver opciones de financiamiento →',
    'plat-eye':     'Plataforma heva',
    'plat-h2':      'Todo tu flujo. Un solo lugar.',
    'plat-p':       'Inbox de conversaciones, cotizaciones, procedimientos, agenda y pagos — todo integrado para que tu equipo opere sin fricciones.',
    'plat-b1':      'Inbox de leads y pacientes',
    'plat-b2':      'Catálogo de procedimientos con precios en USD',
    'plat-b3':      'Cotizaciones y seguimiento de pagos',
    'plat-b4':      'Calendario y agenda de citas',
    'plat-cta':     'Ver la plataforma →',
    'red-eye':      'La red heva',
    'red-h2':       'Médicos que ya cobran sin fronteras.',
    'red-p':        'Clínicas en Tijuana, Santo Domingo y más ciudades de LATAM usan heva para atender y cobrar a sus pacientes de EE.UU.',
    'red-cta':      'Ver la red en Instagram @yourheva →',
    'close-eye':    'Empieza hoy',
    'close-h2':     '¿Listo para cobrar sin fronteras?',
    'close-p':      'Una conversación de 20 minutos puede cambiar cómo opera tu clínica.',
    'close-wa':     'Habla con un especialista',
    'close-demo':   'Agenda una demo',
    'ft-tag':       'Making Healthcare Borderless',
    'ft-c':         '© 2026 heva. Todos los derechos reservados.',
    'ft-stripe':    'Infraestructura respaldada por Bridge (empresa de Stripe)',
  },
  en: {
    'nav-ai':       'AI Assistant',
    'nav-cobro':    'Global Payments',
    'nav-plat':     'Platform',
    'nav-wallet':   'Wallet',
    'nav-fin':      'Financing',
    'nav-cta':      'Talk to us',
    'hero-eye':     'Making Healthcare Borderless',
    'hero-h1a':     'Get paid before',
    'hero-h1b':     'the patient arrives.',
    'hero-sub':     'AI and payment infrastructure for international medicine. Your US patients, well-served. Your practice, well-paid.',
    'hero-wa':      'Talk to a specialist',
    'hero-demo':    'Book a demo',
    'hook-text':    'of your international patients hesitate between consultation and surgery. Not because of the medicine. Because of the payment process.',
    'hook-coda':    'heva solves it.',
    'ai-eye':       'heva AI · Assistant',
    'ai-h2':        'Your clinic is open 24/7. Even when you\'re not.',
    'ai-p':         'The AI assistant responds on WhatsApp and Instagram, quotes procedures at your prices, qualifies leads, and schedules appointments automatically.',
    'ai-b1':        'Responds in the patient\'s language',
    'ai-b2':        'Generates instant quotes',
    'ai-b3':        'Escalates to your team when needed',
    'ai-b4':        'Available 24/7, no days off',
    'ai-cta':       'Learn about the assistant →',
    'cobro-eye':    'Global Payments',
    'cobro-h2':     'Accept any card. From any country.',
    'cobro-p':      'No extra terminal needed. Charge patients remotely before the appointment with payment links, deposits, and invoices directly from your inbox.',
    'cobro-b1':     '+190 countries — Visa, Mastercard, Amex, Discover',
    'cobro-b2':     'Charge remotely before the appointment',
    'cobro-b3':     'Financing available for US patients',
    'cobro-b4':     'Invoices and tracking in one place',
    'cobro-cta':    'See financing options →',
    'plat-eye':     'heva Platform',
    'plat-h2':      'Everything in one place.',
    'plat-p':       'Conversation inbox, quotes, procedures, calendar, and payments — all integrated so your team operates without friction.',
    'plat-b1':      'Lead and patient inbox',
    'plat-b2':      'Procedure catalog with USD pricing',
    'plat-b3':      'Quotes and payment tracking',
    'plat-b4':      'Calendar and appointment scheduling',
    'plat-cta':     'See the platform →',
    'red-eye':      'The heva network',
    'red-h2':       'Doctors already charging without borders.',
    'red-p':        'Clinics in Tijuana, Santo Domingo, and more cities across LATAM use heva to serve and charge their US patients.',
    'red-cta':      'See the network on Instagram @yourheva →',
    'close-eye':    'Start today',
    'close-h2':     'Ready to charge without borders?',
    'close-p':      'A 20-minute conversation could change how your practice operates.',
    'close-wa':     'Talk to a specialist',
    'close-demo':   'Book a demo',
    'ft-tag':       'Making Healthcare Borderless',
    'ft-c':         '© 2026 heva. All rights reserved.',
    'ft-stripe':    'Infrastructure backed by Bridge (a Stripe company)',
  }
};

// Restore persisted language preference across pages
let lang = (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('heva-lang')) || 'es';

function applyLang(l) {
  const t = T[l];
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.getAttribute('data-t');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.documentElement.lang = l;
  lang = l;
  try { sessionStorage.setItem('heva-lang', l); } catch(e) {}
  const btnLabel = l === 'es' ? 'EN' : 'ES';
  const mainBtn   = document.getElementById('langBtn');
  const mobileBtn = document.getElementById('langBtnMobile');
  if (mainBtn)   mainBtn.textContent   = btnLabel;
  if (mobileBtn) mobileBtn.textContent = btnLabel;
}

function toggleLang() { applyLang(lang === 'es' ? 'en' : 'es'); }

const langBtn = document.getElementById('langBtn');
const langBtnMobile = document.getElementById('langBtnMobile');
if (langBtn)       langBtn.addEventListener('click', toggleLang);
if (langBtnMobile) langBtnMobile.addEventListener('click', toggleLang);

// Apply saved language on page load (handles both landing and sub-pages)
if (lang !== 'es') applyLang(lang);

// ── SCROLL REVEAL ────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
