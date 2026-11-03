'use client';

import Image from "next/image";
import profileImg from "/public/profile.jpg";
import Section from "@/app/components/ui/section";
import SectionHeader from "@/app/components/ui/section-header";
import { Reveal } from "@/app/components/ui/motion";

const stats = [
  { value: "3+", label: "Years building software" },
  { value: "10+", label: "Projects delivered" },
  { value: "CV", label: "Computer Vision focus" },
];

function AboutSection() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader index="01" label="About" title="Who I am" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Foto */}
          <Reveal className="lg:col-span-4" delay={0.05}>
            <div className="group relative mx-auto max-w-xs lg:max-w-none">
              <div className="absolute -inset-2 rounded-2xl bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <Image
                  src={profileImg}
                  alt="Pradeva Fairuz Zabbar"
                  width={480}
                  height={560}
                  placeholder="blur"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
            </div>
          </Reveal>

          {/* Narasi */}
          <Reveal className="lg:col-span-8" delay={0.15}>
            <p className="text-xl leading-relaxed text-muted lg:text-2xl">
              I am a professional programmer driven by curiosity and a passion for
              solving real problems. My core expertise is{" "}
              <span className="text-content">back-end development with JavaScript</span>,
              building scalable and maintainable systems.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
              Beyond the application-development, I work extensively in{" "}
              <span className="text-content">Computer Vision</span> — designing
              detection systems that make technology more useful and accessible.
              I am a fast, independent learner who enjoys turning complex ideas
              into clean, working products.
            </p>

            <div className="mt-10 grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((s) => (
                <div key={s.label} className="py-6 sm:px-6 sm:first:pl-0">
                  <div className="font-display text-4xl font-bold tracking-tightest text-accent lg:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
