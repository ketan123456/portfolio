"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { markPageReady } from "./usePageReady";

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      markPageReady();
      return;
    }

    const startedAt = performance.now();
    let frame = 0;
    const updateProgress = (time: number) => {
      const elapsed = time - startedAt;
      const linear = Math.min(1, elapsed / 2050);
      setProgress(Math.round(linear * 100));
      if (linear < 1) frame = window.requestAnimationFrame(updateProgress);
    };
    frame = window.requestAnimationFrame(updateProgress);
    const glitchTimeout = window.setTimeout(() => setGlitching(true), 1810);
    const timeout = window.setTimeout(() => {
      setVisible(false);
      markPageReady();
    }, 2700);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(glitchTimeout);
      window.clearTimeout(timeout);
    };
  }, []);

  const command =
    progress < 28
      ? "boot sequence :: initiated"
      : progress < 60
        ? "loading creative modules"
        : progress < 88
          ? "syncing interface states"
          : "establishing uplink to ketan.kritesh";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-screen"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="boot-center">
            <div className="boot-topline">
              KETAN_KRITESH // FRONTEND.ENGINEER
            </div>
            <motion.p
              className={glitching ? "is-glitching" : ""}
              data-text="LOADING"
              initial={{ x: 110 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              LOADING
            </motion.p>
            <div className="boot-command">
              &gt; {command}
              <span>▍</span>
            </div>
            <div className="boot-progress-row">
              <div className="boot-progress-track">
                <div
                  className="boot-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="boot-progress">
                {String(progress).padStart(3, "0")}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
