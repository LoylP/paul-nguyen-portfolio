"use client";

import Link from "next/link";
import { ArrowLeft, House } from "lucide-react";
import { useLanguage } from "@/components/Providers";

export default function NotFound() {
  const { language } = useLanguage();
  const copy = language === "vi"
    ? {
        eyebrow: "Không tìm thấy trang",
        title: "Trang này không tồn tại",
        description: "Liên kết có thể đã cũ hoặc địa chỉ không chính xác.",
        home: "Về trang chủ",
      }
    : {
        eyebrow: "Page not found",
        title: "This page does not exist",
        description: "The link may be outdated or the address may be incorrect.",
        home: "Back to home",
      };

  return (
    <main className="not-found page-width">
      <p className="eyebrow">{copy.eyebrow} · 404</p>
      <h1>{copy.title}</h1>
      <p>{copy.description}</p>
      <Link className="button button-primary" href="/">
        <House aria-hidden="true" size={18} strokeWidth={1.8} />
        {copy.home}
        <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.8} />
      </Link>
    </main>
  );
}
