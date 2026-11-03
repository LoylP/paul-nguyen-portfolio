"use client";

import { Building2, ChevronDown, Factory, Landmark, ShoppingBag } from "lucide-react";
import { getPortfolioContent } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";

const icons = [Landmark, Building2, Factory, ShoppingBag];

export function IndustryGrid() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).industry;

  return (
    <section className="expertise-subblock" aria-labelledby="industry-block-title">
      <div className="expertise-subheading">
        <p className="eyebrow">{language === "vi" ? "Ngành nghề" : "Industry footprint"}</p>
        <h3 id="industry-block-title">{copy.title}</h3>
        <p>{copy.intro}</p>
      </div>
      <div className="industry-grid">
        {copy.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal
              as="article"
              className={`industry-card industry-card-${index + 1}`}
              delay={index * 0.06}
              key={item.title}
            >
              <Spotlight>
                <details className="industry-detail">
                  <summary>
                    <span className="industry-icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span>{item.title}</span>
                    <ChevronDown aria-hidden="true" className="industry-expand-icon" size={18} strokeWidth={1.8} />
                  </summary>
                  <p>{item.description}</p>
                </details>
              </Spotlight>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
