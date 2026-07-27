"use client";

import { useEffect, useState } from "react";

const readyEvent = "portfolio:ready";

export function markPageReady() {
  document.documentElement.dataset.portfolioReady = "true";
  window.dispatchEvent(new Event(readyEvent));
}

export function usePageReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleReady = () => setReady(true);
    if (
      document.documentElement.dataset.portfolioReady === "true" ||
      !document.querySelector(".boot-screen")
    ) {
      handleReady();
      return;
    }

    window.addEventListener(readyEvent, handleReady);
    const fallback = window.setTimeout(handleReady, 3400);
    return () => {
      window.removeEventListener(readyEvent, handleReady);
      window.clearTimeout(fallback);
    };
  }, []);

  return ready;
}
