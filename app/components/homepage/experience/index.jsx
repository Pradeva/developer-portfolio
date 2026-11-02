'use client';

import { experiences } from "@/utils/data/experience";
import Section from "@/app/components/ui/section";
import SectionHeader from "@/app/components/ui/section-header";
import { Reveal } from "@/app/components/ui/motion";

function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader index="02" label="Experience" title="Where I've worked" />

        <div className="mt-16 lg:pl-6">
          <ol className="relative border-l border-line">
            {experiences.map((exp, i) => (
              <Reveal
                as="li"
                key={exp.id}
                delay={i * 0.06}
                className="group relative mb-12 pl-8 last:mb-0 sm:pl-12"
              >
                {/* Titik timeline */}
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base transition-colors duration-300 group-hover:bg-accent" />

                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {exp.duration}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-content lg:text-3xl">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{exp.company}</p>

                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted">
                  {[exp.description1, exp.description2, exp.description3]
                    .filter(Boolean)
                    .map((d, idx) => (
                      <li key={idx}>{d.replace(/^-\s*/, "")}</li>
                    ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
