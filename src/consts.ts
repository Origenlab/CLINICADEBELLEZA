// Constantes globales del sitio CLIBEL
// Reemplaza con datos reales antes de publicar

export const SITE = {
  name: 'CLIBEL',
  longName: 'Clínica de Belleza con Respaldo Médico — CLIBEL CDMX',
  tagline: 'Belleza con criterio médico',
  description:
    '45 años atendiendo en CDMX. Medicina estética, depilación láser, faciales y corporales con respaldo médico. Agenda tu valoración sin costo.',
  keywords:
    'clínica de belleza, medicina estética, depilación láser, tratamientos faciales, rejuvenecimiento facial, ácido hialurónico, toxina botulínica, plasma rico en plaquetas, hilos tensores, radiofrecuencia corporal, peelings químicos, CLIBEL',
  url: 'https://www.clibel.com.mx',
  locale: 'es_MX',
  lang: 'es-MX',
  defaultImage: '/og-default.jpg',
  founded: '1981',
  cofepris: '253300891A0XXXX',
} as const;

export const CONTACT = {
  phone: '+52 55 0000 0000',
  phoneDisplay: '55 0000 0000',
  phoneAlt: '55 0000 0001',
  whatsapp: '525500000000',
  whatsappMessage:
    'Hola, me gustaría agendar una cita en CLIBEL para conocer más sobre sus tratamientos.',
  email: 'contacto@clibel.com.mx',
  emailAlt: 'citas@clibel.com.mx',
  address: 'Ciudad de México, CDMX',
  addressFull: 'Av. Reforma 000, Col. Centro, 06000 Ciudad de México, CDMX',
  hours: 'Lun–Vie 10:00–19:00 · Sáb 10:00–15:00',
  hoursShort: 'Lun–Sáb 10:00–19:00',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
} as const;

export const SOCIAL = {
  instagram: 'https://instagram.com/clibel',
  facebook: 'https://facebook.com/clibel',
  tiktok: 'https://tiktok.com/@clibel',
  youtube: 'https://youtube.com/@clibel',
} as const;

export const NAV: Array<{ label: string; href: string }> = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export const CATEGORIES = {
  facial: {
    label: 'Tratamientos Faciales',
    slug: 'facial',
    short: 'Facial',
    description: 'Renovación, luminosidad y salud de la piel.',
    icon: '✨',
    image: '/img/cat-facial.jpg',
    badgeLabel: 'Grado médico',
    badgeCount: '8+ tratamientos',
    items: [
      { label: 'Limpieza Facial Profunda', href: '/servicios/limpieza-facial-profunda' },
      { label: 'Rejuvenecimiento Facial', href: '/servicios/rejuvenecimiento-facial' },
      { label: 'Peelings Químicos', href: '/servicios/peelings-quimicos' },
      { label: 'Tratamiento Antiacné', href: '/servicios/tratamiento-antiacne' },
      { label: 'Manchas e hiperpigmentación', href: '/servicios/tratamientos-faciales' },
      { label: 'Microneedling', href: '/servicios/tratamientos-faciales' },
    ],
  },
  corporal: {
    label: 'Tratamientos Corporales',
    slug: 'corporal',
    short: 'Corporal',
    description: 'Remodelación, reafirmación y bienestar físico.',
    icon: '💆‍♀️',
    image: '/img/cat-corporal.jpg',
    badgeLabel: 'No invasivo',
    badgeCount: '6+ tratamientos',
    items: [
      { label: 'Radiofrecuencia Corporal', href: '/servicios/radiofrecuencia-corporal' },
      { label: 'Reducción de Grasa Localizada', href: '/servicios/reduccion-grasa-localizada' },
      { label: 'Drenaje Linfático Manual', href: '/servicios/drenaje-linfatico' },
      { label: 'Masaje Reductivo y Anticelulitis', href: '/servicios/masaje-anticelulitis' },
      { label: 'Tonificación muscular', href: '/servicios/tratamientos-corporales' },
      { label: 'Tratamiento post-operatorio', href: '/servicios/tratamientos-corporales' },
    ],
  },
  laser: {
    label: 'Depilación Láser',
    slug: 'laser',
    short: 'Láser',
    description: 'Eliminación segura, rápida y duradera del vello.',
    icon: '🔆',
    image: '/img/cat-laser.jpg',
    badgeLabel: 'Última generación',
    badgeCount: 'Todas las zonas',
    items: [
      { label: 'Depilación Láser Profesional', href: '/servicios/depilacion-laser' },
      { label: 'Rostro completo', href: '/servicios/depilacion-laser-rostro-completo' },
      { label: 'Axilas e ingle', href: '/servicios/depilacion-laser-axilas-ingle' },
      { label: 'Piernas completas', href: '/servicios/depilacion-laser-piernas-completas' },
      { label: 'Espalda y pecho', href: '/servicios/depilacion-laser' },
      { label: 'Brasileño completo', href: '/servicios/depilacion-laser' },
    ],
  },
  'medicina-estetica': {
    label: 'Medicina Estética',
    slug: 'medicina-estetica',
    short: 'Medicina',
    description: 'Rejuvenecimiento y armonización facial avanzada.',
    icon: '💉',
    image: '/img/cat-medicina.jpg',
    badgeLabel: 'Médicos certificados',
    badgeCount: '4+ procedimientos',
    items: [
      { label: 'Ácido Hialurónico', href: '/servicios/acido-hialuronico' },
      { label: 'Toxina Botulínica', href: '/servicios/toxina-botulinica' },
      { label: 'Plasma Rico en Plaquetas', href: '/servicios/plasma-rico-plaquetas' },
      { label: 'Hilos Tensores', href: '/servicios/hilos-tensores' },
      { label: 'Bioestimuladores de colágeno', href: '/servicios/medicina-estetica-avanzada' },
      { label: 'Skinboosters', href: '/servicios/medicina-estetica-avanzada' },
    ],
  },
  capilar: {
    label: 'Tratamientos Capilares',
    slug: 'capilar',
    short: 'Capilar',
    description: 'Fuerza, densidad y vitalidad para tu cabello.',
    icon: '🌿',
    image: '/img/cat-capilar.jpg',
    badgeLabel: 'Regenerativo',
    badgeCount: '3+ protocolos',
    items: [
      { label: 'Tratamiento Capilar Avanzado', href: '/servicios/tratamiento-capilar' },
      { label: 'PRP capilar', href: '/servicios/prp-capilar' },
      { label: 'Mesoterapia capilar', href: '/servicios/mesoterapia-capilar' },
      { label: 'Tricología clínica', href: '/servicios/tricologia-clinica' },
    ],
  },
} as const;

