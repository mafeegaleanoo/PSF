export type Lang = "es" | "en";

const es = {
  nav: {
    links: [
      { href: "/nosotros",  label: "Nosotros" },
      { href: "/community", label: "Comunidad" },
      { label: "Certificaciones", children: [
        { href: "/cpo", label: "CPO — Operador Certificado" },
        { href: "/cpi", label: "CPI — Inspector Certificado" },
      ]},
      { href: "/learn",    label: "Aprende" },
      { href: "/contacto", label: "Contacto" },
    ],
    login:  "Iniciar Sesión",
    signup: "Inscríbete",
  },
  footer: {
    tagline: "El agua nos une. La profesión nos conecta.",
    columns: {
      Comunidad: [
        { href: "/community", label: "La Comunidad" },
        { href: "/learn",     label: "Aprende" },
        { href: "/events",    label: "Eventos" },
        { href: "/academia",  label: "Academia" },
      ],
      Certificaciones: [
        { href: "/cpo",        label: "Certificación CPO" },
        { href: "/cpi",        label: "Certificación CPI" },
      ],
      Empresa: [
        { href: "/nosotros",   label: "Nosotros" },
        { href: "/consulting", label: "Consultoría" },
        { href: "/contacto",   label: "Contacto" },
      ],
      Legal: [
        { href: "/privacidad", label: "Privacidad" },
        { href: "/terminos",   label: "Términos" },
      ],
    },
    rights: "Todos los derechos reservados",
  },
  home: {
    hero: {
      eyebrow: "La comunidad de profesionales Latinos del agua",
      titlePre: "El hogar profesional para la",
      highlight: "gente de piscinas",
      titlePost: "",
      subtitle: "El agua nos une. La profesión nos conecta. Únete gratis a la comunidad donde técnicos Latinos de piscinas aprenden, crecen y se certifican juntos.",
      cta1: "Únete gratis",
      cta2: "Ver certificaciones",
    },
    stats: [
      { value: "2,000+", label: "Miembros" },
      { value: "60+",    label: "Países" },
      { value: "98%",    label: "Tasa de aprobación" },
      { value: "Gratis", label: "Para unirse" },
    ],
    community: {
      label: "La comunidad",
      title: "Un lugar donde el oficio se celebra",
      desc: "Pregunta, aprende, conecta y crece. Siempre hay alguien aquí que entiende tu trabajo, habla tu idioma y viene del mismo mundo que tú.",
      cta: "Únete gratis — sin tarjeta de crédito",
      pillars: [
        { title: "Pregunta", desc: "Resuelve dudas técnicas con otros profesionales Latinos que trabajan en campo, no teoría." },
        { title: "Aprende", desc: "Accede a recursos gratuitos, guías y contenido creado en español para el técnico Latino." },
        { title: "Conecta", desc: "Encuentra colegas de tu país, tu región y tu especialidad en una sola comunidad." },
        { title: "Certifícate", desc: "Cuando estés listo, obtén tu CPO o CPI — las credenciales más reconocidas del sector." },
      ],
    },
    programs: {
      label: "Certificaciones",
      title: "Gana la credencial que mereces",
      desc: "Certificaciones oficiales PHTA en español e inglés. Reconocidas en más de 60 países.",
      featuredBadge: "Más popular",
      cta: "Ver programa",
      items: [
        { badge: "CPO", title: "Certified Pool & Spa Operator", description: "La credencial de operación de piscinas más reconocida del mundo. 700,000+ certificados desde 1973. Ahora en español.", features: ["Certificado oficial PHTA", "Bilingüe: español e inglés", "Examen incluido"], href: "/cpo", featured: true },
        { badge: "CPI", title: "Certified Pool Inspector", description: "Conviértete en inspector certificado y amplía tus servicios. Una credencial de alto valor para independientes y empresas.", features: ["Inspecciones certificadas", "Bilingüe: español e inglés", "Examen incluido"], href: "/cpi", featured: false },
        { badge: "Academia", title: "Academia PSF", description: "Educación continua, recursos y cursos propios diseñados para el profesional del agua en cualquier etapa de su carrera.", features: ["Cursos exclusivos PSF", "Comunidad activa", "Acceso de por vida"], href: "/academia", featured: false },
      ],
    },
    why: {
      label: "¿Por qué PSF?",
      title: "Construido diferente — a propósito",
      desc: "No somos otra plataforma de cursos. Somos la comunidad que el profesional Latino del agua nunca tuvo.",
      items: [
        { title: "En español, para ti",        desc: "Contenido, exámenes, soporte y comunidad en tu idioma. Sin barreras, sin excepciones." },
        { title: "Comunidad primero",          desc: "El aprendizaje entre pares viene antes que las transacciones. Aquí perteneces antes de comprar." },
        { title: "Misión sin fines de lucro", desc: "La confianza sobre el beneficio. Los ingresos de las certificaciones sostienen la misión comunitaria." },
        { title: "Gratis para unirse",         desc: "Sin barrera de entrada. La membresía es gratuita. Crece a tu ritmo." },
      ],
    },
    cta: {
      title: "Perteneces aquí",
      subtitle: "Seas técnico experimentado, nuevo en la industria o en algún punto intermedio — esta es tu comunidad. Únete gratis hoy.",
      cta1: "Crear cuenta gratis",
      cta2: "Conocer más",
    },
  },
  cpo: {
    hero: {
      eyebrow: "Certificación",
      subtitle: "La credencial más reconocida del mundo, completamente en español para profesionales Latinos.",
      cta1: "Inscribirme ahora",
      cta2: "Ver temario",
    },
    card: {
      duration: "Duración", durationVal: "16 horas",
      validity: "Validez",  validityVal: "5 años",
      mode: "Modalidad",    modeVal: "Online / Presencial",
      language: "Idioma",   languageVal: "Español",
      priceLabel: "Precio", priceNote: "Examen incluido · Materiales incluidos",
    },
    modules: {
      label: "Contenido del curso",
      title: "Lo que aprenderás",
      desc: "Curriculum oficial CPO de PHTA, adaptado y traducido al español por expertos certificados.",
      items: [
        "Química del agua y química de piscinas",
        "Sistemas de filtración y circulación",
        "Desinfección: cloro, bromo y alternativas",
        "Seguridad acuática y prevención de accidentes",
        "Mantenimiento de equipos y resolución de problemas",
        "Regulaciones y cumplimiento legal",
        "Operación de spas y jacuzzis",
        "Preparación para el examen CPO oficial",
      ],
    },
    locations: {
      label: "Ubicaciones presenciales",
      items: ["Lakewood, NJ", "Cherry Hill, NJ", "Somerset, NJ", "Toms River, NJ", "Morristown, NJ", "Austin, TX", "Canadá", "Caribe", "China", "México", "Islandia", "Taiwán", "Ucrania", "Chipre", "Reino Unido", "Europa (Múltiples ubicaciones)"]
    },
    pricing: {
      label: "Valor competitivo",
      standard: "Promedio de la industria: $350 - $475",
      psf: "Precio PSF: $299",
      note: "Ahorra más del 20% certificándote con nosotros."
    },
    audience: {
      label: "¿Para quién es?",
      title: "Diseñado para profesionales del agua",
      items: [
        { title: "Nuevos en la industria", desc: "Sin experiencia previa requerida. El punto de partida ideal para comenzar tu carrera en acuática." },
        { title: "Operadores de instalaciones", desc: "Hoteles, condominios, parques acuáticos y cualquier facility con piscina comercial o residencial." },
        { title: "Técnicos de mantenimiento", desc: "Amplía tus conocimientos con la credencial oficial más reconocida de la industria a nivel mundial." },
        { title: "Profesionales en transición", desc: "El primer paso en el PHTA Certified Pool Service Professional Pathway. Más de 700,000 certificados desde 1973." },
      ],
    },
    exam: {
      label: "Detalles del curso",
      title: "Todo sobre el programa CPO",
      items: [
        { label: "Duración", value: "16 horas totales" },
        { label: "Modalidad", value: "Presencial (2 días) o Blended (online + 1 día)" },
        { label: "Validez", value: "5 años" },
        { label: "Retoma", value: "Gratis dentro de los primeros 90 días" },
      ],
    },
    faq: {
      label: "Preguntas frecuentes",
      title: "Todo lo que necesitas saber",
      items: [
        { q: "¿Cuánto tiempo toma completar el curso?", a: "El programa CPO se puede completar en 2 días de instrucción en vivo o a tu propio ritmo en línea en aproximadamente 16 horas." },
        { q: "¿La certificación CPO es reconocida en todos los estados?", a: "Sí. La certificación CPO (PHTA) es reconocida en todos los estados de EE.UU. y en más de 60 países." },
        { q: "¿Cuánto tiempo es válida la certificación?", a: "La certificación CPO es válida por 5 años. Ofrecemos cursos de renovación en español." },
        { q: "¿Qué pasa si no paso el examen la primera vez?", a: "Puedes retomar el examen sin costo adicional dentro de los primeros 90 días." },
      ],
    },
    gallery: {
      label: "Clases Reales",
      title: "Lo que vivimos en cada clase",
      desc: "Profesionales reales, resultados reales. Así son nuestras certificaciones CPO: prácticas, en español y con instructores certificados.",
    },
    cta: { title: "¿Listo para obtener tu CPO?", subtitle: "Inscríbete hoy y únete a los profesionales certificados en todo el mundo.", cta: "Comenzar ahora" },
  },
  cpi: {
    hero: {
      eyebrow: "Certificación",
      subtitle: "Amplía tus servicios como inspector certificado de piscinas y spas. Una credencial de alto valor para profesionales independientes y empresas.",
      cta1: "Inscribirme ahora",
      cta2: "Más información",
    },
    card: {
      duration: "Duración", durationVal: "12 horas",
      validity: "Validez",  validityVal: "3 años",
      mode: "Modalidad",    modeVal: "Online / Presencial",
      language: "Idioma",   languageVal: "Español",
      priceLabel: "Precio", priceNote: "Examen incluido · Materiales incluidos",
    },
    modules: {
      label: "Contenido del curso",
      title: "Lo que aprenderás",
      desc: "Curriculum oficial CPI de PHTA, completamente en español.",
      items: [
        "Fundamentos de inspección de piscinas y spas",
        "Evaluación de sistemas de circulación y filtración",
        "Inspección de sistemas de desinfección",
        "Seguridad: barandas, cubiertas y drenajes",
        "Inspección eléctrica básica en áreas acuáticas",
        "Documentación y redacción de reportes",
        "Regulaciones estatales y locales",
        "Preparación para el examen CPI oficial",
      ],
    },
    locations: {
      label: "Ubicaciones",
      items: ["Virtual / Online", "Somerset, NJ", "Austin, TX", "Internacional (Online)"]
    },
    pricing: {
      label: "Valor de la certificación",
      standard: "Promedio mercado: hasta $395",
      psf: "Precio PSF: $199",
      note: "La mejor relación calidad-precio en español."
    },
    audience: {
      label: "¿Para quién es?",
      title: "Diseñado para profesionales del agua",
      items: [
        { title: "Funcionarios de salud pública", desc: "Inspectores y agentes de cumplimiento que supervisan instalaciones acuáticas." },
        { title: "Operadores de piscinas", desc: "Operadores certificados CPO que desean ampliar su alcance profesional con inspecciones." },
        { title: "Técnicos de servicio", desc: "Profesionales de mantenimiento que buscan diferenciarse con una credencial oficial de alto valor." },
        { title: "Empresas y contratistas", desc: "Empresas que quieren ofrecer inspecciones certificadas como servicio premium a sus clientes." },
      ],
    },
    exam: {
      label: "Detalles del examen",
      title: "Examen oficial CPI",
      items: [
        { label: "Formato", value: "Libro abierto · 1 hora" },
        { label: "Preguntas", value: "35 preguntas de opción múltiple" },
        { label: "Nota para aprobar", value: "75%" },
        { label: "Modalidad", value: "En línea (proctored) o presencial" },
      ],
    },
    career: {
      label: "Valor de carrera",
      title: "¿Por qué convertirte en CPI?",
      items: [
        { title: "Nuevos ingresos", desc: "Ofrece inspecciones certificadas como servicio premium a hoteles, condominios y propiedades residenciales." },
        { title: "Cumplimiento del Acta VGB", desc: "Garantiza el cumplimiento de la Virginia Graeme Baker Act y regulaciones de seguridad en instalaciones acuáticas." },
        { title: "Reconocimiento profesional", desc: "Credencial oficial PHTA reconocida en todo EE.UU. Conviértete en el experto certificado de tu área." },
      ],
    },
    gallery: {
      label: "En Acción",
      title: "Inspectores CPI en el campo",
      desc: "Así trabajan nuestros inspectores certificados: con rigor, profesionalismo y el respaldo de una credencial reconocida.",
    },
    cta: { title: "¿Listo para obtener tu CPI?", subtitle: "Inscríbete hoy y únete a los profesionales certificados en todo el mundo.", cta: "Comenzar ahora" },
  },
  academia: {
    hero: {
      eyebrow: "Membresía",
      subtitle: "Tu plataforma de crecimiento profesional. Cursos exclusivos, comunidad, recursos y educación continua — todo en español, todo para ti.",
      cta: "Unirme a la Academia",
    },
    offerings: {
      label: "¿Qué incluye?",
      title: "Todo lo que necesitas para crecer",
      items: [
        { title: "Cursos en Video",        desc: "Lecciones cortas y prácticas grabadas por expertos certificados. Aprende a tu ritmo." },
        { title: "Guías y Manuales",       desc: "Materiales descargables en español: tablas de química, guías de troubleshooting y más." },
        { title: "Foro Profesional",       desc: "Conecta con la comunidad, haz preguntas y comparte experiencias con colegas Latinos." },
        { title: "Recursos Descargables",  desc: "PDFs, hojas de cálculo y herramientas listas para usar en el campo." },
        { title: "Networking",             desc: "Directorio de profesionales certificados. Encuentra o publica oportunidades de trabajo." },
        { title: "Educación Continua",     desc: "Mantén tus certificaciones al día con cursos de renovación y contenido actualizado." },
      ],
    },
    pricing: {
      label: "Planes",
      title: "Elige tu membresía",
      desc: "Sin contratos. Cancela cuando quieras.",
      plans: [
        { name: "Mensual", price: "$29", period: "/mes", badge: null, features: ["Acceso a todos los cursos", "Foro comunitario", "Recursos descargables"], cta: "Comenzar", featured: false },
        { name: "Anual",   price: "$199", period: "/año", badge: "Ahorra 43%", features: ["Acceso a todos los cursos", "Foro comunitario", "Recursos descargables", "Descuento en CPO y CPI", "Certificados de completación"], cta: "Mejor opción", featured: true },
      ],
    },
    consulting: {
      label: "Consultoría",
      title: "Servicios Estratégicos",
      desc: "Trabajamos con los mejores consultores de la industria para ofrecer soluciones de primer nivel.",
      link: "Más información",
      cta: { title: "¿Necesitas una consultoría personalizada?", subtitle: "Nuestro equipo de expertos está listo para ayudarte.", cta: "Contactar ahora" },
    },
  },
  nosotros: {
    hero: {
      eyebrow: "Nuestra historia",
      title: "El hogar de los profesionales Latinos del agua —",
      subtitle: "donde el idioma nunca es una barrera para aprender, crecer y ser reconocido.",
    },
    story: {
      label: "Quiénes somos",
      title: "Piscinas Sin Fronteras nació de una convicción simple",
      body1: "El idioma nunca debería ser una barrera para convertirse en un gran profesional de piscinas. La industria está llena de técnicos talentosos y trabajadores —en EE.UU., América Latina y en todas partes— que aprendieron su oficio por prueba y error, con lo que encontraban por su cuenta. Nunca ha existido un hogar profesional real para ellos: un lugar central para hacer preguntas, compartir conocimiento, ser reconocidos y crecer.",
      body2: "Por eso existe PSF. Somos una comunidad bilingüe para profesionales del agua — hispanohablantes e ingleshablantes aprendiendo juntos, resolviendo problemas reales y construyendo carreras de las que enorgullecerse. Las certificaciones importan, pero no son la razón por la que existimos. Existimos porque la persona detrás de la certificación importa más.",
      body3: "Seas un técnico experimentado, un nuevo dueño de negocio, o algo intermedio — aquí perteneces. PSF es el lugar al que vienes a crecer, conectarte y ser reconocido como el profesional que eres.",
      cta: "Ver programas",
    },
    stats: [
      { value: "2018",   label: "Año de fundación" },
      { value: "2,000+", label: "Certificados" },
      { value: "60+",    label: "Países" },
      { value: "98%",    label: "Aprobación" },
    ],
    values: {
      label: "Lo que nos mueve",
      title: "Visión, misión y propósito",
      items: [
        { title: "Visión",    desc: "Un hogar global para profesionales del agua donde el idioma nunca sea una barrera para aprender, crecer y ser reconocido." },
        { title: "Misión",    desc: "Construir la comunidad bilingüe líder para profesionales de piscinas a nivel mundial — donde hispanohablantes e ingleshablantes aprendan juntos, compartan conocimiento real y obtengan credenciales que reflejan su expertise." },
        { title: "Propósito", desc: "PSF existe porque la industria de piscinas no tiene una verdadera comunidad profesional. Cerramos esa brecha para hispanohablantes e ingleshablantes por igual, uniéndolos en un espacio donde el oficio es celebrado, las preguntas tienen respuesta y las credenciales significan algo." },
      ],
    },
    tps: {
      eyebrow: "Nuestra marca padre",
      title: "by The Pool Scientist",
      desc: "Piscinas Sin Fronteras es una marca bajo The Pool Scientist (TPS), la empresa líder en capacitación y consultoría para la industria acuática en EE.UU.",
      cta: "Contáctanos",
      bullets: [
        "Comunidad bilingüe: español e inglés, lado a lado",
        "Contenido desarrollado por instructores certificados PHTA",
        "Más de 15 años de experiencia en educación acuática",
        "Presencia en más de 60 países",
      ],
    },
  },
  contacto: {
    hero: {
      eyebrow: "Estamos aquí para ayudarte",
      title: "Contáctanos",
      subtitle: "¿Tienes preguntas sobre nuestros programas? ¿Necesitas ayuda con tu inscripción? Nuestro equipo habla español y está listo para ayudarte.",
    },
    form: {
      label: "Escríbenos",
      title: "Envíanos un mensaje",
      firstName: "Nombre", firstNamePh: "Tu nombre",
      lastName: "Apellido", lastNamePh: "Tu apellido",
      email: "Correo electrónico",
      subject: "Asunto", subjectPh: "Selecciona un tema...",
      subjectOptions: [
        { value: "cpo",         label: "Información sobre CPO" },
        { value: "cpi",         label: "Información sobre CPI" },
        { value: "academia",    label: "Academia PSF" },
        { value: "soporte",     label: "Soporte técnico" },
        { value: "facturacion", label: "Facturación / Pagos" },
        { value: "otro",        label: "Otro" },
      ],
      message: "Mensaje", messagePh: "Cuéntanos en qué podemos ayudarte...",
      submit: "Enviar mensaje",
    },
    info: {
      label: "Información de contacto",
      title: "¿Cómo podemos ayudarte?",
      items: [
        { label: "Correo electrónico", value: "hola@piscinassinfronteras.com", sub: "Respondemos en menos de 24 horas" },
        { label: "WhatsApp",           value: "+1 (555) 000-0000",             sub: "Lunes a viernes, 9am – 6pm EST" },
        { label: "Horario de soporte", value: "Lunes – Viernes",               sub: "9:00 AM – 6:00 PM EST" },
        { label: "Chat en vivo",       value: "Disponible en plataforma",      sub: "Para estudiantes inscritos" },
      ],
    },
    groups: {
      eyebrow: "Grupos y empresas",
      title: "¿Tienes un equipo que certificar?",
      desc: "Ofrecemos precios especiales para grupos de 5 o más personas. Contacta a nuestro equipo de ventas para obtener una cotización personalizada.",
      cta: "Solicitar cotización grupal",
    },
  },
  auth: {
    login: {
      title: "Iniciar Sesión",
      subtitle: "Bienvenido de vuelta a Piscinas Sin Fronteras",
      email: "Correo electrónico", emailPh: "tu@email.com",
      password: "Contraseña", passwordPh: "••••••••",
      forgot: "¿Olvidaste tu contraseña?",
      submit: "Iniciar Sesión", submitting: "Entrando...",
      noAccount: "¿No tienes cuenta?",
      signupLink: "Regístrate gratis",
      errors: {
        invalidCredentials: "Email o contraseña incorrectos.",
        emailNotConfirmed: "Confirma tu email antes de iniciar sesión.",
        rateLimit: "Demasiados intentos. Espera unos minutos.",
        generic: "Ocurrió un error. Inténtalo de nuevo.",
      },
    },
    signup: {
      title: "Crear cuenta",
      subtitle: "Únete a miles de profesionales de piscinas",
      fullName: "Nombre completo", fullNamePh: "Juan García",
      email: "Correo electrónico", emailPh: "tu@email.com",
      password: "Contraseña", passwordPh: "Mínimo 6 caracteres",
      confirm: "Confirmar contraseña", confirmPh: "Repite tu contraseña",
      submit: "Crear cuenta", submitting: "Creando cuenta...",
      hasAccount: "¿Ya tienes cuenta?",
      loginLink: "Inicia sesión",
      successTitle: "¡Revisa tu email!",
      successDesc: "Te enviamos un enlace de confirmación a",
      successDesc2: "Haz clic en el enlace para activar tu cuenta.",
      backToLogin: "Volver al inicio de sesión",
      errors: {
        passwordMismatch: "Las contraseñas no coinciden.",
        passwordTooShort: "La contraseña debe tener al menos 6 caracteres.",
        alreadyRegistered: "Ya existe una cuenta con este email.",
        invalidEmail: "El formato del email no es válido.",
        rateLimit: "Demasiados intentos. Espera unos minutos.",
        generic: "Ocurrió un error. Inténtalo de nuevo.",
      },
    },
    resetPassword: {
      title: "Restablecer contraseña",
      subtitle: "Ingresa tu email y te enviaremos un enlace para crear una nueva contraseña.",
      email: "Correo electrónico", emailPh: "tu@email.com",
      submit: "Enviar enlace", submitting: "Enviando...",
      backToLogin: "Volver al inicio de sesión",
      successTitle: "Revisa tu email",
      successDesc: "Si existe una cuenta con",
      successDesc2: "recibirás un enlace para restablecer tu contraseña.",
      error: "Ocurrió un error. Verifica el email e inténtalo de nuevo.",
    },
    updatePassword: {
      title: "Nueva contraseña",
      subtitle: "Elige una contraseña segura para tu cuenta.",
      password: "Nueva contraseña", passwordPh: "Mínimo 6 caracteres",
      confirm: "Confirmar contraseña", confirmPh: "Repite tu nueva contraseña",
      submit: "Guardar contraseña", submitting: "Guardando...",
      errors: {
        mismatch: "Las contraseñas no coinciden.",
        tooShort: "La contraseña debe tener al menos 6 caracteres.",
        generic: "No se pudo actualizar la contraseña. El enlace puede haber expirado.",
      },
    },
  },
  dashboard: {
    sidebar: {
      nav: [
        { href: "/dashboard",          label: "Dashboard" },
        { href: "/dashboard/courses",  label: "Mis Cursos" },
        { href: "/dashboard/settings", label: "Configuración" },
      ],
      signOut: "Cerrar sesión",
      signingOut: "Saliendo...",
    },
    home: {
      greeting: "¡Hola",
      greetingSubtitle: "Aquí puedes ver tu progreso y continuar aprendiendo.",
      stats: { enrolled: "Cursos inscritos", completed: "Completados", inProgress: "En progreso" },
      myCourses: "Mis Cursos",
      viewAll: "Ver todos",
      emptyTitle: "Aún no tienes cursos",
      emptyDesc: "Explora nuestros programas de certificación y comienza tu carrera hoy.",
      emptyCta: "Ver cursos disponibles",
      inProgress: "En progreso",
      completed: "Completado",
      certificates: "Mis Certificados",
      completedOn: "Completado el",
    },
    courses: {
      title: "Cursos disponibles",
      subtitle: "Explora todos nuestros programas de certificación.",
      empty: "No hay cursos disponibles por el momento.",
      enrolled: "Ya estás inscrito",
      continueCta: "Continuar",
      enrollCta: "Inscribirme",
      minutes: "minutos",
      free: "Gratis",
    },
    settings: {
      title: "Configuración",
      subtitle: "Administra tu perfil y preferencias.",
      personalInfo: "Información personal",
      changePassword: "Cambiar contraseña",
    },
    profile: {
      fullName: "Nombre completo", fullNamePh: "Juan García",
      email: "Correo electrónico",
      emailNote: "El email no se puede cambiar.",
      phone: "Teléfono (opcional)", phonePh: "+1 (305) 000-0000",
      save: "Guardar cambios", saving: "Guardando...",
      success: "Perfil actualizado correctamente.",
      error: "No se pudo guardar. Inténtalo de nuevo.",
    },
    password: {
      newPassword: "Nueva contraseña", newPasswordPh: "Mínimo 6 caracteres",
      confirm: "Confirmar contraseña", confirmPh: "Repite tu nueva contraseña",
      submit: "Cambiar contraseña", submitting: "Guardando...",
      success: "Contraseña actualizada correctamente.",
      errors: {
        mismatch: "Las contraseñas no coinciden.",
        tooShort: "La contraseña debe tener al menos 6 caracteres.",
        generic: "No se pudo cambiar la contraseña. Inténtalo de nuevo.",
      },
    },
  },
  consultoria: {
    hero: {
      eyebrow: "Servicios Profesionales",
      title: "Consultoría Experta",
      subtitle: "Soluciones estratégicas para la industria acuática. Desde diseño arquitectónico hasta cumplimiento regulatorio.",
      cta: "Solicitar Consultoría",
    },
    servicesLabel: "Nuestras Especialidades",
    servicesTitle: "Servicios Estratégicos",
    servicesDesc: "Trabajamos con los mejores consultores de la industria para ofrecer soluciones de primer nivel.",
    servicesLink: "Más información",
    partnerLabel: "En asociación con líderes mundiales",
    cta: {
      title: "¿Listo para elevar el estándar de su instalación?",
      subtitle: "Nuestro equipo de expertos está listo para ayudarlo a optimizar sus operaciones y cumplir con todas las normativas vigentes.",
      cta: "Agendar una consulta",
    },
    services: [
      { 
        title: "Gestión de Piscinas", 
        desc: "Consultoría para asegurar que las instalaciones operen de manera segura y eficiente, cubriendo mantenimiento y regulaciones.",
        href: "https://www.nac4h2o.com/new-york/pool-management-consulting"
      },
      { 
        title: "Diseño y Arquitectura", 
        desc: "Soluciones de diseño, ingeniería y operación para instalaciones acuáticas comerciales y municipales.",
        href: "https://counsilmanhunsaker.com/"
      },
      { 
        title: "Soluciones Globales de Bienestar", 
        desc: "Líder mundial en soluciones de agua y bienestar, especializado en diseño de piscinas y spas e ingeniería de procesos.",
        href: "https://barrandwray.com/"
      },
      { 
        title: "Información Estratégica", 
        desc: "Análisis del mercado para ayudar a las organizaciones a navegar desafíos complejos y oportunidades de crecimiento.",
        href: "https://aquaticconsultantsofamerica.com/"
      },
      {
        title: "Regulaciones y Peritaje",
        desc: "Consultoría en todos los aspectos de regulaciones de piscinas, mantenimiento y testimonio de expertos.",
        href: "https://pooloperationmanagement.com/consulting/"
      }
    ]
  },
  community: {
    hero: {
      eyebrow: "Únete gratis",
      title: "La comunidad que los profesionales Latinos del agua siempre merecieron",
      subtitle: "Un espacio donde técnicos de piscinas se reúnen, hacen preguntas, comparten lo que saben y construyen carreras de las que enorgullecerse. En español, para ti.",
      cta1: "Crear cuenta gratis",
      cta2: "Conocer más",
    },
    what: {
      label: "¿Qué es la comunidad PSF?",
      title: "Más que un foro — un hogar profesional",
      desc: "Un espacio donde el oficio se celebra, las dudas se resuelven entre pares y las credenciales significan algo.",
      items: [
        { title: "Foro en español",        desc: "Publica preguntas y comparte respuestas en tu idioma. Sin barreras, sin filtros." },
        { title: "Categorías por oficio",  desc: "Química del agua, equipos, negocios, seguridad — encuentra exactamente lo que necesitas." },
        { title: "Capítulos por país",     desc: "Conecta con profesionales de tu región. Hay comunidad cerca de donde estás." },
        { title: "Perfiles profesionales", desc: "Muestra tu experiencia, tus certificaciones y tu trayectoria. Sé visto como el profesional que eres." },
      ],
    },
    steps: {
      label: "¿Cómo funciona?",
      title: "Tres pasos para empezar",
      items: [
        { step: "01", title: "Crea tu cuenta gratis",      desc: "Regístrate en menos de 2 minutos. Sin tarjeta de crédito, sin compromisos." },
        { step: "02", title: "Completa tu perfil",         desc: "Cuéntanos en qué trabajas, dónde estás y qué quieres aprender o aportar." },
        { step: "03", title: "Únete a la conversación",    desc: "Haz tu primera pregunta, responde a un colega o explora el foro. La comunidad ya está viva." },
      ],
    },
    founding: {
      eyebrow: "Miembros fundadores",
      title: "Sé parte desde el principio",
      desc: "Los primeros 50 miembros fundadores tendrán acceso anticipado, precio especial en certificaciones y su nombre en la historia de PSF.",
      cta: "Unirme como miembro fundador",
      perks: [
        "Acceso anticipado a la plataforma completa",
        "Precio especial en certificaciones CPO y CPI",
        "Tu nombre en la historia de PSF",
        "Badge exclusivo de miembro fundador",
      ],
    },
  },
  learn: {
    hero: {
      eyebrow: "Biblioteca gratuita",
      title: "El conocimiento que nadie te dio — ahora en español",
      subtitle: "Guías, videos y recursos descargables creados para el técnico Latino que aprendió solo y quiere seguir creciendo. Gratis para todos los miembros.",
      cta1: "Acceder gratis",
      cta2: "Ver categorías",
    },
    categories: {
      label: "Categorías",
      title: "Encuentra lo que necesitas",
      items: [
        { title: "Química del agua",   desc: "Balance, desinfección, tratamientos. Todo lo que necesitas saber para mantener el agua segura y cristalina.", icon: "droplets" },
        { title: "Equipos y sistemas", desc: "Bombas, filtros, circulación y automatización. Guías de troubleshooting paso a paso.", icon: "wrench" },
        { title: "Negocios y carrera", desc: "Cómo cobrar, contratos, marketing, y cómo crecer como profesional independiente.", icon: "briefcase" },
        { title: "Seguridad acuática", desc: "Normativas, prevención de accidentes y cumplimiento de regulaciones estatales y federales.", icon: "shield" },
        { title: "Inspección",         desc: "Protocolos de inspección, documentación y mejores prácticas para inspectores certificados.", icon: "clipboard" },
        { title: "Certificaciones",    desc: "Guías de estudio, preguntas de práctica y recursos de preparación para CPO y CPI.", icon: "award" },
      ],
    },
    coming: {
      eyebrow: "Próximamente",
      title: "La biblioteca se está construyendo",
      desc: "Estamos produciendo el primer lote de contenido. Los miembros fundadores tendrán acceso anticipado a todos los recursos el día del lanzamiento.",
      cta: "Unirme para acceder primero",
    },
  },
  consulting: {
    hero: {
      eyebrow: "Para organizaciones",
      title: "Forma a tu equipo. Certifica a tu fuerza laboral.",
      subtitle: "Programas de certificación en español para empresas de piscinas, municipios, HOAs y programas de desarrollo laboral que quieren invertir en sus técnicos Latinos.",
      cta1: "Solicitar información",
      cta2: "Ver servicios",
    },
    who: {
      label: "¿Para quién es?",
      title: "Trabajamos con organizaciones que invierten en su gente",
      items: [
        { title: "Empresas de servicio de piscinas", desc: "Certifica a todo tu equipo técnico con descuentos por volumen y programas personalizados." },
        { title: "Municipios y parques acuáticos",   desc: "Cumplimiento regulatorio y formación para operadores de instalaciones públicas." },
        { title: "HOAs y propiedades residenciales", desc: "Certifica al personal que opera y mantiene las piscinas comunitarias." },
        { title: "Programas de desarrollo laboral",  desc: "Integra las certificaciones PSF en tus programas de formación para fuerza laboral Latina." },
      ],
    },
    services: {
      label: "Servicios",
      title: "¿Qué ofrecemos?",
      items: [
        { title: "Certificación en grupo",   desc: "Precios especiales para grupos de 5 o más. CPO y CPI con instrucción en español." },
        { title: "Formación in-situ",        desc: "Llevamos el curso a tus instalaciones. Flexibilidad de fechas y grupos adaptados a tu operación." },
        { title: "Contenido con tu marca",   desc: "Co-branding del material de formación con la identidad visual de tu organización." },
        { title: "Seguimiento y reportes",   desc: "Panel de progreso, tasas de aprobación y certificados digitales para cada miembro de tu equipo." },
      ],
    },
    form: {
      label: "Solicitar información",
      title: "Cuéntanos sobre tu organización",
      name: "Nombre completo", namePh: "Tu nombre",
      org: "Organización", orgPh: "Nombre de tu empresa o institución",
      email: "Correo electrónico", emailPh: "correo@tuempresa.com",
      size: "Tamaño del equipo", sizePh: "¿Cuántas personas necesitas certificar?",
      message: "¿Qué necesitas?", messagePh: "Cuéntanos sobre tu proyecto, equipo y objetivos...",
      submit: "Enviar solicitud",
      success: "¡Gracias! Nos pondremos en contacto contigo en menos de 48 horas.",
    },
    cta: {
      title: "¿Tienes un equipo que certificar?",
      subtitle: "Escríbenos y te enviamos una propuesta personalizada en menos de 48 horas.",
      cta: "Solicitar cotización",
    },
  },
  events: {
    hero: {
      eyebrow: "Eventos y webinars",
      title: "Aprende en vivo. Conecta en persona.",
      subtitle: "Webinars técnicos, sesiones de preguntas y respuestas con expertos y encuentros presenciales para profesionales Latinos del agua — donde estés en el mundo.",
      cta1: "Unirme para ser notificado",
      cta2: "Ver eventos pasados",
    },
    types: {
      label: "¿Qué tipo de eventos hacemos?",
      title: "Siempre hay algo donde aprender",
      items: [
        { title: "Webinars técnicos",       desc: "Sesiones en vivo sobre química del agua, equipos, regulaciones y más. Con expertos certificados." },
        { title: "Q&A en comunidad",        desc: "Sesiones abiertas donde la comunidad hace preguntas y los expertos responden en tiempo real." },
        { title: "Eventos presenciales",    desc: "Encuentros regionales, talleres prácticos y ceremonias de certificación en distintas ciudades." },
        { title: "Clases de certificación", desc: "Cursos CPO y CPI presenciales con instructor certificado. Consulta próximas fechas." },
      ],
    },
    upcoming: {
      label: "Próximos eventos",
      title: "Nada programado aún",
      desc: "Estamos preparando el primer calendario de eventos. Únete a la comunidad y serás el primero en recibir las fechas.",
      cta: "Avisarme cuando haya eventos",
    },
  },
  privacy: {
    eyebrow: "Legal",
    title: "Política de Privacidad",
    effective: "Fecha efectiva: 25 de julio de 2025",
    intro: "En Piscinas Sin Fronteras valoramos profundamente su confianza y estamos comprometidos con la protección de su privacidad. Esta política describe cómo recopilamos, usamos, divulgamos y protegemos su información personal.",
    sections: [
      {
        title: "1. Información que Recopilamos",
        content: "Recopilamos información de identificación personal como nombre, correo electrónico, teléfono y dirección; detalles de citas y horarios; información de pago (procesada por proveedores externos); credenciales de cuenta; y contenido de comunicaciones. También recopilamos información no identificable como datos de uso, direcciones IP, tipo de dispositivo, sistema operativo e información general de geolocalización.",
      },
      {
        title: "2. Métodos de Recopilación",
        content: "La información se recopila directamente de los usuarios, de forma automática mediante cookies y balizas web, y de proveedores de servicios externos.",
      },
      {
        title: "3. Uso de la Información",
        content: "Utilizamos los datos recopilados para prestar servicios, comunicarnos con los usuarios, personalizar experiencias, mejorar nuestra oferta, procesar pagos, enviar materiales de marketing (con consentimiento), detectar fraudes y cumplir con obligaciones legales.",
      },
      {
        title: "4. Compartir Información",
        content: "No vendemos datos personales. Podemos compartirlos con proveedores de servicios, para el cumplimiento legal, durante transferencias comerciales o con consentimiento explícito del usuario.",
      },
      {
        title: "5. Seguridad de los Datos",
        content: "Implementamos medidas de seguridad técnicas, administrativas y físicas razonables. Sin embargo, reconocemos que ningún método es 100% seguro.",
      },
      {
        title: "6. Retención de Datos",
        content: "La información se conserva únicamente el tiempo necesario para los fines establecidos o según lo exija la ley.",
      },
      {
        title: "7. Sus Derechos de Privacidad",
        content: "Según su jurisdicción, puede tener derechos para acceder, corregir, eliminar, objetar, restringir, portar o retirar el consentimiento sobre sus datos personales.",
      },
      {
        title: "8. Enlaces a Terceros",
        content: "Nuestro sitio web puede contener enlaces a sitios externos. Le recomendamos revisar sus políticas de privacidad por separado.",
      },
      {
        title: "9. Privacidad de Menores",
        content: "Nuestros servicios no están dirigidos a menores de 18 años y no recopilamos intencionalmente información de menores.",
      },
      {
        title: "10. Cambios en esta Política",
        content: "Las actualizaciones se publicarán con fechas efectivas revisadas en esta página.",
      },
      {
        title: "11. Contacto",
        content: "Para preguntas sobre esta política, contáctenos en: rgaleano@thepoolscientist.com · (561) 617-6028 · 9825 Marina Blvd., Boca Raton, FL 33428",
      },
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const en: any = {
  nav: {
    links: [
      { href: "/nosotros",  label: "About Us" },
      { href: "/community", label: "Community" },
      { label: "Certifications", children: [
        { href: "/cpo", label: "CPO — Certified Operator" },
        { href: "/cpi", label: "CPI — Certified Inspector" },
      ]},
      { href: "/learn",    label: "Learn" },
      { href: "/contacto", label: "Contact" },
    ],
    login:  "Sign In",
    signup: "Enroll Now",
  },
  footer: {
    tagline: "United by water. Connected by craft.",
    columns: {
      Community: [
        { href: "/community", label: "The Community" },
        { href: "/learn",     label: "Learn" },
        { href: "/events",    label: "Events" },
        { href: "/academia",  label: "Academy" },
      ],
      Certifications: [
        { href: "/cpo",        label: "CPO Certification" },
        { href: "/cpi",        label: "CPI Certification" },
      ],
      Company: [
        { href: "/nosotros",   label: "About Us" },
        { href: "/consulting", label: "Consulting" },
        { href: "/contacto",   label: "Contact" },
      ],
      Legal: [
        { href: "/privacidad", label: "Privacy" },
        { href: "/terminos",   label: "Terms" },
      ],
    },
    rights: "All rights reserved",
  },
  home: {
    hero: {
      eyebrow: "The professional community for Latino pool workers",
      titlePre: "The professional home for",
      highlight: "pool people",
      titlePost: "",
      subtitle: "United by water. Connected by craft. Join the community where Latino pool professionals learn, grow, and get certified — in Spanish, for free.",
      cta1: "Join free",
      cta2: "View certifications",
    },
    stats: [
      { value: "2,000+", label: "Members" },
      { value: "60+",    label: "Countries" },
      { value: "98%",    label: "Pass rate" },
      { value: "Free",   label: "To join" },
    ],
    community: {
      label: "The community",
      title: "A place where the craft is celebrated",
      desc: "Ask, learn, connect, and grow. In Spanish or English, there's always someone here who understands your work.",
      cta: "Join free — no credit card required",
      pillars: [
        { title: "Ask", desc: "Solve technical problems with other professionals who work in the field, not just theory." },
        { title: "Learn", desc: "Access free resources, guides, and content created by industry experts." },
        { title: "Connect", desc: "Find peers from your country, your region, and your specialty — all in one place." },
        { title: "Get certified", desc: "When you're ready, earn your CPO or CPI — the most recognized credentials in the industry." },
      ],
    },
    programs: {
      label: "Certifications",
      title: "Earn the credential you deserve",
      desc: "Official PHTA certifications in Spanish and English. Recognized in 60+ countries.",
      featuredBadge: "Most popular",
      cta: "View program",
      items: [
        { badge: "CPO", title: "Certified Pool & Spa Operator", description: "The world's most recognized pool credential. 700,000+ certified since 1973. Now fully bilingual.", features: ["Official PHTA certificate", "Bilingual: Spanish & English", "Exam included"], href: "/cpo", featured: true },
        { badge: "CPI", title: "Certified Pool Inspector", description: "Become a certified inspector and expand your services. A high-value credential for independent pros and companies.", features: ["Certified inspections", "Bilingual: Spanish & English", "Exam included"], href: "/cpi", featured: false },
        { badge: "Academy", title: "PSF Academy", description: "Continuing education, resources, and original courses designed for water professionals at every stage of their career.", features: ["Exclusive PSF courses", "Active community", "Lifetime access"], href: "/academia", featured: false },
      ],
    },
    why: {
      label: "Why PSF?",
      title: "Built different — on purpose",
      desc: "We're not another course platform. We're the professional community the Latino pool worker never had.",
      items: [
        { title: "In Spanish, for you",   desc: "Content, exams, support, and community in your language. No exceptions." },
        { title: "Community-first",       desc: "Peer learning comes before transactions. You belong here before you ever buy anything." },
        { title: "Nonprofit mission",     desc: "Trust over profit. Revenue from certifications sustains the community mission." },
        { title: "Free to join",          desc: "No barrier to entry. Membership is free. Grow at your own pace." },
      ],
    },
    cta: {
      title: "You belong here",
      subtitle: "Whether you're a seasoned technician, new to the industry, or somewhere in between — this is your community. Join free today.",
      cta1: "Create free account",
      cta2: "Learn more",
    },
  },
  cpo: {
    hero: {
      eyebrow: "Certification",
      subtitle: "The world's most recognized credential, fully in Spanish for Latino professionals.",
      cta1: "Enroll now",
      cta2: "View curriculum",
    },
    card: {
      duration: "Duration", durationVal: "16 hours",
      validity: "Valid for",  validityVal: "5 years",
      mode: "Mode",          modeVal: "Online / In-person",
      language: "Language",  languageVal: "Spanish",
      priceLabel: "Price",   priceNote: "Exam included · Materials included",
    },
    modules: {
      label: "Course content",
      title: "What you'll learn",
      desc: "Official PHTA CPO curriculum, adapted and translated into Spanish by certified experts.",
      items: [
        "Water chemistry and pool chemistry",
        "Filtration and circulation systems",
        "Disinfection: chlorine, bromine and alternatives",
        "Aquatic safety and accident prevention",
        "Equipment maintenance and troubleshooting",
        "Regulations and legal compliance",
        "Spa and hot tub operation",
        "Preparation for the official CPO exam",
      ],
    },
    locations: {
      label: "In-person locations",
      items: ["Lakewood, NJ", "Cherry Hill, NJ", "Somerset, NJ", "Toms River, NJ", "Morristown, NJ", "Austin, TX", "Canada", "Caribbean", "China", "Mexico", "Iceland", "Taiwan", "Ukraine", "Cyprus", "United Kingdom", "Europe (Multiple locations)"]
    },
    pricing: {
      label: "Competitive Value",
      standard: "Industry average: $350 - $475",
      psf: "PSF Price: $299",
      note: "Save over 20% by getting certified with us."
    },
    audience: {
      label: "Who is it for?",
      title: "Designed for aquatic professionals",
      items: [
        { title: "Industry newcomers", desc: "No prior experience required. The ideal starting point to launch your career in aquatics." },
        { title: "Facility operators", desc: "Hotels, condominiums, water parks and any facility with a commercial or residential pool." },
        { title: "Maintenance technicians", desc: "Expand your knowledge with the world's most recognized official credential in the industry." },
        { title: "Career changers", desc: "The first step on the PHTA Certified Pool Service Professional Pathway. 700,000+ certified since 1973." },
      ],
    },
    exam: {
      label: "Program details",
      title: "Everything about the CPO program",
      items: [
        { label: "Duration", value: "16 hours total" },
        { label: "Format", value: "Classroom (2 days) or Blended (online + 1 day)" },
        { label: "Valid for", value: "5 years" },
        { label: "Retake", value: "Free within the first 90 days" },
      ],
    },
    faq: {
      label: "Frequently asked questions",
      title: "Everything you need to know",
      items: [
        { q: "How long does it take to complete the course?", a: "The CPO program can be completed in 2 days of live instruction or at your own pace online in approximately 16 hours." },
        { q: "Is the CPO certification recognized in all states?", a: "Yes. The CPO (PHTA) certification is recognized in all U.S. states and in more than 60 countries." },
        { q: "How long is the certification valid?", a: "The CPO certification is valid for 5 years. We offer renewal courses in Spanish." },
        { q: "What happens if I don't pass the exam on the first try?", a: "You can retake the exam at no additional cost within the first 90 days." },
      ],
    },
    gallery: {
      label: "Real Classes",
      title: "What every class looks like",
      desc: "Real professionals, real results. Our CPO certifications are hands-on, in Spanish, and led by certified instructors.",
    },
    cta: { title: "Ready to get your CPO?", subtitle: "Enroll today and join certified professionals across the world.", cta: "Start now" },
  },
  cpi: {
    hero: {
      eyebrow: "Certification",
      subtitle: "Expand your services as a certified pool and spa inspector. A high-value credential for independent professionals and companies.",
      cta1: "Enroll now",
      cta2: "More information",
    },
    card: {
      duration: "Duration", durationVal: "12 hours",
      validity: "Valid for",  validityVal: "3 years",
      mode: "Mode",          modeVal: "Online / In-person",
      language: "Language",  languageVal: "Spanish",
      priceLabel: "Price",   priceNote: "Exam included · Materials included",
    },
    modules: {
      label: "Course content",
      title: "What you'll learn",
      desc: "Official PHTA CPI curriculum, fully in Spanish.",
      items: [
        "Pool and spa inspection fundamentals",
        "Circulation and filtration system evaluation",
        "Disinfection system inspection",
        "Safety: railings, covers and drains",
        "Basic electrical inspection in aquatic areas",
        "Documentation and report writing",
        "State and local regulations",
        "Preparation for the official CPI exam",
      ],
    },
    locations: {
      label: "Locations",
      items: ["Virtual / Online", "Somerset, NJ", "Austin, TX", "International (Online)"]
    },
    pricing: {
      label: "Certification Value",
      standard: "Market average: up to $395",
      psf: "PSF Price: $199",
      note: "Best value for money in Spanish."
    },
    career: {
      label: "Career value",
      title: "Why become a CPI?",
      items: [
        { title: "New revenue streams", desc: "Offer certified inspections as a premium service to hotels, condominiums and residential properties." },
        { title: "VGB Act compliance", desc: "Ensure compliance with the Virginia Graeme Baker Act and aquatic facility safety regulations." },
        { title: "Professional recognition", desc: "Official PHTA credential recognized across the U.S. Become the certified expert in your area." },
      ],
    },
    audience: {
      label: "Who is it for?",
      title: "Designed for aquatic professionals",
      items: [
        { title: "Public health officials", desc: "Inspectors and code enforcement officers who oversee aquatic facilities." },
        { title: "Pool operators", desc: "CPO-certified operators looking to expand their professional reach with inspections." },
        { title: "Service technicians", desc: "Maintenance professionals seeking to stand out with a high-value official credential." },
        { title: "Companies & contractors", desc: "Businesses that want to offer certified inspections as a premium service to their clients." },
      ],
    },
    exam: {
      label: "Exam details",
      title: "Official CPI exam",
      items: [
        { label: "Format", value: "Open-book · 1 hour" },
        { label: "Questions", value: "35 multiple-choice questions" },
        { label: "Passing score", value: "75%" },
        { label: "Testing", value: "Online (proctored) or in-person" },
      ],
    },
    gallery: {
      label: "In Action",
      title: "CPI Inspectors in the field",
      desc: "This is how our certified inspectors work: with rigor, professionalism, and the backing of a recognized credential.",
    },
    cta: { title: "Ready to get your CPI?", subtitle: "Enroll today and join certified professionals across the world.", cta: "Start now" },
  },
  academia: {
    hero: {
      eyebrow: "Membership",
      subtitle: "Your professional growth platform. Exclusive courses, community, resources and continuing education — all in Spanish, all for you.",
      cta: "Join the Academy",
    },
    offerings: {
      label: "What's included?",
      title: "Everything you need to grow",
      items: [
        { title: "Video Courses",         desc: "Short, practical lessons recorded by certified experts. Learn at your own pace." },
        { title: "Guides & Manuals",      desc: "Downloadable materials in Spanish: chemistry charts, troubleshooting guides and more." },
        { title: "Professional Forum",    desc: "Connect with the community, ask questions and share experiences with Latino colleagues." },
        { title: "Downloadable Resources",desc: "PDFs, spreadsheets and tools ready to use in the field." },
        { title: "Networking",            desc: "Directory of certified professionals. Find or post job opportunities." },
        { title: "Continuing Education",  desc: "Keep your certifications current with renewal courses and updated content." },
      ],
    },
    pricing: {
      label: "Plans",
      title: "Choose your membership",
      desc: "No contracts. Cancel anytime.",
      plans: [
        { name: "Monthly", price: "$29", period: "/mo",  badge: null,       features: ["Access to all courses", "Community forum", "Downloadable resources"], cta: "Get started", featured: false },
        { name: "Annual",  price: "$199", period: "/yr", badge: "Save 43%", features: ["Access to all courses", "Community forum", "Downloadable resources", "Discount on CPO and CPI", "Completion certificates"], cta: "Best value", featured: true },
      ],
    },
    consulting: {
      label: "Consulting",
      title: "Strategic Services",
      desc: "We work with the best consultants in the industry to deliver world-class solutions.",
      link: "Learn more",
      cta: { title: "Need personalized consulting?", subtitle: "Our team of experts is ready to help you.", cta: "Contact us" },
    },
  },
  nosotros: {
    hero: {
      eyebrow: "Our story",
      title: "The home for Latino water professionals —",
      subtitle: "where language is never a barrier to learning, growing, and being recognized.",
    },
    story: {
      label: "About Us",
      title: "Piscinas Sin Fronteras was built on a simple belief",
      body1: "Language should never be a barrier to becoming a great pool professional. The pool industry is full of talented, hardworking technicians — in the US, Latin America, and everywhere in between — who have learned their craft through trial, error, and whatever they could find on their own. There has never been a real professional home for them. No central place to ask questions, share knowledge, get recognized, or grow.",
      body2: "That's why PSF exists. We are a bilingual community for pool and water professionals — English and Spanish speakers learning alongside each other, solving real problems together, and building careers they're proud of. Certifications matter to us — but they're not why we exist. We exist because the person behind the certification matters more.",
      body3: "Whether you're a seasoned technician, a new business owner, or somewhere in between — you belong here. PSF is where you come to grow, connect, and be seen as the professional you are.",
      cta: "View programs",
    },
    stats: [
      { value: "2018",   label: "Founded" },
      { value: "2,000+", label: "Certified" },
      { value: "60+",    label: "Countries" },
      { value: "98%",    label: "Pass rate" },
    ],
    values: {
      label: "What drives us",
      title: "Vision, mission and purpose",
      items: [
        { title: "Vision",   desc: "A global home for pool and water professionals where language is never a barrier to learning, growing, and being recognized." },
        { title: "Mission",  desc: "To build the leading bilingual community for pool professionals worldwide — where Spanish and English speakers learn alongside each other, share real-world knowledge, and earn credentials that reflect their expertise." },
        { title: "Purpose",  desc: "PSF exists because the pool industry has no true professional community — just scattered forums, isolated technicians, and knowledge that never gets shared. PSF closes that gap for Spanish and English speakers alike, bringing them into one space where craft is celebrated, questions get answered, and credentials mean something." },
      ],
    },
    tps: {
      eyebrow: "Our parent brand",
      title: "by The Pool Scientist",
      desc: "Piscinas Sin Fronteras is a brand under The Pool Scientist (TPS), the leading company in training and consulting for the aquatic industry in the U.S.",
      cta: "Contact us",
      bullets: [
        "Bilingual community: Spanish and English, side by side",
        "Content developed by PHTA-certified instructors",
        "More than 15 years of experience in aquatic education",
        "Presence in more than 60 countries",
      ],
    },
  },
  contacto: {
    hero: {
      eyebrow: "We're here to help",
      title: "Contact Us",
      subtitle: "Have questions about our programs? Need help with your enrollment? Our team speaks Spanish and is ready to help you.",
    },
    form: {
      label: "Write to us",
      title: "Send us a message",
      firstName: "First name", firstNamePh: "Your first name",
      lastName: "Last name",   lastNamePh: "Your last name",
      email: "Email address",
      subject: "Subject", subjectPh: "Select a topic...",
      subjectOptions: [
        { value: "cpo",         label: "Information about CPO" },
        { value: "cpi",         label: "Information about CPI" },
        { value: "academia",    label: "PSF Academy" },
        { value: "soporte",     label: "Technical support" },
        { value: "facturacion", label: "Billing / Payments" },
        { value: "otro",        label: "Other" },
      ],
      message: "Message", messagePh: "Tell us how we can help you...",
      submit: "Send message",
    },
    info: {
      label: "Contact information",
      title: "How can we help you?",
      items: [
        { label: "Email",          value: "hola@piscinassinfronteras.com", sub: "We respond in less than 24 hours" },
        { label: "WhatsApp",       value: "+1 (555) 000-0000",             sub: "Monday to Friday, 9am – 6pm EST" },
        { label: "Support hours",  value: "Monday – Friday",               sub: "9:00 AM – 6:00 PM EST" },
        { label: "Live chat",      value: "Available on platform",         sub: "For enrolled students" },
      ],
    },
    groups: {
      eyebrow: "Groups & companies",
      title: "Do you have a team to certify?",
      desc: "We offer special pricing for groups of 5 or more people. Contact our sales team for a personalized quote.",
      cta: "Request group quote",
    },
  },
  auth: {
    login: {
      title: "Sign In",
      subtitle: "Welcome back to Piscinas Sin Fronteras",
      email: "Email address", emailPh: "you@email.com",
      password: "Password", passwordPh: "••••••••",
      forgot: "Forgot your password?",
      submit: "Sign In", submitting: "Signing in...",
      noAccount: "Don't have an account?",
      signupLink: "Sign up for free",
      errors: {
        invalidCredentials: "Incorrect email or password.",
        emailNotConfirmed: "Please confirm your email before signing in.",
        rateLimit: "Too many attempts. Please wait a few minutes.",
        generic: "An error occurred. Please try again.",
      },
    },
    signup: {
      title: "Create account",
      subtitle: "Join thousands of pool professionals",
      fullName: "Full name", fullNamePh: "John Smith",
      email: "Email address", emailPh: "you@email.com",
      password: "Password", passwordPh: "At least 6 characters",
      confirm: "Confirm password", confirmPh: "Repeat your password",
      submit: "Create account", submitting: "Creating account...",
      hasAccount: "Already have an account?",
      loginLink: "Sign in",
      successTitle: "Check your email!",
      successDesc: "We sent a confirmation link to",
      successDesc2: "Click the link to activate your account.",
      backToLogin: "Back to sign in",
      errors: {
        passwordMismatch: "Passwords don't match.",
        passwordTooShort: "Password must be at least 6 characters.",
        alreadyRegistered: "An account already exists with this email.",
        invalidEmail: "Invalid email format.",
        rateLimit: "Too many attempts. Please wait a few minutes.",
        generic: "An error occurred. Please try again.",
      },
    },
    resetPassword: {
      title: "Reset password",
      subtitle: "Enter your email and we'll send you a link to create a new password.",
      email: "Email address", emailPh: "you@email.com",
      submit: "Send link", submitting: "Sending...",
      backToLogin: "Back to sign in",
      successTitle: "Check your email",
      successDesc: "If an account exists with",
      successDesc2: "you'll receive a link to reset your password.",
      error: "An error occurred. Please verify the email and try again.",
    },
    updatePassword: {
      title: "New password",
      subtitle: "Choose a secure password for your account.",
      password: "New password", passwordPh: "At least 6 characters",
      confirm: "Confirm password", confirmPh: "Repeat your new password",
      submit: "Save password", submitting: "Saving...",
      errors: {
        mismatch: "Passwords don't match.",
        tooShort: "Password must be at least 6 characters.",
        generic: "Could not update password. The link may have expired.",
      },
    },
  },
  dashboard: {
    sidebar: {
      nav: [
        { href: "/dashboard",          label: "Dashboard" },
        { href: "/dashboard/courses",  label: "My Courses" },
        { href: "/dashboard/settings", label: "Settings" },
      ],
      signOut: "Sign out",
      signingOut: "Signing out...",
    },
    home: {
      greeting: "Hello",
      greetingSubtitle: "Here you can see your progress and continue learning.",
      stats: { enrolled: "Enrolled courses", completed: "Completed", inProgress: "In progress" },
      myCourses: "My Courses",
      viewAll: "View all",
      emptyTitle: "No courses yet",
      emptyDesc: "Explore our certification programs and start your career today.",
      emptyCta: "View available courses",
      inProgress: "In progress",
      completed: "Completed",
      certificates: "My Certificates",
      completedOn: "Completed on",
    },
    courses: {
      title: "Available Courses",
      subtitle: "Explore all our certification programs.",
      empty: "No courses available at the moment.",
      enrolled: "Already enrolled",
      continueCta: "Continue",
      enrollCta: "Enroll",
      minutes: "minutes",
      free: "Free",
    },
    settings: {
      title: "Settings",
      subtitle: "Manage your profile and preferences.",
      personalInfo: "Personal information",
      changePassword: "Change password",
    },
    profile: {
      fullName: "Full name", fullNamePh: "John Smith",
      email: "Email address",
      emailNote: "Email cannot be changed.",
      phone: "Phone (optional)", phonePh: "+1 (305) 000-0000",
      save: "Save changes", saving: "Saving...",
      success: "Profile updated successfully.",
      error: "Could not save. Please try again.",
    },
    password: {
      newPassword: "New password", newPasswordPh: "At least 6 characters",
      confirm: "Confirm password", confirmPh: "Repeat your new password",
      submit: "Change password", submitting: "Saving...",
      success: "Password updated successfully.",
      errors: {
        mismatch: "Passwords don't match.",
        tooShort: "Password must be at least 6 characters.",
        generic: "Could not change password. Please try again.",
      },
    },
  },
  consultoria: {
    hero: {
      eyebrow: "Professional Services",
      title: "Expert Consulting",
      subtitle: "Strategic solutions for the aquatic industry. From architectural design to regulatory compliance.",
      cta: "Request Consulting",
    },
    servicesLabel: "Our Specialties",
    servicesTitle: "Strategic Services",
    servicesDesc: "We work with the best consultants in the industry to deliver world-class solutions.",
    servicesLink: "Learn more",
    partnerLabel: "In partnership with world leaders",
    cta: {
      title: "Ready to elevate the standard of your facility?",
      subtitle: "Our team of experts is ready to help you optimize your operations and meet all current regulations.",
      cta: "Schedule a consultation",
    },
    services: [
      { 
        title: "Pool Management", 
        desc: "Consulting to ensure aquatic facilities operate safely and efficiently, covering maintenance and regulations.",
        href: "https://www.nac4h2o.com/new-york/pool-management-consulting"
      },
      { 
        title: "Architectural Design", 
        desc: "Design, engineering, and facility operation solutions for commercial and municipal aquatic facilities.",
        href: "https://counsilmanhunsaker.com/"
      },
      { 
        title: "Global Wellness Solutions", 
        desc: "Global leader in water and wellness solutions, specializing in pool and spa design and process engineering.",
        href: "https://barrandwray.com/"
      },
      { 
        title: "Strategic Insights", 
        desc: "Market insights to help organizations navigate complex challenges and growth opportunities.",
        href: "https://aquaticconsultantsofamerica.com/"
      },
      {
        title: "Regulations & Expert Witness",
        desc: "Consulting pertaining to all aspects of swimming pool regulations, maintenance, and expert witness testimony.",
        href: "https://pooloperationmanagement.com/consulting/"
      }
    ]
  },
  community: {
    hero: {
      eyebrow: "Join free",
      title: "The professional community Latino pool workers always deserved",
      subtitle: "A space where pool technicians come together, ask questions, share what they know, and build careers they're proud of. In Spanish, for you.",
      cta1: "Create free account",
      cta2: "Learn more",
    },
    what: {
      label: "What is the PSF community?",
      title: "More than a forum — a professional home",
      desc: "A space where the craft is celebrated, questions get answered by peers, and credentials mean something.",
      items: [
        { title: "Forum in Spanish",       desc: "Post questions and share answers in your language. No barriers, no filters." },
        { title: "Topic categories",       desc: "Water chemistry, equipment, business, safety — find exactly what you need." },
        { title: "Country chapters",       desc: "Connect with professionals from your region. Community is close to where you are." },
        { title: "Professional profiles",  desc: "Show your experience, certifications, and career. Be seen as the professional you are." },
      ],
    },
    steps: {
      label: "How does it work?",
      title: "Three steps to get started",
      items: [
        { step: "01", title: "Create your free account",  desc: "Sign up in under 2 minutes. No credit card, no commitment." },
        { step: "02", title: "Complete your profile",     desc: "Tell us what you do, where you are, and what you want to learn or contribute." },
        { step: "03", title: "Join the conversation",    desc: "Ask your first question, answer a peer, or explore the forum. The community is already alive." },
      ],
    },
    founding: {
      eyebrow: "Founding members",
      title: "Be part of it from the beginning",
      desc: "The first 50 founding members will get early access, special pricing on certifications, and their name in PSF history.",
      cta: "Join as a founding member",
      perks: [
        "Early access to the full platform",
        "Special pricing on CPO and CPI certifications",
        "Your name in PSF history",
        "Exclusive founding member badge",
      ],
    },
  },
  learn: {
    hero: {
      eyebrow: "Free library",
      title: "The knowledge no one gave you — now in Spanish",
      subtitle: "Guides, videos, and downloadable resources made for the Latino technician who learned on their own and wants to keep growing. Free for all members.",
      cta1: "Access for free",
      cta2: "View categories",
    },
    categories: {
      label: "Categories",
      title: "Find what you need",
      items: [
        { title: "Water Chemistry",     desc: "Balance, disinfection, treatments. Everything you need to keep water safe and crystal clear.", icon: "droplets" },
        { title: "Equipment & Systems", desc: "Pumps, filters, circulation systems, and automation. Step-by-step troubleshooting guides.", icon: "wrench" },
        { title: "Business & Career",   desc: "How to price your work, contracts, marketing, and growing as an independent professional.", icon: "briefcase" },
        { title: "Aquatic Safety",      desc: "Regulations, accident prevention, and state and federal compliance requirements.", icon: "shield" },
        { title: "Inspection",          desc: "Inspection protocols, documentation, and best practices for certified inspectors.", icon: "clipboard" },
        { title: "Certifications",      desc: "Study guides, practice questions, and preparation resources for CPO and CPI.", icon: "award" },
      ],
    },
    coming: {
      eyebrow: "Coming soon",
      title: "The library is being built",
      desc: "We're producing the first batch of content. Founding members will get early access to all resources on launch day.",
      cta: "Join to be first in line",
    },
  },
  consulting: {
    hero: {
      eyebrow: "For organizations",
      title: "Train your team. Certify your workforce.",
      subtitle: "Spanish-language certification programs for pool service companies, municipalities, HOAs, and workforce development programs that want to invest in their Latino technicians.",
      cta1: "Request information",
      cta2: "View services",
    },
    who: {
      label: "Who is it for?",
      title: "We work with organizations that invest in their people",
      items: [
        { title: "Pool service companies",        desc: "Certify your entire technical team with volume discounts and customized programs." },
        { title: "Municipalities & water parks",  desc: "Regulatory compliance and training for operators of public aquatic facilities." },
        { title: "HOAs & residential properties", desc: "Certify the staff that operates and maintains community pools." },
        { title: "Workforce development programs",desc: "Integrate PSF certifications into your workforce training programs for Latino workers." },
      ],
    },
    services: {
      label: "Services",
      title: "What do we offer?",
      items: [
        { title: "Group certification",  desc: "Special pricing for groups of 5 or more. CPO and CPI instruction delivered in Spanish." },
        { title: "On-site training",     desc: "We bring the course to your facility. Flexible scheduling tailored to your operation." },
        { title: "Co-branded content",   desc: "Training materials co-branded with your organization's visual identity." },
        { title: "Progress & reporting", desc: "Progress dashboard, pass rates, and digital certificates for every team member." },
      ],
    },
    form: {
      label: "Request information",
      title: "Tell us about your organization",
      name: "Full name", namePh: "Your name",
      org: "Organization", orgPh: "Your company or institution name",
      email: "Email address", emailPh: "you@yourcompany.com",
      size: "Team size", sizePh: "How many people need to be certified?",
      message: "What do you need?", messagePh: "Tell us about your project, team, and goals...",
      submit: "Send request",
      success: "Thank you! We'll be in touch within 48 hours.",
    },
    cta: {
      title: "Do you have a team to certify?",
      subtitle: "Write to us and we'll send you a personalized proposal within 48 hours.",
      cta: "Request a quote",
    },
  },
  events: {
    hero: {
      eyebrow: "Events & webinars",
      title: "Learn live. Connect in person.",
      subtitle: "Technical webinars, expert Q&A sessions, and in-person meetups for Latino pool professionals — wherever you are in the world.",
      cta1: "Join to be notified",
      cta2: "View past events",
    },
    types: {
      label: "What kind of events do we host?",
      title: "There's always something to learn",
      items: [
        { title: "Technical webinars",    desc: "Live sessions on water chemistry, equipment, regulations, and more. With certified experts." },
        { title: "Community Q&A",         desc: "Open sessions where the community asks questions and experts answer in real time." },
        { title: "In-person meetups",     desc: "Regional gatherings, hands-on workshops, and certification ceremonies in different cities." },
        { title: "Certification classes", desc: "In-person CPO and CPI courses with certified instructors. Check upcoming dates." },
      ],
    },
    upcoming: {
      label: "Upcoming events",
      title: "Nothing scheduled yet",
      desc: "We're preparing the first event calendar. Join the community and you'll be the first to receive dates.",
      cta: "Notify me when there are events",
    },
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    effective: "Effective Date: July 25, 2025",
    intro: "At Piscinas Sin Fronteras we deeply value your trust and are committed to protecting your privacy. This policy describes how we collect, use, disclose, and protect your personal information.",
    sections: [
      { title: "1. Information We Collect", content: "We collect personally identifiable information such as name, email, phone, and address; appointment and scheduling details; payment information (processed by third-party providers); account credentials; and communication content. We also collect non-personally identifiable information such as usage data, IP addresses, device type, operating system, and general geolocation information." },
      { title: "2. Collection Methods", content: "Information is gathered directly from users, automatically through cookies and web beacons, and from third-party service providers." },
      { title: "3. How We Use Information", content: "We use collected data to provide services, communicate with users, personalize experiences, improve our offerings, process payments, send marketing materials (with consent), detect fraud, and comply with legal obligations." },
      { title: "4. Information Sharing", content: "We do not sell personal data. We may share it with service providers, for legal compliance, during business transfers, or with explicit user consent." },
      { title: "5. Data Security", content: "We implement reasonable technical, administrative, and physical security measures. However, we acknowledge that no method is 100% secure." },
      { title: "6. Data Retention", content: "Information is retained only as long as necessary for stated purposes or as required by law." },
      { title: "7. Your Privacy Rights", content: "Depending on your jurisdiction, you may have rights to access, correct, delete, object to, restrict, port, or withdraw consent regarding your personal data." },
      { title: "8. Third-Party Links", content: "Our website may contain links to external sites. We encourage you to review their privacy policies separately." },
      { title: "9. Children's Privacy", content: "Our services are not directed to individuals under 18 and we do not knowingly collect information from minors." },
      { title: "10. Policy Changes", content: "Updates will be posted with revised effective dates on this page." },
      { title: "11. Contact", content: "For questions about this policy, contact us at: rgaleano@thepoolscientist.com · (561) 617-6028 · 9825 Marina Blvd., Boca Raton, FL 33428" },
    ],
  },
};

export const translations: Record<Lang, typeof es> = { es, en };
export type Translations = typeof es;
