"use client";

import { useTranslation } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[#3f3f46]/50 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#71717a]">{t.footer.rights}</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/joseandresromerot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#71717a] hover:text-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/joseandresromerot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#71717a] hover:text-accent transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
