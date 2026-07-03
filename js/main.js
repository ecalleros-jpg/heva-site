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
    'plat-p':       'Inbox de conversaciones, cotizaciones, procedimientos, agenda y pagos — todo integrado para que tu equipo opere sin&nbsp;fricciones.',
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
    'hook-cta':          '¿Quieres saber cómo? →',
    'close-steps-title': 'Lo que pasa cuando dices sí',
    'close-step1':       'Eliges tu plan y te suscribes en <a href="https://heva.co/providers/signup" target="_blank" rel="noopener noreferrer" style="color:var(--lime); text-decoration:underline; text-underline-offset:3px;">heva.co/providers/signup</a> — en menos de 5 minutos.',
    'close-step2':       'Al día siguiente tu plataforma está activa. Te contactamos para un onboarding en vivo con nuestro equipo de Customer Success.',
    'close-step3':       'Entramos a un grupo de WhatsApp dedicado para tu clínica — soporte rápido para todo lo que necesites con tu heva.',
    'ft-tag':       'Making Healthcare Borderless',
    'ft-c':         '© 2026 heva. Todos los derechos reservados.',
    'ft-stripe':    'Infraestructura respaldada por Bridge (empresa de Stripe)',
    // ── asistente.html ──
    'as-h-eye':     'heva AI · Asistente',
    'as-h-h1':      'Tu clínica nunca <br>deja de atender.',
    'as-h-sub':     'Mientras operas, duermes o estás en consulta, el asistente IA responde a tus pacientes en su idioma, cotiza con tus precios y los lleva hasta la&nbsp;cita.',
    'as-hiw-eye':   'Así funciona',
    'as-hiw-h2':    'Un agente que trabaja como tu mejor recepcionista.',
    'as-hiw-p':     'El paciente escribe en WhatsApp o Instagram. El asistente responde en su idioma —inglés y español a diario, y muchos más—, entiende su intención, cotiza el procedimiento con tus precios reales y captura todos sus datos de contacto automáticamente.',
    'as-hiw-b1':    'Responde en el idioma del paciente, las 24 horas',
    'as-hiw-b2':    'Cotiza con los precios que tú configuraste en Practice',
    'as-hiw-b3':    'Captura nombre, teléfono, procedimiento y presupuesto',
    'as-hiw-b4':    'Escala a tu equipo cuando la conversación lo necesita',
    'as-cap-eye':   'Qué hace exactamente',
    'as-cap-h2':    'Todo lo que pasa <br>sin que lo veas.',
    'as-cap-c1t':   'Habla el idioma del paciente',
    'as-cap-c1p':   'Detecta el idioma del paciente y responde automáticamente. Inglés y español son los más comunes, pero atiende en muchos idiomas más.',
    'as-cap-c2t':   'WhatsApp e Instagram',
    'as-cap-c2p':   'Conectado a los canales donde ya están tus pacientes. Sin apps nuevas, sin cambiar de canal.',
    'as-cap-c3t':   'Resumen de conversación',
    'as-cap-c3p':   'Cada conversación llega con un resumen listo: intención del paciente, procedimiento, presupuesto estimado y estado del lead.',
    'as-cap-c4t':   'Escalaciones inteligentes',
    'as-cap-c4p':   'Cuando un lead está listo para agendar o necesita atención especial, el asistente te avisa y te pasa la conversación.',
    'as-cta-eye':   'Empieza hoy',
    'as-cta-h2':    '¿Listo para que tu clínica <br>atienda 24/7?',
    'as-cta-p':     'Una conversación de 20 minutos es todo lo que necesitas para activarlo.',
    // ── financiamiento.html ──
    'fin-h-eye':    'Financiamiento',
    'fin-h-h1':     'Sus pacientes no se <br>caen por el precio.',
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
    'fin-si-quote': 'El paciente que financia <em>no elige el procedimiento más barato.</em> <br>Elige el procedimiento que necesita.',
    'fin-si-l1':    'de pacientes dudan por el proceso de pago, no por la medicina',
    'fin-si-l2':    'el doctor recibe el total — el riesgo es de la plataforma',
    'fin-si-v3':    '24 m',
    'fin-si-l3':    'hasta 24 meses para procedimientos de mayor costo',
    'fin-cg-eye':   'Y hay más',
    'fin-cg-h2':    'El financiamiento abre la puerta. heva coordina el resto.',
    'fin-cg-p':     'Cuando el paciente dice que sí, cada paso queda ordenado en un solo lugar: consulta, laboratorios, cirugía y seguimiento. Tú y tu equipo ven el recorrido completo sin perseguir nada.',
    'fin-cg-cta':   'Ver la plataforma',
    'fin-cta-eye':  'Empieza hoy',
    'fin-cta-h2':   'Menos pacientes perdidos <br>por el precio.',
    'fin-cta-p':    'Activa financiamiento para tu clínica en una sola conversación.',
    'fin-q-eye':    'Para tu paciente',
    'fin-q-h2':     '¿Quién califica? Lo que le dices a tu paciente.',
    'fin-q-p':      'Cuatro respuestas para la duda más común de tu consulta. Sin trámites previos con tu clínica.',
    'fin-q1-h':     '¿Quién puede aplicar?',
    'fin-q1-p':     'Pacientes que viven en EE.UU., mayores de 18 años, con tarjeta o cuenta bancaria emitida en EE.UU. y celular activo.',
    'fin-q2-h':     'Aplica al momento de pagar',
    'fin-q2-p':     'En su link de pago heva elige la opción de financiamiento, llena sus datos básicos y recibe respuesta <strong>en segundos</strong>. No hay solicitud previa.',
    'fin-q3-h':     'Aplicar no afecta su crédito',
    'fin-q3-p':     'La consulta inicial es suave (<em>soft pull</em>), sin impacto en su puntaje. Los planes mensuales están sujetos a aprobación y tasa según su perfil.',
    'fin-q4-h':     '100% digital',
    'fin-q4-p':     'Todo desde su celular: sin comprobantes de ingresos, sin visitas al banco, sin papeleo.',
    'fin-q-note':   'El crédito lo emite la plataforma de financiamiento, no heva ni tu clínica. Disponibilidad, montos y condiciones varían según el estado y el perfil del paciente.',
    // ── plataforma.html ──
    'pl-h-eye':     'Plataforma heva',
    'pl-h-h1':      'Detrás de cada clínica <br>que escala hay un sistema.',
    'pl-h-sub':     'Inbox, asistente IA, cotizaciones, procedimientos con precios en USD, calendario y pagos. Todo en un solo lugar. Sin apps diferentes. Sin información perdida.',
    'pl-pr-eye':    'Practice — Tu catálogo',
    'pl-pr-h2':     'Tus procedimientos. Tus precios. En dólares.',
    'pl-pr-p':      'Configura una vez todos los procedimientos que ofreces con sus precios en USD. Desde ese momento, el asistente IA cotiza con esos mismos números — sin margen de error, sin llamadas adicionales.',
    'pl-pr-b1':     'Catálogo de procedimientos con descripción y precio',
    'pl-pr-b2':     'El asistente IA cotiza directamente desde tu Practice',
    'pl-pr-b3':     'Formulario de admisión configurable para tus pacientes',
    'pl-pr-b4':     'Actualizaciones de precio reflejadas al instante',
    'pl-st-eye':    'heva Store',
    'pl-st-h2':     'Tu clínica tiene una tienda en línea. Tus pacientes eligen, tú cobras.',
    'pl-st-p':      'Publica tus procedimientos, paquetes y servicios adicionales con precios fijos en dólares. El paciente recibe un link, elige lo que quiere, paga — tú ves el ingreso.',
    'pl-st-b1':     'Procedimientos, paquetes, hospedaje, transporte — todo lo que incluyas en tu oferta',
    'pl-st-b2':     'Precios fijos en USD, sin negociación por mensaje',
    'pl-st-b3':     'El paciente paga con cualquier tarjeta de +190 países en el checkout',
    'pl-df-eye':    'Cobro en heva',
    'pl-df-h2':     'Dos herramientas. Un solo flujo.',
    'pl-df-p':      'Dependiendo del momento y el paciente, tienes dos formas de generar un cobro. Se complementan — no se excluyen.',
    'pl-df-c1h':    'Cobro a medida',
    'pl-df-c1p':    'Envía desde el inbox un link de pago con el monto exacto del procedimiento, depósito, o saldo pendiente. Monto variable — tú defines el número en el momento.',
    'pl-df-c1u':    'Ideal para: cotizaciones personalizadas, depósitos previos a la cita, cobros con descuento negociado, saldos finales.',
    'pl-df-c2h':    'Tienda con precios fijos',
    'pl-df-c2p':    'Comparte el link de tu tienda y el paciente elige, agrega al carrito y paga sin intermediarios. Los precios están publicados — no hay negociación por mensaje.',
    'pl-df-c2u':    'Ideal para: campañas de redes sociales, pacientes que llegan por referido, paquetes estandarizados, precios que no varían.',
    'pl-cg-eye':    'CareGraph · Patient Journey',
    'pl-cg-h2':     'Tu paciente nunca se pierde entre la consulta y el alta.',
    'pl-cg-p':      'Cada paciente que paga una consulta ya te dijo que sí. CareGraph convierte tu protocolo en un camino automático: el asistente IA agenda lo que sigue, envía instrucciones, cobra depósitos y precualifica a cada paciente — y te avisa solo cuando algo necesita tu decisión.',
    'pl-cg-b1':     'El camino completo de cada paciente de un vistazo: pagado, agendado, completado',
    'pl-cg-b2':     'Seguimiento automático: recordatorios, siguiente cita y links de pago sin perseguir a nadie',
    'pl-cg-b3':     'Precualificación con preguntas no negociables antes de que toquen tu agenda',
    'pl-cg-b4':     'Un journey distinto por procedimiento — ideal para clínicas dentales y quirúrgicas',
    'pl-cg-tag':    'Tú operas. El asistente persigue.',
    'pl-mod-eye':   'Módulos de la plataforma',
    'pl-mod-h2':    'Una sola herramienta <br>para todo el flujo.',
    'pl-m1t':       'Entrante — Inbox',
    'pl-m1p':       'Todos tus leads y pacientes en un solo lugar. Conversaciones de WhatsApp e Instagram, con su estado, resumen y datos de contacto ya capturados.',
    'pl-m2t':       'Practice — Procedimientos',
    'pl-m2p':       'Tu catálogo de servicios con precios en USD. El asistente IA cotiza directamente desde aquí. Una sola fuente de verdad para todo tu equipo.',
    'pl-m3t':       'Calendario',
    'pl-m3p':       'Agenda de citas integrada. Conectada con el flujo de leads para que pasar de "interesado" a "agendado" sea un solo clic.',
    'pl-m4t':       'Pagos e Invoices',
    'pl-m4p':       'Cotizaciones, depósitos e invoices enviados directamente desde la conversación. Con seguimiento de estado: pendiente, cancelado, pagado.',
    'pl-m5t':       'CareGraph — Patient Journey',
    'pl-m5p':       'El camino de cada paciente, de la consulta al alta, con seguimiento automático del asistente IA. Nadie se pierde entre pasos, nadie se queda sin cobrar.',
    'pl-m6t':       'Intake Forms con IA',
    'pl-m6p':       'Formularios de admisión generados con IA por procedimiento, con preguntas de screening no negociables. El asistente los aplica en la conversación, antes de agendar.',
    'pl-cta-eye':   'Empieza hoy',
    'pl-cta-h2':    '¿Listo para operar <br>sin fricción?',
    'pl-cta-p':     'Una demo de 20 minutos te muestra todo el flujo en vivo.',
    // ── wallet.html ──
    'wa-h-eye':     'heva Wallet',
    'wa-h-h1':      'El primer banco digital <br>para la medicina global.',
    'wa-h-sub':     'Tu práctica no se detiene. Tu dinero tampoco debería. Recibe cada pago al instante, retén tu valor en dólares y retira cuando y como quieras.',
    'wa-pain-eye':  'El problema',
    'wa-pain-quote':'Tus pacientes ya pagaron. <em>¿Y tu dinero?</em> <br>3 días. 5 días. A veces más.',
    'wa-pain-v1':   'Hoy',
    'wa-pain-l1':   'con heva Wallet, cada pago llega al instante',
    'wa-pain-l2':   'retén tu valor en dólares, sin conversiones forzadas',
    'wa-pain-l3':   'intermediarios entre el pago del paciente y tu cuenta',
    'wa-sp-eye':    'La red heva',
    'wa-sp-h2':     'Doctores que ya cobran sin fronteras.',
    'wa-sp-p':      'Clínicas en Tijuana, Santo Domingo y más ya reciben sus pagos internacionales al instante con heva Wallet. Conoce a la red en Instagram.',
    'wa-sp-cta':    'Ver la red en Instagram',
    'wa-card-bal':  'Saldo disponible en USD',
    'wa-card-dep':  'Depositar',
    'wa-card-wd':   'Retirar',
    'wa-card-send': 'Enviar',
    'wa-w-eye':     'Liquidez inmediata',
    'wa-w-h2':      'Cobras en EE.UU. Tienes el dinero hoy.',
    'wa-w-p':       'Los médicos que cobran internacional usualmente esperan días — incluso semanas — para recibir sus fondos. Con heva Wallet, el dinero de cada pago llega a tu cuenta al instante. Sin cargos por conversión, sin esperas bancarias.',
    'wa-w-b1':      'Depósito inmediato de cada transacción aprobada',
    'wa-w-b2':      'Saldo siempre en dólares — sin riesgo cambiario',
    'wa-w-b3':      'Retira a tu cuenta bancaria cuando quieras',
    'wa-w-b4':      'Respaldado por Bridge — empresa de Stripe',
    'wa-f-eye':     'Por qué heva Wallet',
    'wa-f-h2':      'Hecho para médicos <br>que operan sin fronteras.',
    'wa-f-c1t':     'Liquidez inmediata',
    'wa-f-c1p':     'Cada pago de un paciente llega a tu Wallet al instante. No el siguiente día hábil. No en 3-5 días. Ahora.',
    'wa-f-c2t':     'Siempre en dólares',
    'wa-f-c2p':     'Tu saldo se mantiene en USD. Sin conversiones forzadas, sin perder valor por el tipo de cambio cuando no quieres convertir.',
    'wa-f-c3t':     'Respaldado por Bridge',
    'wa-f-c3p':     'La infraestructura de heva Wallet está construida sobre Bridge, una empresa de Stripe — el líder mundial en pagos digitales.',
    'wa-f-c4t':     'Retiros sin límites',
    'wa-f-c4p':     'Retira a tu cuenta bancaria en México, República Dominicana o donde estés. Cuando quieras, como quieras.',
    'wa-cta-eye':   'Empieza hoy',
    'wa-cta-h2':    'Tu dinero, disponible <br>al instante.',
    'wa-cta-p':     'Activa heva Wallet junto con tu cuenta heva en una sola conversación.',
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
    'hook-cta':          'Want to see how? →',
    'close-steps-title': 'What happens when you say yes',
    'close-step1':       'You choose your plan and sign up at <a href="https://heva.co/providers/signup" target="_blank" rel="noopener noreferrer" style="color:var(--lime); text-decoration:underline; text-underline-offset:3px;">heva.co/providers/signup</a> — in under 5 minutes.',
    'close-step2':       'The next day your platform is live. We reach out for a live onboarding with our Customer Success team.',
    'close-step3':       'We join a dedicated WhatsApp group for your clinic — fast support for anything you need with your heva.',
    'ft-tag':       'Making Healthcare Borderless',
    'ft-c':         '© 2026 heva. All rights reserved.',
    'ft-stripe':    'Infrastructure backed by Bridge (a Stripe company)',
    // ── asistente.html ──
    'as-h-eye':     'heva AI · Assistant',
    'as-h-h1':      'Your clinic never <br>stops responding.',
    'as-h-sub':     'While you operate, sleep, or see patients, the AI assistant replies to your patients in their own language, quotes at your prices, and guides them all the way to booking.',
    'as-hiw-eye':   'How it works',
    'as-hiw-h2':    'An agent that works like your best receptionist.',
    'as-hiw-p':     'The patient writes on WhatsApp or Instagram. The assistant replies in their language —English and Spanish every day, and many more—, understands their intent, quotes the procedure at your real prices, and captures all their contact details automatically.',
    'as-hiw-b1':    'Replies in the patient\'s language, around the clock',
    'as-hiw-b2':    'Quotes with the prices you set in Practice',
    'as-hiw-b3':    'Captures name, phone, procedure, and budget',
    'as-hiw-b4':    'Escalates to your team when the conversation calls for it',
    'as-cap-eye':   'What it does exactly',
    'as-cap-h2':    'Everything that happens <br>without you seeing it.',
    'as-cap-c1t':   'Speaks the patient\'s language',
    'as-cap-c1p':   'Detects the patient\'s language and replies automatically. English and Spanish are the most common, but it handles many more.',
    'as-cap-c2t':   'WhatsApp & Instagram',
    'as-cap-c2p':   'Connected to the channels where your patients already are. No new apps, no switching channels.',
    'as-cap-c3t':   'Conversation summary',
    'as-cap-c3p':   'Every conversation arrives with a ready summary: patient intent, procedure, estimated budget, and lead status.',
    'as-cap-c4t':   'Smart escalations',
    'as-cap-c4p':   'When a lead is ready to book or needs special attention, the assistant flags you and hands over the conversation.',
    'as-cta-eye':   'Start today',
    'as-cta-h2':    'Ready for your clinic <br>to be open 24/7?',
    'as-cta-p':     'A 20-minute conversation is all it takes to turn it on.',
    // ── financiamiento.html ──
    'fin-h-eye':    'Financing',
    'fin-h-h1':     'Your patients don\'t <br>drop off over price.',
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
    'fin-si-quote': 'A patient who finances <em>doesn\'t pick the cheapest procedure.</em> <br>They pick the procedure they need.',
    'fin-si-l1':    'of patients hesitate over the payment process, not the medicine',
    'fin-si-l2':    'the doctor receives the full amount — the risk is the platform\'s',
    'fin-si-v3':    '24 mo',
    'fin-si-l3':    'up to 24 months for higher-cost procedures',
    'fin-cg-eye':   'And there\'s more',
    'fin-cg-h2':    'Financing opens the door. heva coordinates the rest.',
    'fin-cg-p':     'When the patient says yes, every step stays organized in one place: consultation, labs, surgery, and follow-up. You and your team see the whole journey without chasing anything.',
    'fin-cg-cta':   'See the platform',
    'fin-cta-eye':  'Start today',
    'fin-cta-h2':   'Fewer patients lost <br>over price.',
    'fin-cta-p':    'Turn on financing for your clinic in a single conversation.',
    'fin-q-eye':    'For your patient',
    'fin-q-h2':     'Who qualifies? What you tell your patient.',
    'fin-q-p':      'Four answers to the most common question in your consult. No prior paperwork with your clinic.',
    'fin-q1-h':     'Who can apply?',
    'fin-q1-p':     'Patients who live in the US, are 18 or older, with a US-issued card or bank account and an active mobile phone.',
    'fin-q2-h':     'They apply at checkout',
    'fin-q2-p':     'In their heva payment link they pick the financing option, fill in basic details, and get an answer <strong>in seconds</strong>. No prior application.',
    'fin-q3-h':     'Applying doesn\'t hurt their credit',
    'fin-q3-p':     'The initial check is a soft pull, with no impact on their score. Monthly plans are subject to approval and a rate based on their profile.',
    'fin-q4-h':     '100% digital',
    'fin-q4-p':     'Everything from their phone: no proof of income, no bank visits, no paperwork.',
    'fin-q-note':   'Credit is issued by the financing platform, not by heva or your clinic. Availability, amounts, and terms vary by state and patient profile.',
    // ── plataforma.html ──
    'pl-h-eye':     'heva Platform',
    'pl-h-h1':      'Behind every clinic <br>that scales, there\'s a system.',
    'pl-h-sub':     'Inbox, AI assistant, quotes, procedures with USD pricing, calendar, and payments. All in one place. No separate apps. No lost information.',
    'pl-pr-eye':    'Practice — Your catalog',
    'pl-pr-h2':     'Your procedures. Your prices. In dollars.',
    'pl-pr-p':      'Set up every procedure you offer once, with prices in USD. From then on, the AI assistant quotes with those exact numbers — no margin for error, no extra calls.',
    'pl-pr-b1':     'Procedure catalog with description and price',
    'pl-pr-b2':     'The AI assistant quotes directly from your Practice',
    'pl-pr-b3':     'Configurable intake form for your patients',
    'pl-pr-b4':     'Price updates reflected instantly',
    'pl-st-eye':    'heva Store',
    'pl-st-h2':     'Your clinic has an online store. Your patients choose, you get paid.',
    'pl-st-p':      'Publish your procedures, packages, and add-on services with fixed prices in dollars. The patient gets a link, picks what they want, pays — you see the revenue.',
    'pl-st-b1':     'Procedures, packages, lodging, transport — everything you include in your offer',
    'pl-st-b2':     'Fixed USD prices, no negotiating over messages',
    'pl-st-b3':     'The patient pays with any card from 190+ countries at checkout',
    'pl-df-eye':    'Payments in heva',
    'pl-df-h2':     'Two tools. One flow.',
    'pl-df-p':      'Depending on the moment and the patient, you have two ways to generate a charge. They complement each other — they don\'t exclude each other.',
    'pl-df-c1h':    'Custom charge',
    'pl-df-c1p':    'From the inbox, send a payment link with the exact amount of the procedure, deposit, or outstanding balance. Variable amount — you set the number on the spot.',
    'pl-df-c1u':    'Ideal for: custom quotes, pre-appointment deposits, negotiated-discount charges, final balances.',
    'pl-df-c2h':    'Store with fixed prices',
    'pl-df-c2p':    'Share your store link and the patient chooses, adds to cart, and pays with no middlemen. Prices are published — no negotiating over messages.',
    'pl-df-c2u':    'Ideal for: social media campaigns, referral patients, standardized packages, prices that don\'t change.',
    'pl-cg-eye':    'CareGraph · Patient Journey',
    'pl-cg-h2':     'Your patient never gets lost between the consult and discharge.',
    'pl-cg-p':      'Every patient who pays for a consult has already said yes. CareGraph turns your protocol into an automatic path: the AI assistant schedules what\'s next, sends instructions, collects deposits, and pre-qualifies each patient — and only flags you when something needs your decision.',
    'pl-cg-b1':     'Each patient\'s full path at a glance: paid, scheduled, completed',
    'pl-cg-b2':     'Automatic follow-up: reminders, next appointment, and payment links without chasing anyone',
    'pl-cg-b3':     'Pre-qualification with non-negotiable questions before they reach your calendar',
    'pl-cg-b4':     'A different journey per procedure — ideal for dental and surgical clinics',
    'pl-cg-tag':    'You operate. The assistant chases.',
    'pl-mod-eye':   'Platform modules',
    'pl-mod-h2':    'One tool <br>for the whole flow.',
    'pl-m1t':       'Inbound — Inbox',
    'pl-m1p':       'All your leads and patients in one place. WhatsApp and Instagram conversations, with their status, summary, and contact details already captured.',
    'pl-m2t':       'Practice — Procedures',
    'pl-m2p':       'Your service catalog with USD prices. The AI assistant quotes directly from here. A single source of truth for your whole team.',
    'pl-m3t':       'Calendar',
    'pl-m3p':       'Integrated appointment scheduling. Connected to the lead flow so going from "interested" to "booked" is a single click.',
    'pl-m4t':       'Payments & Invoices',
    'pl-m4p':       'Quotes, deposits, and invoices sent directly from the conversation. With status tracking: pending, canceled, paid.',
    'pl-m5t':       'CareGraph — Patient Journey',
    'pl-m5p':       'Each patient\'s path, from consult to discharge, with automatic follow-up from the AI assistant. No one gets lost between steps, no one goes uncharged.',
    'pl-m6t':       'AI Intake Forms',
    'pl-m6p':       'Intake forms generated with AI per procedure, with non-negotiable screening questions. The assistant applies them in the conversation, before scheduling.',
    'pl-cta-eye':   'Start today',
    'pl-cta-h2':    'Ready to operate <br>without friction?',
    'pl-cta-p':     'A 20-minute demo shows you the whole flow live.',
    // ── wallet.html ──
    'wa-h-eye':     'heva Wallet',
    'wa-h-h1':      'The first digital bank <br>for global medicine.',
    'wa-h-sub':     'Your practice doesn\'t stop. Neither should your money. Receive every payment instantly, hold your value in dollars, and withdraw whenever and however you want.',
    'wa-pain-eye':  'The problem',
    'wa-pain-quote':'Your patients already paid. <em>And your money?</em> <br>3 days. 5 days. Sometimes more.',
    'wa-pain-v1':   'Today',
    'wa-pain-l1':   'with heva Wallet, every payment arrives instantly',
    'wa-pain-l2':   'hold your value in dollars, no forced conversions',
    'wa-pain-l3':   'middlemen between your patient\'s payment and your account',
    'wa-sp-eye':    'The heva network',
    'wa-sp-h2':     'Doctors already getting paid without borders.',
    'wa-sp-p':      'Clinics in Tijuana, Santo Domingo, and beyond already receive their international payments instantly with heva Wallet. Meet the network on Instagram.',
    'wa-sp-cta':    'See the network on Instagram',
    'wa-card-bal':  'Available balance in USD',
    'wa-card-dep':  'Deposit',
    'wa-card-wd':   'Withdraw',
    'wa-card-send': 'Send',
    'wa-w-eye':     'Instant liquidity',
    'wa-w-h2':      'You get paid in the US. You have the money today.',
    'wa-w-p':       'Doctors who charge internationally usually wait days — even weeks — to receive their funds. With heva Wallet, the money from every payment reaches your account instantly. No conversion fees, no bank waits.',
    'wa-w-b1':      'Instant deposit of every approved transaction',
    'wa-w-b2':      'Balance always in dollars — no exchange-rate risk',
    'wa-w-b3':      'Withdraw to your bank account whenever you want',
    'wa-w-b4':      'Backed by Bridge — a Stripe company',
    'wa-f-eye':     'Why heva Wallet',
    'wa-f-h2':      'Built for doctors <br>who operate without borders.',
    'wa-f-c1t':     'Instant liquidity',
    'wa-f-c1p':     'Every patient payment reaches your Wallet instantly. Not the next business day. Not in 3-5 days. Now.',
    'wa-f-c2t':     'Always in dollars',
    'wa-f-c2p':     'Your balance stays in USD. No forced conversions, no losing value to the exchange rate when you don\'t want to convert.',
    'wa-f-c3t':     'Backed by Bridge',
    'wa-f-c3p':     'heva Wallet\'s infrastructure is built on Bridge, a Stripe company — the world leader in digital payments.',
    'wa-f-c4t':     'Unlimited withdrawals',
    'wa-f-c4p':     'Withdraw to your bank account in Mexico, the Dominican Republic, or wherever you are. Whenever you want, however you want.',
    'wa-cta-eye':   'Start today',
    'wa-cta-h2':    'Your money, available <br>instantly.',
    'wa-cta-p':     'Activate heva Wallet alongside your heva account in a single conversation.',
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

