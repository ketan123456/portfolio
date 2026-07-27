"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { usePageReady } from "./usePageReady";

const links = [
  { label: "About", hash: "about" },
  { label: "Skills", hash: "skills" },
  { label: "Work", hash: "projects" },
  { label: "Experience", hash: "experience" },
  { label: "Services", hash: "services" },
  { label: "Contact", hash: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const ready = usePageReady();

  useEffect(() => setOpen(false), [pathname]);

  const hrefFor = (hash: string) => `${isHome ? "" : "/"}#${hash}`;

  return (
    <motion.nav
      initial={false}
      animate={ready ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="site-nav"
    >
      <Link href="/" className="brand-mark" aria-label="Ketan Kritesh home">
        KK<span>.</span>
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.hash} href={hrefFor(link.hash)}>
            {link.label}
          </Link>
        ))}
      </div>

      <Link href={hrefFor("contact")} className="nav-cta">
        Let&apos;s talk <span>↗</span>
      </Link>

      <button
        type="button"
        className={`menu-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        <span />
        <span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24 }}
          >
            {links.map((link, index) => (
              <Link
                key={link.hash}
                href={hrefFor(link.hash)}
                onClick={() => setOpen(false)}
              >
                <span>0{index + 1}</span>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
