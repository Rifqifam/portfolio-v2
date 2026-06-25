"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import content from "@/data/content.json";
import experienceData from "@/data/experience.json";

interface Role {
  title: string;
  period: string;
  current: boolean;
}

interface Impact {
  products: string;
  features: string;
  platforms: string;
}

interface Experience {
  company: string;
  location: string;
  roles: Role[];
  skills: string[];
  highlights: string[];
  impact: Impact | null;
}

const experience: Experience[] = experienceData as Experience[];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <SectionReveal>
          <div className="flex items-center gap-3 mb-14">
            <div className="w-8 h-px bg-ink" />
            <h2 className="text-xs text-muted tracking-[0.2em] uppercase font-normal">
              About
            </h2>
          </div>
        </SectionReveal>

        {/* Bio + Education */}
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 md:gap-20 mb-20">
          <SectionReveal>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-[1.1] tracking-tight">
              Designer who<br />codes. Developer<br />who designs.
            </h3>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <p className="text-muted leading-relaxed text-base md:text-lg mb-10">
              {content.bio}
            </p>

            {/* Education */}
            <div className="space-y-4">
              {content.education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-1 flex-shrink-0 self-stretch bg-border rounded-full mt-1" />
                  <div>
                    <div className="text-sm font-medium text-ink">{edu.institution}</div>
                    <div className="text-sm text-muted">{edu.degree}</div>
                    <div className="text-xs text-muted mt-0.5">
                      {edu.period} · {edu.location}
                      {"grade" in edu && edu.grade ? ` · ${edu.grade}` : ""}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Stats */}
        <SectionReveal>
          <div className="grid grid-cols-3 gap-6 py-10 border-t border-b border-border mb-20">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-ink mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Experience */}
        <SectionReveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-ink" />
            <h3 className="text-xs text-muted tracking-[0.2em] uppercase font-normal">
              Experience
            </h3>
          </div>
        </SectionReveal>

        <div className="space-y-0">
          {experience.map((job, jobIndex) => (
            <SectionReveal key={job.company} delay={jobIndex * 0.1}>
              <div className="py-10 border-b border-border last:border-0">
                <div className="grid md:grid-cols-[220px,1fr] gap-8 md:gap-12">
                  {/* Left: company */}
                  <div>
                    <div className="text-lg font-bold text-ink mb-1">{job.company}</div>
                    <div className="text-xs text-muted mb-5">{job.location}</div>

                    {/* Role progression */}
                    <div className="space-y-3">
                      {job.roles.map((role, i) => (
                        <div key={role.title} className="flex items-start gap-3">
                          <div className="flex flex-col items-center pt-1.5 flex-shrink-0">
                            <div
                              className={`w-[7px] h-[7px] rounded-full flex-shrink-0 ${
                                role.current ? "bg-ink" : "bg-border"
                              }`}
                            />
                            {i < job.roles.length - 1 && (
                              <div className="w-px h-6 bg-border mt-1" />
                            )}
                          </div>
                          <div>
                            <div
                              className={`text-xs font-medium leading-tight ${
                                role.current ? "text-ink" : "text-muted"
                              }`}
                            >
                              {role.title}
                            </div>
                            <div className="text-[11px] text-muted mt-0.5">{role.period}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: details */}
                  <div>
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-[11px] border border-border text-muted rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted">
                          <span className="text-border mt-[5px] flex-shrink-0">—</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Impact */}
                    {job.impact && (
                      <div className="mt-8 flex gap-8 pt-6 border-t border-border">
                        <div>
                          <div className="text-2xl font-bold text-ink">{job.impact.products}</div>
                          <div className="text-xs text-muted">Products</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-ink">{job.impact.features}</div>
                          <div className="text-xs text-muted">Features</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-ink">{job.impact.platforms}</div>
                          <div className="text-xs text-muted">Platforms</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
