"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(.22,.61,.36,1)";

/* Orchestration du scroll-reveal, portage fidèle de site.js :
   IntersectionObserver + MutationObserver pour les sections rendues
   tardivement (navigation client). */
export default function RevealInit() {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-js", "");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveal = (el: HTMLElement) => {
      const delay = parseInt(el.getAttribute("data-reveal") || "0", 10) || 0;
      el.style.transition = `opacity 1000ms ${EASE} ${delay}ms, transform 1100ms ${EASE} ${delay}ms`;
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const wired = new WeakSet<Element>();
    const wire = (el: Element) => {
      if (wired.has(el)) return;
      wired.add(el);
      io.observe(el);
    };

    const scan = (node: Node) => {
      if (node.nodeType !== 1) return;
      const el = node as Element;
      if (el.hasAttribute("data-reveal")) wire(el);
      el.querySelectorAll("[data-reveal]").forEach(wire);
    };

    scan(document.body);

    const mo = new MutationObserver((muts) => {
      for (const m of muts) m.addedNodes.forEach(scan);
    });
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