export type Category = keyof typeof CATEGORIES;

// Páginas dedicadas por categoría — URLs SEO-friendly con keywords completas.
// Agrega aquí el slug → ruta cuando se cree el landing.
// Las que no estén aquí caen a la ancla del catálogo principal `/servicios#<slug>`.
export const CATEGORY_LANDING_PAGES: Partial<Record<Category, string>> = {
  facial: '/servicios/tratamientos-faciales',
  corporal: '/servicios/tratamientos-corporales',
  laser: '/servicios/depilacion-laser',
  'medicina-estetica': '/servicios/medicina-estetica-avanzada',
  capilar: '/servicios/tratamientos-capilares',
};

export const catHref = (slug: Category | string) =>
  CATEGORY_LANDING_PAGES[slug as Category] ?? `/servicios#${slug}`;

export const STATS = [
  { value: '45', label: 'Años de experiencia' },
  { value: '+5,000', label: 'Pacientes atendidas' },
  { value: '25+', label: 'Tratamientos' },
  { value: '4.9★', label: 'Calificación promedio' },
] as const;

export const PROCESS = [
  {
    n: '01',
    title: 'Diagnóstico personalizado',
    text: 'Una valoración completa con nuestros especialistas para entender tu piel, antecedentes y objetivos. Sin presión, sin paquetes prearmados.',
  },
  {
    n: '02',
    title: 'Plan de tratamiento a medida',
    text: 'Diseñamos un protocolo claro: tratamientos sugeridos, tiempos, sesiones y cuidados domiciliarios. Tú decides el ritmo.',
  },
  {
    n: '03',
    title: 'Procedimientos con respaldo médico',
    text: 'Realizamos cada tratamiento con tecnología de vanguardia y productos avalados por COFEPRIS. Seguridad clínica en cada sesión.',
  },
  {
    n: '04',
    title: 'Seguimiento y mantenimiento',
    text: 'Acompañamiento posterior, ajustes finos del plan y rutina de mantenimiento para que los resultados sean visibles y duraderos.',
  },
] as const;

