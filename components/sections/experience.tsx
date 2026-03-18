"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const companyLogos: Record<string, { src: string; bg: string }> = {
  "Galileo Financial Technologies": { src: "/logos/galileo.jpg", bg: "bg-white" },
  "Jardines de Esperanza": { src: "/logos/jardines.png", bg: "bg-white" },
  "Carvajal Consultants": { src: "/logos/carvajal.png", bg: "bg-white" },
  "Escuela Superior Politécnica del Litoral": { src: "/logos/espol.jpg", bg: "bg-[#002B7F]" },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#18181b]/40">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-3">
            {t.experience.title}
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/20" />

          <div className="space-y-12">
            {t.experience.jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative pl-8"
              >
                {/* Dot on the line */}
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-[4.5px] shadow-[0_0_8px_rgba(34,211,238,0.6)]" />

                {/* Header: role, company, period */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    {companyLogos[job.company] && (
                      <div className={`shrink-0 w-10 h-10 rounded-lg overflow-hidden border border-[#3f3f46]/60 flex items-center justify-center ${companyLogos[job.company].bg}`}>
                        <Image
                          src={companyLogos[job.company].src}
                          alt={job.company}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-[#fafafa]">{job.role}</h3>
                      <p className="text-accent font-medium text-sm">{job.company}</p>
                    </div>
                  </div>
                  <span className="text-[#a1a1aa] text-sm shrink-0 sm:pt-1">{job.period}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-baseline gap-2 text-[#a1a1aa] text-sm leading-relaxed">
                      <span className="text-accent shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#27272a] border border-[#3f3f46]/60 text-[#a1a1aa] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
