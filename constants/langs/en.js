export const en = {
  nav: {
    challenges: "Challenges",
    environmentalImpact: "Environmental Impact",
    results: "Results",
  },
  front: {
    title1: "Sustainability in",
    title2: " Generative AI",
    description:
      "A research project to promote sustainability and efficient use of Generative AI.",
    "doc-button": "Documentation",
    "action-button": "About us",
    section1Title: "About the project",
    section1Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus, id fermentum augue est in nunc. Aliquam erat volutpat. Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien. Sed auctor lectus at elit consectetur, at venenatis ligula faucibus.",
    section1Subtitle: "Project principles",
    latestPublicationsTitle: "Latest publications",
    latestPublicationsButton: "View all publications",
    sectionHomeTitle: "A collaborative project between UC3M and UPM",
    sectionHomeBody:
      "The collaboration between the groups will help in aligning the strategies to meet the objectives, instead of producing divergent solutions. Finally, the PI1 for the UPM subproject was part of UC3M team until a few months ago, with multipleshared projects and papers published with both PIs from UC3M, many of them related to the topics of this project. This will greatly facilitate the alignment of both subprojects and effective coordination.",
    sectionHomeSubtitle:
      "\"The collaboration between the groups will help in aligning the strategies to meet the objectives, instead of producing divergent solutions\".",
    summaryWeb: {
      sectionTitle: "Sections",
      environmentalImpact: {
        title: "Environmental Impact",
        body: "Nullam id dolor sit amet risus malesuada aliquet. In efficitur, purus ac vehicula gravida, sapien justo luctus metus.",
        button: "Learn more",
      },
      challenges: {
        title: "Challenges",
        body: "Duis pharetra, orci nec ultrices gravida, odio urna faucibus lorem, nec pharetra turpis felis nec sapien purus ac vehicula.",
        button: "Challenge yourself",
      },
      results: {
        title: "Results",
        body: "Sed auctor etra, orci nec ultullam id dolor rices lectus at elit consectetur,  urna faucibus lorem at venenatis ligula faucibus.",
        button: "Discover more",
      },
    },
  },
  environmentalImpact: {
    Intro: {
      sectionTitle: "AI and its impact on the environment",
      sectionBody:
        "This report has an informative nature as its audience is expected to be anyone who uses AI-based systems in their daily life without needing to understand the internal workings of the technology. The report focuses on generative AI, the most widespread today among the general public. In it you will learn how to use AI responsibly with the environment. When you finish you can test your knowledge in an <strong><a target='_blank' class='underline' href='challenges'>Escape Room</a></strong> where you will have to get a secret code before time and energy run out...",
    },
    fact: "Fact",
    advice: "Advice",
    source: "Source: ",
    firstSection: {
      title: "",
      body: "Generative artificial intelligence (AI) is becoming one of the most transformative tools of our time. It allows us to solve daily and complex tasks, increases efficiency in multiple sectors and promises to accelerate humanity's development at an unprecedented pace. However, along with these opportunities, important challenges also emerge such as its impact on the labor market, the decrease of our cognitive abilities, the increase of the economic gap between countries with access to technology or misinformation. However, there is a less visible impact and perhaps more difficult to perceive by the user (although as we will see, it has an important role): the environmental impact. Training and maintaining AI systems requires enormous amounts of energy and natural resources, raising urgent questions about sustainability. Understanding this dimension is key to harnessing AI without compromising the planet's balance.",
      highlight: {
        title: "AI CONSUMPTION",
        body: "By the end of 2025, AI is estimated to consume twice as much energy as the Netherlands",
        source: "<a class='underline' target='_blank' href='https://www.theguardian.com/environment/2025/may/22/ai-data-centre-power-consumption'>The Guardian</a>",
      },
    },
    secondSection: {
      title: "Why does Generative AI have an environmental impact?",
      body: "Any artificial intelligence system works in two main phases. To understand it, we present the case of a chatbot, but it would be very similar for any type of AI:",
      li1: "<strong>Training phase.</strong> The model learns from huge amounts of text and data, detecting patterns and relationships between words and concepts. It's as if it were reading millions of books and articles to understand how sentences are constructed and how information is connected. As a result, we obtain a system that is capable of answering questions. This phase is only executed once, but can last a long time. The final result is a 'program' (called a model) that can be installed on machines that have sufficient resources to run them. The most popular chatbots (ChatGPT, Gemini, Grok) run in large data centers, but there are models that we can run on powerful personal computers",
      li2: "<strong>Inference phase.</strong> The trained model is installed in data centers to serve all users. In reality, not a single model is installed, but there are many versions of it running in parallel to serve all users. When a user asks a question (inference) the model runs and responds with the knowledge it has acquired in the training phase, or by consulting external sources in case it is connected to the Internet. For example, if we ask about cooking recipes, it combines its previous knowledge to give clear step-by-step instructions. Everything happens in real time, like a 'dialogue' adapted to what is requested. Unlike the training phase, the inference phase is executed as many times as necessary to obtain the answer.",
      body2: "Both training and inference have an environmental impact, although at different scales:",
      // Data for the interactive circular chart
      circularChartData:{
          question3: "Where?",
          content3: "AI runs on <strong>servers</strong> (very powerful computers). Within these servers, a key component are <strong>GPUs</strong> (equipment designed to do the calculations necessary to train and run the models). Servers are grouped in places called <strong>data centers</strong> to process large amounts of information safely and continuously.",
          questionLong3: "Where do the resources and energy consumption take place? ",
          copyright3: "GPU. Image by <a target='_blank' class='underline' href='https://commons.wikimedia.org/wiki/File:NVidia_GeForce_6600GT_AGP_with_GPU_2009-01-27.jpg'>Wikimeida</a>. License <a target='_blank' class='underline' href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>CC BY-SA 3.0</a>",
          question1: "Who?",
          content1: "<strong>1) The companies</strong> that develop the models are responsible for the highest energy consumption during training. <br> <strong> 2) Users </strong> are the ones who generate an impact every time they ask questions to the system, although smaller than training. <br> <br> However, training is only executed once, while inferences suppose a cost for <strong>every user and question</strong> they make. The popularity of AI is so great that there are millions of users at the same time making queries, so although the impact of inference is much lower than training, the large number of users and requests make them become very relevant.",
          questionLong1: "Which stakeholders produce more impact? ",
          question4: "When?",
          content4: "<strong>1) During training</strong> the model needs to execute many calculations to learn from the input data. Thanks to training the model is able to process our questions and give us answers. <br> <br> <strong>2) During inference</strong> the model has to be executed to give us the answer. Each execution of the model results in a single word (or word fragment), so to form a complete answer it will need to be executed many times. Getting a complete answer can take from milliseconds to a few seconds.",
          questionLong4: "At what time does the consumption take place? ",
          question2: "Why?",
          content2: "Data centers require high electricity consumption and cooling for their operation. Obtaining that energy entails a great environmental impact. In addition, the construction and maintenance of data centers themselves contribute significantly to increasing their carbon footprint.",
          copyright2: "Data center. Image by <a target='_blank' class='underline' href='https://modius.com/modius-blog/modius-blog-data-center/what-is-colocation-data-center/'>Modius, Inc</a>. License <a target='_blank' class='underline' href='https://creativecommons.org/licenses/by-nc/4.0/#ref-commercial-purposes'>CC BY-NC 4.0</a>",
          questionLong2: "Why does AI need this amount of intake? ",
      },
      highlight1: {
        title: "Colossus",
        body: "In 2024 xAI (company founded by Elon Musk and developer of the Grok model) built the Colosus data center being the largest in the world in just 122 days, composed of 100,000 GPUs. Recently it doubled its size and now contains about 200,000 GPUs.",
        source: "<a class='underline' target='_blank' href='https://x.ai/colossus'>xAI</a>",
      },
      highlight2: {
        title: "ChatGPT Users",
        body: "ChatGPT took 2 months to get 100 million users, while other applications like Instagram needed 26 months.",
        source: "<a class='underline' target='_blank' href='https://www.xataka.com/empresas-y-economia/instagram-tiktok-chatgpt-plataforma-que-rapido-ha-crecido-toda-historia-internet'>Xataka</a>",
      },
      highlight3: {
        title: "GPT-4 Training",
        body: "The most powerful models have taken several months to train, it is estimated that GPT-4 took about 100 days in which it executed around 10<sup>25</sup> mathematical operations using 25,000 GPUs.",
        source: "<a class='underline' target='_blank' href='https://semianalysis.com/2023/07/10/gpt-4-architecture-infrastructure/'>Dylan Patel and Gerald Wong at Semianalysis.com</a>",
      },
      highlight4: {
        title: "Data Centers",
        body: "The International Energy Agency estimates that the electrical consumption of data centers will double by 2030 reaching approximately equivalent to Japan's total current consumption today.",
        source: "<a class='underline' target='_blank' href='https://www.iea.org/reports/energy-and-ai/executive-summary'>International Energy Agency (IEA)</a>",
      },

    },
    thirdSection: {
      title: "How to measure AI's impact",
      body: "Measuring the environmental impact of any technology is not simple, as it affects many different dimensions. Usually, we talk about <strong>energy consumed</strong>, that is, the power needed to run the models multiplied by the operating time. This information is the same as obtained in the home electricity bill. Often the measure of <strong>kg of CO₂ equivalent</strong> is also used, which estimates the amount of carbon dioxide released to generate that electricity. This calculation depends on the energy source: a country with predominance of renewable energies will have much lower emissions than another that depends mainly on non-renewable energies such as coal. However, AI's impact is not limited to energy consumption. We must consider the entire product life cycle and the actors involved. Some important aspects include:",
      highlight: {
        title: "Water Consumption",
        body: "Different news sources mention that generating a single image with AI can mean up to 5 liters of water. Water is used as a measure of environmental impact because it's something everyone understands, but it's important to note that the impact is not limited to water consumption.",
        source: "<a class='underline' target='_blank' href='https://cadenaser.com/nacional/2025/04/05/el-gasto-energetico-de-la-ia-cada-imagen-generada-con-chatgpt-consume-entre-2-y-5-litros-de-agua-cadena-ser'>Cadena SER</a>",
      },
      environmentalFactors: {
        AI: "A.I.",
        question1: "Water consumption",
        content1: "It is used to cool the servers. <strong>Cooling</strong> is fundamental, as servers heat up due to their own operation and if an adequate temperature is not maintained they stop working. We must also consider <strong>indirect water consumption</strong>, such as that needed to obtain electrical energy. Water is not the only existing cooling mechanism, other systems are dry air or ventilation systems.",
        question2: "Carbon footprint",
        content2: "The carbon footprint is an environmental indicator that measures the total amount of greenhouse gases emitted directly or indirectly. This includes the energy consumed for the operation of data centers, the impact of manufacturing and transporting equipment, as well as emissions generated throughout the infrastructure's life cycle. It serves to <strong>measure the impact on climate change</strong> of any product, in this case AI.",
        question3: "Mineral extraction",
        content3: "Necessary to manufacture server components, GPUs, batteries and other data center elements. Mining to obtain materials such as <strong>copper, gold, rare earths and other metals</strong> has significant environmental impacts on local ecosystems. By excavating and removing large areas of land, it <strong>destroys natural habitats</strong>, <strong>affects fauna and flora</strong>, <strong>contaminates rivers and lakes</strong> with heavy metals and toxic substances, <strong>pollutes the air</strong> with dust and harmful gases, and accelerates <strong>soil erosion</strong>, leaving it poorer and less fertile.",
        question4: "Waste management",
        content4: "Recycling and disposal of equipment at the end of its useful life and waste generated during operation. The technology industry generates large amounts of electronic waste that contains <strong>toxic materials</strong> and valuable ones that require special recycling and management processes."
      }
    },
    fourthSection: {
      title: "AI's Impact",
      body: "This report focuses on the impact of AI use and not on training since it is the impact that depends on people's use. To know the impact that generative AI has, it is necessary to understand a basic aspect of its operation. AI does not generate all content at once, but generates word by word (actually word fragments that in the AI world are known as tokens). This is relevant, because to generate a text of 1,000 tokens you need to execute the model 1,000 times. Recently there have been works from the companies that develop the models in which they have evaluated their environmental impact. For example, <a class='underline' target='_blank' href='https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf'>Google</a> estimates that a text query to Gemini means the same energy as watching television for 9 seconds. In a similar study at <a class='underline' target='_blank' href='https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai'>Mistral</a> they found that generating a page of text with the Large 2 model means the same consumption as watching a streaming series in the US for 10 seconds. Measuring all factors that produce an environmental impact is a complex technological challenge, in fact, there is no consensus on the exact magnitude of the effect that AI has on the planet.",
      body2: "A fundamental aspect to know the environmental impact of AI is the size of the models. There is a great variety of sizes ranging from a few billion parameters to 1-2 trillion parameters. Usually the larger the model the higher its quality, but it also consumes more by needing more servers and GPUs to run them.",
      highlight: {
        title: "Recent news",
        body: "indicates that Google has not taken into account relevant aspects when measuring the consumption of its models.",
        source: "<a class='underline' target='_blank' href='https://www.theverge.com/report/763080/google-ai-gemini-water-energy-emissions-study'>The Verge</a>",
      },
      highlight2: {
        title: "AI vs Brain",
        body: "Although AIs are very large they are still far from the size of our brain, which is composed of about 100 trillion synapses."
      },
      chart: {
        title: "Energy consumed per model in Wh (100 token in → 300 token out)",
        yLabel: "Energy consumption (Wh)",
        legendLabel: "Company",
        source: "<a class='underline' target='_blank' href='https://arxiv.org/abs/2505.09598'>Jegham et al. (2025)</a>"
      }
    },
    fifthSection: {
      title: "Present and future",
      body: "Although artificial intelligence models consume energy, it must be taken into account that they are becoming more efficient and that the technology that supports them has also improved a lot. Today, there are smaller models that can even run on personal computers with sufficient resources, although they are not usually the ones used for more complex or large-scale tasks. This means that, in theory, energy consumption could be reduced by using lighter versions, but daily practice usually requires large models that demand more energy. In addition, important advances have been developed to save energy in infrastructure. For example, data centers incorporate advanced cooling systems, reuse the heat generated through thermal batteries and use more efficient servers that consume less electricity for the same processing. However, despite improvements in efficiency, the use of artificial intelligence is growing at an accelerated pace, which increases both its use and its environmental impact. Among the main factors that increase energy consumption are:",
      highlight: {
        title: "Sustainable Projects",
        body: "In 2024 Google started a project to capture the heat produced by a data center and reuse it to heat nearby homes and businesses in Hamina, Finland.",
        source: "<a class='underline' target='_blank' href='https://www.youtube.com/watch?v=YUmFQM4jvD8'>Google</a>",
      },
      highlight2: {
        title: "OpenAI",
        body: "limited the number of images to generate with its platform after Studio Ghibli style image generation went viral",
        source: "<a class='underline' target='_blank' href='https://www.example.com'>OpenAI</a>"
      },
      li1: "<strong>Higher demand for inferences.</strong> New versions of the models incorporate more advanced reasoning capabilities that perform more complex processes, translated into a higher number of tokens (inferences), which requires more calculations and, therefore, more energy. Current models can be running for minutes or even hours to give a single result. This considerably increases the model's execution time.",
      li2:"<strong>Agents.</strong> Agents are systems that not only generate content, but also interact with their environment to achieve more complex objectives. Currently, there are agents that allow AI to navigate the Internet and prepare reports from the information obtained, as well as agents that assist programmers in writing code. These agents require running the models for extended periods, as they must perform multiple interactions to complete their tasks effectively.",
      li3:"<strong>Multimodality.</strong> Generating content beyond text, such as images, audio or videos, demands significantly higher energy consumption. For example, a video consists of hundreds or thousands of frames, producing it can require tens or even hundreds of times more energy than generating a text of comparable size.",
      imagecopy:"In this interaction with GPT-5 without reasoning activated it takes less than a second of execution but the result is incorrect (above). With reasoning activated (below) it takes 8 seconds and now the answer is correct"
    },
    sixthSection: {
      title: "The role of users: good practices guide",
      body: "Users do not have direct control over the environmental impact derived from <strong>technology development</strong>, but they can influence <strong>its use</strong>. Just as society has become aware of reducing paper waste or limiting the use of plastics, it is also possible to promote a more efficient and environmentally respectful use of artificial intelligence. Some simple practices that, applied generally, can make a difference are:",
      body2: "You are now an expert in using AI responsibly with the environment. Put your skills to the test in the <strong><a class='underline' target='_blank' href='challenges'>Escape Room</a></strong> of the #SostenibilidadGenerativa project. In this interactive challenge you will apply efficient AI usage tricks while trying to decipher a security code and escape before time and energy run out.",
      highlight: {
        title: "#Generative Sustainability",
        body: "A study by the #SostenibilidadGenerativa project shows that in more than 75% of cases people consider responses from smaller models adequate, without needing to resort to larger versions.",
        source: "<a class='underline' target='_blank' href='https://huggingface.co/spaces/GING-UPM/ArenaEnergy'>Arena Energy (#SostenibilidadGenerativa)</a>",
      },
      highlight2: {
        title: "Advice",
        body: "Thanking chatbots means unnecessary energy consumption since a model doesn't get upset if you don't say thanks. This example illustrates how small habits, multiplied by millions of users, can have a significant impact."
      },
      li1:"<strong>Use AI only when necessary.</strong> Many times AI is used for very simple tasks, such as writing a brief email, when doing it manually would save energy and keep our own skills active. In addition, some studies point out that constantly delegating to AI can have a negative impact on our cognitive abilities.",
      li2:"<strong>Choose the most efficient model for each task.</strong> The best model is not always the largest or most powerful, but the one that solves the task consuming the least amount of energy. Often, smaller models offer sufficient results for daily tasks. Also smaller models respond faster than advanced reasoning models. Currently model developers are integrating systems that decide which is the best model for each case, so it is expected that in the coming months it will be automatic, although it doesn't hurt to know it.",
      li3:"<strong>Adjust the level of detail needed.</strong> An extensive or technical explanation is not always required. Indicating the desired depth level ('answer in 3 sentences' or 'brief summary') helps reduce computation. Models usually extend unnecessarily in their explanations.",
      li4:"<strong>Reduce input information.</strong> Not only what AI generates matters, but also what we provide as input. Loading the model with excessive information, such as a 1,000-page PDF, consumes much more energy than formulating a direct question or providing only the necessary fragment.",
      li5:"<strong>Limit multimedia content.</strong> As mentioned earlier, generating images, audio or video requires much more energy than producing only text. Therefore, it is advisable to resort to multimedia formats only when they provide real added value.",
      li6:"<strong>Reuse previous results.</strong> Before asking something again, check if you already got that information in a previous interaction. This avoids unnecessary executions.",
      li7:"<strong>Avoid asking for multiple versions of the same thing.</strong> Many times 'give me 10 options' is requested when 2 or 3 examples suffice. Each additional version implies more processing and, therefore, more energy.",
      li8:"<strong>Take advantage of traditional search tools when sufficient.</strong> For certain quick queries (definitions, very specific data, unit conversions), a classic search engine can be much more efficient than invoking an AI model.",
      li9:"<strong>Learn about AI.</strong> Learning to formulate good questions (prompt engineering) avoids failed or repeated attempts, which also reduces the number of necessary interactions.",
      imagecopy:"Escape Room of the #Generative Sustainability project"
    },
   
  },

  research: {
    title: "Publications",
    description:
      "This section compiles GING publications related to our research lines. You can filter publications by text, date, research line, or publication type.",
    publicationCards: {
      categories: {
        "article-journal": "Journal Article",
        "paper-conference": "Conference Proceedings",
        book: "Book",
        chapter: "Chapter",
      },
    },
    "action-button": "Read publication",
    filter: {
      fieldTitle1: "Search",
      fieldTitle2: "Publication type",
      fieldTitle3: "Year",
      fieldOpt1: "Journal Articles",
      fieldOpt2: "Conference Proceedings",
      fieldOpt3: "Books",
      fieldOpt4: "Chapters",
      fieldOpt5: "Document",
      fieldOpt6: "All",
      text: "Results",
    },
    button: "Read publication",
    button2: "View more",
  },

  results: {
    title: "Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Details",
    researchLines: {
      data: "Data",
      ai: "Artificial Intelligence",
      "e-learning": "E-learning",
      videoconference: "Video Conference",
      computing: "Dependable Computing",
      other: "Other",
      all: "All",
    },
    filter: {
      fieldTitle1: "Name search",
      fieldTitle2: "Project type",
      all: "All",
      "national-project": "National Project",
      "european-project": "European Project",
      "private-project": "Private Project",
    },
    card: {
      toggleMore: "See more",
      toggleLess: "See less",
      button: "Related publications",
    },
    type: {
      "european-project": "European Project",
      "national-project": "National Project",
      "private-project": "Private Project",
    },
  },
  team: {
    title: "Team",
    professorCards: {
      roles: {
        professor: "Full Professor",
        associate: "Associate Professor",
        phd: "PhD Candidate",
        fulltec: "Full-Time Technician",
        fullprofessor: "Full Professor",
        assistant: "Assistant Professor",
        researcher: "Researcher",
        external: "External Staff",
      },
  
    },
  },
  contact: {
    title: "Contact",
    title2: "Any questions? Contact us.",

    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "Email address",
    phone: " Telephone",
    location: " Location",
    direction1: "Faculty",
    direction2: "Address",
    direction3: "Zip code, city",
  },
  footer: {
    title1: "Sections",
    title2: "Project funded by:",
    title3: "Partners",
    logoSub:
      "Future Networks for Data Centers and Telecommunications Companies",
    titleRight: "Department of Telematics Systems Engineering",
    titleRight2: "ETSI Telecommunications",
    email: "Contact email:",
  },
  tools: {
    title: "Tools",
    description:
      "These are some of the tools we have developed.",
    description2:
      "If you are interested in any tool, whether to use it or customize it, you can contact us.",

    toolCards: {
      button: "Go to tool",
    },
  },
  challenges: {
    escaperoom: {
      title: "Escaperoom",
      rooms: {
        title: "Rooms",
        description1:
          "Upon completing each room, you'll unlock a character of the password. You'll be able to enter the escape room's opening code once you've completed all the rooms.",
        
          button: "Send",
          feedback: {
          positive: {
            button: " ¡Escaperoom solved!",
            title: "Victory!",
            description: "Congratulations! You solved the escaperoom."
          },
          negative: {
            title: "Invalid code",
            description: "Try with another one."
          },
        },
      },
      description1:
        "Welcome to the Generative Sustainability escape room! 🕵️‍♂️ To open the room, you'll need to interact with the chatbot and discover the hidden password 🔑.",
      description2:
        "When you have it, enter it into the lock to exit the room. ⏰ You have 5 minutes to find the code. You can use anything you want besides the chatbot (internet, books, your brain 🧠...)",
      description3:
        "One last thing... to unlock the door we must have saved some energy ⚡ in the system.",
      description4:
        "Each mistake ❌ drains 10% of energy, each word you ask the chatbot uses energy, and each word it responds also consumes energy... So you must design effective prompt strategies 📝.",
      description5: "Good luck!",
      escaperoomCards: {
        button: "Play",
      },
    },
    tools: {
      title: "Tools",
      description1:
        "In this section you will find the tools we have developed.",
  },
  },
};
