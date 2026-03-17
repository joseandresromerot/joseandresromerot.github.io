"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type FormState = "idle" | "sending" | "success" | "error";

export const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
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
              {t.contact.title}
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Intro text */}
            <div>
              <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed mb-4">
                {t.contact.intro}
              </p>
              <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed mb-8">
                {t.contact.subIntro}
              </p>

              {/* Contact links */}
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/joseandresromerot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border/60 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    linkedin.com/in/joseandresromerot
                  </span>
                </a>
                <a
                  href="https://github.com/joseandresromerot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border/60 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    github.com/joseandresromerot
                  </span>
                </a>
                <a
                  href="https://wa.me/593998166453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border/60 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    +593 99 816 6453
                  </span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#18181b] border border-[#3f3f46]/50 rounded-2xl p-6 sm:p-8">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-accent"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[#fafafa] font-semibold text-lg">
                    {t.contact.form.success}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="access_key" value="49c3c61b-7835-4eba-977e-b97b7522fb4c" />
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-[#a1a1aa]"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#27272a] border border-[#3f3f46] text-[#fafafa] text-sm placeholder:text-[#52525b] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                      placeholder={t.contact.form.name}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#a1a1aa]"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#27272a] border border-[#3f3f46] text-[#fafafa] text-sm placeholder:text-[#52525b] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-[#a1a1aa]"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#27272a] border border-[#3f3f46] text-[#fafafa] text-sm placeholder:text-[#52525b] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                      placeholder={t.contact.form.message + "..."}
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-400 text-sm">{t.contact.form.error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full py-3 px-6 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-accent/20"
                  >
                    {formState === "sending"
                      ? t.contact.form.sending
                      : t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
