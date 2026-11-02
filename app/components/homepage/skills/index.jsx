'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Section from "@/app/components/ui/section";
import SectionHeader from "@/app/components/ui/section-header";
import { StaggerGroup, fadeUp, motion } from "@/app/components/ui/motion";

function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader index="03" label="Skills" title="Tools I work with" />

        <StaggerGroup className="mt-14 flex flex-wrap gap-3">
          {skillsData.map((skill) => {
            const img = skillsImage(skill);
            return (
              <motion.div
                key={skill}
                variants={fadeUp}
                className="group flex items-center gap-3 rounded-full border border-line bg-surface/60 px-5 py-3 transition-all duration-300 hover:border-accent hover:bg-surface"
              >
                {img && (
                  <Image
                    src={img.src}
                    alt={skill}
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <span className="text-sm font-medium capitalize text-muted transition-colors duration-300 group-hover:text-content">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </Section>
  );
}

export default Skills;
