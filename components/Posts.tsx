"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import posts from "@/data/posts.json";

const platformIcon: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

export default function Posts() {
  if (!posts.length) return null;

  return (
    <section id="writing" className="py-24 md:py-32 border-t border-border">
      <div className="px-6 md:px-12 lg:px-20">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-ink w-8 h-px" />
            <h2 className="font-normal text-muted text-xs uppercase tracking-[0.2em]">
              Writing
            </h2>
          </div>
          <h3 className="mb-16 md:mb-20 max-w-lg font-bold text-ink text-3xl md:text-4xl leading-tight">
            Thoughts worth sharing.
          </h3>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <SectionReveal key={post.id} delay={i * 0.1}>
              <motion.article
                className="group flex flex-col bg-cream p-7 border border-border rounded-xl h-full"
                whileHover={{ borderColor: "rgba(26, 26, 26, 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Platform + date */}
                <div className="flex items-center justify-between mb-6">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 border border-border rounded-full text-[11px] text-muted">
                    {platformIcon[post.platform]}
                    {post.platform}
                  </span>
                  <span className="text-[11px] text-muted">{post.date}</span>
                </div>

                {/* Title */}
                <h4 className="mb-3 font-bold text-ink text-lg leading-snug">
                  {post.title}
                </h4>

                {/* Summary */}
                <p className="flex-1 mb-8 text-muted text-sm leading-relaxed">
                  {post.summary}
                </p>

                {/* CTA */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start px-4 py-2 border border-border rounded-full text-xs font-medium text-muted hover:text-ink hover:border-ink transition-colors duration-200"
                >
                  {platformIcon[post.platform]}
                  Read on {post.platform}
                </a>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
