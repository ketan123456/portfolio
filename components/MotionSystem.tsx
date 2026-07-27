"use client";

import Lenis from "lenis";
import { useLayoutEffect, useRef } from "react";

const interactiveSelector =
  "a, button, [role='button'], .skill-node, .service-card, .archive-card, .featured-project, .case-gallery-button";
const magneticSelector =
  ".button, .nav-cta, .contact-links a, .text-link, .case-back";
const reactiveCardSelector =
  ".skill-node, .service-card, .archive-card, .featured-project";

export default function MotionSystem() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const lenis = new Lenis({
      duration: 1.25,
      easing: (value) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
      smoothWheel: !reduceMotion,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.25,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: -74,
        duration: 1.35,
      });
      window.history.replaceState(null, "", hash);
    };
    document.addEventListener("click", handleAnchorClick);

    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".featured-project-image img, .archive-card-image img, .case-gallery-button img",
      ),
    );
    const heroContent = document.querySelector<HTMLElement>(".hero-content");
    const heroTelemetry =
      document.querySelector<HTMLElement>(".hero-telemetry");

    const updateScrollState = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      progressRef.current?.style.setProperty(
        "transform",
        `scaleX(${Math.max(0, Math.min(1, progress))})`,
      );
      document
        .querySelector(".site-nav")
        ?.setAttribute("data-scrolled", String(window.scrollY > 45));

      const heroProgress = Math.min(1, window.scrollY / window.innerHeight);
      heroContent?.style.setProperty(
        "--hero-scroll-y",
        `${heroProgress * -70}px`,
      );
      heroContent?.style.setProperty(
        "--hero-scroll-opacity",
        String(1 - heroProgress * 0.82),
      );
      heroTelemetry?.style.setProperty(
        "--hero-scroll-y",
        `${heroProgress * -35}px`,
      );
      heroTelemetry?.style.setProperty(
        "--hero-scroll-opacity",
        String(1 - heroProgress),
      );

      parallaxTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        const center = rect.top + rect.height / 2;
        const normalized = Math.max(
          -1,
          Math.min(1, (center - window.innerHeight / 2) / window.innerHeight),
        );
        target.style.setProperty(
          "--scroll-parallax-y",
          `${normalized * -22}px`,
        );
      });
    };
    lenis.on("scroll", updateScrollState);
    updateScrollState();

    const revealSelector = [
      ".section-shell > .eyebrow",
      ".section-intro",
      ".about-copy > p",
      ".skill-group-header",
      ".stat-cell",
      ".archive-link",
      ".archive-hero > *",
      ".archive-card",
      ".case-hero-content > *",
      ".case-section-label",
      ".case-overview > div",
      ".case-features > h2",
      ".feature-list li",
      ".case-gallery-heading > *",
      ".case-gallery-button",
    ].join(", ");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );
    revealTargets.forEach((target, index) => {
      target.classList.add("scroll-reveal-item");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 0.07}s`);
      if (
        target.matches(
          ".archive-card, .case-gallery-button, .feature-list li",
        )
      ) {
        target.style.setProperty("--reveal-y", "60px");
      }
    });
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -9% 0px",
      },
    );
    revealTargets.forEach((target) => revealObserver.observe(target));

    if (!finePointer || reduceMotion) {
      return () => {
        document.removeEventListener("click", handleAnchorClick);
        revealObserver.disconnect();
        window.cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let glowX = pointerX;
    let glowY = pointerY;
    let cursorRaf = 0;

    const animateCursor = () => {
      ringX += (pointerX - ringX) * 0.17;
      ringY += (pointerY - ringY) * 0.17;
      glowX += (pointerX - glowX) * 0.09;
      glowY += (pointerY - glowY) * 0.09;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      cursorRaf = window.requestAnimationFrame(animateCursor);
    };
    cursorRaf = window.requestAnimationFrame(animateCursor);

    const resetElement = (element: HTMLElement) => {
      element.style.setProperty("--mag-x", "0px");
      element.style.setProperty("--mag-y", "0px");
      element.style.setProperty("--spot-x", "50%");
      element.style.setProperty("--spot-y", "50%");
      element.style.setProperty("--parallax-x", "0px");
      element.style.setProperty("--parallax-y", "0px");
      element.style.setProperty("--icon-rx", "11deg");
      element.style.setProperty("--icon-ry", "-12deg");
    };

    let activeMagnetic: HTMLElement | null = null;
    let activeCard: HTMLElement | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      glow.style.opacity = "1";

      const target = event.target as Element;
      const interactive = target.closest(interactiveSelector);
      ring.classList.toggle("is-active", Boolean(interactive));

      const magnetic = target.closest<HTMLElement>(magneticSelector);
      if (activeMagnetic && activeMagnetic !== magnetic) {
        resetElement(activeMagnetic);
      }
      activeMagnetic = magnetic;
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        magnetic.style.setProperty(
          "--mag-x",
          `${(event.clientX - rect.left - rect.width / 2) * 0.16}px`,
        );
        magnetic.style.setProperty(
          "--mag-y",
          `${(event.clientY - rect.top - rect.height / 2) * 0.16}px`,
        );
      }

      const card = target.closest<HTMLElement>(reactiveCardSelector);
      if (activeCard && activeCard !== card) resetElement(activeCard);
      activeCard = card;
      if (card) {
        const rect = card.getBoundingClientRect();
        const normalizedX = (event.clientX - rect.left) / rect.width;
        const normalizedY = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--spot-x", `${normalizedX * 100}%`);
        card.style.setProperty("--spot-y", `${normalizedY * 100}%`);
        card.style.setProperty(
          "--parallax-x",
          `${(normalizedX - 0.5) * -13}px`,
        );
        card.style.setProperty(
          "--parallax-y",
          `${(normalizedY - 0.5) * -10}px`,
        );
        card.style.setProperty(
          "--icon-rx",
          `${(0.5 - normalizedY) * 18}deg`,
        );
        card.style.setProperty(
          "--icon-ry",
          `${(normalizedX - 0.5) * 22}deg`,
        );
      }
    };

    const handlePointerLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      glow.style.opacity = "0";
      if (activeMagnetic) resetElement(activeMagnetic);
      if (activeCard) resetElement(activeCard);
    };
    const handlePointerDown = () => ring.classList.add("is-pressed");
    const handlePointerUp = () => ring.classList.remove("is-pressed");

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      revealObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.cancelAnimationFrame(rafId);
      window.cancelAnimationFrame(cursorRaf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="motion-scroll-progress" ref={progressRef} aria-hidden />
      <div className="motion-cursor-glow" ref={glowRef} aria-hidden />
      <div className="motion-cursor-ring" ref={ringRef} aria-hidden />
      <div className="motion-cursor-dot" ref={dotRef} aria-hidden />
    </>
  );
}
