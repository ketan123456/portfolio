"use client";

import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";
import { useState, useEffect } from "react";

interface Props {
  tech: string;
  children: React.ReactNode;
}

export default function TechTooltip({ tech, children }: Props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { refs, floatingStyles } = useFloating({
    placement: "top",
    middleware: [
      offset(10),   // space from element
      flip(),       // flip if no space
      shift({ padding: 10 }), // prevent overflow
    ],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    if (!open || data) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${tech}`
        );
        const result = await res.json();
        setData(result.extract || "No info available.");
      } catch {
        setData("Information unavailable.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [open, tech, data]);

  return (
    <>
      <div
        ref={refs.setReference}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="inline-block"
      >
        {children}
      </div>

      {open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="
            z-50
            w-72 p-4 rounded-2xl
            bg-white/10 backdrop-blur-3xl
            border border-white/20
            text-sm text-white
            shadow-2xl
            transition
          "
        >
          {loading ? "Loading..." : data}
        </div>
      )}
    </>
  );
}