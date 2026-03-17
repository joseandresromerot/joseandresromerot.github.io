"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => {
  const { t } = useTranslation();
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-accent text-base sm:text-lg font-medium mb-3 tracking-wide"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4"
            >
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #22d3ee 40%, #0ea5e9 70%, #ffffff 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradient-shift 6s ease infinite",
                }}
              >
                {t.hero.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-6"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition-colors duration-200 shadow-lg shadow-accent/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t.hero.downloadCv}
              </a>
              <a
                href="https://www.linkedin.com/in/joseandresromerot/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                {t.hero.linkedin}
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/10 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10">
                {photoError ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-2 to-surface">
                    <span className="text-5xl lg:text-7xl font-bold text-accent/40 select-none">
                      JR
                    </span>
                  </div>
                ) : (
                  <Image
                    src="/photo.jpg"
                    alt="Jose Romero"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setPhotoError(true)}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#52525b] cursor-pointer"
            onClick={() => {
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
