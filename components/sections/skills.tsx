"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

type SkillBadgeProps = {
  name: string;
};

const SkillBadge = ({ name }: SkillBadgeProps) => (
  <motion.span
    variants={cardVariants}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-2 border border-border/60 text-[#d4d4d8] text-sm font-medium hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-colors duration-200 cursor-default"
  >
    {name}
  </motion.span>
);

type SkillGroup = {
  category: string;
  skills: string[];
};

export const Skills = () => {
  const { t } = useTranslation();

  const skillGroups: SkillGroup[] = [
    {
      category: t.skills.categories.frontend,
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      category: t.skills.categories.backend,
      skills: ["Java", "Spring Boot", "Node.js", "Fastify"],
    },
    {
      category: t.skills.categories.database,
      skills: ["PostgreSQL"],
    },
    {
      category: t.skills.categories.devops,
      skills: ["Docker", "CI/CD", "GitHub Actions"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-[#18181b]/40"
    >
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
              {t.skills.title}
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
