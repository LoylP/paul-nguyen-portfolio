"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { CV_PATH } from "@/config/site";
import { getPortfolioContent } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { SectionNav } from "./SectionNav";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const { language, setLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const copy = getPortfolioContent(language);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--header-h");
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Paul Nguyen, home">
          <span className="brand-name">Paul Nguyen</span>
        </Link>
        <SectionNav />
        <div className="nav-controls">
          <div className="language-switch" role="group" aria-label={copy.ui.language}>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("vi")}
              aria-pressed={language === "vi"}
            >
              VI
            </button>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={copy.ui.theme}
            title={copy.ui.theme}
          >
            <span className="theme-icon-in-dark" aria-hidden="true">
              <Sun size={18} strokeWidth={1.8} />
            </span>
            <span className="theme-icon-in-light" aria-hidden="true">
              <Moon size={18} strokeWidth={1.8} />
            </span>
            <span className="theme-toggle-label">{copy.ui.theme}</span>
          </button>
          <Link className="nav-cv" download href={CV_PATH}>
            {language === "vi" ? "Tải CV" : "Download CV"}
          </Link>
        </div>
      </div>
    </header>
  );
}
