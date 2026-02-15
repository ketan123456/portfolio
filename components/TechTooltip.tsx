"use client";

import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { skillDescriptions } from "../Data/skillDescriptions";

interface Props {
  tech: string;
  children: React.ReactNode;
}

export default function TechTooltip({ tech, children }: Props) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    placement: "top",
    strategy: "fixed",
    middleware: [offset(10), flip(), shift({ padding: 10 })],
    whileElementsMounted: autoUpdate,
  });

  const description = skillDescriptions[tech] || "No description available.";

  return (
    <>
      <div
        ref={refs.setReference}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="inline-block cursor-pointer">
        {children}
      </div>

      {open &&
        createPortal(
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="
              z-[9999]
              w-80 p-4
              rounded-2xl
              bg-white/10 backdrop-blur-3xl
              border border-white/20
              text-sm text-white
              shadow-2xl
              transition-all duration-200
            ">
            {description}
          </div>,
          document.body,
        )}
    </>
  );
}
