"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const pillars = [
  {
    number: "01",
    title: "Agile in Figma",
    description:
      "We implemented Agile methodology directly into our Figma workflow — grouping each feature into UI Draft, Ready For Dev, and Prototypes with full version control. Every feature passes through internal review before handoff.",
    steps: ["UI Draft", "Internal Review", "Ready for Dev", "Prototype"],
  },
  {
    number: "02",
    title: "Design Pipeline",
    description:
      "A structured release pipeline starting from discovery and user discussions, through UI documentation and prototyping, all the way to developer handoff — ensuring nothing ships without a solid foundation.",
    steps: ["BRD", "UI Documentation", "Prototype", "Dev Handoff"],
  },
  {
    number: "03",
    title: "AI Integrated Workflows",
    description:
      "We found that AI can be deeply valuable for designers too. Using Claude AI for edge case and loophole exploration, and Stitch AI for design generation reference — resulting in deeper, more solid UX.",
    steps: ["BRD Breakdown", "Edge Cases via AI", "Stitch AI Reference", "User Flow"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border">
      <div className="px-6 md:px-12 lg:px-20">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ink" />
            <h2 className="text-xs text-muted tracking-[0.2em] uppercase font-normal">
              Process
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-ink mb-16 md:mb-20 max-w-lg leading-tight">
            How I work, and how I make teams work better.
          </h3>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.number} delay={i * 0.12}>
              <motion.div
                className="group p-7 rounded-xl bg-cream border border-border h-full flex flex-col"
                whileHover={{ borderColor: "rgba(26, 26, 26, 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Number */}
                <span className="text-5xl font-black text-border leading-none mb-6 block group-hover:text-surface-2 transition-colors duration-300">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-ink mb-3">{pillar.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {pillar.description}
                </p>

                {/* Steps */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {pillar.steps.map((step, si) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <span className="text-[11px] text-muted px-2.5 py-1 border border-border rounded-full">
                        {step}
                      </span>
                      {si < pillar.steps.length - 1 && (
                        <span className="text-border text-[10px]">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
