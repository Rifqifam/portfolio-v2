"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import ProjectDrawer from "./ProjectDrawer";
import ProjectVisual from "./ProjectVisual";
import projectsData from "@/data/projects.json";

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

const projects: Project[] = projectsData as Project[];

export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-12 lg:px-20">
          {/* Section header */}
          <SectionReveal>
            <div className="flex items-center justify-between mb-14 md:mb-18">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-ink" />
                <h2 className="text-xs text-muted tracking-[0.2em] uppercase font-normal">
                  Selected Work
                </h2>
              </div>
              <span className="text-xs text-muted">{projects.length} Projects</span>
            </div>
          </SectionReveal>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, i) => (
              <SectionReveal key={project.id} delay={i * 0.1}>
                <motion.button
                  onClick={() => setActiveProject(project)}
                  className="group w-full text-left rounded-xl border border-border bg-cream overflow-hidden hover:border-ink/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Visual */}
                  <div className="relative overflow-hidden h-48 md:h-52">
                    <ProjectVisual id={project.id} className="w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cream/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-muted tracking-[0.15em] uppercase block mb-1">
                          {project.index} — {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-ink leading-tight group-hover:text-ink/80 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <motion.span
                        className="text-muted text-lg mt-1 flex-shrink-0 ml-4"
                        animate={{ x: 0 }}
                        whileHover={{ x: 3 }}
                      >
                        →
                      </motion.span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                      {project.overview}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-0.5 text-[11px] border border-border text-muted rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted">{project.year}</span>
                    </div>
                  </div>
                </motion.button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