export const ADVANTAGES = [
  {
    kicker: 'COFEPRIS · Médicos certificados',
    title: 'Respaldo clínico real',
    text: 'Personal médico titulado y productos con registro sanitario vigente. Todo procedimiento documentado en tu expediente clínico.',
  },
  {
    kicker: 'Tecnología premium',
    title: 'Equipos de marcas reconocidas',
    text: 'Trabajamos con plataformas láser, radiofrecuencia y diagnóstico digital de las marcas líderes a nivel internacional.',
  },
  {
    kicker: 'Atención personalizada',
    title: 'Diseñado para ti, no para todos',
    text: 'Sin protocolos genéricos. Cada plan se adapta a tu tipo de piel, ritmo de vida y objetivos estéticos personales.',
  },
  {
    kicker: 'Filosofía de naturalidad',
    title: 'Resultados que se ven naturales',
    text: 'Realzamos tu belleza, no la transformamos. Trabajamos con dosis y técnicas pensadas para que sigas viéndote como tú.',
  },
] as const;

export const SECTORS = [
  { n: '01', title: 'Cuidado preventivo (25-35 años)', text: 'Rutina facial profesional, neuromoduladores en dosis bajas y bioestimulación temprana.' },
  { n: '02', title: 'Antiedad integral (35-55 años)', text: 'Rejuvenecimiento, ácido hialurónico, hilos tensores y planes corporales personalizados.' },
  { n: '03', title: 'Madre primeriza y posparto', text: 'Recuperación corporal, drenaje linfático, tratamiento de estrías y melasma hormonal.' },
  { n: '04', title: 'Brides & eventos especiales', text: 'Planes de glow para boda, sesiones fotográficas y eventos importantes.' },
  { n: '05', title: 'Hombres (Brotox & corporal)', text: 'Tratamientos faciales para hombres, depilación láser y reducción de grasa localizada.' },
  { n: '06', title: 'Pacientes oncológicas', text: 'Cuidado dermatológico especializado durante y después de tratamientos médicos.' },
] as const;

export const PARTNERS = [
  'Allergan', 'Galderma', 'Merz Aesthetics', 'Sculptra',
  'Restylane', 'Juvéderm', 'Venus Concept', 'OxyGeneo', 'Sinclair', 'Belotero',
] as const;

export const BRANCHES = [
  {
    name: 'CLIBEL Reforma',
    address: 'Av. Reforma 000, Col. Centro, 06000 CDMX',
    hours: 'Lun–Vie 10:00–19:00 · Sáb 10:00–15:00',
    phone: '55 0000 0000',
  },
  {
    name: 'CLIBEL Polanco',
    address: 'Av. Presidente Masaryk 000, Polanco, 11560 CDMX',
    hours: 'Lun–Sáb 10:00–19:00',
    phone: '55 0000 0001',
  },
] as const;

export const FAQ_ITEMS = [
  { q: '¿Cómo agendo mi primera cita?', a: 'Por WhatsApp, llamada o el formulario de la página de contacto. Te respondemos el mismo día y reservamos tu valoración con la doctora correspondiente.' },
  { q: '¿La valoración inicial tiene costo?', a: 'La valoración incluye diagnóstico personalizado y plan de tratamiento. Consulta nuestras promociones vigentes: la mayoría de los meses ofrecemos sin costo.' },
  { q: '¿Los procedimientos son seguros?', a: 'Sí. Personal médico certificado, productos avalados por COFEPRIS y tecnología clínica de última generación. Cada protocolo se documenta en expediente.' },
  { q: '¿Trabajan con productos originales?', a: 'Exclusivamente. Compramos directo a laboratorios autorizados (Allergan, Galderma, Merz, Sinclair). Mostramos lote y trazabilidad si nos lo pides.' },
  { q: '¿En cuántas sesiones veré resultados?', a: 'Depende del tratamiento. Limpieza facial y ácido hialurónico muestran cambios desde la primera sesión; depilación láser y radiofrecuencia requieren protocolo de varias.' },
  { q: '¿Aceptan diferentes formas de pago?', a: 'Efectivo, débito, crédito (Visa/MC/Amex) y transferencias. Manejamos paquetes de sesiones con descuento y promociones recurrentes.' },
  { q: '¿Qué pasa si vivo fuera de CDMX?', a: 'Tenemos pacientes que viajan desde Querétaro, Puebla, Toluca y Guadalajara. Diseñamos planes intensivos en 2-3 días para tu visita.' },
  { q: '¿Es necesario suspender otros tratamientos antes?', a: 'En algunos casos sí. Te enviaremos las indicaciones específicas al confirmar tu cita: suspensión solar, retinoides, anticoagulantes, etc.' },
] as const;
