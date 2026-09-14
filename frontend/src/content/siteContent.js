export const routeDictionary = {
  home: { es: "", en: "" },
  visit: { es: "visita", en: "visit" },
  sermons: { es: "sermones", en: "sermons" },
  groups: { es: "grupos", en: "groups" },
  vision: { es: "vision", en: "vision" },
  give: { es: "ofrendar", en: "give" },
  information: { es: "informacion", en: "information" },
  login: { es: "login", en: "login" },
  friendsFamily: { es: "friends-family", en: "friends-family" },
  conference: { es: "eventos", en: "events" },
  ministry: { es: "ministerio", en: "ministry" },
  resources: { es: "recursos", en: "resources" },
  worship: { es: "adoracion", en: "worship" }
};

export const routeKeyByLocaleSlug = Object.entries(routeDictionary).reduce(
  (accumulator, [routeKey, value]) => {
    accumulator.es[value.es] = routeKey;
    accumulator.en[value.en] = routeKey;
    return accumulator;
  },
  { es: { "": "home" }, en: { "": "home" } }
);

export function getLocalizedPath(locale, routeKey) {
  const slug = routeDictionary[routeKey]?.[locale] ?? "";
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export const siteContent = {
  es: {
    localeLabel: "Español",
    siteName: "Jesucristo Unica Esperanza",
    pageTitle: "Jesucristo Unica Esperanza",
    topBar: {
      leftLabel: "Iglesia",
      leftTitle: "Jesucristo Unica Esperanza",
      leftText: "12415 SW 136 Ave Miami FL USA",
      rightTitle: "Bible in One Year",
      rightText: "Saber mas"
    },
    utilityLinks: [
      { key: "friendsFamily", label: "Conecta" },
      { key: "conference", label: "Eventos" },
      { key: "ministry", label: "Ministerio" },
      { key: "resources", label: "Recursos" },
      { key: "worship", label: "Adoracion" }
    ],
    ctas: {
      information: "Informacion",
      login: "Login",
      menu: "Menu",
      switchLocale: "English"
    },
    navItems: [
      { key: "visit", label: "Visita" },
      { key: "sermons", label: "Sermones" },
      { key: "groups", label: "Grupos" },
      { key: "vision", label: "Vision" },
      { key: "give", label: "Ofrendar" }
    ],
    home: {
      featuredVideo: {
        label: "Predica del domingo",
        title: "No More Lies",
        speaker: "Ernesto Betancourt",
        date: "SUN 4.26.2026",
        youtubeId: "Iwgb2ubv8kg",
        watchLabel: "Ver sermon completo",
        embedAllowed: false
      },
      heroEyebrow: "Bienvenidos",
      heroTitle: "Una iglesia cercana, viva y con proposito.",
      heroText:
        "Ya dejamos la estructura en una tecnologia moderna para que el siguiente paso sea llevar el diseno hacia la pagina de referencia que me compartas, sin rehacer la base.",
      primaryAction: "Planifica tu visita",
      secondaryAction: "Ver eventos",
      sermonMeta: {
        eyebrow: "Descubre",
        category: "Conecta",
        speaker: "Jesucristo Unica Esperanza",
        day: "Domingo",
        date: "Cada semana",
        title: "Hay esperanza en Jesus",
        action: "Ver mensaje"
      },
      weeklyLabel: "Esta semana",
      weeklyTitle: "Horarios listos para destacar lo esencial",
      schedule: [
        { label: "Culto principal", value: "Dom 10:00 AM" },
        { label: "Oracion", value: "Mie 7:00 PM" },
        { label: "Jovenes", value: "Vie 6:30 PM" }
      ],
      visit: {
        eyebrow: "Visitanos",
        title: "Acompananos cada semana en Miami.",
        text: "Estamos construyendo un hogar para toda la familia donde la presencia de Dios, la Palabra y la comunidad son el centro.",
        action: "Mas informacion",
        locations: [
          {
            name: "Jesucristo Unica Esperanza",
            times: "Dom 10:00 AM",
            address: "12415 SW 136 Ave, Miami, FL, USA"
          },
          {
            name: "Oracion Semanal",
            times: "Mie 7:00 PM",
            address: "12415 SW 136 Ave, Miami, FL, USA"
          },
          {
            name: "Jovenes",
            times: "Vie 6:30 PM",
            address: "12415 SW 136 Ave, Miami, FL, USA"
          }
        ]
      },
      missionQuote:
        "Nuestra mision es simple: acercar a quienes estan lejos de Dios al amor, la verdad y la esperanza de Jesucristo.",
      latest: {
        eyebrow: "Lo mas reciente",
        title: "Lo ultimo en Jesucristo Unica Esperanza",
        items: [
          {
            type: "Evento",
            title: "Domingo de bienvenida",
            action: "Conocer mas"
          },
          {
            type: "Comunidad",
            title: "Grupos en casa",
            action: "Explorar"
          },
          {
            type: "Adoracion",
            title: "Noche de adoracion",
            action: "Ver detalles"
          },
          {
            type: "Familia",
            title: "Ministerio de ninos",
            action: "Descubrir"
          }
        ]
      },
      community: {
        eyebrow: "Como vivimos comunidad",
        title: "Tres formas de crecer juntos",
        items: [
          {
            title: "Servicios dominicales",
            text: "Nuestra gran reunion semanal centrada en adoracion, predicacion biblica y comunidad."
          },
          {
            title: "Grupos",
            text: "Espacios mas pequenos para amistad, discipulado, oracion y crecimiento real."
          },
          {
            title: "Equipos de servicio",
            text: "Una forma concreta de descubrir proposito mientras servimos a otros con excelencia."
          }
        ]
      },
      values: {
        eyebrow: "Nuestros valores",
        title: "Lo que nos forma como iglesia",
        text: "Estos valores guian nuestra cultura, nuestro servicio y nuestra forma de amar a las personas.",
        items: [
          {
            number: "01",
            title: "Jesus es nuestro mensaje",
            text: "Todo comienza y termina en Jesus."
          },
          {
            number: "02",
            title: "Las personas son nuestro corazon",
            text: "Creemos en servir, restaurar y recibir a todos con amor."
          },
          {
            number: "03",
            title: "La generosidad es un privilegio",
            text: "Damos con alegria porque primero recibimos de Dios."
          },
          {
            number: "04",
            title: "La excelencia es nuestro espiritu",
            text: "Honramos a Dios dando lo mejor en todo lo que hacemos."
          }
        ]
      },
      pastors: {
        eyebrow: "Liderazgo",
        title: "Una iglesia local con un corazon pastoral cercano.",
        text: [
          "Jesucristo Unica Esperanza existe para levantar una casa donde las familias, los ninos, los jovenes y cada visitante puedan encontrar esperanza real en Jesus.",
          "Este espacio queda listo para presentar a los pastores, lideres principales y la vision pastoral de la iglesia."
        ],
        action: "Conoce la vision"
      },
      sections: {
        about: {
          eyebrow: "Nosotros",
          title: "Una estructura pensada para crecer bien.",
          text: [
            "Esta base ya separa las secciones clave para una iglesia: bienvenida, historia, ministerios, eventos y contacto.",
            "Luego podemos reemplazar textos, sumar imagenes, integrar animaciones y acercar el look exacto al sitio de referencia."
          ]
        },
        ministries: {
          eyebrow: "Ministerios",
          title: "Componentes listos para una interfaz visual moderna.",
          items: [
            {
              title: "Ninos",
              text: "Espacio para clases, edades, seguridad y acompanamiento familiar."
            },
            {
              title: "Jovenes",
              text: "Seccion ideal para reuniones, discipulado y actividades especiales."
            },
            {
              title: "Matrimonios",
              text: "Area preparada para encuentros, consejeria y crecimiento en comunidad."
            },
            {
              title: "Servicio",
              text: "Lista para mostrar equipos de bienvenida, musica, medios y apoyo."
            }
          ]
        },
        events: {
          eyebrow: "Eventos",
          title: "Un bloque flexible para actividades y anuncios.",
          items: [
            {
              date: "12 MAY",
              title: "Noche de adoracion",
              text: "Bloque listo para presentar actividades destacadas con una apariencia moderna."
            },
            {
              date: "18 MAY",
              title: "Encuentro de familias",
              text: "Luego podemos convertir esto en tarjetas dinamicas o conectarlo a un CMS."
            }
          ]
        },
        contact: {
          eyebrow: "Contacto",
          title: "Preparado para convertir visitas en conexiones reales.",
          items: [
            "Correo: contacto@jesuschristonlyhope.org",
            "Telefono: +1 (000) 000-0000",
            "Direccion: lista para completar con los datos reales."
          ]
        }
      }
    },
    pages: {
      visit: {
        eyebrow: "Visita",
        title: "Todo listo para recibir a quien llega por primera vez.",
        body:
          "Aqui podremos explicar horarios, ubicacion, como vestir, donde estacionar y que esperar al visitar Jesucristo Unica Esperanza.",
        hero: {
          tagline: "Tu primera visita",
          description:
            "Creamos esta pagina para que cualquier persona sepa exactamente que esperar antes de llegar. Todo el contenido aqui puede reemplazarse luego por informacion real.",
          primaryAction: "Planifica tu visita",
          secondaryAction: "Ver ubicacion"
        },
        quickFacts: [
          { label: "Direccion", value: "12415 SW 136 Ave, Miami, FL, USA" },
          { label: "Servicio principal", value: "Domingo 10:00 AM" },
          { label: "Duracion", value: "Placeholder: 75-90 minutos" },
          { label: "Ambiente", value: "Placeholder: familiar, cercano y biblico" }
        ],
        expectationTitle: "Que puedes esperar",
        expectations: [
          {
            title: "Bienvenida calida",
            text: "Placeholder para explicar como recibe el equipo de bienvenida a las personas que visitan por primera vez."
          },
          {
            title: "Adoracion y predicacion",
            text: "Placeholder para describir el estilo del servicio, el tiempo de adoracion y la enseñanza biblica."
          },
          {
            title: "Un espacio para toda la familia",
            text: "Placeholder para incluir informacion sobre ninos, jovenes y acompanamiento a familias."
          }
        ],
        galleryTitle: "Asi podria verse tu experiencia",
        gallery: [
          "Entrada principal",
          "Tiempo de adoracion",
          "Predicacion del domingo",
          "Familias y ninos",
          "Lobby y conexion",
          "Comunidad despues del servicio"
        ],
        infoSections: [
          {
            title: "Parqueo",
            text: "Placeholder para explicar donde estacionar, accesos, entradas y recomendaciones practicas."
          },
          {
            title: "Codigo de vestimenta",
            text: "Placeholder para aclarar si el ambiente es casual, formal o relajado."
          },
          {
            title: "Ninos",
            text: "Placeholder para edades, seguridad, registro y detalles del ministerio infantil."
          },
          {
            title: "Idioma y apoyo",
            text: "Placeholder para indicar si hay traduccion, servicio bilingue o apoyo en ingles/espanol."
          }
        ],
        faqTitle: "Preguntas frecuentes",
        faqs: [
          {
            question: "Necesito registrarme antes de ir?",
            answer: "Placeholder: aqui podemos aclarar si la visita es libre o si conviene llenar un formulario antes."
          },
          {
            question: "Puedo ir con mis hijos?",
            answer: "Placeholder: aqui podemos explicar opciones para ninos, seguridad y acompanamiento por edades."
          },
          {
            question: "Como me conecto despues de la visita?",
            answer: "Placeholder: aqui puede ir el siguiente paso para nuevos visitantes, grupos o contacto pastoral."
          }
        ],
        cta: {
          title: "Listo para visitar?",
          text: "Placeholder para un cierre claro que anime a la persona a dar el siguiente paso.",
          primaryAction: "Escribenos",
          secondaryAction: "Como llegar"
        }
      },
      sermons: {
        eyebrow: "Sermones",
        title: "Una pagina preparada para mensajes y series.",
        body:
          "Esta ruta queda lista para conectar predicas, videos, audio, notas y series destacadas desde el backend.",
        hero: {
          tagline: "Mensajes recientes",
          description:
            "Una pagina pensada para presentar el mensaje del domingo, series activas, clips, audio y recursos de estudio en un formato claro y visual.",
          primaryAction: "Ver mensaje destacado",
          secondaryAction: "Explorar archivo"
        },
        featured: {
          label: "Destacado",
          title: "No More Lies",
          speaker: "Ernesto Betancourt",
          date: "SUN 4.26.2026",
          text: "Placeholder para el resumen del mensaje principal del domingo y su aplicación práctica para la semana.",
          action: "Ver sermon"
        },
        latestTitle: "Ultimos mensajes",
        latest: [
          {
            title: "No More Lies",
            speaker: "Ernesto Betancourt",
            date: "Abr 26, 2026"
          },
          {
            title: "Esperanza en medio del proceso",
            speaker: "Placeholder pastor",
            date: "Abr 19, 2026"
          },
          {
            title: "Firmes en la fe",
            speaker: "Placeholder pastor",
            date: "Abr 12, 2026"
          }
        ],
        seriesTitle: "Series recientes",
        series: [
          {
            title: "No More Lies",
            text: "Placeholder para describir una serie sobre verdad, identidad y libertad en Cristo."
          },
          {
            title: "Fe para hoy",
            text: "Placeholder para una serie enfocada en caminar con Dios en la vida diaria."
          },
          {
            title: "Familias con proposito",
            text: "Placeholder para mensajes orientados al hogar, crianza y relaciones."
          }
        ],
        clipsTitle: "Clips y momentos clave",
        clips: [
          "Fragmento del mensaje",
          "Llamado final",
          "Momento de adoracion"
        ],
        resourcesTitle: "Recursos del mensaje",
        resources: [
          {
            title: "Notas del sermon",
            text: "Placeholder para apuntes, versiculos y puntos clave."
          },
          {
            title: "Audio para escuchar",
            text: "Placeholder para version solo audio del mensaje."
          },
          {
            title: "Guia para grupos",
            text: "Placeholder para preguntas de discusion y aplicacion."
          }
        ]
      },
      groups: {
        eyebrow: "Grupos",
        title: "Espacio para comunidad, discipulado y conexion.",
        body:
          "Aqui podremos presentar grupos pequenos, reuniones por edades, lideres y formularios de integracion."
      },
      vision: {
        eyebrow: "Vision",
        title: "La historia y direccion de la iglesia en una pagina dedicada.",
        body:
          "Esta seccion nos servira para contar la mision, valores, liderazgo y el corazon pastoral de la iglesia.",
        hero: {
          tagline: "Quienes somos",
          description:
            "Esta pagina esta pensada para contar claramente la identidad de la iglesia: por que existimos, que creemos, hacia donde vamos y como deseamos servir a nuestra ciudad.",
          primaryAction: "Conecta con nosotros",
          secondaryAction: "Ver ministerios"
        },
        mission: {
          eyebrow: "Mision",
          title: "Existimos para acercar personas a la esperanza de Jesucristo.",
          text:
            "Placeholder para una declaracion clara y memorable de la mision central de la iglesia."
        },
        storyTitle: "Nuestra historia",
        story: [
          {
            title: "Como comenzo",
            text: "Placeholder para contar el inicio de la iglesia, el llamado pastoral y el primer paso de fe."
          },
          {
            title: "Lo que Dios ha hecho",
            text: "Placeholder para testimonios, crecimiento, impacto en familias y momentos clave en el camino."
          },
          {
            title: "Hacia donde vamos",
            text: "Placeholder para la direccion futura, expansion, discipulado y vision para la ciudad."
          }
        ],
        valuesTitle: "Nuestros pilares",
        values: [
          {
            title: "Jesus en el centro",
            text: "Placeholder para explicar que Cristo es el mensaje, la motivacion y el fundamento."
          },
          {
            title: "La Biblia como autoridad",
            text: "Placeholder para describir el compromiso con una enseñanza fiel y practica."
          },
          {
            title: "Las personas importan",
            text: "Placeholder para reflejar compasion, servicio y comunidad."
          },
          {
            title: "La ciudad es nuestro campo",
            text: "Placeholder para mostrar una vision misional hacia Miami y mas alla."
          }
        ],
        timelineTitle: "Trayectoria e impacto",
        timeline: [
          {
            year: "20XX",
            title: "Inicio del ministerio",
            text: "Placeholder para el primer gran hito."
          },
          {
            year: "20XX",
            title: "Primer espacio estable",
            text: "Placeholder para una etapa de consolidacion."
          },
          {
            year: "20XX",
            title: "Expansion de ministerios",
            text: "Placeholder para crecimiento en ninos, jovenes o grupos."
          }
        ],
        pastorsTitle: "Corazon pastoral",
        pastorsText: [
          "Placeholder para presentar el tono pastoral de la iglesia, su carga por las personas y su llamado al discipulado.",
          "Placeholder para explicar como se lidera la iglesia con amor, verdad, servicio y enfoque en Jesus."
        ],
        galleryTitle: "Vision ilustrada",
        gallery: [
          "Predicacion y direccion",
          "Comunidad en adoracion",
          "Servicio a la ciudad",
          "Familias y discipulado"
        ],
        cta: {
          title: "Quieres conocer mas de la iglesia?",
          text: "Placeholder final para invitar a la persona a seguir explorando, conectar o visitarnos.",
          primaryAction: "Visitanos",
          secondaryAction: "Conecta"
        }
      },
      give: {
        eyebrow: "Ofrendar",
        title: "Un punto claro para apoyo y generosidad.",
        body:
          "Mas adelante podemos integrar metodos reales de donacion, explicaciones biblicas y transparencia financiera."
      },
      information: {
        eyebrow: "Informacion",
        title: "Datos clave para visitantes y miembros.",
        body:
          "Aqui podremos centralizar ubicacion, telefono, correo, horarios, FAQ y cualquier informacion importante."
      },
      login: {
        eyebrow: "Login",
        title: "Acceso preparado para miembros, lideres o administracion.",
        body:
          "Esta ruta queda lista para un futuro portal con autenticacion, perfiles y herramientas internas."
      },
      friendsFamily: {
        eyebrow: "Conecta",
        title: "Una pagina especial para conectar con la iglesia.",
        body:
          "Podemos usar esta seccion para recibir visitantes, compartir proximos pasos y facilitar una conexion clara con la iglesia.",
        hero: {
          tagline: "Da tu siguiente paso",
          description:
            "Esta pagina esta pensada para ayudar a nuevos visitantes, familias y miembros a encontrar su lugar dentro de la iglesia mediante pasos simples y claros.",
          primaryAction: "Completar formulario",
          secondaryAction: "Hablar con alguien"
        },
        nextStepsTitle: "Tres formas de conectar",
        nextSteps: [
          {
            title: "Visita un domingo",
            text: "Placeholder para invitar a las personas a comenzar con una visita presencial."
          },
          {
            title: "Llena un formulario",
            text: "Placeholder para recopilar datos, intereses y formas de seguimiento."
          },
          {
            title: "Da un siguiente paso",
            text: "Placeholder para grupos, servicio, bautismo o acompañamiento pastoral."
          }
        ],
        formTitle: "Formulario placeholder",
        formFields: [
          "Nombre completo",
          "Correo electronico",
          "Telefono",
          "Como te gustaria conectarte?"
        ],
        pathwaysTitle: "Caminos para integrarte",
        pathways: [
          {
            title: "Grupos",
            text: "Placeholder para grupos pequenos, discipulado y comunidad durante la semana."
          },
          {
            title: "Servicio",
            text: "Placeholder para equipos donde una persona puede servir y crecer."
          },
          {
            title: "Pastoral",
            text: "Placeholder para consejeria, oracion y acompañamiento personal."
          }
        ],
        galleryTitle: "Conexion en comunidad",
        gallery: [
          "Equipo de bienvenida",
          "Conversa despues del servicio",
          "Grupos pequenos",
          "Servicio en accion"
        ],
        cta: {
          title: "No camines solo",
          text: "Placeholder final para recordar que siempre hay un siguiente paso disponible para cada persona.",
          primaryAction: "Escribenos",
          secondaryAction: "Ver grupos"
        }
      },
      conference: {
        eyebrow: "Eventos",
        title: "Una ruta lista para actividades especiales y registros.",
        body:
          "Aqui podremos mostrar agenda, fechas, registro y recursos visuales para eventos especiales de la iglesia.",
        hero: {
          tagline: "Proximas actividades",
          description:
            "Esta pagina esta pensada para mostrar eventos importantes de la iglesia: reuniones especiales, conferencias, encuentros de familia, noches de adoracion y actividades para la comunidad.",
          primaryAction: "Registrarme",
          secondaryAction: "Ver calendario"
        },
        featured: {
          label: "Evento destacado",
          title: "Noche de adoracion",
          date: "MAY 18, 2026",
          location: "Placeholder: Auditorio principal",
          text: "Placeholder para describir el evento principal, su enfoque espiritual, horario y expectativas.",
          action: "Reservar lugar"
        },
        upcomingTitle: "Proximos eventos",
        upcoming: [
          {
            date: "MAY 18",
            title: "Noche de adoracion",
            text: "Placeholder para una breve descripcion del evento."
          },
          {
            date: "MAY 25",
            title: "Encuentro de familias",
            text: "Placeholder para detalles orientados a padres, hijos y comunidad."
          },
          {
            date: "JUN 01",
            title: "Conferencia de jovenes",
            text: "Placeholder para una actividad con enfoque en juventud y liderazgo."
          }
        ],
        calendarTitle: "Calendario placeholder",
        calendarItems: [
          "Domingos especiales",
          "Reuniones de oracion",
          "Eventos para familias",
          "Conferencias y retiros"
        ],
        registerTitle: "Registro placeholder",
        registerFields: [
          "Nombre completo",
          "Correo electronico",
          "Telefono",
          "Evento de interes"
        ],
        resourcesTitle: "Recursos del evento",
        resources: [
          {
            title: "Informacion general",
            text: "Placeholder para horarios, puertas, ubicacion y recomendaciones."
          },
          {
            title: "Material promocional",
            text: "Placeholder para posters, piezas graficas y contenido descargable."
          },
          {
            title: "Preguntas frecuentes",
            text: "Placeholder para costos, registro, edades y acceso."
          }
        ],
        galleryTitle: "Ambiente del evento",
        gallery: [
          "Auditorio principal",
          "Momento de adoracion",
          "Equipo sirviendo",
          "Comunidad reunida"
        ],
        cta: {
          title: "Quieres participar en el proximo evento?",
          text: "Placeholder final para animar a la persona a registrarse o pedir mas informacion.",
          primaryAction: "Registrarme",
          secondaryAction: "Mas informacion"
        }
      },
      ministry: {
        eyebrow: "Ministerio",
        title: "Un espacio para presentar areas de servicio y formacion.",
        body:
          "Esta pagina puede crecer con equipos, academias, voluntariado y procesos de desarrollo ministerial."
      },
      resources: {
        eyebrow: "Recursos",
        title: "Contenido util para la iglesia y para visitantes.",
        body:
          "Perfecta para estudios, guias, materiales descargables, devocionales y contenido multimedia."
      },
      worship: {
        eyebrow: "Adoracion",
        title: "Una pagina para musica, equipos y cultura de adoracion.",
        body:
          "Aqui podremos mostrar canciones, playlists, vision del ministerio y convocatorias para el equipo."
      }
    }
  },
  en: {
    localeLabel: "English",
    siteName: "Jesus Christ Only Hope",
    pageTitle: "Jesus Christ Only Hope",
    topBar: {
      leftLabel: "Church",
      leftTitle: "Jesus Christ Only Hope",
      leftText: "12415 SW 136 Ave Miami FL USA",
      rightTitle: "Bible in One Year",
      rightText: "Learn More"
    },
    utilityLinks: [
      { key: "friendsFamily", label: "Connect" },
      { key: "conference", label: "Events" },
      { key: "ministry", label: "Ministry" },
      { key: "resources", label: "Resources" },
      { key: "worship", label: "Worship" }
    ],
    ctas: {
      information: "Information",
      login: "Login",
      menu: "Menu",
      switchLocale: "Español"
    },
    navItems: [
      { key: "visit", label: "Visit" },
      { key: "sermons", label: "Sermons" },
      { key: "groups", label: "Groups" },
      { key: "vision", label: "Vision" },
      { key: "give", label: "Give" }
    ],
    home: {
      featuredVideo: {
        label: "Sunday message",
        title: "No More Lies",
        speaker: "Ernesto Betancourt",
        date: "SUN 4.26.2026",
        youtubeId: "Iwgb2ubv8kg",
        watchLabel: "Watch full sermon",
        embedAllowed: false
      },
      heroEyebrow: "Welcome",
      heroTitle: "A church that feels close, alive, and full of purpose.",
      heroText:
        "The structure is already set on a modern stack, so the next step is shaping the design around the reference site you share without rebuilding the foundation.",
      primaryAction: "Plan your visit",
      secondaryAction: "See events",
      sermonMeta: {
        eyebrow: "Discover",
        category: "Connect",
        speaker: "Jesus Christ Only Hope",
        day: "Sunday",
        date: "Every week",
        title: "There is hope in Jesus",
        action: "Watch message"
      },
      weeklyLabel: "This week",
      weeklyTitle: "Service times ready to highlight the essentials",
      schedule: [
        { label: "Main service", value: "Sun 10:00 AM" },
        { label: "Prayer", value: "Wed 7:00 PM" },
        { label: "Youth", value: "Fri 6:30 PM" }
      ],
      visit: {
        eyebrow: "Visit us",
        title: "Join us weekly in Miami.",
        text: "We are building a home for the whole family where God's presence, Scripture, and community remain at the center.",
        action: "More information",
        locations: [
          {
            name: "Jesus Christ Only Hope",
            times: "Sun 10:00 AM",
            address: "12415 SW 136 Ave, Miami, FL, USA"
          },
          {
            name: "Weekly Prayer",
            times: "Wed 7:00 PM",
            address: "12415 SW 136 Ave, Miami, FL, USA"
          },
          {
            name: "Youth",
            times: "Fri 6:30 PM",
            address: "12415 SW 136 Ave, Miami, FL, USA"
          }
        ]
      },
      missionQuote:
        "Our mission is simple: to bring those who are far from God close to the love, truth, and hope of Jesus Christ.",
      latest: {
        eyebrow: "Latest",
        title: "The latest at Jesus Christ Only Hope",
        items: [
          {
            type: "Event",
            title: "Welcome Sunday",
            action: "Learn more"
          },
          {
            type: "Community",
            title: "Home groups",
            action: "Explore"
          },
          {
            type: "Worship",
            title: "Night of worship",
            action: "See details"
          },
          {
            type: "Family",
            title: "Kids ministry",
            action: "Discover"
          }
        ]
      },
      community: {
        eyebrow: "Ways we do community",
        title: "Three ways we grow together",
        items: [
          {
            title: "Sunday services",
            text: "Our large weekly gathering centered on worship, biblical preaching, and community."
          },
          {
            title: "Groups",
            text: "Smaller spaces for friendship, discipleship, prayer, and real growth."
          },
          {
            title: "Serve teams",
            text: "A practical way to discover purpose while serving others with excellence."
          }
        ]
      },
      values: {
        eyebrow: "Our values",
        title: "What shapes us as a church",
        text: "These values guide our culture, our service, and the way we love people.",
        items: [
          {
            number: "01",
            title: "Jesus is our message",
            text: "Everything begins and ends with Jesus."
          },
          {
            number: "02",
            title: "People are our heart",
            text: "We believe in serving, restoring, and welcoming everyone with love."
          },
          {
            number: "03",
            title: "Generosity is a privilege",
            text: "We give joyfully because we first received from God."
          },
          {
            number: "04",
            title: "Excellence is our spirit",
            text: "We honor God by giving our best in everything we do."
          }
        ]
      },
      pastors: {
        eyebrow: "Leadership",
        title: "A local church with a close pastoral heart.",
        text: [
          "Jesus Christ Only Hope exists to build a home where families, children, young people, and every guest can find real hope in Jesus.",
          "This section is ready to introduce the pastors, key leaders, and the pastoral vision of the church."
        ],
        action: "See the vision"
      },
      sections: {
        about: {
          eyebrow: "About",
          title: "A structure designed to grow the right way.",
          text: [
            "This foundation already separates the key church sections: welcome, story, ministries, events, and contact.",
            "Next we can replace copy, add imagery, introduce motion, and bring the design much closer to the reference site."
          ]
        },
        ministries: {
          eyebrow: "Ministries",
          title: "Components ready for a modern visual interface.",
          items: [
            {
              title: "Kids",
              text: "Space for class info, age groups, safety details, and family support."
            },
            {
              title: "Youth",
              text: "A section ready for gatherings, discipleship, and special activities."
            },
            {
              title: "Marriage",
              text: "Prepared for events, counseling, and growth in community."
            },
            {
              title: "Serve",
              text: "Ready to feature welcome, worship, media, and care teams."
            }
          ]
        },
        events: {
          eyebrow: "Events",
          title: "A flexible block for activities and announcements.",
          items: [
            {
              date: "12 MAY",
              title: "Night of worship",
              text: "A modern feature block for highlighting upcoming church moments."
            },
            {
              date: "18 MAY",
              title: "Family gathering",
              text: "Later we can turn this into dynamic cards or connect it to a CMS."
            }
          ]
        },
        contact: {
          eyebrow: "Contact",
          title: "Prepared to turn visits into real connections.",
          items: [
            "Email: contact@jesuschristonlyhope.org",
            "Phone: +1 (000) 000-0000",
            "Address: ready to be replaced with the real location."
          ]
        }
      }
    },
    pages: {
      visit: {
        eyebrow: "Visit",
        title: "Everything ready for first-time guests.",
        body:
          "This page is ready for service times, location details, parking, dress expectations, and what someone can expect on their first Sunday.",
        hero: {
          tagline: "Your first visit",
          description:
            "We built this page so anyone can know exactly what to expect before arriving. Everything here can be replaced later with real church information.",
          primaryAction: "Plan your visit",
          secondaryAction: "See location"
        },
        quickFacts: [
          { label: "Address", value: "12415 SW 136 Ave, Miami, FL, USA" },
          { label: "Main service", value: "Sunday 10:00 AM" },
          { label: "Duration", value: "Placeholder: 75-90 minutes" },
          { label: "Atmosphere", value: "Placeholder: warm, biblical, family-friendly" }
        ],
        expectationTitle: "What you can expect",
        expectations: [
          {
            title: "A warm welcome",
            text: "Placeholder copy for how the welcome team receives people who are visiting for the first time."
          },
          {
            title: "Worship and teaching",
            text: "Placeholder copy describing the worship style, teaching approach, and Sunday flow."
          },
          {
            title: "A place for the whole family",
            text: "Placeholder copy for children, youth, and family support."
          }
        ],
        galleryTitle: "What your experience could look like",
        gallery: [
          "Main entrance",
          "Worship moment",
          "Sunday preaching",
          "Families and kids",
          "Lobby and connection",
          "Community after service"
        ],
        infoSections: [
          {
            title: "Parking",
            text: "Placeholder for where to park, how to enter, and practical arrival notes."
          },
          {
            title: "Dress code",
            text: "Placeholder for whether the environment is casual, formal, or relaxed."
          },
          {
            title: "Kids",
            text: "Placeholder for ages, security, check-in, and children's ministry details."
          },
          {
            title: "Language support",
            text: "Placeholder for translation, bilingual service, or English/Spanish support."
          }
        ],
        faqTitle: "Frequently asked questions",
        faqs: [
          {
            question: "Do I need to register before attending?",
            answer: "Placeholder: this can clarify whether anyone can simply show up or if pre-registration helps."
          },
          {
            question: "Can I bring my children?",
            answer: "Placeholder: this can explain children's options, safety, and age-based spaces."
          },
          {
            question: "How do I connect after visiting?",
            answer: "Placeholder: this can explain next steps, groups, or pastoral follow-up."
          }
        ],
        cta: {
          title: "Ready to visit?",
          text: "Placeholder closing copy that encourages someone to take the next step.",
          primaryAction: "Contact us",
          secondaryAction: "Get directions"
        }
      },
      sermons: {
        eyebrow: "Sermons",
        title: "A page ready for messages and series.",
        body:
          "We can use this route for sermon archives, featured series, video, audio, and teaching notes from the backend.",
        hero: {
          tagline: "Recent messages",
          description:
            "A page designed to feature the latest Sunday message, active series, clips, audio, and study resources in a clean visual format.",
          primaryAction: "Watch featured message",
          secondaryAction: "Browse archive"
        },
        featured: {
          label: "Featured",
          title: "No More Lies",
          speaker: "Ernesto Betancourt",
          date: "SUN 4.26.2026",
          text: "Placeholder summary for the main Sunday message and how it applies throughout the week.",
          action: "Watch sermon"
        },
        latestTitle: "Latest messages",
        latest: [
          {
            title: "No More Lies",
            speaker: "Ernesto Betancourt",
            date: "Apr 26, 2026"
          },
          {
            title: "Hope in the middle of the process",
            speaker: "Placeholder pastor",
            date: "Apr 19, 2026"
          },
          {
            title: "Standing firm in faith",
            speaker: "Placeholder pastor",
            date: "Apr 12, 2026"
          }
        ],
        seriesTitle: "Recent series",
        series: [
          {
            title: "No More Lies",
            text: "Placeholder for a series about truth, identity, and freedom in Christ."
          },
          {
            title: "Faith for today",
            text: "Placeholder for a series focused on walking with God in everyday life."
          },
          {
            title: "Families with purpose",
            text: "Placeholder for messages about home, parenting, and relationships."
          }
        ],
        clipsTitle: "Clips and key moments",
        clips: [
          "Message excerpt",
          "Final altar call",
          "Worship moment"
        ],
        resourcesTitle: "Message resources",
        resources: [
          {
            title: "Sermon notes",
            text: "Placeholder for notes, key verses, and message outline."
          },
          {
            title: "Audio version",
            text: "Placeholder for an audio-only version of the message."
          },
          {
            title: "Group guide",
            text: "Placeholder for discussion questions and application prompts."
          }
        ]
      },
      groups: {
        eyebrow: "Groups",
        title: "A place for community, discipleship, and connection.",
        body:
          "This section can present small groups, age-based gatherings, leaders, and next-step forms."
      },
      vision: {
        eyebrow: "Vision",
        title: "A dedicated page for the church story and direction.",
        body:
          "This route will work well for mission, values, leadership, and the pastoral heart behind the ministry.",
        hero: {
          tagline: "Who we are",
          description:
            "This page is designed to clearly communicate the identity of the church: why we exist, what we believe, where we are going, and how we want to serve our city.",
          primaryAction: "Connect with us",
          secondaryAction: "See ministries"
        },
        mission: {
          eyebrow: "Mission",
          title: "We exist to bring people close to the hope of Jesus Christ.",
          text:
            "Placeholder for a clear and memorable statement describing the church's central mission."
        },
        storyTitle: "Our story",
        story: [
          {
            title: "How it started",
            text: "Placeholder to tell the beginning of the church, the pastoral calling, and the first step of faith."
          },
          {
            title: "What God has done",
            text: "Placeholder for testimonies, growth, family impact, and key moments along the journey."
          },
          {
            title: "Where we are going",
            text: "Placeholder for future direction, expansion, discipleship, and vision for the city."
          }
        ],
        valuesTitle: "Our pillars",
        values: [
          {
            title: "Jesus at the center",
            text: "Placeholder explaining that Christ is our message, motivation, and foundation."
          },
          {
            title: "Scripture as authority",
            text: "Placeholder describing commitment to faithful and practical biblical teaching."
          },
          {
            title: "People matter",
            text: "Placeholder reflecting compassion, service, and community."
          },
          {
            title: "The city is our field",
            text: "Placeholder showing a missional vision toward Miami and beyond."
          }
        ],
        timelineTitle: "Journey and impact",
        timeline: [
          {
            year: "20XX",
            title: "Ministry begins",
            text: "Placeholder for the first major milestone."
          },
          {
            year: "20XX",
            title: "First stable location",
            text: "Placeholder for a season of consolidation."
          },
          {
            year: "20XX",
            title: "Ministries expand",
            text: "Placeholder for growth in kids, youth, or groups."
          }
        ],
        pastorsTitle: "Pastoral heart",
        pastorsText: [
          "Placeholder to present the pastoral tone of the church, its burden for people, and its call to discipleship.",
          "Placeholder to explain how the church is led with love, truth, service, and a focus on Jesus."
        ],
        galleryTitle: "Vision in motion",
        gallery: [
          "Preaching and direction",
          "Community in worship",
          "Serving the city",
          "Families and discipleship"
        ],
        cta: {
          title: "Want to know more about the church?",
          text: "Placeholder closing invitation for someone to keep exploring, connect, or visit in person.",
          primaryAction: "Visit us",
          secondaryAction: "Connect"
        }
      },
      give: {
        eyebrow: "Give",
        title: "A clear place for generosity and support.",
        body:
          "Later we can connect real giving methods, biblical context, and financial transparency here."
      },
      information: {
        eyebrow: "Information",
        title: "Key details for visitors and members.",
        body:
          "This page can centralize address, phone, email, service times, FAQ, and practical details."
      },
      login: {
        eyebrow: "Login",
        title: "A route prepared for members, leaders, or admin access.",
        body:
          "This page is ready for future authentication, profiles, internal tools, and a member area."
      },
      friendsFamily: {
        eyebrow: "Connect",
        title: "A dedicated page for helping people connect.",
        body:
          "We can use this route to welcome guests, share next steps, and make connection with the church simple.",
        hero: {
          tagline: "Take your next step",
          description:
            "This page is designed to help first-time guests, families, and members find their place in the church through clear and simple next steps.",
          primaryAction: "Complete form",
          secondaryAction: "Talk to someone"
        },
        nextStepsTitle: "Three ways to connect",
        nextSteps: [
          {
            title: "Visit on Sunday",
            text: "Placeholder copy inviting people to begin with an in-person visit."
          },
          {
            title: "Fill out a form",
            text: "Placeholder copy to collect details, interests, and follow-up preferences."
          },
          {
            title: "Take a next step",
            text: "Placeholder copy for groups, serving, baptism, or pastoral care."
          }
        ],
        formTitle: "Placeholder form",
        formFields: [
          "Full name",
          "Email address",
          "Phone number",
          "How would you like to connect?"
        ],
        pathwaysTitle: "Ways to get involved",
        pathways: [
          {
            title: "Groups",
            text: "Placeholder for small groups, discipleship, and weekly community."
          },
          {
            title: "Serve",
            text: "Placeholder for teams where someone can serve and grow."
          },
          {
            title: "Pastoral care",
            text: "Placeholder for counseling, prayer, and personal support."
          }
        ],
        galleryTitle: "Connection in community",
        gallery: [
          "Welcome team",
          "Conversation after service",
          "Small groups",
          "Serving in action"
        ],
        cta: {
          title: "You do not have to walk alone",
          text: "Placeholder closing reminder that there is always a next step available for every person.",
          primaryAction: "Contact us",
          secondaryAction: "See groups"
        }
      },
      conference: {
        eyebrow: "Events",
        title: "A route ready for special gatherings and registration.",
        body:
          "This can grow into a full events page with schedule, registration, highlights, and media.",
        hero: {
          tagline: "Upcoming gatherings",
          description:
            "This page is designed to feature important church events: special services, conferences, family gatherings, worship nights, and community activities.",
          primaryAction: "Register now",
          secondaryAction: "View calendar"
        },
        featured: {
          label: "Featured event",
          title: "Night of worship",
          date: "MAY 18, 2026",
          location: "Placeholder: Main auditorium",
          text: "Placeholder describing the main event, its spiritual focus, schedule, and what to expect.",
          action: "Reserve a spot"
        },
        upcomingTitle: "Upcoming events",
        upcoming: [
          {
            date: "MAY 18",
            title: "Night of worship",
            text: "Placeholder for a short event description."
          },
          {
            date: "MAY 25",
            title: "Family gathering",
            text: "Placeholder for details focused on parents, children, and community."
          },
          {
            date: "JUN 01",
            title: "Youth conference",
            text: "Placeholder for an event focused on youth and leadership."
          }
        ],
        calendarTitle: "Placeholder calendar",
        calendarItems: [
          "Special Sundays",
          "Prayer gatherings",
          "Family events",
          "Conferences and retreats"
        ],
        registerTitle: "Placeholder registration",
        registerFields: [
          "Full name",
          "Email address",
          "Phone number",
          "Event of interest"
        ],
        resourcesTitle: "Event resources",
        resources: [
          {
            title: "General information",
            text: "Placeholder for schedule, doors, location, and recommendations."
          },
          {
            title: "Promotional material",
            text: "Placeholder for posters, graphics, and downloadable assets."
          },
          {
            title: "Frequently asked questions",
            text: "Placeholder for cost, registration, ages, and access."
          }
        ],
        galleryTitle: "Event atmosphere",
        gallery: [
          "Main auditorium",
          "Worship moment",
          "Team serving",
          "Community gathered"
        ],
        cta: {
          title: "Want to join the next event?",
          text: "Placeholder closing copy encouraging someone to register or ask for more information.",
          primaryAction: "Register now",
          secondaryAction: "More information"
        }
      },
      ministry: {
        eyebrow: "Ministry",
        title: "A place to present service areas and formation.",
        body:
          "This page can highlight teams, ministry training, volunteering, and leadership development."
      },
      resources: {
        eyebrow: "Resources",
        title: "Helpful content for the church and for guests.",
        body:
          "Ideal for studies, guides, downloadable materials, devotionals, and media."
      },
      worship: {
        eyebrow: "Worship",
        title: "A page for music, teams, and worship culture.",
        body:
          "We can feature songs, playlists, team vision, and invitations to join the worship ministry here."
      }
    }
  }
};
