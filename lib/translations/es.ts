import type { Translations } from "./en";

export const es: Translations = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Jose Romero",
    title: "Senior Fullstack Developer",
    subtitle:
      "10 años construyendo productos que resuelven problemas reales — desde plataformas fintech hasta herramientas de productividad. Basado en Ecuador, trabajo remoto para el mundo.",
    downloadCv: "Descargar CV",
    linkedin: "LinkedIn",
  },
  about: {
    title: "Sobre mí",
    paragraph1:
      "Soy un desarrollador fullstack con 10 años de experiencia en empresas corporativas, fintech y proyectos freelance. Me siento cómodo trabajando en todo el stack, pero tengo especial pasión por construir interfaces limpias, responsivas e intuitivas.",
    paragraph2:
      "Soy reconocido por ser responsable, organizado y proactivo. Me apropio de lo que construyo, me comunico con claridad y me importa entregar cosas que realmente funcionen bien.",
    paragraph3:
      "Cuando no estoy programando, estoy aprendiendo algo nuevo o pensando en cómo mejorar lo último que construí.",
    stats: {
      years: "Años de Experiencia",
      industries: "Industrias",
      industriesDetail: "Corporativa · Fintech · Freelance",
      remote: "Trabajo Remoto",
    },
  },
  skills: {
    title: "Habilidades",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de datos",
      devops: "DevOps",
    },
  },
  projects: {
    title: "Proyectos",
    liveDemo: "Ver Demo",
    github: "GitHub",
    items: {
      taskflow: {
        name: "Taskflow",
        description:
          "App de gestión de tareas para equipos. Los líderes asignan tareas y monitorean su progreso en tiempo real — reduciendo la carga de seguimiento en un 35%.",
      },
      codevault: {
        name: "Codevault",
        description:
          "Un gestor de snippets de código para developers. Guarda, organiza y comparte fragmentos de código con resaltado de sintaxis, colecciones y un explorador público.",
      },
    },
  },
  contact: {
    title: "Contacto",
    intro:
      "Actualmente estoy abierto a nuevas oportunidades — tiempo completo o freelance, preferiblemente remoto.",
    subIntro:
      "No dudes en escribirme si crees que podemos trabajar bien juntos.",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "Algo salió mal. Por favor intenta de nuevo.",
    },
  },
  experience: {
    title: "Experiencia",
    jobs: [
      {
        role: "Full-Stack Developer",
        company: "Galileo Financial Technologies",
        period: "Oct 2022 – Presente",
        bullets: [
          "Reduje los tiempos de espera de clientes en Banco Agrícola (El Salvador) desarrollando nuevas funcionalidades en la aplicación web del banco — los empleados pueden contratar servicios y abrir cuentas de ahorro en pocos pasos.",
          "Disminuí los tiempos de transacción bancaria para múltiples empresas ecuatorianas desarrollando una aplicación de banca virtual para Banco Bolivariano, que permite gestionar nóminas, transferencias y pagos de tarjetas de crédito.",
          "Actualmente contribuyendo a la plataforma de SoFi como parte de una transferencia interna dentro de Galileo Financial Technologies.",
        ],
        stack: ["React", "TypeScript", "Redux", "Java", "Spring Boot", "PostgreSQL", "MSSQL", "Docker"],
      },
      {
        role: "Middle Developer",
        company: "Jardines de Esperanza",
        period: "Nov 2018 – Oct 2022",
        bullets: [
          "Incrementé las ventas de viviendas en un 20% desarrollando una app móvil que permite a vendedores calcular pagos e imprimir recibos vía impresora térmica Bluetooth.",
          "Mejoré la eficiencia en el seguimiento de tareas en un 35% creando una app web para que líderes de equipo asignen y monitoreen tareas.",
          "Reduje los costos de adquisición de impresoras en un 60% adaptando una app móvil existente para soportar impresoras genéricas en lugar de impresoras Zebra.",
        ],
        stack: ["React", "React Native", "TypeScript", "Java", "Spring Boot", "ASP.NET", "MSSQL"],
      },
      {
        role: "Junior Developer",
        company: "Carvajal Consultants",
        period: "Abr 2015 – Oct 2018",
        bullets: [
          "Aumenté la eficiencia en el monitoreo de larvas de camarón en un 50% desarrollando apps web y móvil que recuerdan a trabajadores tomar mediciones y permiten al CEO generar reportes.",
          "Reduje los retrasos de comunicación entre pacientes y médicos en un 30% con una app móvil para mensajes de video y videollamadas.",
        ],
        stack: ["React", "React Native", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "iOS", "Android"],
      },
      {
        role: "Trainee Developer",
        company: "Escuela Superior Politécnica del Litoral",
        period: "May 2014 – Mar 2015",
        bullets: [
          "Optimicé el proceso de aprobación de documentos universitarios en un 30% creando una app web para que estudiantes envíen formularios de graduación y tutores los aprueben en línea.",
        ],
        stack: ["PHP", "Laravel", "MySQL"],
      },
    ],
  },
  footer: {
    rights: "© 2026 Jose Romero",
  },
};
