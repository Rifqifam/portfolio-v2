"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const line1 = ["Designing", "systems,"];
const line2 = ["not", "just", "screens."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Only the decorative background layer is scroll-driven
  const yDecor = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen overflow-hidden bg-cream flex items-center"
    >
      {/* Decorative background — parallax only */}
      <motion.div
        style={{ y: yDecor }}
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden
      >
        <span className="absolute -bottom-8 -right-8 text-[45vw] font-black leading-none text-surface opacity-70">
          F.
        </span>
        <div className="absolute top-[42%] left-0 right-0 h-px bg-border opacity-60" />
        <div className="absolute top-0 bottom-0 right-[22%] w-px bg-border opacity-30" />
      </motion.div>

      {/* Main content — load animations only, no scroll binding */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <div className="w-6 h-px bg-muted" />
          <span className="text-xs text-muted tracking-[0.2em] uppercase">
            UI/UX Designer &amp; Developer
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(3.2rem,9vw,9rem)] font-bold leading-[0.95] tracking-tight">
          <div className="overflow-hidden pb-[0.15em]">
            {line1.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                className="inline-block mr-[0.2em] text-ink"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="overflow-hidden pb-[0.15em]">
            {line2.map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                className={`inline-block mr-[0.2em] ${i < line2.length - 1 ? "text-muted" : "text-ink"}`}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.85 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.35, ease: "easeOut" }}
          className="mt-8 text-muted text-base md:text-lg max-w-lg leading-relaxed"
        >
          I bring the full-stack perspective to design — from user research and
          system architecture to implementation and handoff.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.55, ease: "easeOut" }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:gap-4 transition-all duration-300"
          >
            View Work
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              →
            </motion.span>
          </a>
          <div className="w-px h-4 bg-border" />
          <a
            href="#about"
            className="text-sm text-muted hover:text-ink transition-colors duration-200"
          >
            About
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.7 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-end gap-3"
        aria-hidden
      >
        <motion.div
          className="w-px h-12 bg-muted origin-top"
          animate={{ scaleY: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[10px] text-muted tracking-[0.25em] uppercase mb-0.5">
          Scroll
        </span>
      </motion.div>

      {/* Current role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.7 }}
        className="absolute bottom-8 right-6 md:right-12 lg:right-20 text-right"
        aria-hidden
      >
        <div className="text-[10px] text-muted uppercase tracking-widest mb-1">Currently</div>
        <div className="text-xs text-ink font-medium">UX Team Lead</div>
        <div className="text-[10px] text-muted">Adaptive AI Ventures</div>
      </motion.div>
    </section>
  );
}
