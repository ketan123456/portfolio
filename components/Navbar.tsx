"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export  function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-[100vw] glass backdrop-blur-xl p-5 z-50">
      <div className="max-w-6xl mx-auto flex md:justify-center justify-end  items-center">
        <div className="hidden md:flex space-x-6 gap-8 flex text-sm text-white">
          {navLinks.map((link) => {
            const isActive =
              link.href.startsWith("/") &&
              (pathname === link.href || pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative group px-5 py-2 ">
                <span
                  className={`
      relative z-10 rounded-full
      transition-all duration-300
      ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}
    `}>
                  {link.name}
                </span>

                {/* Glass Background */}
                <span
                  className={`
      absolute inset-0
      rounded-full
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      shadow-[0_0_30px_rgba(255,255,255,0.05)]
      transition-all duration-300
      ${
        isActive
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
      }
    `}
                />
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-white"
          aria-label="toggle menu"
          onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-[2px] transition bg-white" />
            <span className="block w-6 h-[2px] transition bg-white" />
            <span className="block w-6 h-[2px] transition bg-white" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-5 flex flex-col items-center space-y-4 text-white text-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href.startsWith("/") &&
                (pathname === link.href || pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative group">
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-blue-400" : "group-hover:text-blue-400"
                    }`}>
                    {link.name}
                  </span>

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px]
                      bg-blue-400
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
