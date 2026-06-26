"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const pillars = [
  {
    number: "01",
    title: "Agile in Figma",
    description:
      "We implemented Agile methodology directly into our Figma workflow, grouping each feature into UI Draft, Ready For Dev, and Prototypes with full version control. Every feature passes through internal review before handoff.",
    steps: ["UI Draft", "Internal Review", "Ready for Dev", "Prototype"],
  },
  {
    number: "02",
    title: "Design Pipeline",
    description:
      "A structured release pipeline starting from discovery and user discussions, through UI documentation and prototyping, all the way to developer handoff, ensuring nothing ships without a solid foundation.",
    steps: ["BRD", "UI Documentation", "Prototype", "Dev Handoff"],
  },
  {
    number: "03",
    title: "AI Integrated Workflows",
    description:
      "We found that AI can be deeply valuable for designers too. Using Claude AI for edge case and loophole exploration, and Stitch AI for design generation reference,  resulting in deeper, more solid UX.",
    steps: [
      "BRD Breakdown",
      "Edge Cases via AI",
      "Stitch AI Reference",
      "User Flow",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-border border-t">
      <div className="px-6 md:px-12 lg:px-20">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-ink w-8 h-px" />
            <h2 className="font-normal text-muted text-xs uppercase tracking-[0.2em]">
              Process
            </h2>
          </div>
          <h3 className="mb-16 md:mb-20 max-w-lg font-bold text-ink text-3xl md:text-4xl leading-tight">
            How I work, and how I make teams work better.
          </h3>
        </SectionReveal>

        <div className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.number} delay={i * 0.12}>
              <motion.div
                className="group flex flex-col bg-cream p-7 border border-border rounded-xl h-full"
                whileHover={{ borderColor: "rgba(26, 26, 26, 0.3)" }}
                transition={{ duration: 0.2 }}>
                {/* Number */}
                <span className="block mb-6 text-border font-black group-hover:text-surface-2 text-5xl leading-none transition-colors duration-300">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="mb-3 font-bold text-ink text-xl">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="flex-1 mb-6 text-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Steps */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {pillar.steps.map((step, si) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 border border-border rounded-full text-[11px] text-muted">
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
