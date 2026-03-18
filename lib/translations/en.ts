export type Translations = {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    downloadCv: string;
    linkedin: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    stats: {
      years: string;
      industries: string;
      industriesDetail: string;
      remote: string;
    };
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      devops: string;
    };
  };
  projects: {
    title: string;
    liveDemo: string;
    github: string;
    items: {
      devassets: { name: string; description: string };
      taskflow: { name: string; description: string };
      codevault: { name: string; description: string };
    };
  };
  contact: {
    title: string;
    intro: string;
    subIntro: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  experience: {
    title: string;
    jobs: {
      role: string;
      company: string;
      period: string;
      bullets: string[];
      stack: string[];
    }[];
  };
  footer: {
    rights: string;
  };
};

export const en: Translations = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Jose Romero",
    title: "Senior Fullstack Developer",
    subtitle:
      "10 years building products that solve real problems — from fintech platforms to productivity tools. Based in Ecuador, working remotely worldwide.",
    downloadCv: "Download CV",
    linkedin: "LinkedIn",
  },
  about: {
    title: "About Me",
    paragraph1:
      "I'm a fullstack developer with 10 years of experience across corporate environments, fintech companies, and freelance projects. I enjoy working across the entire stack — but I have a particular passion for building clean, responsive, and intuitive user interfaces.",
    paragraph2:
      "I'm known for being responsible, organized, and proactive. I take ownership of what I build, communicate clearly, and care about shipping things that actually work well.",
    paragraph3:
      "When I'm not coding, I'm learning something new or thinking about how to make the last thing I built a little better.",
    stats: {
      years: "Years Experience",
      industries: "Industries",
      industriesDetail: "Corporate · Fintech · Freelance",
      remote: "Remote Ready",
    },
  },
  skills: {
    title: "Skills",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      devops: "DevOps",
    },
  },
  projects: {
    title: "Projects",
    liveDemo: "Live Demo",
    github: "GitHub",
    items: {
      devassets: {
        name: "DevAssets",
        description:
          "A digital marketplace for developers to buy premium assets — templates, UI kits, and icon packs. Features Google OAuth, a server-side cart, and Stripe Checkout.",
      },
      taskflow: {
        name: "Taskflow",
        description:
          "A task management app for teams. Leaders can assign tasks and track their progress in real time — reducing task tracking overhead by 35%.",
      },
      codevault: {
        name: "Codevault",
        description:
          "A code snippet manager for developers. Save, organize, and share code snippets with syntax highlighting, collections, and a public explorer.",
      },
    },
  },
  contact: {
    title: "Contact",
    intro:
      "I'm currently open to new opportunities — full-time or freelance, remote preferred.",
    subIntro: "Feel free to reach out if you think we'd be a good fit.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
    },
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        role: "Full-Stack Developer",
        company: "Galileo Financial Technologies",
        period: "Oct 2022 – Present",
        bullets: [
          "Reduced customer wait times at Banco Agrícola (El Salvador) by developing new features for the bank's web application — employees can now contract services and open savings accounts in just a few steps.",
          "Decreased banking transaction times for multiple Ecuadorian companies by building a virtual banking app for Banco Bolivariano, enabling efficient management of payroll, transfers, and credit card payments.",
          "Currently contributing to SoFi's platform as part of an internal transfer within Galileo Financial Technologies.",
        ],
        stack: ["React", "TypeScript", "Redux", "Java", "Spring Boot", "PostgreSQL", "MSSQL", "Docker"],
      },
      {
        role: "Middle Developer",
        company: "Jardines de Esperanza",
        period: "Nov 2018 – Oct 2022",
        bullets: [
          "Increased home sales by 20% by building a mobile app that lets salespeople calculate client payments and print receipts via Bluetooth thermal printer.",
          "Improved task tracking efficiency by 35% by creating a web app for team leaders to assign and monitor tasks.",
          "Reduced printer acquisition costs by 60% by adapting an existing mobile app to support generic printers instead of Zebra printers.",
        ],
        stack: ["React", "React Native", "TypeScript", "Java", "Spring Boot", "ASP.NET", "MSSQL"],
      },
      {
        role: "Junior Developer",
        company: "Carvajal Consultants",
        period: "Apr 2015 – Oct 2018",
        bullets: [
          "Increased shrimp larvae monitoring efficiency by 50% by building web and mobile apps that remind workers to take measurements and allow the CEO to generate reports.",
          "Reduced communication delays between patients and doctors by 30% with a mobile app for video messages and video calls.",
        ],
        stack: ["React", "React Native", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "iOS", "Android"],
      },
      {
        role: "Trainee Developer",
        company: "Escuela Superior Politécnica del Litoral",
        period: "May 2014 – Mar 2015",
        bullets: [
          "Streamlined the university document approval process by 30% by creating a web app for students to submit graduation forms for online approval by tutors.",
        ],
        stack: ["PHP", "Laravel", "MySQL"],
      },
    ],
  },
  footer: {
    rights: "© 2026 Jose Romero",
  },
};
