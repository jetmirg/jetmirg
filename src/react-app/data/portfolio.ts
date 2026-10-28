function publicPath(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export const profile = {
  name: "Jetmir Grubi",
  monogram: "JG",
  role: "Senior Software Engineer",
  label: "Senior Software Engineer",
  headlineLead: "Hi, I'm",
  headlineName: "Jetmir Grubi.",
  subhead: "Building software people can rely on.",
  location: "West New York, New Jersey",
  locationCaption: "West New York, New Jersey",
  focus: "FinTech · Healthcare · Enterprise",
  email: "mirigrubi8@gmail.com",
  phone: "+15167271440",
  phoneDisplay: "+1 516 727 1440",
  address: "430 52nd St, Apt 207, West New York, NJ 07093",
  portrait: publicPath("images/jetmir-portrait.jpg"),
  resume: publicPath("resume/jetmir-grubi-resume.pdf"),
  resumeName: "Jetmir_Grubi_Senior_Software_Engineer.pdf",
  footer:
    "Senior Software Engineer building payment, healthcare, and enterprise software.",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jetmir-grubi-741316447",
  },
] as const;

export const heroIntro =
  "I am a senior software engineer with 9+ years turning business workflows into software people can rely on. The work is .NET full stack: C#, ASP.NET Core, React, TypeScript, and SQL Server, delivered on Azure and AWS.";

export const heroFacts = [
  { label: "West New York, New Jersey" },
  { label: ".NET Full Stack" },
  { label: "React & TypeScript" },
] as const;

export const aboutParagraphs = [
  "I have spent nine years building software for payments, healthcare, and enterprise operations. The through-line is a full stack of C#, ASP.NET Core, React, TypeScript, and SQL Server, with Azure or AWS when the system needs to ship.",
  "Recent work is a payment management platform: transaction initiation, status tracking, approval, reconciliation, and the gateway integrations around them. Before that I built healthcare applications for patient management, scheduling, and clinical workflows.",
  "I care about the problem before the framework. Clean architecture, readable interfaces, and a release the team can repeat are how the software stays reliable after the first version.",
] as const;

export const capabilities = [
  {
    title: "Payment Systems",
    icon: "terminal",
    body: "I design payment platforms that cover initiation, status tracking, approval, and reconciliation. Gateway and banking integrations sit next to secure authentication and background processing, so a transaction can still be followed after it leaves the original request.",
  },
  {
    title: "Backend Architecture",
    icon: "layers",
    body: "I build ASP.NET Core services and REST APIs with C#, .NET 6/8, and Entity Framework Core, using clean architecture and SOLID. SQL Server schema, stored procedures, and transaction handling are part of the same service design, with failure paths an engineer can diagnose.",
  },
  {
    title: "Product Interfaces",
    icon: "layout",
    body: "I build React, TypeScript, and JavaScript interfaces for operational and clinical workflows. Components stay reusable, state stays explicit, and the UI stays responsive across the browsers the product has to support.",
  },
  {
    title: "Cloud Delivery",
    icon: "cloud",
    body: "I deploy on Azure and AWS with Docker, Azure DevOps, Git, and CI/CD. Authentication uses OAuth 2.0 and JWT with role-based access. Releases go out with analysts and stakeholders in an Agile team, with tests and reviews on the way.",
  },
] as const;

export const stackRows = [
  [
    "C#",
    ".NET",
    "ASP.NET Core",
    "EF Core",
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "SQL Server",
    "HTML5",
    "CSS3",
    "Git",
  ],
  [
    "REST APIs",
    "Express",
    "Azure",
    "AWS",
    "Docker",
    "Azure DevOps",
    "CI/CD",
    "OAuth 2.0",
    "JWT",
    "RBAC",
    "SOLID",
    "Scrum",
  ],
] as const;

