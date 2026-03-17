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

const statsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type StatCardProps = {
  value: string;
  label: string;
  sub?: string;
};

const StatCard = ({ value, label, sub }: StatCardProps) => (
  <motion.div
    variants={statItemVariants}
    className="flex flex-col items-center text-center p-6 rounded-xl bg-surface border border-border/50 hover:border-accent/30 transition-colors duration-300"
  >
    <span className="text-3xl sm:text-4xl font-bold text-accent mb-1">
      {value}
    </span>
    <span className="text-sm text-[#fafafa] font-medium">{label}</span>
    {sub && <span className="text-xs text-[#71717a] mt-1">{sub}</span>}
  </motion.div>
);

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 sm:py-28">
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
              {t.about.title}
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text */}
            <div className="space-y-5">
              <p className="text-[#a1a1aa] leading-relaxed text-base sm:text-lg">
                {t.about.paragraph1}
              </p>
              <p className="text-[#a1a1aa] leading-relaxed text-base sm:text-lg">
                {t.about.paragraph2}
              </p>
              <p className="text-[#a1a1aa] leading-relaxed text-base sm:text-lg">
                {t.about.paragraph3}
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
            >
              <StatCard value="10+" label={t.about.stats.years} />
              <StatCard
                value="3"
                label={t.about.stats.industries}
                sub={t.about.stats.industriesDetail}
              />
              <StatCard value="✓" label={t.about.stats.remote} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
