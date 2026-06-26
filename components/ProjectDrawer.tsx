"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectVisual from "./ProjectVisual";

interface Feature {
  title: string;
  description: string;
}

interface Project {
  id: string;
  index: string;
  title: string;
  year: string;
  tools: string[];
  category: string;
  overview: string;
  problem: string;
  solution: string;
  features: Feature[];
  figmaUrl?: string;
}

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-full md:w-[55vw] lg:w-[46vw] max-w-[700px] bg-cream flex flex-col shadow-2xl overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Drawer header */}
            <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-border flex-shrink-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-muted tracking-[0.15em] uppercase">
                    {project.index}
                  </span>
                  <span className="w-4 h-px bg-border" />
                  <span className="text-xs text-muted">{project.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-sm text-muted">{project.year}</span>
                  <span className="text-border">·</span>
                  <div className="flex gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 text-xs border border-border text-muted rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border border-border text-muted rounded-full hover:text-ink hover:border-ink transition-colors"
                  >
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 16C4.657 16 6 14.657 6 13V10H3C1.343 10 0 11.343 0 13C0 14.657 1.343 16 3 16Z" fill="#0ACF83"/>
                      <path d="M0 7C0 5.343 1.343 4 3 4H6V10H3C1.343 10 0 8.657 0 7Z" fill="#A259FF"/>
                      <path d="M0 1C0 -0.657 1.343 -2 3 -2H6V4H3C1.343 4 0 2.657 0 1Z" fill="#F24E1E" transform="translate(0,2)"/>
                      <path d="M6 0H9C10.657 0 12 1.343 12 3C12 4.657 10.657 6 9 6H6V0Z" fill="#FF7262"/>
                      <path d="M12 9C12 10.657 10.657 12 9 12C7.343 12 6 10.657 6 9C6 7.343 7.343 6 9 6C10.657 6 12 7.343 12 9Z" fill="#1ABCFE"/>
                    </svg>
                    View in Figma
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="mt-1 w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-ink hover:border-ink transition-colors flex-shrink-0"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {/* Project visual */}
              <ProjectVisual
                id={project.id}
                className="w-full h-52 md:h-64 border-b border-border"
              />

              <div className="px-8 py-8 space-y-10">
                {/* Overview */}
                <div>
                  <span className="text-[10px] text-muted tracking-[0.2em] uppercase block mb-3">
                    Overview
                  </span>
                  <p className="text-ink leading-relaxed">{project.overview}</p>
                </div>

                {/* Problem */}
                <div>
                  <span className="text-[10px] text-muted tracking-[0.2em] uppercase block mb-3">
                    The Problem
                  </span>
                  <p className="text-muted leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <span className="text-[10px] text-muted tracking-[0.2em] uppercase block mb-3">
                    The Solution
                  </span>
                  <p className="text-muted leading-relaxed">{project.solution}</p>
                </div>

                {/* Features */}
                <div>
                  <span className="text-[10px] text-muted tracking-[0.2em] uppercase block mb-4">
                    Key Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={feature.title}
                        className="p-4 bg-surface rounded-lg border border-border"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.07 }}
                      >
                        <div className="text-xs font-semibold text-ink mb-1.5">
                          {feature.title}
                        </div>
                        <div className="text-xs text-muted leading-relaxed">
                          {feature.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
