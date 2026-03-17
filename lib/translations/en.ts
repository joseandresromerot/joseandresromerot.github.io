export type Translations = {
  nav: {
    about: string;
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
  footer: {
    rights: string;
  };
};

export const en: Translations = {
  nav: {
    about: "About",
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
  footer: {
    rights: "© 2026 Jose Romero",
  },
};
