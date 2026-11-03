"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { getPortfolioContent } from "@/data/portfolioData";
import { useLanguage } from "./Providers";

export function Footer() {
  const { language } = useLanguage();
  const copyright = getPortfolioContent(language).footer.copyright;

  return (
    <footer className="site-footer">
      <div className="footer-shell footer-compact">
        <p className="copyright">{copyright}</p>
        <Link href="#top">
          {language === "vi" ? "Về đầu trang" : "Back to top"}
          <ArrowUp aria-hidden="true" size={16} strokeWidth={1.8} />
        </Link>
      </div>
    </footer>
  );
}
