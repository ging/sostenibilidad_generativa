"use client";

export const es = {
  nav: {
    challenges: "Retos",
    environmentalImpact: "Impacto ambiental",
    results: "Resultados",
  },
  front: {
    title1: "Sostenibilidad en la",
    title2: " IA Generativa",
    description:
      "Un proyecto de investigación para promover la sostenibilidad y el uso eficiente de la IA Generativa.",
    "doc-button": "Documentación",
    "action-button": "Sobre nosotros",
    section1Title: "Sobre el proyecto",
    section1Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat. Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien. Sed auctor lectus at elit consectetur, at venenatis ligula faucibus.",
    section1Subtitle: "Principios del proyecto",
    latestPublicationsTitle: "Últimas publicaciones",
    latestPublicationsButton: "Ver todas las publicaciones",
    sectionHomeTitle: "A collaborative project between UC3M and UPM",
    sectionHomeBody:
      "The collaboration between the groups will help in aligning the strategies to meet the objectives, instead of producing divergent solutions. Finally, the PI1 for the UPM subproject was part of UC3M team until a few months ago, with multipleshared projects and papers published with both PIs from UC3M, many of them related to the topics of this project. This will greatly facilitate the alignment of both subprojects and effective coordination.",
    sectionHomeSubtitle:
      "“The collaboration between the groups will help in aligning the strategies to meet the objectives, instead of producing divergent solutions”.",
    summaryWeb: {
      sectionTitle: "Secciones",
      environmentalImpact: {
        title: "Impacto ambiental",
        body: "Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus.",
        button: "Saber más",
      },
      challenges: {
        title: "Desafíos",
        body: "Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien purus ac vehicula.",
        button: "Rétate",
      },
      results: {
        title: "Resultados",
        body: "Sed auctor etra, orci nec ultullam id dolor rices lectus at elit consectetur,  urna faucibus lorem at venenatis ligula faucibus.",
        button: "Descubre más",
      },
    },
  },
  environmentalImpact: {
    Intro: {
      sectionTitle: "La IA y su impacto en el medio ambiente",
      sectionBody:
        "Este informe tiene carácter divulgativo pues se espera que su audiencia sea cualquier persona que utiliza sistemas basados en IA en su día a día sin necesidad de comprender el funcionamiento interno de la tecnología. El informe se centra en IA generativa, la más extendida hoy en día entre público general. En él aprenderás cómo usar la IA de forma responsable con el medioambiente. Cuando termines podrás probar tus conocimientos en una Escape Room en la que tendrás que obtener un código secreto antes de que se termine el tiempo y la energía…",
    },
    fact: "Dato",
    advice: "Consejo",
    source: "Fuente: ",
    firstSection: {
      title: "",
      body: "La inteligencia artificial (IA) generativa se está convirtiendo en una de las herramientas más transformadoras de nuestro tiempo. Permite resolver tareas cotidianas y complejas, aumenta la eficiencia en múltiples sectores y promete acelerar el desarrollo de la humanidad a un ritmo nunca visto. Sin embargo, junto a estas oportunidades también aparecen desafíos importantes como su impacto en el mercado laboral, la disminución de nuestras capacidades cognitivas, el aumento de la brecha económica entre países con acceso a la tecnología o la desinformación. Sin embargo, existe un impacto menos visible y quizá más difícil de percibir por el usuario (aunque como veremos, tiene un rol importante): el impacto medioambiental. Entrenar y mantener los sistemas de IA requiere enormes cantidades de energía y recursos naturales, lo que plantea preguntas urgentes sobre sostenibilidad. Comprender esta dimensión es clave para aprovechar la IA sin comprometer el equilibrio del planeta.",
      highlight: {
        title: "CONSUMO IA",
        body: "Para finales de 2025 se estima que la IA consuma el doble de energía que los Países Bajos",
        source: "<a target='_blank' href='https://www.theguardian.com/environment/2025/may/22/ai-data-centre-power-consumption'>The Guardian</a>",
      },
    },
    secondSection: {
      title: "¿Por qué la IA Generativa tiene un impacto en el medioambiente?",
      body: "Cualquier sistema de inteligencia artificial funciona en dos fases principales. Para entenderlo, se presenta el caso de un chatbot, pero sería muy similar para cualquier tipo de IA:",
      li1: "<strong>Fase de entrenamiento.</strong> El modelo aprende a partir de enormes cantidades de texto y datos, detectando patrones y relaciones entre palabras y conceptos. Es como si estuviera leyendo millones de libros y artículos para comprender cómo se construyen las frases y cómo se conecta la información. Como resultado se obtiene un sistema que es capaz de responder preguntas. Esta fase solo se ejecuta una vez, pero puede durar mucho tiempo. El resultado final es un “programa” (llamado modelo) que se puede instalar en máquinas que tengan los recursos suficientes para ejecutarlos. Los chatbots más populares (ChatGPT, Gemini, Grok) se ejecutan en centros de datos de grandes dimensiones, pero hay modelos que podemos ejecutar en ordenadores personales potentes",
      li2: "<strong>Fase de inferencia.</strong> El modelo entrenado se instala en centros de datos para poder atender a todos los usuarios. En realidad, no se instala un único modelo, sino que hay muchas versiones de este ejecutándose en paralelo para poder atender a todos los usuarios. Cuando un usuario realiza una pregunta (inferencia) el modelo se ejecuta y responde con el conocimiento que ha adquirido en la fase de entrenamiento, o consultando fuentes externas en el caso de que esté conectado a Internet. Por ejemplo, si le preguntamos sobre recetas de cocina, combina su conocimiento previo para dar instrucciones claras paso a paso. Todo ocurre en tiempo real, como un “diálogo” adaptado a lo que se le solicita. Al contrario que la fase de entrenamiento la de inferencia se ejecuta tantas veces como sea necesario para obtener la respuesta.",
      body2: "Tanto el entrenamiento como la inferencia suponen un impacto medioambiental, aunque a diferentes escalas:",
      // Datos para el gráfico circular interactivo
      circularChartData:{
          question3: "¿Dónde?",
          content3: "La IA se ejecuta en <strong>servidores</strong> (ordenadores muy potentes). Dentro de estos servidores, un componente clave son las <strong>GPU</strong> (equipos diseñados para hacer los cálculos necesarios para entrenar y ejecutar los modelos). Los servidores se agrupan en unos lugares llamados <strong>centros de datos</strong> para procesar grandes cantidades de información de manera segura y continua.",
          copyright3: "GPU. Imagen por <a href='https://commons.wikimedia.org/wiki/File:NVidia_GeForce_6600GT_AGP_with_GPU_2009-01-27.jpg'>Wikimeida</a>. Licencia <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>CC BY-SA 3.0</a>",
          question1: "¿Quién?",
          content1: "<strong>1) Las empresas</strong> que desarrollan los modelos son responsables del mayor consumo energético durante el entrenamiento. <br> <strong> 2) Los usuarios </strong> son los que generan un impacto cada vez que hacen preguntas al sistema, aunque más pequeño que el entrenamiento. <br> <br> Sin embargo, el entrenamiento solo se ejecuta una vez, mientras que las inferencias suponen un coste por <strong>cada usuario y pregunta</strong> que hagan. La popularidad de la IA es tan grande que hay millones de usuarios al mismo tiempo haciendo consultas, por lo que, aunque el impacto de la inferencia sea muy inferior al de entrenamiento el gran número de usuarios y peticiones hacen que se conviertan en algo muy relevante.",
          question4: "¿Cuándo?",
          content4: "<strong>1) Durante el entrenamiento</strong> el modelo necesita ejecutar muchos cálculos para aprender de los datos de entrada. Gracias al entrenamiento el modelo es capaz de procesar nuestras preguntas y darnos respuesta. <br> <br> <strong>2) Durante la inferencia</strong> el modelo tiene que ejecutarse para darnos la respuesta. Cada ejecución del modelo da como resultado una única palabra (o fragmento de palabra), por lo que para formar una respuesta completa necesitará ejecutarse muchas veces. Obtener una respuesta completa puede llevar desde milisegundos a unos pocos segundos.",
          question2: "¿Por qué?",
          content2: "Los centros de datos requieren un gran consumo de electricidad y refrigeración para su funcionamiento. Obtener esa energía conlleva un gran impacto medioambiental. Además, la propia construcción, y mantenimiento de los centros de datos contribuyen significativamente a aumentar su huella de carbono.",
          copyright2: "Centro de datos. Imagen por <a href='https://modius.com/modius-blog/modius-blog-data-center/what-is-colocation-data-center/'>Modius, Inc</a>. Licencia <a href='https://creativecommons.org/licenses/by-nc/4.0/#ref-commercial-purposes'>CC BY-NC 4.0</a>",

      },
      highlight1: {
        title: "Colossus",
        body: "En 2024 xAI (empresa fundada por Elon Musk y desarrolladora del modelo Grok) construyó el centro de datos Colosus siendo más grande del mundo en solo 122 días, compuesto por 100.000 GPU. Recientemente dobló su tamaño y ahora contiene unas 200.000 GPU.",
        source: "<a target='_blank' href='https://x.ai/colossus'>xAI</a>",
      },
      highlight2: {
        title: "Usuarios ChatGPT",
        body: "ChatGPT tardó 2 meses en conseguir 100 millones de usuarios, mientras que otras aplicaciones como Instagram necesitaron 26 meses.",
        source: "<a target='_blank' href='https://www.xataka.com/empresas-y-economia/instagram-tiktok-chatgpt-plataforma-que-rapido-ha-crecido-toda-historia-internet'>Xataka</a>",
      },
      highlight3: {
        title: "Entrenamiento GPT4",
        body: "Los modelos más potentes han tardado varios meses en entrenarse, se estima que GPT4 tardó unos 100 días en los que ejecutó alrededor de 10<sup>25</sup> operaciones matemáticas utilizando 25.000 GPU.",
        source: "<a target='_blank' href='https://semianalysis.com/2023/07/10/gpt-4-architecture-infrastructure/'>Dylan Patel y Gerald Wong en Semianalysis.com</a>",
      },
      highlight4: {
        title: "Centros de datos",
        body: "La Agencia Internacional de Energía estima que el consumo eléctrico de los centros de datos se duplicará para 2030 llegando a aproximadamente equivalente al consumo total actual de Japón hoy.",
        source: "<a target='_blank' href='https://www.iea.org/reports/energy-and-ai/executive-summary'>Agencia Internacional de Energía (IEA)</a>",
      },

    },
    thirdSection: {
      title: "Título sección",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat. Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat. Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien.",
      highlight: {
        title: "Destacado",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat.",
        source: "www.example.com",
      },
    },
    forthSection: {
      title: "Título sección",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat. Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat. Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien.",
      highlight: {
        title: "Destacado",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat.",
        source: "www.example.com",
      },
    },
   
  },





  research: {
    title: "Publicaciones",
    description:
      "Esta sección recopila las publicaciones del GING relacionadas con nuestras líneas de investigación. Puedes filtrar las publicaciones por texto, fecha, línea de investigación, o tipo de publicación.",
    publicationCards: {
      categories: {
        "article-journal": "Artículo de revista",
        "paper-conference": "Acta de congreso",
        book: "Libro",
        chapter: "Capítulo",
      },
    },
    "action-button": "Leer publicación",
    filter: {
      fieldTitle1: "Buscar",
      fieldTitle2: "Tipo de publicación",
      fieldTitle3: "Año",
      fieldOpt1: "Artículos de revista",
      fieldOpt2: "Actas de congreso",
      fieldOpt3: "Libros",
      fieldOpt4: "Capítulos",
      fieldOpt5: "Documento",
      fieldOpt6: "Todo",
      text: "Resultados",
    },
    button: "Leer publicación",
    button2: "Ver más",
  },

  results: {
    title: "Resultados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Detalles",
    researchLines: {
      data: "Datos",
      ai: "Inteligencia Artificial",
      "e-learning": "E-learning",
      videoconference: "Videoconferencia",
      computing: "Computación Fiable",
      other: "Otros",
      all: "Todo",
    },
    filter: {
      fieldTitle1: "Búsqueda por nombre",
      fieldTitle2: "Tipo de proyecto",
      all: "Todo",
      "national-project": "Proyecto nacional",
      "european-project": "Proyecto europeo",
      "private-project": "Proyecto privado",
    },
    card: {
      toggleMore: "Ver más",
      toggleLess: "Ver menos",
      button: "Publicaciones relacionadas",
    },
    type: {
      "european-project": "Proyecto europeo",
      "national-project": "Proyecto nacional",
      "private-project": "Proyecto privado",
    },
  },
  team: {
    title: "Equipo",
    professorCards: {
      roles: {
        professor: "Profesor Titular de Universidad",
        associate: "Profesor Contratado Doctor",
        phd: "Candidato de Doctorado",
        fulltec: "Técnico a Tiempo Completo",
        fullprofessor: "Catedrático de Universidad", // Full Professor
        assistant: "Profesor Ayudante Doctor",
        researcher: "Investigador",
        external: "Personal Externo",
      },
  
    },
  },
  contact: {
    title: "Contacto",
    title2: "¿Alguna duda? Contáctanos.",

    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "Dirección de correo",
    phone: " Teléfono",
    location: " Localización",
    direction1: "Facultad",
    direction2: "Dirección",
    direction3: "Código postal, ciudad",
  },
  footer: {
    title1: "Secciones",
    title2: "Proyecto financiado por:",
    title3: "Colaboran",
    logoSub:
      "Redes Futuras para Centros de Datos y Empresas de Telecomunicaciones",
    titleRight: "Departamento de Ingeniería de sistemas telemáticos",
    titleRight2: "ETSI telecomunicación",
    email: "Correo de contacto:",
  },
  tools: {
    title: "Herramientas",
    description:
      "Estas son algunas de las herramientas que hemos desarrollado.",
    description2:
      "Si estás interesado en alguna herramienta, ya sea para utilizarla o personalizarla puedes ponerte en contacto con nosotros.",

    toolCards: {
      button: "Ir a herramienta",
    },
  },
  challenges: {
    escaperoom: {
      title: "Escaperoom",
      rooms: "Salas",
      description1:
        "Bienvenido/a al escape room de Sostenibilidad Generativa! 🕵️‍♂️ Para abrir la sala, deberás interactuar con el chatbot y descubrir la contraseña oculta 🔑.",
      description2:
        "Cuando la tengas, introdúcela en el candado para salir de la sala. ⏰ Tienes 5 minutos para encontrar el código. Puedes utilizar todo lo que quieras además del chatbot (internet, libros, tu cerebro 🧠...)",
      description3:
        "Una última cosa... para poder desbloquear la puerta debemos de haber reservado un poco de energía ⚡ en el sistema.",
      description4:
        "Cada fallo ❌ resta un 10% de energía, cada palabra que le preguntes al chatbot resta energía, y cada palabra que este nos responda también... Por lo tanto debes diseñar estrategias de prompt efectiva 📝.",
      description5: "¡Mucha suerte! ",
      escaperoomCards: {
        button: "Jugar",
      },
    },
    tools: {
      title: "Herramientas",
      description1:
        "En esta sección encontrarás las herramientas que hemos desarrollado.",
  },
  },
};
