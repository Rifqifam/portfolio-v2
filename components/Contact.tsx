"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";
import content from "@/data/content.json";

function safeHttpsUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" ? url : "#";
  } catch {
    return "#";
  }
}

function safeMailto(email: string): string {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? `mailto:${email}` : "#";
}

const links = [
  {
    label: "Email",
    href: safeMailto(content.contact.email),
    display: content.contact.email,
    icon: "✉",
  },
  {
    label: "LinkedIn",
    href: safeHttpsUrl(content.contact.linkedin),
    display: "linkedin.com/in/rifqifam",
    icon: "in",
  },
  {
    label: "GitHub",
    href: safeHttpsUrl(content.contact.github),
    display: "github.com/rifqifam",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

const headlineWords = ["Let's", "build", "together."];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  // scrollYProgress: 0 when section top hits 90% of viewport, 1 when it hits 15%
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.15"],
  });

  // Word 0 — first to animate
  const x0 = useTransform(scrollYProgress, [0, 0.5], [-70, 0]);
  const c0 = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["rgba(245,240,235,0.18)", "rgba(255,255,255,1)"],
  );

  // Word 1 — slight delay
  const x1 = useTransform(scrollYProgress, [0.18, 0.68], [-70, 0]);
  const c1 = useTransform(
    scrollYProgress,
    [0.18, 0.82],
    ["rgba(245,240,235,0.18)", "rgba(255,255,255,1)"],
  );

  // Word 2 — last
  const x2 = useTransform(scrollYProgress, [0.36, 0.86], [-70, 0]);
  const c2 = useTransform(
    scrollYProgress,
    [0.36, 1.0],
    ["rgba(245,240,235,0.18)", "rgba(255,255,255,1)"],
  );

  const wordMotion = [
    { x: x0, color: c0 },
    { x: x1, color: c1 },
    { x: x2, color: c2 },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-ink py-28 md:py-40 overflow-hidden">
      {/* Background decoration */}
      <div
        className="-right-16 -bottom-20 absolute font-black text-[40vw] leading-none pointer-events-none select-none"
        style={{ color: "rgba(255,255,255,0.03)" }}
        aria-hidden>
        F.
      </div>
      <div
        className="top-0 right-0 left-0 absolute h-px"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />

      <div className="z-10 relative px-6 md:px-12 lg:px-20">
        {/* Label */}
        <SectionReveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-muted w-8 h-px" />
            <h2
              className="font-normal text-xs uppercase tracking-[0.2em]"
              style={{ color: "rgba(245,240,235,0.4)" }}>
              Contact
            </h2>
          </div>
        </SectionReveal>

        {/* Headline — no overflow-hidden, padding gives descenders room */}
        <div className="mb-16 md:mb-20 pb-4">
          <h3 className="font-bold text-[clamp(3.5rem,10vw,10rem)] leading-[1.05] tracking-tight">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.22em]"
                style={{
                  x: wordMotion[i].x,
                  color: wordMotion[i].color,
                }}>
                {word}
              </motion.span>
            ))}
          </h3>
        </div>

        {/* Subtext */}
        <SectionReveal delay={0.2}>
          <p
            className="mb-14 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(245,240,235,0.5)" }}>
            Open to full-time roles, contract projects, and interesting
            collaborations. Based in Jakarta, available remotely worldwide.
          </p>
        </SectionReveal>

        {/* Links */}
        <SectionReveal delay={0.3}>
          <div
            className="flex flex-col gap-0 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex justify-between items-center py-5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                <div className="flex items-center gap-4">
                  <span
                    className="flex flex-shrink-0 justify-center items-center border rounded-full w-8 h-8 font-bold text-[11px]"
                    style={{
                      borderColor: "rgba(255,255,255,0.15)",
                      color: "rgba(245,240,235,0.5)",
                    }}>
                    {link.icon}
                  </span>
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "rgba(245,240,235,0.4)" }}>
                      {link.label}
                    </div>
                    <div
                      className="group-hover:opacity-70 font-medium text-sm transition-opacity duration-200"
                      style={{ color: "#F5F0EB" }}>
                      {link.display}
                    </div>
                  </div>
                </div>
                <span
                  className="transition-transform group-hover:translate-x-1 duration-200"
                  style={{ color: "rgba(245,240,235,0.3)" }}>
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </SectionReveal>

        {/* Footer */}
        <SectionReveal delay={0.4}>
          <div
            className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4 mt-16 md:mt-20 pt-8 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <span className="font-bold text-sm" style={{ color: "#F5F0EB" }}>
              Fam.
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,235,0.3)" }}>
              Muhammad Rifqi Fameizy — UI/UX Designer · 2026
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,235,0.3)" }}>
              Built with Next.js &amp; Framer Motion
            </span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
