"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-[100vw] glass backdrop-blur-xl p-5 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="font-bold text-white">Ketan Kritesh</h2>

        <div className="hidden md:flex space-x-6 text-sm text-white">
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
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-6 h-[2px] bg-white" />
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
