import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App({ Component, pageProps, router }) {
  // Lenis smooth scroll — site-wide
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  );
}
