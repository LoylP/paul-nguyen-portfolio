"use client";

import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Language, PortfolioImage } from "@/data/portfolioData";

type ImageLightboxProps = {
  image: PortfolioImage;
  language: Language;
  variant: "cover" | "detail";
};

export function ImageLightbox({ image, language, variant }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const zoomLabel = language === "vi" ? "Phóng to sơ đồ kiến trúc" : "Zoom architecture diagram";

  const setTriggerElement = useCallback((element: HTMLButtonElement | null) => {
    triggerRef.current = element;
    if (element) {
      setPortalTarget(
        variant === "detail"
          ? element.closest<HTMLElement>(".project-dialog")
          : element.ownerDocument.body,
      );
    }
  }, [variant]);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !overlayRef.current?.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !overlayRef.current?.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      trigger?.focus();
    };
  }, [open]);

  const lightbox = open ? (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="image-lightbox-overlay"
      ref={overlayRef}
      role="dialog"
      tabIndex={-1}
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="image-lightbox-dialog">
        <div className="image-lightbox-toolbar">
          <h2 id={titleId}>{image.alt[language]}</h2>
          <button
            aria-label={language === "vi" ? "Đóng ảnh" : "Close image"}
            className="icon-button"
            onClick={() => setOpen(false)}
            ref={closeRef}
            type="button"
          >
            <X aria-hidden="true" size={20} strokeWidth={1.8} />
          </button>
        </div>
        <div className="image-lightbox-full">
          <Image
            alt={image.alt[language]}
            height={image.height}
            loading="lazy"
            sizes="(max-width: 700px) 90vw, 1100px"
            src={image.src}
            style={{ objectFit: "contain" }}
            width={image.width}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        aria-label={`${zoomLabel}: ${image.alt[language]}`}
        className={`image-lightbox-trigger image-lightbox-${variant}`}
        onClick={() => setOpen(true)}
        ref={setTriggerElement}
        type="button"
      >
        <Image
          alt={image.alt[language]}
          className="image-lightbox-preview"
          height={image.height}
          loading="lazy"
          sizes={variant === "cover"
            ? "(max-width: 700px) calc(100vw - 32px), (max-width: 1000px) 50vw, 33vw"
            : "(max-width: 700px) 90vw, 1000px"}
          src={image.src}
          style={{
            objectFit: image.fit ?? "cover",
            objectPosition: image.objectPosition ?? "center",
          }}
          width={image.width}
        />
        <span aria-hidden="true" className="image-lightbox-zoom">
          <ZoomIn size={18} strokeWidth={1.8} />
        </span>
      </button>
      {portalTarget && lightbox ? createPortal(lightbox, portalTarget) : null}
    </>
  );
}