// ── REP SWITCH ───────────────────────────────────────────────
// Un solo sitio, datos de contacto por vendedor.
// Rutas: /edgar, /eduardo, /chris (via _redirects → /?r=nombre).
// El rep se persiste en sessionStorage para sobrevivir la
// navegación entre páginas (igual que el idioma).
const REPS = {
  edgar:   { phone: '16195593993',  calendly: 'https://calendly.com/ecalleros-heva/30min' },
  eduardo: { phone: '526647352121', calendly: 'https://calendly.com/evalles-heva/30min' },
  chris:   { phone: '525580713603', calendly: 'https://calendly.com/ecalleros-heva/30min' }
};
const DEFAULT_REP = 'edgar'; // los links del HTML ya traen los datos de Edgar

let rep = DEFAULT_REP;
try {
  const q = new URLSearchParams(location.search).get('r');
  const fromPath = (location.pathname.split('/').filter(Boolean)[0] || '').toLowerCase();
  const saved = sessionStorage.getItem('heva-rep');
  if (q && REPS[q])                rep = q;
  else if (REPS[fromPath])         rep = fromPath;
  else if (saved && REPS[saved])   rep = saved;
  sessionStorage.setItem('heva-rep', rep);
} catch (e) {}

if (rep !== DEFAULT_REP) {
  const r = REPS[rep];
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    a.href = a.href.replace(/wa\.me\/\d+/, 'wa.me/' + r.phone); // conserva ?text=
  });
  document.querySelectorAll('a[href*="calendly.com/"]').forEach(a => {
    a.href = r.calendly;
  });
  // Propagar ?r= en la navegación interna: algunos navegadores móviles
  // (webview de WhatsApp incluido) pierden sessionStorage entre páginas.
  // Con el rep en la URL, el estado viaja en el link y no depende de nada.
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || /^(https?:|mailto:|tel:|#)/.test(href)) return; // externos y anclas puras
    const hashIdx = href.indexOf('#');
    const path = hashIdx === -1 ? href : href.slice(0, hashIdx);
    const hash = hashIdx === -1 ? '' : href.slice(hashIdx);
    if (path.indexOf('r=') !== -1) return;
    a.setAttribute('href', path + (path.indexOf('?') === -1 ? '?' : '&') + 'r=' + rep + hash);
  });
}
