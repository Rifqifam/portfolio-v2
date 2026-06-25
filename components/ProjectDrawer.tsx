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
