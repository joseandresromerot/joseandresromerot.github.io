"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

type LightboxProps = { src: string; alt: string; onClose: () => void }

const Lightbox = ({ src, alt, onClose }: LightboxProps) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl border border-white/10"
      >
        <Image src={src} alt={alt} width={1280} height={800} className="w-full h-auto object-cover" />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type Project = {
  key: "taskflow" | "codevault";
  image: string;
  gradient: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    key: "taskflow",
    image: "/projects/taskflow.png",
    gradient: "from-violet-600/20 via-purple-500/10 to-indigo-600/20",
    stack: ["Next.js", "Node.js", "Fastify", "PostgreSQL", "Prisma"],
    liveUrl: "https://taskflow-web-iota.vercel.app",
    githubUrl: "https://github.com/joseandresromerot/taskflow",
  },
  {
    key: "codevault",
    image: "/projects/codevault.png",
    gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-600/20",
    stack: ["Next.js", "Node.js", "GraphQL", "PostgreSQL", "Prisma"],
    liveUrl: "https://codevault-neon.vercel.app",
    githubUrl: "https://github.com/joseandresromerot/codevault",
  },
];

type ProjectCardProps = {
  project: Project;
  name: string;
  description: string;
  liveLabel: string;
  githubLabel: string;
};

const ProjectCard = ({
  project,
  name,
  description,
  liveLabel,
  githubLabel,
}: ProjectCardProps) => {
  const [lightbox, setLightbox] = useState(false)

  return (
  <>
    {lightbox && <Lightbox src={project.image} alt={name} onClose={() => setLightbox(false)} />}
    <motion.article
      variants={cardItemVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-2xl bg-surface border border-border/50 overflow-hidden hover:border-accent/30 transition-colors duration-300 shadow-xl shadow-black/20"
    >
    {/* Project Image */}
    <div
      className="relative h-48 sm:h-56 overflow-hidden cursor-zoom-in"
      onClick={() => setLightbox(true)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <Image
        src={project.image}
        alt={name}
        fill
        className="object-cover object-top"
        onError={() => {}}
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      <h3 className="text-xl font-bold text-[#fafafa] mb-2">{name}</h3>
      <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-[#27272a] border border-[#3f3f46]/60 text-[#a1a1aa] text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-accent text-background text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          {liveLabel}
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-border text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          {githubLabel}
        </a>
      </div>
    </div>
    </motion.article>
  </>
  )
}

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-3">
              {t.projects.title}
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          {/* Cards */}
          <motion.div
            variants={cardsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.key}
                project={project}
                name={t.projects.items[project.key].name}
                description={t.projects.items[project.key].description}
                liveLabel={t.projects.liveDemo}
                githubLabel={t.projects.github}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
