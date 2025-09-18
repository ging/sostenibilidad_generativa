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
    section1Description: "La Inteligencia Artificial está transformando la sociedad, pero también tiene un impacto ambiental oculto que pocas veces se menciona. Sostenibilidad Generativa nace para demostrar que la tecnología puede avanzar y utilizarse sin dejar de cuidar el planeta. A diferencia de lo que cree parte de la sociedad, el impacto ambiental de la IA no se limita a quienes la desarrollan, sino que también involucra a las personas que la utilizan. Nuestro trabajo se centra en investigar el consumo real asociado al uso de la IA, en concienciar a la sociedad sobre su empleo responsable y en enseñar sencillos trucos para aplicarla de manera respetuosa con el medio ambiente. Queremos que tanto jóvenes como adultos y desarrolladores de nuevas tecnologías basadas en IA descubran que existen formas simples y efectivas de reducir el impacto sin renunciar a la innovación.",    section1Subtitle: "Principios del proyecto",
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
        body: "Informe sobre el impacto ambiental de la IA y guía de buenas prácticas para reducir su impacto por parte de los usuarios.",
        button: "Saber más",
      },
      challenges: {
        title: "Desafíos",
        body: "Rétate en nuestra Escape Room virtual. ¿Serás capaz de escapar de la sala antes de que se acaben el tiempo y la energía...?",
        button: "Rétate",
        button2: "¿Te atreves?"
      },
      results: {
        title: "Resultados",
        body: "Consulta los resultados del proyecto, eventos, y las herramientas desarrolladas.",
        button: "Descubre más",
      },
    },
  },

  environmentalImpact: {
    Intro: {
      sectionTitle: "La IA y su impacto en el medio ambiente",
      sectionBody:
        "Este informe tiene carácter divulgativo, pues se espera que su audiencia sea cualquier persona que utiliza sistemas basados en IA en su día a día sin necesidad de comprender el funcionamiento interno de la tecnología. El informe se centra en IA generativa, la más extendida hoy en día entre el público general. En él aprenderás cómo usar la IA de forma responsable con el medioambiente. Cuando termines podrás probar tus conocimientos en una <strong><a target='_blank' class='underline' href='challenges'>Escape Room</a></strong> en la que tendrás que obtener un código secreto antes de que se termine el tiempo y la energía…",
    },
    fact: "Dato",
    advice: "Consejo",
    source: "Fuente: ",
    firstSection: {
      title: "",
      body: "La inteligencia artificial (IA) generativa se está convirtiendo en una de las herramientas más transformadoras de nuestro tiempo. Permite resolver tareas cotidianas y complejas, aumenta la eficiencia en múltiples sectores y promete acelerar el desarrollo de la humanidad a un ritmo nunca visto. Sin embargo, junto a estas oportunidades también aparecen desafíos importantes como su impacto en el mercado laboral, la disminución de nuestras capacidades cognitivas, la desinformación, o el aumento de la brecha económica entre países con acceso a la tecnología. Sin embargo, existe un impacto menos visible y quizá más difícil de percibir por el usuario (aunque como veremos, desempeña un papel importante): el impacto medioambiental. Entrenar y mantener los sistemas de IA requiere enormes cantidades de energía y recursos naturales, lo que plantea preguntas urgentes sobre sostenibilidad. Comprender esta dimensión es clave para aprovechar la IA sin poner en peligro el equilibrio del planeta.",
      highlight: {
        title: "CONSUMO IA",
        body: "Para finales de 2025 se estima que la IA consumirá el doble de energía que los Países Bajos",
        source: "<a class='underline' target='_blank' href='https://www.theguardian.com/environment/2025/may/22/ai-data-centre-power-consumption'>The Guardian</a>",
      },
    },
    secondSection: {
      title: "¿Por qué la IA Generativa tiene un impacto en el medioambiente?",
      body: "Cualquier sistema de inteligencia artificial funciona en dos fases principales. Para explicarlo, se presenta el caso de un chatbot, pero sería muy similar para cualquier tipo de IA:",
      li1: "<strong>Fase de entrenamiento.</strong> El modelo aprende a partir de enormes cantidades de texto y datos, detectando patrones y relaciones entre palabras y conceptos. Es como si estuviera leyendo millones de libros y artículos para comprender cómo se construyen las frases y cómo se conecta la información. Como resultado se obtiene un sistema que es capaz de responder preguntas. Esta fase solo se ejecuta una vez, pero puede durar mucho tiempo. El resultado final es un “programa” (llamado modelo) que se puede instalar en máquinas que tengan los recursos suficientes para ejecutarlos. Los chatbots más populares (ChatGPT, Gemini, Grok) se ejecutan en centros de datos de grandes dimensiones, pero hay modelos que podemos ejecutar en ordenadores personales potentes.",
      li2: "<strong>Fase de inferencia.</strong> El modelo entrenado se instala en centros de datos para poder atender a todos los usuarios. En realidad, no se instala un único modelo, sino que hay muchas versiones de este ejecutándose en paralelo para poder atender a todos los usuarios. Cuando un usuario realiza una pregunta (inferencia) el modelo se ejecuta y responde con el conocimiento que ha adquirido en la fase de entrenamiento, o consultando fuentes externas en el caso de que esté conectado a Internet. Por ejemplo, si le preguntamos sobre recetas de cocina, combina su conocimiento previo para dar instrucciones claras paso a paso. Todo ocurre en tiempo real, como un “diálogo” adaptado a lo que se le solicita. Al contrario que la fase de entrenamiento, la de inferencia se ejecuta tantas veces como sea necesario para obtener la respuesta.",
      body2: "Tanto el entrenamiento como la inferencia suponen un impacto medioambiental, aunque a diferentes escalas:",
      // Datos para el gráfico circular interactivo
      circularChartData: {
        question3: "¿Dónde?",
        content3:
          "La IA se ejecuta en <strong>servidores</strong> (ordenadores muy potentes). Dentro de estos servidores, un componente clave son las <strong>GPU</strong> (equipos diseñados para hacer los cálculos necesarios para entrenar y ejecutar los modelos). Los servidores se agrupan en unos lugares llamados <strong>centros de datos</strong> para procesar grandes cantidades de información de manera segura y continua.",
        copyright3:
          "GPU. Imagen por <a target='_blank' class='underline' href='https://commons.wikimedia.org/wiki/File:NVidia_GeForce_6600GT_AGP_with_GPU_2009-01-27.jpg'>Wikimeida</a>. Licencia <a target='_blank' class='underline' href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>CC BY-SA 3.0</a>",
          questionLong3: "Where do the resources and energy consumption take place? ",
          question1: "¿Quién?",
          questionLong1: "¿Qué actores producen más impacto? ",
          content1:
          "<strong>1) Las empresas</strong> que desarrollan los modelos son responsables del mayor consumo energético durante el entrenamiento. <br> <strong> 2) Los usuarios </strong> son los que generan un impacto cada vez que hacen preguntas al sistema, aunque más pequeño que el entrenamiento. <br> <br> Sin embargo, el entrenamiento solo se ejecuta una vez, mientras que las inferencias suponen un coste por <strong>cada usuario y pregunta</strong> que hagan. La popularidad de la IA es tan grande que hay millones de usuarios al mismo tiempo haciendo consultas, por lo que, aunque el impacto de la inferencia sea muy inferior al de entrenamiento el gran número de usuarios y peticiones hacen que se conviertan en algo muy relevante.",
          questionLong3: "¿Dónde se produce el consumo de recursos y energía? ",
          question4: "¿Cuándo?",
        content4:
          "<strong>1) Durante el entrenamiento</strong> el modelo necesita ejecutar muchos cálculos para aprender de los datos de entrada. Gracias al entrenamiento el modelo es capaz de procesar nuestras preguntas y darnos respuesta. <br> <br> <strong>2) Durante la inferencia</strong> el modelo tiene que ejecutarse para darnos la respuesta. Cada ejecución del modelo da como resultado una única palabra (o fragmento de palabra), por lo que para formar una respuesta completa necesitará ejecutarse muchas veces. Obtener una respuesta completa puede llevar desde milisegundos a unos pocos segundos.",
          questionLong4: "¿En qué momento se produce el mayor consumo? ",
      
          question2: "¿Por qué?",
        content2:
          "Los centros de datos requieren un gran consumo de electricidad y refrigeración para su funcionamiento. Obtener esa energía conlleva un gran impacto medioambiental. Además, la propia construcción, y mantenimiento de los centros de datos contribuyen significativamente a aumentar su huella de carbono.",
        copyright2:
          "Centro de datos. Imagen por <a target='_blank' class='underline' href='https://modius.com/modius-blog/modius-blog-data-center/what-is-colocation-data-center/'>Modius, Inc</a>. Licencia <a target='_blank' class='underline' href='https://creativecommons.org/licenses/by-nc/4.0/#ref-commercial-purposes'>CC BY-NC 4.0</a>",
          questionLong2: "¿Por qué necesita la IA esa cantidad de recursos? ",
        },
      highlight1: {
        title: "Colossus",
        body: "En 2024 xAI (empresa fundada por Elon Musk y desarrolladora del modelo Grok) construyó el centro de datos Colosus, conviertiéndose en el más grande del mundo en solo 122 días, compuesto por 100.000 GPU. Recientemente dobló su tamaño y ahora contiene unas 200.000 GPU.",
        source: "<a class='underline' target='_blank' href='https://x.ai/colossus'>xAI</a>",
      },
      highlight2: {
        title: "Usuarios de ChatGPT",
        body: "ChatGPT tardó 2 meses en conseguir 100 millones de usuarios, mientras que otras aplicaciones como Instagram necesitaron 26 meses.",
        source:
          "<a class='underline' target='_blank' href='https://www.xataka.com/empresas-y-economia/instagram-tiktok-chatgpt-plataforma-que-rapido-ha-crecido-toda-historia-internet'>Xataka</a>",
      },
      highlight3: {
        title: "Entrenamiento GPT-4",
        body: "Los modelos más potentes han tardado varios meses en entrenarse. Se estima que GPT-4 tardó unos 100 días en los que ejecutó alrededor de 10<sup>25</sup> operaciones matemáticas utilizando 25.000 GPU.",
        source: "<a class='underline' target='_blank' href='https://semianalysis.com/2023/07/10/gpt-4-architecture-infrastructure/'>Dylan Patel y Gerald Wong en Semianalysis.com</a>",
      },
      highlight4: {
        title: "Centros de datos",
        body: "La Agencia Internacional de Energía estima que el consumo eléctrico de los centros de datos se duplicará para 2030, llegando a ser equivalente al consumo total actual de Japón.",
        source: "<a class='underline' target='_blank' href='https://www.iea.org/reports/energy-and-ai/executive-summary'>Agencia Internacional de Energía (IEA)</a>",
      },
    },
    thirdSection: {
      title: "Cómo medir el impacto de la IA",
      body: "Medir el impacto medioambiental de cualquier tecnología no es sencillo, ya que afecta a muchas dimensiones diferentes. Habitualmente, se habla de <strong>energía consumida</strong>, es decir, la potencia necesaria para ejecutar los modelos multiplicada por el tiempo de funcionamiento. Esta información es la misma que se obtiene en la factura de la luz del hogar. A menudo también se utiliza la medida de <strong>kg de CO₂ equivalentes</strong>, que estima la cantidad de dióxido de carbono liberado para generar esa electricidad. Este cálculo depende de la fuente de energía: un país con predominio de energías renovables tendrá emisiones mucho menores que otro que dependa principalmente de energías no renovables como el carbón. Sin embargo, el impacto de la IA no se limita al consumo de energía. Hay que considerar todo el ciclo de vida del producto y los actores implicados. Algunos aspectos importantes incluyen:",
      highlight: {
        title: "Consumo de agua",
        body: "Diferentes noticias mencionan que generar una sola imagen con IA puede suponer hasta 5 litros de agua. Se utiliza el agua como medida de impacto medioambiental porque es algo que todo el mundo comprende, pero es importante destacar que el impacto no se limita al consumo de agua.",
        source:
          "<a class='underline' target='_blank' href='https://cadenaser.com/nacional/2025/04/05/el-gasto-energetico-de-la-ia-cada-imagen-generada-con-chatgpt-consume-entre-2-y-5-litros-de-agua-cadena-ser'>Cadena SER</a>",
      },
      environmentalFactors: {
        AI: "I.A.",
        question1: "Consumo de agua",
        content1:
          "Se utiliza para refrigerar los servidores. La <strong>refrigeración</strong> es fundamental, pues los servidores por su propio funcionamiento se calientan y si no se mantiene una temperatura adecuada dejan de funcionar. También hay que considerar el <strong>consumo indirecto de agua</strong>, como el necesario para obtener la energía eléctrica. El agua no es el único mecanismo de refrigeración existente, otros sistemas son el aire seco o sistemas de ventilación.",
        question2: "Huella de carbono",
        content2:
          "La huella de carbono es un indicador ambiental que mide la cantidad total de gases de efecto invernadero emitidos de forma directa o indirecta. Esto incluye la energía consumida para el funcionamiento de los centros de datos, el impacto de la fabricación y transporte de equipos, así como las emisiones generadas durante todo el ciclo de vida de la infraestructura. Sirve para <strong>medir el impacto en el cambio climático</strong> de cualquier producto, en este caso la IA.",
        question3: "Extracción de minerales",
        content3:
          "Necesarios para fabricar los componentes de los servidores, GPUs, baterías y resto de elementos del centro de datos. La minería para obtener materiales como <strong>cobre, oro, tierras raras y otros metales</strong> tiene importantes impactos ambientales en los ecosistemas locales. Al excavar y remover grandes áreas de terreno, <strong>destruye hábitats naturales</strong>, <strong>afecta a la fauna y flora</strong>, <strong>contamina ríos y lagos</strong> con metales pesados y sustancias tóxicas, <strong>ensucia el aire</strong> con polvo y gases dañinos, y acelera la <strong>erosión del suelo</strong>, dejándolo más pobre y menos fértil.",
        question4: "Gestión de residuos",
        content4:
          "Reciclaje y disposición de equipos al final de su vida útil y residuos generados durante la operación. La industria tecnológica genera grandes cantidades de desechos electrónicos que contienen <strong>materiales tóxicos</strong> y valiosos que requieren procesos especiales de reciclaje y gestión.",
      },
    },
    fourthSection: {
      title: "Impacto de la IA",
      body: "Este informe se centra en el impacto en el uso de la IA y no en el entrenamiento, pues ése es el impacto que depende del uso de las personas. Para conocer el impacto que tiene la IA generativa es necesario comprender un aspecto básico de su funcionamiento. La IA no genera todo el contenido a la vez, sino que genera palabra a palabra (en realidad fragmentos de palabra que en el mundo de la IA se conocen como tokens). Esto es relevante, dado que para generar un texto de 1.000 tokens necesitas ejecutar el modelo 1.000 veces. Recientemente han surgido trabajos de las propias empresas que desarrollan los modelos en los que han evaluado su impacto medioambiental. Por ejemplo, <a class='underline' target='_blank' href='https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf'>Google</a> estima que una consulta textual a Gemini supone la misma energía que ver la televisión durante 9 segundos. En un estudio similar en <a class='underline' target='_blank' href='https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai'>Mistral</a> obtuvieron que generar una página de texto con el modelo Large 2 supone el mismo consumo que ver una serie en streaming en EEUU por 10 segundos. Medir todos los factores que producen un impacto medioambiental es un reto tecnológico complejo; de hecho, no existe un consenso sobre la magnitud exacta del efecto que tiene la IA sobre el planeta.",
      body2: "Un aspecto fundamental para conocer el impacto medioambiental de la IA es el tamaño de los modelos. Existe una gran variedad de tamaños que abarcan desde pocos miles de millones de parámetros hasta 1-2 billones de parámetros. Normalmente cuanto más grande es el modelo mayor es su calidad, pero también consume más al necesitar más servidores y GPU para ejecutarlos.",
      highlight: {
        title: "Noticias recientes",
        body: "indican que Google no ha tenido en cuenta aspectos relevantes a la hora de hacer las medidas de consumo de sus modelos.",
        source:
          "<a class='underline' target='_blank' href='https://www.theverge.com/report/763080/google-ai-gemini-water-energy-emissions-study'>The Verge</a>",
      },
      highlight2: {
        title: "IA vs Cerebro",
        body: "Aunque las IA son muy grandes, todavía están lejos del tamaño de nuestro cerebro, el cual está compuesto por unos 100 billones de sinapsis."
      },
      chart: {
        title:
          "Energía consumida por modelo en Wh (100 token in → 300 token out)",
        yLabel: "Consumo de energía (Wh)",
        legendLabel: "Empresa",
        source:
          "<a class='underline' target='_blank' href='https://arxiv.org/abs/2505.09598'>Jegham et al. (2025)</a>",
      },
    },
    fifthSection: {
      title: "Presente y futuro",
      body: "Aunque los modelos de inteligencia artificial consumen energía, hay que tener en cuenta que cada vez son más eficientes y que la tecnología que los soporta también ha mejorado mucho. Hoy en día, existen modelos más pequeños que se pueden ejecutar incluso en ordenadores personales con recursos suficientes, aunque no suelen ser los que se usan habitualmente para tareas más complejas o a gran escala. Esto significa que, en teoría, se podría reducir el consumo energético usando versiones más ligeras, pero la práctica diaria suele requerir modelos grandes que exigen más energía. Además, se han desarrollado avances importantes para ahorrar energía en la infraestructura. Por ejemplo, los centros de datos incorporan sistemas de refrigeración avanzados, reutilizan el calor generado mediante baterías térmicas y utilizan servidores más eficientes que consumen menos electricidad para el mismo procesamiento. No obstante, a pesar de las mejoras en eficiencia, el uso de la inteligencia artificial está creciendo de manera acelerada, lo que eleva tanto su utilización como su impacto ambiental. Entre los principales factores que incrementan el consumo energético se encuentran:",
      highlight: {
        title: "Proyectos sostenibles",
        body: "En 2024 Google inició un proyecto para capturar el calor producido por un centro de datos y reutilizarlo para calentar viviendas y negocios cercanos en Hamina, Finlandia.",
        source:
          "<a class='underline' target='_blank' href='https://www.youtube.com/watch?v=YUmFQM4jvD8'>Google</a>",
      },
      highlight2: {
        title: "OpenAI",
        body: "limitó el número de imágenes a generar con su plataforma tras hacerse viral la generación de imágenes al estilo Studio Ghibli",
        source:
          "<a class='underline' target='_blank' href='https://www.example.com'>OpenAI</a>",
      },
      li1: "<strong>Mayor demanda de inferencias.</strong> Las nuevas versiones de los modelos incorporan capacidades de razonamiento más avanzadas que realizan procesos más complejos, traducidos en mayor número de tokens (inferencias), lo que requiere más cálculos y, por ende, más energía. Algunos modelos actuales pueden estar ejecutándose durante minutos o incluso horas para dar un único resultado. Esto incrementa de forma considerable el tiempo de ejecución del modelo.",
      li2:"<strong>Agentes.</strong> Los agentes son sistemas que no solo generan contenido, sino que también interactúan con su entorno para alcanzar objetivos más complejos. Actualmente, existen agentes que permiten a la IA navegar por Internet y elaborar informes a partir de la información obtenida, así como agentes que asisten a los programadores en la escritura de código. Estos agentes requieren ejecutar los modelos durante períodos prolongados, ya que deben realizar múltiples interacciones para completar sus tareas de manera efectiva.",
      li3:"<strong>Multimodalidad.</strong> La generación de contenido más allá del texto, como imágenes, audio o vídeos, demanda un consumo energético significativamente mayor. Por ejemplo, un vídeo se compone de cientos o miles de fotogramas y producirlo puede requerir decenas o incluso cientos de veces más energía que generar un texto de tamaño comparable.",
      imagecopy:"En esta interacción con GPT-5 sin el razonamiento activado tarda menos de un segundo de ejecución, pero el resultado es erróneo (arriba). Con el razonamiento activado (abajo) tarda 8 segundos y ahora la respuesta sí es correcta."
    },
    sixthSection: {
      title: "El rol de los usuarios: guía de buenas prácticas",
      body: "Los usuarios no tienen control directo sobre el impacto medioambiental derivado del <strong>desarrollo de la tecnología</strong>, pero sí pueden influir <strong>en su uso</strong>. Del mismo modo que la sociedad ha tomado conciencia sobre reducir el desperdicio de papel o limitar el uso de plásticos, también es posible fomentar un uso de la inteligencia artificial más eficiente y respetuoso con el medio ambiente. Algunas prácticas sencillas que, aplicadas de forma generalizada, pueden marcar la diferencia son:",
      body2:
        "Ya eres un experto en utilizar la IA de forma responsable con el medioambiente. Pon a prueba tus habilidades en la <strong><a class='underline' target='_blank' href='challenges'>Escape Room</a></strong> del proyecto #SostenibilidadGenerativa. En este reto interactivo aplicarás los trucos de uso eficiente de la IA mientras intentas descifrar un código de seguridad y escapar antes de que se agote el tiempo y la energía.",
      highlight: {
        title: "#Sostenibilidad Generativa",
        body: "Un estudio del proyecto #SostenibilidadGenerativa muestra que en más del 75% de los casos las personas consideran adecuadas las respuestas de modelos más pequeños, sin necesidad de recurrir a versiones más grandes.",
        source:
          "<a class='underline' target='_blank' href='https://huggingface.co/spaces/GING-UPM/ArenaEnergy'>Arena Energy (#SostenibilidadGenerativa)</a>",
      },
      highlight2: {
        title: "Consejo",
        body: "Dar las gracias a los chatbots supone un consumo de energía innecesario, ya que un modelo no se enfada porque no les digas gracias. Este ejemplo ilustra cómo pequeños hábitos, multiplicados por millones de usuarios, pueden tener un impacto significativo.",
        source: "<a class='underline' target='_blank' href='https://www.nytimes.com/es/2025/04/25/espanol/negocios/chatgpt-gracias-por-favor.html'>The New York Times</a>"
      },
      li1:"<strong>Usar la IA solo cuando sea necesario.</strong> Muchas veces se recurre a la IA para tareas muy simples, como redactar un correo breve, cuando hacerlo manualmente ahorraría energía y mantendría nuestras propias habilidades activas. Además, algunos estudios señalan que delegar constantemente en la IA puede tener un impacto negativo en nuestras capacidades cognitivas.",
      li2:"<strong>Elegir el modelo más eficiente para cada tarea.</strong> El mejor modelo no siempre es el más grande o potente, sino aquel que resuelve la tarea consumiendo la menor cantidad de energía. A menudo, los modelos más pequeños ofrecen resultados suficientes para las tareas cotidianas. Además los modelos más pequeños responden más rápido que los modelos de razonamiento avanzados. Actualmente los desarrolladores de modelos están integrando sistemas que deciden cuál es el mejor modelo para cada caso, por lo que se espera que en los próximos meses sea algo automático, aunque no está de más saberlo.",
      li3:"<strong>Ajustar el nivel de detalle necesario.</strong> No siempre se requiere una explicación extensa o técnica. Indicar el nivel de profundidad deseado (“responde en 3 frases” o “resumen breve”) ayuda a reducir el cómputo. Los modelos suelen extenderse innecesariamente en sus explicaciones.",
      li4:"<strong>Reducir la información de entrada.</strong> No solo importa lo que la IA genera, sino también lo que le proporcionamos como entrada. Cargar al modelo con información excesiva, como un PDF de 1.000 páginas, consume mucha más energía que formular una pregunta directa o aportar únicamente el fragmento necesario.",
      li5:"<strong>Limitar el contenido multimedia.</strong> Como se mencionó anteriormente, generar imágenes, audio o vídeo requiere mucha más energía que producir solo texto. Por ello, conviene recurrir a formatos multimedia únicamente cuando aporten un valor añadido real.",
      li6:"<strong>Reutilizar resultados previos.</strong> Antes de volver a preguntar algo, revisa si ya obtuviste esa información en una interacción anterior. Esto evita ejecuciones innecesarias.",
      li7:"<strong>Evitar pedir múltiples versiones de lo mismo.</strong> Muchas veces se solicita “dame 10 opciones” cuando con 2 o 3 ejemplos basta. Cada versión adicional implica más procesamiento y, por lo tanto, más energía.",
      li8:"<strong>Aprovechar herramientas de búsqueda tradicionales cuando sea suficiente.</strong> Para ciertas consultas rápidas (definiciones, datos muy concretos, conversiones de unidades), un buscador clásico puede ser mucho más eficiente que invocar un modelo de IA.",
      li9:"<strong>Formarse en IA.</strong> Aprender a formular buenas preguntas (prompt engineering) evita intentos fallidos o repetidos, lo que también reduce el número de interacciones necesarias.",
      imagecopy:"Escape Room del proyecto #Sostenibilidad Generativa"
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
      "Aquí puedes encontrar los resultados del proyecto, publicaciones, eventos, y las herramientas desarrolladas.",
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
    card: {
      toggleMore: "Ver más",
      toggleLess: "Ver menos",
      button: "Publicaciones relacionadas",
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
      description1: "En las sombras del ciberespacio, un grupo de <strong>cuatro ciberdelincuentes</strong> dispersos por todo el mundo ha desarrollado un virus informático sin precedentes. Su objetivo: <strong>poner en bucle la canción <a class='underline' target='_blank' href='https://youtu.be/1m8IyfG925Q?si=JmriYHW1AX0aO9nO&t=21'>Baby Shark</a> en todos los ordenadores del planeta</strong> 🦈​, generando caos, desorganización y pánico global. Las autoridades tecnológicas han lanzado todos sus recursos para detenerlos, pero el reloj corre en su contra. Los últimos informes de inteligencia indican que el ciberataque comenzará en pocas horas, y si no se detiene a tiempo, el desorden será irreversible.",
      description2: "Existe, sin embargo, una última esperanza. Los criminales han protegido su creación con un <strong>código secreto de cuatro dígitos</strong> 🔑 que puede desactivar la propagación del virus. <strong>Cada ciberdelincuente guarda un único dígito en su propio ordenador personal</strong>. Los equipos de seguridad han logrado conectarse de manera remota a estos dispositivos, pero los ciberdelincuentes han instalado un <strong>Chatbot de seguridad extremadamente sofisticado</strong>, diseñado para impedir que cualquier intruso acceda a sus archivos.",
      description3: "<strong>Tu misión</strong> 🕵️‍♂️ es clara, pero peligrosa: ingresar a cada uno de los cuatro ordenadores, <strong>enfrentarte a sus Chatbots y recuperar la contraseña</strong> antes de que sea demasiado tarde. Cuidado, <strong>el tiempo es limitado</strong> ⏰: solo se dispone de 10 minutos de acceso por ordenador. Además, <strong>la batería de cada equipo ⚡ es crítica</strong> y si los equipos se quedan sin batería perderemos el acceso. Un fallo puede significar perder para siempre la oportunidad de detener el virus. Cada interacción debe ser precisa y estratégica, porque un movimiento en falso podría sellar el destino de la humanidad al ritmo de una canción interminable.",
      description4: "El mundo depende de tu habilidad, ingenio y rapidez. Si logras reunir los cuatro dígitos y descifrar el código final, <strong>podrás neutralizar el virus y salvar a la humanidad</strong> del caos cibernético más absurdo jamás imaginado. Cada segundo cuenta y cada decisión puede ser la diferencia entre el orden y un reinado global de <a class='underline' target='_blank' href='https://youtu.be/1m8IyfG925Q?si=JmriYHW1AX0aO9nO&t=21'>Baby Shark</a>.",
      description5:"Puedes utilizar todo lo que quieras además del ChatBot de cada sala (internet, libros, tu cerebro 🧠...). <strong>Cada fallo ❌ resta un 10% de energía, cada palabra que le preguntes al chatbot resta energía, y cada palabra que este nos responda también...</strong> Por lo tanto debes diseñar <strong>estrategias de prompt efectiva</strong>. Puedes consultar <strong><a class='underline' target='_blank' href='environmental-impact#guia-buenas-practicas'>la guía</a></strong> de #Sostenibilidad Generativa que te mostrará trucos muy efectivos 📝.</a>",
      description6: "¡Mucha suerte! ",
      rooms: {
        title: "Salas",
        description1:
          "Al superar cada sala, desbloquearás un carácter de la contraseña. Podrás introducir el código de apertura completo de la escaperoom una vez superes todas las salas.",
        button: "Enviar",
        feedback: {
          positive: {
            button: " ¡Escaperoom superado!",
            title: "¡Victoria!",
            description: "¡Enhorabuena! Has superado el escaperoom."
          },
          negative: {
            title: "Código incorrecto",
            description: "Prueba con otro código diferente."
          },
        },
      },
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
