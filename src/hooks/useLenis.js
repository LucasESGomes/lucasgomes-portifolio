import { useEffect } from "react";
import { frame, cancelFrame } from "motion/react";
import Lenis from "lenis";

let lenis = null;

// Smooth scroll used by the whole page. Lenis runs inside motion's frame loop:
// with a separate requestAnimationFrame the scroll-linked transforms read the
// scroll position one frame late and the zoomed card images jitter.
export const useLenis = () => {
  useEffect(() => {
    lenis = new Lenis({ autoRaf: false });

    const update = ({ timestamp }) => lenis.raf(timestamp);
    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
      lenis = null;
    };
  }, []);
};

export const scrollToTarget = (target) => {
  if (lenis) {
    lenis.scrollTo(target === "#inicio" ? 0 : target);
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
};
