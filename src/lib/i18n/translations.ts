export type Lang = "es" | "en";

const es = {
  nav: {
    links: [
      { href: "/cpo",      label: "CPO" },
      { href: "/cpi",      label: "CPI" },
      { href: "/academia", label: "Academia" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/contacto", label: "Contacto" },
    ],
    login:  "Iniciar Sesión",
    signup: "Inscríbete",
  },
  footer: {
    tagline: "La plataforma líder en educación de piscinas en español, diseñada para profesionales Latinos.",
    columns: {
      Programas: [
        { href: "/cpo",      label: "Certificación CPO" },
        { href: "/cpi",      label: "Certificación CPI" },
        { href: "/academia", label: "Academia & Consultoría" },
      ],
      Empresa: [
        { href: "/nosotros", label: "Nosotros" },
        { href: "/contacto", label: "Contacto" },
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
      eyebrow: "by The Pool Scientist",
      titlePre: "Certifícate en",
      highlight: "Operación de Piscinas",
      titlePost: "— en Español",
      subtitle: "La plataforma líder en educación acuática para profesionales Latinos. CPO, CPI y más — sin barreras de idioma.",
      cta1: "Empezar ahora",
      cta2: "Conocer más",
    },
    stats: [
      { value: "2,000+", label: "Profesionales certificados" },
      { value: "50+",    label: "Estados en EE.UU." },
      { value: "98%",    label: "Tasa de aprobación" },
      { value: "4.9★",  label: "Calificación promedio" },
    ],
    programs: {
      label: "Nuestros Programas",
      title: "Elige tu Certificación",
      desc: "Programas diseñados por y para profesionales Latinos del sector acuático.",
      featuredBadge: "Más popular",
      cta: "Ver programa",
      items: [
        { badge: "CPO", title: "Certified Pool & Spa Operator", description: "La credencial de piscinas más reconocida del mundo, completamente en español. Valida tu experiencia y abre nuevas puertas.", features: ["Certificado oficial PHTA", "100% en español", "Examen incluido"], href: "/cpo", featured: true },
        { badge: "CPI", title: "Certified Pool Inspector", description: "Conviértete en inspector certificado de piscinas y spas. Amplía tus servicios con una credencial de alto valor.", features: ["Inspecciones profesionales", "Material en español", "Práctica incluida"], href: "/cpi", featured: false },
        { badge: "Academia", title: "Academia Piscinas Sin Fronteras", description: "Cursos propios, educación continua, foros y recursos diseñados exclusivamente para el profesional Latino.", features: ["Cursos exclusivos PSF", "Comunidad de profesionales", "Acceso de por vida"], href: "/academia", featured: false },
      ],
    },
    why: {
      label: "¿Por qué Piscinas Sin Fronteras?",
      title: "La diferencia es el idioma",
      desc: "Miles de profesionales Latinos tienen el talento. Solo necesitan la oportunidad de certificarse en su idioma.",
      items: [
        { title: "100% en Español",            desc: "Todo el contenido, los exámenes y el soporte están en español. Sin barreras de idioma." },
        { title: "Certificaciones Reconocidas", desc: "Credenciales oficiales CPO y CPI con validez nacional en Estados Unidos." },
        { title: "Comunidad Latina",            desc: "Conecta con miles de profesionales Latinos del sector de piscinas y acuáticas." },
        { title: "Mobile First",                desc: "Estudia desde tu teléfono, en tu propio horario, sin importar dónde estés." },
      ],
    },
    cta: {
      title: "Tu certificación está a un paso",
      subtitle: "Únete a más de 2,000 profesionales Latinos que ya obtuvieron su credencial CPO o CPI con Piscinas Sin Fronteras.",
      cta1: "Crear cuenta gratis",
      cta2: "Hablar con nosotros",
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
    cta: { title: "¿Listo para obtener tu CPO?", subtitle: "Inscríbete hoy y obtén acceso inmediato al material del curso.", cta: "Comenzar ahora" },
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
    career: {
      label: "Valor de carrera",
      title: "¿Por qué convertirte en CPI?",
      items: [
        { title: "Nuevos ingresos",   desc: "Ofrece inspecciones de piscinas como servicio premium a hoteles, condominios y propiedades residenciales." },
        { title: "Diferenciación",    desc: "Destácate de la competencia con una credencial oficial que demuestra tu nivel de conocimiento y profesionalismo." },
        { title: "Cumplimiento legal",desc: "Muchos estados requieren inspecciones por inspectores certificados. Conviértete en el experto de tu área." },
      ],
    },
    cta: { title: "Conviértete en Inspector Certificado", subtitle: "Accede al material del curso de inmediato después de inscribirte.", cta: "Comenzar ahora" },
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
      title: "Somos",
      subtitle: "Nacimos de la necesidad real de miles de profesionales Latinos que tienen el talento y la experiencia, pero no el idioma para obtener sus certificaciones oficiales.",
    },
    story: {
      label: "El problema que resolvemos",
      title: "El idioma no debería ser una barrera",
      body1: "En Estados Unidos, millones de Latinos trabajan cada día manteniendo piscinas residenciales, hoteles, y centros recreativos. Muchos llevan años de experiencia, pero nunca han podido certificarse porque los cursos están en inglés.",
      body2: "Piscinas Sin Fronteras, bajo el paraguas de The Pool Scientist, llegó a cambiar eso. Tradujimos, adaptamos y perfeccionamos el curriculum CPO y CPI para que cualquier profesional Latino pueda obtener su credencial oficial.",
      cta: "Ver programas",
    },
    stats: [
      { value: "2018",   label: "Año de fundación" },
      { value: "2,000+", label: "Certificados" },
      { value: "50+",    label: "Estados" },
      { value: "98%",    label: "Aprobación" },
    ],
    values: {
      label: "Lo que nos mueve",
      title: "Misión, visión y propósito",
      items: [
        { title: "Misión",   desc: "Convertirnos en la plataforma líder de educación de piscinas en español, eliminando la barrera del idioma que ha mantenido a miles de profesionales Latinos de alcanzar su pleno potencial." },
        { title: "Visión",   desc: "Un sector acuático donde el idioma nunca sea un obstáculo para el reconocimiento profesional. Donde cada técnico Latino tenga las mismas oportunidades que sus colegas angloparlantes." },
        { title: "Propósito",desc: "Diseñar la mejor experiencia de aprendizaje para el profesional Latino: práctica, accesible, en su idioma, y reconocida en todo Estados Unidos." },
      ],
    },
    tps: {
      eyebrow: "Nuestra marca padre",
      title: "by The Pool Scientist",
      desc: "Piscinas Sin Fronteras es una marca bajo The Pool Scientist (TPS), la empresa líder en capacitación y consultoría para la industria acuática en EE.UU.",
      cta: "Contáctanos",
      bullets: [
        "Contenido desarrollado por instructores certificados PHTA",
        "Más de 15 años de experiencia en educación acuática",
        "Presencia en más de 50 estados de EE.UU.",
        "Soporte en español 7 días a la semana",
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
      { href: "/cpo",      label: "CPO" },
      { href: "/cpi",      label: "CPI" },
      { href: "/academia", label: "Academy" },
      { href: "/nosotros", label: "About Us" },
      { href: "/contacto", label: "Contact" },
    ],
    login:  "Sign In",
    signup: "Enroll Now",
  },
  footer: {
    tagline: "The leading pool education platform in Spanish, designed for Latino professionals.",
    columns: {
      Programs: [
        { href: "/cpo",      label: "CPO Certification" },
        { href: "/cpi",      label: "CPI Certification" },
        { href: "/academia", label: "Academy & Consulting" },
      ],
      Company: [
        { href: "/nosotros", label: "About Us" },
        { href: "/contacto", label: "Contact" },
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
      eyebrow: "by The Pool Scientist",
      titlePre: "Get Certified in",
      highlight: "Pool Operations",
      titlePost: "— in Spanish",
      subtitle: "The leading aquatic education platform for Latino professionals. CPO, CPI and more — no language barriers.",
      cta1: "Get started",
      cta2: "Learn more",
    },
    stats: [
      { value: "2,000+", label: "Certified professionals" },
      { value: "50+",    label: "U.S. States" },
      { value: "98%",    label: "Pass rate" },
      { value: "4.9★",  label: "Average rating" },
    ],
    programs: {
      label: "Our Programs",
      title: "Choose Your Certification",
      desc: "Programs designed by and for Latino professionals in the aquatic industry.",
      featuredBadge: "Most popular",
      cta: "View program",
      items: [
        { badge: "CPO", title: "Certified Pool & Spa Operator", description: "The world's most recognized pool credential, fully in Spanish. Validate your expertise and open new doors.", features: ["Official PHTA certificate", "100% in Spanish", "Exam included"], href: "/cpo", featured: true },
        { badge: "CPI", title: "Certified Pool Inspector", description: "Become a certified pool and spa inspector. Expand your services with a high-value credential.", features: ["Professional inspections", "Material in Spanish", "Hands-on practice"], href: "/cpi", featured: false },
        { badge: "Academy", title: "Piscinas Sin Fronteras Academy", description: "Original courses, continuing education, forums and resources designed exclusively for the Latino professional.", features: ["Exclusive PSF courses", "Professional community", "Lifetime access"], href: "/academia", featured: false },
      ],
    },
    why: {
      label: "Why Piscinas Sin Fronteras?",
      title: "The difference is the language",
      desc: "Thousands of Latino professionals have the talent. They just need the opportunity to get certified in their language.",
      items: [
        { title: "100% in Spanish",            desc: "All content, exams and support are in Spanish. No language barriers." },
        { title: "Recognized Certifications",   desc: "Official CPO and CPI credentials valid nationwide in the United States." },
        { title: "Latino Community",            desc: "Connect with thousands of Latino professionals in the pool and aquatic industry." },
        { title: "Mobile First",                desc: "Study from your phone, on your own schedule, no matter where you are." },
      ],
    },
    cta: {
      title: "Your certification is one step away",
      subtitle: "Join more than 2,000 Latino professionals who already earned their CPO or CPI credential with Piscinas Sin Fronteras.",
      cta1: "Create free account",
      cta2: "Talk to us",
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
    cta: { title: "Ready to get your CPO?", subtitle: "Enroll today and get immediate access to course materials.", cta: "Start now" },
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
        { title: "New revenue streams", desc: "Offer pool inspections as a premium service to hotels, condominiums and residential properties." },
        { title: "Differentiation",     desc: "Stand out from the competition with an official credential that demonstrates your level of knowledge and professionalism." },
        { title: "Legal compliance",    desc: "Many states require inspections by certified inspectors. Become the expert in your area." },
      ],
    },
    cta: { title: "Become a Certified Inspector", subtitle: "Access course materials immediately after enrolling.", cta: "Start now" },
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
      title: "We are",
      subtitle: "We were born from the real need of thousands of Latino professionals who have the talent and experience, but not the language to obtain their official certifications.",
    },
    story: {
      label: "The problem we solve",
      title: "Language shouldn't be a barrier",
      body1: "In the United States, millions of Latinos work every day maintaining residential pools, hotels, and recreation centers. Many have years of experience but have never been able to get certified because the courses are in English.",
      body2: "Piscinas Sin Fronteras, under the umbrella of The Pool Scientist, came to change that. We translated, adapted and perfected the CPO and CPI curriculum so that any Latino professional can obtain their official credential.",
      cta: "View programs",
    },
    stats: [
      { value: "2018",   label: "Founded" },
      { value: "2,000+", label: "Certified" },
      { value: "50+",    label: "States" },
      { value: "98%",    label: "Pass rate" },
    ],
    values: {
      label: "What drives us",
      title: "Mission, vision and purpose",
      items: [
        { title: "Mission",  desc: "To become the leading pool education platform in Spanish, eliminating the language barrier that has kept thousands of Latino professionals from reaching their full potential." },
        { title: "Vision",   desc: "An aquatic industry where language is never an obstacle to professional recognition. Where every Latino technician has the same opportunities as their English-speaking colleagues." },
        { title: "Purpose",  desc: "To design the best learning experience for the Latino professional: practical, accessible, in their language, and recognized throughout the United States." },
      ],
    },
    tps: {
      eyebrow: "Our parent brand",
      title: "by The Pool Scientist",
      desc: "Piscinas Sin Fronteras is a brand under The Pool Scientist (TPS), the leading company in training and consulting for the aquatic industry in the U.S.",
      cta: "Contact us",
      bullets: [
        "Content developed by PHTA-certified instructors",
        "More than 15 years of experience in aquatic education",
        "Presence in more than 50 U.S. states",
        "Spanish-language support 7 days a week",
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
