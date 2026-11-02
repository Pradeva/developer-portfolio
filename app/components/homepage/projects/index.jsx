'use client';

import { projectsData } from "@/utils/data/projects-data";
import Link from "next/link";
import Section from "@/app/components/ui/section";
import SectionHeader from "@/app/components/ui/section-header";
import { Reveal } from "@/app/components/ui/motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

function Projects() {
  return (
    <Section id="projects">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader index="04" label="Projects" title="Selected work" />

        <div className="mt-16 flex flex-col">
          {projectsData.map((project, i) => {
            const number = String(i + 1).padStart(2, "0");
            return (
              <Reveal
                key={project.id}
                delay={i * 0.05}
                className="group border-t border-line py-10 transition-colors duration-500 last:border-b hover:bg-surface/40"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-1">
                    <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
                      {number}
                    </span>
                  </div>

                  <div className="lg:col-span-7">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-content transition-colors duration-300 group-hover:text-accent lg:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-content lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    {project.role && (
                      <p className="text-xs uppercase tracking-[0.15em] text-accent">
                        {project.role}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools?.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {(project.demo || project.code) && (
                      <div className="mt-5 flex items-center gap-4">
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            className="flex items-center gap-1 text-sm text-content transition-colors hover:text-accent"
                          >
                            Live <FiArrowUpRight />
                          </Link>
                        )}
                        {project.code && (
                          <Link
                            href={project.code}
                            target="_blank"
                            className="flex items-center gap-1 text-sm text-content transition-colors hover:text-accent"
                          >
                            Code <FiGithub />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
