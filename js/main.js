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
    'ai-b1':        'Responde en el idioma del paciente — inglés, español y más',
    'ai-b2':        'Cotiza al instante con tus precios',
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
    // ── asistente.html ──
    'as-h-eye':     'heva AI · Asistente',
    'as-h-h1':      'Tu clínica nunca<br>deja de atender.',
    'as-h-sub':     'Mientras operas, duermes o estás en consulta, el asistente IA responde a tus pacientes en su idioma, cotiza con tus precios y los lleva hasta la cita.',
    'as-hiw-eye':   'Así funciona',
    'as-hiw-h2':    'Un agente que trabaja como tu mejor recepcionista.',
    'as-hiw-p':     'El paciente escribe en WhatsApp o Instagram. El asistente responde en su idioma —inglés y español a diario, y muchos más—, entiende su intención, cotiza el procedimiento con tus precios reales y captura todos sus datos de contacto automáticamente.',
    'as-hiw-b1':    'Responde en el idioma del paciente, las 24 horas',
    'as-hiw-b2':    'Cotiza con los precios que tú configuraste en Practice',
    'as-hiw-b3':    'Captura nombre, teléfono, procedimiento y presupuesto',
    'as-hiw-b4':    'Escala a tu equipo cuando la conversación lo necesita',
    'as-cap-eye':   'Qué hace exactamente',
    'as-cap-h2':    'Todo lo que pasa<br>sin que lo veas.',
    'as-cap-c1t':   'Habla el idioma del paciente',
    'as-cap-c1p':   'Detecta el idioma del paciente y responde automáticamente. Inglés y español son los más comunes, pero atiende en muchos idiomas más.',
    'as-cap-c2t':   'WhatsApp e Instagram',
    'as-cap-c2p':   'Conectado a los canales donde ya están tus pacientes. Sin apps nuevas, sin cambiar de canal.',
    'as-cap-c3t':   'Resumen de conversación',
    'as-cap-c3p':   'Cada conversación llega con un resumen listo: intención del paciente, procedimiento, presupuesto estimado y estado del lead.',
    'as-cap-c4t':   'Escalaciones inteligentes',
    'as-cap-c4p':   'Cuando un lead está listo para agendar o necesita atención especial, el asistente te avisa y te pasa la conversación.',
    'as-cta-eye':   'Empieza hoy',
    'as-cta-h2':    '¿Listo para que tu clínica<br>atienda 24/7?',
    'as-cta-p':     'Una conversación de 20 minutos es todo lo que necesitas para activarlo.',
    // ── financiamiento.html ──
    'fin-h-eye':    'Financiamiento',
    'fin-h-h1':     'Sus pacientes no se<br>caen por el precio.',
    'fin-h-sub':    'Ofrece a tus pacientes de EE.UU. opciones de <strong>compra ahora, paga después</strong>: se atienden hoy y pagan en cuotas. Tú cobras el 100% por adelantado.',
    'fin-hiw-eye':  'Cómo funciona',
    'fin-hiw-h2':   'Tú cobras completo. El riesgo no es tuyo.',
    'fin-hiw-p':    'heva conecta tu clínica con las plataformas de <strong>compra ahora, paga después</strong> que tus pacientes en EE.UU. ya usan. El paciente se atiende hoy y paga a plazos; la plataforma aprueba y asume el cobro. Tú recibes el total del procedimiento por adelantado.',
    'fin-hiw-b1':   'El paciente paga en cuotas sin interés (o con planes extendidos)',
    'fin-hiw-b2':   'Tú cobras el 100% por adelantado, antes del procedimiento',
    'fin-hiw-b3':   'Sin riesgo de impago para tu clínica',
    'fin-hiw-b4':   'El link de financiamiento se envía directo desde el inbox de heva',
    'fin-pl-eye':   'Compra ahora, paga después',
    'fin-pl-h2':    'Tres formas de dividir el pago. Para tu clínica.',
    'fin-pl-p':     'El paciente elige cómo pagar según el costo del procedimiento. La aprobación y el riesgo de cobro son de la plataforma de financiamiento, sin cargos por mora. Tú recibes el total por adelantado.',
    'fin-c1-plat':  'Pago a plazos',
    'fin-c1-name':  '4 cuotas sin interés',
    'fin-c1-p1':    '<strong>4 pagos cada 2 semanas</strong> — sin interés, liquidado en 6 semanas',
    'fin-c1-p2':    '<strong>Ideal</strong> para procedimientos de menor costo',
    'fin-c1-p3':    '<strong>Soft credit check inmediato</strong> — sin impacto en el buró del paciente',
    'fin-c2-plat':  'Pago diferido',
    'fin-c2-name':  '30 días sin interés',
    'fin-c2-p1':    '<strong>Pago en una sola exhibición</strong> — diferido hasta 30 días, sin interés',
    'fin-c2-p2':    '<strong>Para el paciente</strong> que solo necesita un respiro de tiempo',
    'fin-c2-p3':    '<strong>Aprobación instantánea</strong> con soft credit check',
    'fin-c3-plat':  'Mensualidades',
    'fin-c3-name':  'Hasta 24 meses',
    'fin-c3-p1':    '<strong>3 a 24 meses</strong> — cuotas mensuales fijas, $0 de enganche, tasa según aprobación',
    'fin-c3-p2':    '<strong>Para procedimientos</strong> de mayor costo',
    'fin-c3-p3':    '<strong>Cuotas fijas mensuales</strong> — el paciente sabe cuánto paga cada mes',
    'fin-conf':     'Doctor recibe el total al momento',
    'fin-si-eye':   'El efecto del financiamiento',
    'fin-si-quote': 'El paciente que financia <em>no elige el procedimiento más barato.</em><br>Elige el procedimiento que necesita.',
    'fin-si-l1':    'de pacientes dudan por el proceso de pago, no por la medicina',
    'fin-si-l2':    'el doctor recibe el total — el riesgo es de la plataforma',
    'fin-si-v3':    '24 m',
    'fin-si-l3':    'hasta 24 meses para procedimientos de mayor costo',
    'fin-cg-eye':   'Y hay más',
    'fin-cg-h2':    'El financiamiento abre la puerta. heva coordina el resto.',
    'fin-cg-p':     'Cuando el paciente dice que sí, cada paso queda ordenado en un solo lugar: consulta, laboratorios, cirugía y seguimiento. Tú y tu equipo ven el recorrido completo sin perseguir nada.',
    'fin-cg-cta':   'Ver la plataforma',
    'fin-cta-eye':  'Empieza hoy',
    'fin-cta-h2':   'Menos pacientes perdidos<br>por el precio.',
    'fin-cta-p':    'Activa financiamiento para tu clínica en una sola conversación.',
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
    'ai-b1':        'Replies in the patient\'s language — English, Spanish and more',
    'ai-b2':        'Quotes instantly using your prices',
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
    // ── asistente.html ──
    'as-h-eye':     'heva AI · Assistant',
    'as-h-h1':      'Your clinic never<br>stops responding.',
    'as-h-sub':     'While you operate, sleep, or see patients, the AI assistant replies to your patients in their own language, quotes at your prices, and guides them all the way to booking.',
    'as-hiw-eye':   'How it works',
    'as-hiw-h2':    'An agent that works like your best receptionist.',
    'as-hiw-p':     'The patient writes on WhatsApp or Instagram. The assistant replies in their language —English and Spanish every day, and many more—, understands their intent, quotes the procedure at your real prices, and captures all their contact details automatically.',
    'as-hiw-b1':    'Replies in the patient\'s language, around the clock',
    'as-hiw-b2':    'Quotes with the prices you set in Practice',
    'as-hiw-b3':    'Captures name, phone, procedure, and budget',
    'as-hiw-b4':    'Escalates to your team when the conversation calls for it',
    'as-cap-eye':   'What it does exactly',
    'as-cap-h2':    'Everything that happens<br>without you seeing it.',
    'as-cap-c1t':   'Speaks the patient\'s language',
    'as-cap-c1p':   'Detects the patient\'s language and replies automatically. English and Spanish are the most common, but it handles many more.',
    'as-cap-c2t':   'WhatsApp & Instagram',
    'as-cap-c2p':   'Connected to the channels where your patients already are. No new apps, no switching channels.',
    'as-cap-c3t':   'Conversation summary',
    'as-cap-c3p':   'Every conversation arrives with a ready summary: patient intent, procedure, estimated budget, and lead status.',
    'as-cap-c4t':   'Smart escalations',
    'as-cap-c4p':   'When a lead is ready to book or needs special attention, the assistant flags you and hands over the conversation.',
    'as-cta-eye':   'Start today',
    'as-cta-h2':    'Ready for your clinic<br>to be open 24/7?',
    'as-cta-p':     'A 20-minute conversation is all it takes to turn it on.',
    // ── financiamiento.html ──
    'fin-h-eye':    'Financing',
    'fin-h-h1':     'Your patients don\'t<br>drop off over price.',
    'fin-h-sub':    'Offer your US patients <strong>buy now, pay later</strong> options: they\'re treated today and pay in installments. You collect 100% upfront.',
    'fin-hiw-eye':  'How it works',
    'fin-hiw-h2':   'You get paid in full. The risk isn\'t yours.',
    'fin-hiw-p':    'heva connects your clinic with the <strong>buy now, pay later</strong> platforms your US patients already use. The patient is treated today and pays in installments; the platform approves and takes on collection. You receive the full procedure amount upfront.',
    'fin-hiw-b1':   'The patient pays in interest-free installments (or extended plans)',
    'fin-hiw-b2':   'You collect 100% upfront, before the procedure',
    'fin-hiw-b3':   'No non-payment risk for your clinic',
    'fin-hiw-b4':   'The financing link is sent straight from the heva inbox',
    'fin-pl-eye':   'Buy now, pay later',
    'fin-pl-h2':    'Three ways to split the payment. For your clinic.',
    'fin-pl-p':     'The patient chooses how to pay based on the procedure cost. Approval and collection risk belong to the financing platform, with no late fees. You receive the full amount upfront.',
    'fin-c1-plat':  'Installments',
    'fin-c1-name':  '4 interest-free payments',
    'fin-c1-p1':    '<strong>4 payments every 2 weeks</strong> — interest-free, paid off in 6 weeks',
    'fin-c1-p2':    '<strong>Ideal</strong> for lower-cost procedures',
    'fin-c1-p3':    '<strong>Instant soft credit check</strong> — no impact on the patient\'s credit',
    'fin-c2-plat':  'Deferred payment',
    'fin-c2-name':  '30 days, interest-free',
    'fin-c2-p1':    '<strong>Single payment</strong> — deferred up to 30 days, interest-free',
    'fin-c2-p2':    '<strong>For the patient</strong> who just needs a little breathing room',
    'fin-c2-p3':    '<strong>Instant approval</strong> with a soft credit check',
    'fin-c3-plat':  'Monthly plans',
    'fin-c3-name':  'Up to 24 months',
    'fin-c3-p1':    '<strong>3 to 24 months</strong> — fixed monthly payments, $0 down, rate based on approval',
    'fin-c3-p2':    '<strong>For higher-cost</strong> procedures',
    'fin-c3-p3':    '<strong>Fixed monthly payments</strong> — the patient knows exactly what they pay each month',
    'fin-conf':     'Doctor receives the full amount immediately',
    'fin-si-eye':   'The effect of financing',
    'fin-si-quote': 'A patient who finances <em>doesn\'t pick the cheapest procedure.</em><br>They pick the procedure they need.',
    'fin-si-l1':    'of patients hesitate over the payment process, not the medicine',
    'fin-si-l2':    'the doctor receives the full amount — the risk is the platform\'s',
    'fin-si-v3':    '24 mo',
    'fin-si-l3':    'up to 24 months for higher-cost procedures',
    'fin-cg-eye':   'And there\'s more',
    'fin-cg-h2':    'Financing opens the door. heva coordinates the rest.',
    'fin-cg-p':     'When the patient says yes, every step stays organized in one place: consultation, labs, surgery, and follow-up. You and your team see the whole journey without chasing anything.',
    'fin-cg-cta':   'See the platform',
    'fin-cta-eye':  'Start today',
    'fin-cta-h2':   'Fewer patients lost<br>over price.',
    'fin-cta-p':    'Turn on financing for your clinic in a single conversation.',
  }
};

// Restore persisted language preference across pages
let lang = (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('heva-lang')) || 'es';

function applyLang(l) {
  const t = T[l];
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.getAttribute('data-t');
    if (t[k] !== undefined) el.innerHTML = t[k];
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
