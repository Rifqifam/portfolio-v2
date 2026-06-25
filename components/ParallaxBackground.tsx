"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import type { CSSProperties } from "react";

// Warm-gray tones that read clearly against the cream background
const STROKE = "rgba(180,172,165,1)";   // circle/square outlines
const FILL   = "rgba(107,101,96,1)";    // dots & cross lines

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, (v) => v * -0.05);
  const y2 = useTransform(scrollY, (v) => v * -0.13);
  const y3 = useTransform(scrollY, (v) => v * -0.26);

  const rot1 = useTransform(scrollY, [0, 6000], [0, 60]);
  const rot2 = useTransform(scrollY, [0, 6000], [0, -45]);
  const rot3 = useTransform(scrollY, [0, 6000], [15, 75]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden
    >
      {/* ── Layer 1 — far, barely drifts ── */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {/* Large circle — top right */}
        <Circle size={560} style={{ top: "-100px", right: "-130px", opacity: 0.75 }} />
        {/* Medium circle — center left */}
        <Circle size={300} style={{ top: "52vh", left: "-80px", opacity: 0.6 }} />
        {/* Small standalone circle */}
        <Circle size={80} style={{ top: "80vh", right: "18%", opacity: 0.65 }} />
      </motion.div>

      {/* ── Layer 2 — mid distance ── */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {/* Dot grid — upper left */}
        <DotGrid style={{ top: "18vh", left: "7%", opacity: 0.55 }} cols={6} rows={4} />

        {/* Large cross — upper right */}
        <Cross size={52} style={{ top: "28vh", right: "8%", opacity: 0.65 }} />

        {/* Rotating square — center */}
        <motion.div
          style={{
            position: "absolute",
            top: "60vh",
            left: "50%",
            width: 48,
            height: 48,
            border: `2px solid ${STROKE}`,
            opacity: 0.7,
            rotate: rot1,
          }}
        />

        {/* Cross — lower left */}
        <Cross size={36} style={{ top: "86vh", left: "26%", opacity: 0.55 }} />

        {/* Medium circle — mid right */}
        <Circle size={130} style={{ top: "68vh", right: "28%", opacity: 0.5 }} />

        {/* Horizontal dash — upper area */}
        <Dash style={{ top: "42vh", left: "18%", opacity: 0.6, width: 120 }} />
      </motion.div>

      {/* ── Layer 3 — closest, drifts most ── */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {/* Dots — scattered */}
        <Dot style={{ top: "15vh", left: "38%",  opacity: 0.7 }} />
        <Dot style={{ top: "38vh", right: "20%", opacity: 0.6 }} />
        <Dot style={{ top: "62vh", left: "60%",  opacity: 0.65 }} />
        <Dot style={{ top: "75vh", left: "16%",  opacity: 0.55 }} />
        <Dot style={{ top: "90vh", right: "40%", opacity: 0.5 }} />

        {/* Long dashes */}
        <Dash style={{ top: "25vh", left: "20%",  opacity: 0.55, width: 100 }} />
        <Dash style={{ top: "78vh", right: "15%", opacity: 0.5,  width: 80  }} />

        {/* Rotating diamond */}
        <motion.div
          style={{
            position: "absolute",
            top: "48vh",
            left: "10%",
            width: 28,
            height: 28,
            border: `2px solid ${STROKE}`,
            opacity: 0.65,
            rotate: rot2,
          }}
        />

        {/* Small rotating square */}
        <motion.div
          style={{
            position: "absolute",
            top: "12vh",
            right: "30%",
            width: 16,
            height: 16,
            border: `1.5px solid ${STROKE}`,
            opacity: 0.6,
            rotate: rot3,
          }}
        />

        {/* Extra dot cluster — top right zone */}
        <DotGrid style={{ top: "8vh", right: "12%", opacity: 0.45 }} cols={3} rows={3} />
      </motion.div>
    </div>
  );
}

/* ── Primitives ── */

function Circle({ size, style }: { size: number; style: CSSProperties & { opacity?: number } }) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `1.5px solid ${STROKE}`,
        ...style,
      }}
    />
  );
}

function Cross({ size = 32, style }: { size?: number; style?: CSSProperties & { opacity?: number } }) {
  const op = style?.opacity ?? 0.6;
  return (
    <div style={{ position: "absolute", width: size, height: size, ...style }}>
      <div style={{ position: "absolute", left: "50%", top: 0, width: 1.5, height: size, background: `rgba(107,101,96,${op})`, transform: "translateX(-50%)" }} />
      <div style={{ position: "absolute", top: "50%", left: 0, height: 1.5, width: size, background: `rgba(107,101,96,${op})`, transform: "translateY(-50%)" }} />
    </div>
  );
}

function DotGrid({ style, cols = 4, rows = 3 }: { style?: CSSProperties & { opacity?: number }; cols?: number; rows?: number }) {
  const op = style?.opacity ?? 0.5;
  return (
    <div style={{ position: "absolute", display: "grid", gridTemplateColumns: `repeat(${cols}, 14px)`, gridTemplateRows: `repeat(${rows}, 14px)`, gap: "8px", ...style }}>
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: `rgba(107,101,96,${op})` }} />
      ))}
    </div>
  );
}

function Dot({ style }: { style?: CSSProperties & { opacity?: number } }) {
  const op = style?.opacity ?? 0.6;
  return (
    <div style={{ position: "absolute", width: 7, height: 7, borderRadius: "50%", background: `rgba(107,101,96,${op})`, ...style }} />
  );
}

function Dash({ style }: { style?: CSSProperties & { opacity?: number; width?: number } }) {
  const op = style?.opacity ?? 0.5;
  return (
    <div style={{ position: "absolute", height: 1.5, background: `rgba(180,172,165,${op})`, ...style }} />
  );
}