export const skillGroups = [
  {
    title: "Backend Engineering",
    icon: "terminal",
    span: "xl:col-span-2",
    mark: true,
    body: "C# and ASP.NET Core services, REST APIs, and Entity Framework Core, with clean architecture and SOLID.",
    tags: [
      "C#",
      ".NET 6",
      ".NET 8",
      "ASP.NET Core",
      "EF Core",
      "REST APIs",
      "SOLID",
      "Clean architecture",
      "Express.js",
    ],
  },
  {
    title: "Frontend Engineering",
    icon: "layout",
    span: "xl:col-span-2",
    mark: false,
    body: "React, TypeScript, and JavaScript interfaces, with reusable components and responsive layout.",
    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "ES6+",
      "State management",
      "Responsive UI",
      "Cross-browser",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    span: "xl:col-span-2",
    mark: false,
    body: "Azure, AWS, Docker, and Azure DevOps, with Git and CI/CD through to deployment.",
    tags: ["Azure", "AWS", "Docker", "Azure DevOps", "Git", "CI/CD", "Agile", "Scrum"],
  },
  {
    title: "Data & Security",
    icon: "database",
    span: "xl:col-span-3",
    mark: false,
    body: "SQL Server for queries, stored procedures, and transactions, with OAuth 2.0, JWT, and role-based access.",
    tags: ["SQL Server", "Stored procedures", "Transactions", "OAuth 2.0", "JWT", "RBAC"],
  },
  {
    title: "Payments & Integration",
    icon: "spark",
    span: "xl:col-span-3",
    mark: false,
    body: "Payment gateways, banking APIs, and background processing for initiation, approval, and reconciliation.",
    tags: [
      "Payment gateways",
      "Banking APIs",
      "Reconciliation",
      "Background services",
      "Approvals",
      "Unit testing",
    ],
  },
] as const;

export const experience = [
  {
    company: "CTG",
    role: "Senior Software Engineer",
    dates: "Oct 2022 to Present",
    location: "Amherst, New York",
    summary:
      "Designed and developed an enterprise payment management system for processing, tracking, reconciliation, and financial operations.",
    tags: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure DevOps"],
    contributions: [
      "Designed and developed an enterprise payment management system for processing, transaction tracking, reconciliation, and financial operations.",
      "Built scalable backend services and REST APIs with C#, ASP.NET Core, .NET 6/8, and Entity Framework Core, following clean architecture and SOLID.",
      "Developed responsive React, TypeScript, and JavaScript interfaces for payment workflows.",
      "Implemented initiation, status tracking, approval, and automated reconciliation, including payment gateways and banking APIs.",
      "Designed SQL Server databases, complex queries, stored procedures, and transaction management.",
      "Added OAuth 2.0, JWT, and role-based access, plus background services for processing reliability.",
      "Used Azure DevOps, Git, Docker, and CI/CD, and worked with analysts and stakeholders in Agile delivery.",
    ],
  },
  {
    company: "SoluLab",
    role: "Senior Software Engineer",
    dates: "Oct 2020 to Sep 2022",
    location: "New York, New York",
    summary:
      "Developed and maintained healthcare web applications for patient management, scheduling, and clinical workflows.",
    tags: ["C#", "ASP.NET Core", "React", "AWS", "SQL Server"],
    contributions: [
      "Developed and maintained healthcare web applications with C#, ASP.NET Core, .NET Core, and SQL Server.",
      "Built responsive interfaces with React, TypeScript, JavaScript, HTML, and CSS.",
      "Designed REST APIs for healthcare data management and system integration.",
      "Developed backend services for patient management, appointment scheduling, and clinical workflows.",
      "Used AWS for hosting, deployment, and infrastructure, and improved SQL Server query performance.",
      "Implemented authentication, authorization, and role-based access with the delivery team.",
      "Worked in Agile delivery with code reviews, debugging, unit testing, and ongoing performance and security improvements.",
    ],
  },
  {
    company: "ELEKS",
    role: "Software Engineer",
    dates: "Oct 2017 to Sep 2020",
    location: "Jersey City, New Jersey",
    summary:
      "Built responsive web applications with React, JavaScript, and Node.js, including the APIs those interfaces called.",
    tags: ["React", "JavaScript", "Node.js", "Express", "Git"],
    contributions: [
      "Developed and maintained web applications with JavaScript, HTML5, and CSS3.",
      "Built responsive interfaces and reusable React components, including state and dynamic UI behavior.",
      "Integrated REST APIs and developed server-side functionality with Node.js and Express.",
      "Used asynchronous JavaScript, Promises, and async/await for data handling.",
      "Improved page load, frontend performance, and cross-browser compatibility.",
      "Used Git and code reviews with the rest of the engineering team.",
    ],
  },
] as const;

