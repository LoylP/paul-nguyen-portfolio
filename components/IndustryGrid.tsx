"use client";

import { Building2, Factory, Landmark, ShoppingBag } from "lucide-react";
import { getPortfolioContent } from "@/data/portfolioData";
import { useLanguage } from "./Providers";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";

const icons = [Landmark, Building2, Factory, ShoppingBag];

export function IndustryGrid() {
  const { language } = useLanguage();
  const copy = getPortfolioContent(language).industry;

  return (
    <Reveal as="article" className="content-card skill-card industry-skill-card" delay={0.24}>
      <Spotlight>
        <span className="card-index">05</span>
        <h3>{copy.title}</h3>
        <ul className="industry-list">
          {copy.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <li key={item.title}>
                <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </Spotlight>
    </Reveal>
  );
}
