// import { Article } from "@prisma/client"

export const articleSeedData = [
  {
    name: "TypeScript Date Tutorials",
    newsArticle: "https://pythonguides.com/typescript-date/",
    publishDate: new Date(2026, 0, 27),
    description: "This article is a comprehensive tutorial explaining how to create, format, and manipulate dates using TypeScript's native Date object. It covers practical topics like time zones, custom formatting, and performing common operations, and also suggests libraries like date-fns for complex tasks.",
    views: 37,
    ratings: {
      create: [
        { value: 2, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Programming" }, create: { categoryName: "Programming" } },
        { where: { categoryName: "TypeScript" },  create: { categoryName: "TypeScript" } },
      ],
    },
  },
  {
    name: "I Switched From Windows 11 to Linux Mint. Here Are 7 Things It Does Way Better",
    newsArticle: "https://www.pcmag.com/opinions/i-switched-from-windows-11-to-linux-mint-7-things-it-does-way-better?test_uuid=04IpBmWGZleS0I0J3epvMrC&test_variant=B",
    publishDate: new Date(2026, 0, 28),
    description: "This article details a user's experience switching from Windows 11 to Linux Mint, highlighting seven key areas where Mint excels. It also frankly addresses the trade-offs, including a lack of mainstream software like Adobe Creative Cloud and Microsoft Office.",
    views: 26,
    ratings: {
      create: [
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Operating System" }, create: { categoryName: "Operating System" } },
        { where: { categoryName: "Linux" },            create: { categoryName: "Linux" } },
        { where: { categoryName: "Windows" },          create: { categoryName: "Windows" } },
      ],
    },
  },
  {
    name: "Nationwide is deepening its use of cloud services with AWS",
    newsArticle: "https://www.cloudcomputing-news.net/news/nationwide-is-deepening-its-use-of-cloud-services-with-aws/",
    publishDate: new Date(2026, 0, 24),
    description: "Nationwide Building Society, a large UK financial institution, is expanding its existing cloud partnership with AWS. This move is part of a gradual, long-term strategy to consolidate more of its operational workloads on AWS to achieve greater flexibility, resilience, and improved customer and employee experiences.",
    views: 73,
    ratings: {
      create: [
        { value: 2, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Cloud Computing" }, create: { categoryName: "Cloud Computing" } },
        { where: { categoryName: "AWS" },             create: { categoryName: "AWS" } },
        { where: { categoryName: "Amazon" },          create: { categoryName: "Amazon" } },
      ],
    },
  },
  {
    name: "CS846: The Role of LLMs in Software Engineering (Week 4)",
    newsArticle: "https://cs.uwaterloo.ca/~m2nagapp/courses/CS846/1261/schedule.html",
    publishDate: new Date(2026, 0, 27),
    description: "This university course schedule for Week 4 focuses on 'Requirements Engineering using Generative AI.' It lists several academic papers that investigate how LLMs like ChatGPT can be used for requirements elicitation, specification generation, and prompt engineering, highlighting the growing academic interest in AI-assisted software development.",
    views: 42,
    ratings: {
      create: [
        { value: 1, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Computer Science Education" }, create: { categoryName: "Computer Science Education" } },
        { where: { categoryName: "LLM" },                       create: { categoryName: "LLM" } },
      ],
    },
  },
  {
    name: "QNX vs Zephyr vs Embedded Linux in 2026: How Safety-Critical Teams Actually Choose",
    newsArticle: "https://promwad.com/news/qnx-zephyr-embedded-linux-safety-critical-2026",
    publishDate: new Date(2026, 0, 26),
    description: "This in-depth industry analysis explores how engineering teams select operating systems for safety-critical projects in 2026. It moves beyond simple feature comparisons to discuss certification risk, long-term support, and the rise of hybrid architectures, comparing the strengths of QNX's predictability, Zephyr's openness, and Embedded Linux's flexibility.",
    views: 58,
    ratings: {
      create: [
        { value: 5, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 1, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Operating System" }, create: { categoryName: "Operating System" } },
        { where: { categoryName: "Linux" },            create: { categoryName: "Linux" } },
      ],
    },
  },
  {
    name: "AI Boom Drives Data Center Capex to $1.7 Trillion by 2030",
    newsArticle: "https://www.prnewswire.com/news-releases/ai-boom-drives-data-center-capex-to-1-7-trillion-by-2030--according-to-delloro-group-302681759.html",
    publishDate: new Date(2026, 1, 10),
    description: "A report from Dell'Oro Group projects that the artificial intelligence boom will fuel a massive surge in data center capital expenditures, reaching $1.7 trillion by 2030. The report highlights that the top four US hyperscalers are expected to represent about half of this global spending as they deploy larger and more complex AI clusters.",
    views: 95,
    ratings: {
      create: [
        { value: 5, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 2, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Cloud Computing" }, create: { categoryName: "Cloud Computing" } },
        { where: { categoryName: "AI" },              create: { categoryName: "AI" } },
      ],
    },
  },
  {
    name: "The Only Programming Languages Worth Learning in 2026",
    newsArticle: "https://content.techgig.com/career-advice/only-programming-languages-worth-learning-2026/articleshow/126939089.cms",
    publishDate: new Date(2026, 0, 20),
    description: "This career guide for tech students argues that depth in a key language beats breadth. It recommends TypeScript for modern apps (noting it now surpasses JavaScript and Python in GitHub contributors), Python for AI orchestration, Go for infrastructure, Rust for secure systems, and Java/C# for enterprise stability, emphasizing long-term relevance over trends.",
    views: 81,
    ratings: {
      create: [
        { value: 5, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Programming" }, create: { categoryName: "Programming" } },
        { where: { categoryName: "Python" },      create: { categoryName: "Python" } },
        { where: { categoryName: "TypeScript" },  create: { categoryName: "TypeScript" } },
      ],
    },
  },
  {
    name: "The 6 Linux distros I expect to rule 2026",
    newsArticle: "https://www.zdnet.com/article/linux-2026-best-distros/",
    publishDate: new Date(2026, 1, 8),
    description: "A ZDNET columnist predicts which Linux distributions will dominate in 2026. The list includes AerynOS for its atomic updates, AnduinOS for its Windows-like familiarity, and Pop!_OS for its new COSMIC desktop environment. The author notes that the end of Windows 10 support is driving many new users to explore Linux.",
    views: 112,
    ratings: {
      create: [
        { value: 5, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 2, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 1, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Operating System" }, create: { categoryName: "Operating System" } },
        { where: { categoryName: "Linux" },            create: { categoryName: "Linux" } },
      ],
    },
  },
  {
    name: "Oxide Closes $200M Series C to Scale On-Premises Cloud Computing",
    newsArticle: "https://www.hpcwire.com/off-the-wire/oxide-closes-200m-series-c-to-scale-on-premises-cloud-computing/",
    publishDate: new Date(2026, 1, 9),
    description: "Oxide Computer Company announces a $200 million Series C funding round to scale its on-premises cloud computing platform. The company builds integrated rack-scale systems that provide hyperscale cloud capabilities—like API-driven self-service—directly in a company's own data center, offering an alternative to public cloud providers for enhanced security and control.",
    views: 63,
    ratings: {
      create: [
        { value: 5, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 1, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Cloud Computing" }, create: { categoryName: "Cloud Computing" } },
      ],
    },
  },
  {
    name: "TypeScript levels up with type stripping",
    newsArticle: "https://www.infoworld.com/article/2338883/typescript-levels-up-with-type-stripping.html",
    publishDate: new Date(2026, 0, 22),
    description: "This InfoWorld article discusses a new advancement in the TypeScript ecosystem: type stripping. By treating types as whitespace, modern JavaScript runtimes can run TypeScript code directly without a separate compilation step, which eliminates build delays and keeps stack traces accurate, paving the way for a faster, 'no-build' development workflow.",
    views: 147,
    ratings: {
      create: [
        { value: 5, user: { connectOrCreate: { where: { userName: "User1" }, create: { userName: "User1" } } } },
        { value: 4, user: { connectOrCreate: { where: { userName: "User2" }, create: { userName: "User2" } } } },
        { value: 3, user: { connectOrCreate: { where: { userName: "User3" }, create: { userName: "User3" } } } },
        { value: 5, user: { connectOrCreate: { where: { userName: "User4" }, create: { userName: "User4" } } } },
      ],
    },
    categories: {
      connectOrCreate: [
        { where: { categoryName: "Programming" }, create: { categoryName: "Programming" } },
        { where: { categoryName: "TypeScript" },  create: { categoryName: "TypeScript" } },
      ],
    },
  },
];