export const projects = [
  {
    eyebrow: "FinTech",
    title: "Payment management system",
    summary:
      "An enterprise platform for payment initiation, status, approval, and reconciliation.",
    flow: ["Initiate", "Track", "Approve", "Reconcile"],
    problem:
      "Payment operations were split across initiation, status, approval, and reconciliation, and needed one system the business could run.",
    approach:
      "ASP.NET Core services and React workflows sit on SQL Server, with gateway and banking integrations, role-based access, and background processing.",
    outcome:
      "Transactions can be initiated, tracked, approved, and reconciled in the same platform.",
    tags: ["C#", "ASP.NET Core", "React", "SQL Server", "Payment gateways"],
  },
  {
    eyebrow: "Healthcare",
    title: "Clinical workflow platform",
    summary:
      "Healthcare applications for patient management, appointment scheduling, and clinical workflows.",
    flow: ["Patient", "Schedule", "Clinical", "API"],
    problem:
      "Patient, scheduling, and clinical work needed a shared application and a reliable API surface.",
    approach:
      "ASP.NET Core services and React interfaces, hosted on AWS, with SQL Server, authentication, and role-based access.",
    outcome:
      "Care teams use one application for patient records, scheduling, and the clinical workflow around them.",
    tags: ["ASP.NET Core", "React", "AWS", "SQL Server", "RBAC"],
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Build software people rely on",
    body: "Transactions, authentication, background work, and clear failure handling are part of the design. A payment or clinical workflow should still be understandable when something fails.",
  },
  {
    number: "02",
    title: "Start from the problem",
    body: "The useful version matches the business workflow: initiation, approval, scheduling, or reconciliation. The stack follows that problem.",
  },
  {
    number: "03",
    title: "Keep the design clean",
    body: "Clean architecture, SOLID, reusable React components, and straightforward SQL keep the next change smaller than the first one.",
  },
  {
    number: "04",
    title: "Deliver with the team",
    body: "I work with analysts and stakeholders in Agile delivery, review code, and use CI/CD so a release is repeatable.",
  },
] as const;

export const education = {
  school: "South East European University",
  degree: "Bachelor's Degree, Computer Science",
  place: "",
  dates: "May 2013 to Aug 2017",
  achievements: [
    {
      title: "Degree completed",
      body: "Finished a Bachelor's Degree in Computer Science, the academic base for the engineering work that followed.",
    },
    {
      title: "Software foundations",
      body: "Built the grounding in software used later for full-stack products in payments, healthcare, and enterprise systems.",
    },
    {
      title: "Career start",
      body: "Moved into professional engineering at ELEKS in October 2017, after graduating that August.",
    },
  ],
} as const;

export const contactIntro =
  "I work with teams on .NET platforms, React products, and payment or healthcare systems. Email me and tell me what you are building.";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const footerColumns = [
  [
    { id: "home", label: "Home" },
    { id: "expertise", label: "Expertise" },
    { id: "projects", label: "Projects" },
    { id: "philosophy", label: "Philosophy" },
  ],
  [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "education", label: "Education" },
  ],
] as const;
