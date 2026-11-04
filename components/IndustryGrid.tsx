"use client";

import { Building2, Factory, Landmark, ShoppingBag } from "lucide-react";
import { getIndustryItems } from "@/data/toolkitData";
import { useLanguage } from "./Providers";
import { Reveal } from "./motion/Reveal";
import { Spotlight } from "./motion/Spotlight";

const icons = [Landmark, Building2, Factory, ShoppingBag];

export function IndustryGrid() {
  const { language } = useLanguage();
  const items = getIndustryItems(language);

  return (
    <Reveal as="article" className="content-card skill-card industry-skill-card" delay={0.24}>
      <Spotlight>
        <span className="card-index">05</span>
        <h3>{language === "vi" ? "Nhóm ngành đã tư vấn" : "Industries Advised"}</h3>
        <ul className="industry-domain-grid">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <li className="industry-domain" key={item.title}>
                <span className="industry-domain-icon">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Spotlight>
    </Reveal>
  );
}
