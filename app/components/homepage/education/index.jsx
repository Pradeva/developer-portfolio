'use client';

import { educations } from "@/utils/data/educations";
import Section from "@/app/components/ui/section";
import SectionHeader from "@/app/components/ui/section-header";
import { Reveal } from "@/app/components/ui/motion";

function Education() {
  return (
    <Section id="education">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader index="06" label="Education" title="Academic background" />

        <div className="mt-14 flex flex-col divide-y divide-line border-y border-line">
          {educations.map((edu, i) => (
            <Reveal
              key={edu.id}
              delay={i * 0.08}
              className="flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-content lg:text-2xl">
                  {edu.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{edu.institution}</p>
              </div>
              <span className="font-mono text-sm text-accent">{edu.duration}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Education;
