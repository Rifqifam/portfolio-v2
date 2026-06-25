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
    icon: "gh",
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
  const x0 = useTransform(scrollYProgress, [0,    0.5 ], [-70, 0]);
  const c0 = useTransform(scrollYProgress, [0,    0.65], ["rgba(245,240,235,0.18)", "rgba(255,255,255,1)"]);

  // Word 1 — slight delay
  const x1 = useTransform(scrollYProgress, [0.18, 0.68], [-70, 0]);
  const c1 = useTransform(scrollYProgress, [0.18, 0.82], ["rgba(245,240,235,0.18)", "rgba(255,255,255,1)"]);

  // Word 2 — last
  const x2 = useTransform(scrollYProgress, [0.36, 0.86], [-70, 0]);
  const c2 = useTransform(scrollYProgress, [0.36, 1.0 ], ["rgba(245,240,235,0.18)", "rgba(255,255,255,1)"]);

  const wordMotion = [
    { x: x0, color: c0 },
    { x: x1, color: c1 },
    { x: x2, color: c2 },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-28 md:py-40 bg-ink overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute -bottom-20 -right-16 text-[40vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.03)" }}
        aria-hidden
      >
        F.
      </div>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {/* Label */}
        <SectionReveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-muted" />
            <h2
              className="text-xs tracking-[0.2em] uppercase font-normal"
              style={{ color: "rgba(245,240,235,0.4)" }}
            >
              Contact
            </h2>
          </div>
        </SectionReveal>

        {/* Headline — no overflow-hidden, padding gives descenders room */}
        <div className="mb-16 md:mb-20 pb-4">
          <h3 className="text-[clamp(3.5rem,10vw,10rem)] font-bold leading-[1.05] tracking-tight">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.22em]"
                style={{
                  x: wordMotion[i].x,
                  color: wordMotion[i].color,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h3>
        </div>

        {/* Subtext */}
        <SectionReveal delay={0.2}>
          <p
            className="text-base md:text-lg max-w-md leading-relaxed mb-14"
            style={{ color: "rgba(245,240,235,0.5)" }}
          >
            Open to full-time roles, contract projects, and interesting
            collaborations. Based in Singapore, available remotely worldwide.
          </p>
        </SectionReveal>

        {/* Links */}
        <SectionReveal delay={0.3}>
          <div
            className="flex flex-col gap-0 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-full border text-[11px] font-bold flex-shrink-0"
                    style={{
                      borderColor: "rgba(255,255,255,0.15)",
                      color: "rgba(245,240,235,0.5)",
                    }}
                  >
                    {link.icon}
                  </span>
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "rgba(245,240,235,0.4)" }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-sm font-medium group-hover:opacity-70 transition-opacity duration-200"
                      style={{ color: "#F5F0EB" }}
                    >
                      {link.display}
                    </div>
                  </div>
                </div>
                <span
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  style={{ color: "rgba(245,240,235,0.3)" }}
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </SectionReveal>

        {/* Footer */}
        <SectionReveal delay={0.4}>
          <div
            className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <span className="text-sm font-bold" style={{ color: "#F5F0EB" }}>
              Fam.
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,235,0.3)" }}>
              Muhammad Rifqi Fameizy — UI/UX Designer · 2026
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,235,0.3)" }}>
              Built with Next.js &amp; Framer Motion
            </span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
