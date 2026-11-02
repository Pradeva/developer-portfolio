'use client';

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import Section from "@/app/components/ui/section";
import { Reveal } from "@/app/components/ui/motion";
import ContactForm from "./contact-form";
import { MdAlternateEmail, MdCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function ContactSection() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-accent">06</span>
            <span className="h-px w-8 bg-accent/60" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </span>
          </div>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tightest text-content sm:text-6xl lg:text-7xl">
            Let&apos;s build something{" "}
            <span className="text-accent">together</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info kontak */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              Open to freelance projects and collaborations. Tell me about your
              idea and I&apos;ll get back to you.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <a href={`mailto:${personalData.email}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:border-accent">
                  <MdAlternateEmail size={20} />
                </span>
                <span className="text-content transition-colors group-hover:text-accent">
                  {personalData.email}
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent">
                  <MdCall size={20} />
                </span>
                <span className="text-content">{personalData.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent">
                  <CiLocationOn size={20} />
                </span>
                <span className="text-content">{personalData.address}</span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <Link href={personalData.github} target="_blank" className="text-muted transition-colors hover:text-accent">
                <BsGithub size={24} />
              </Link>
              <Link href={personalData.linkedIn} target="_blank" className="text-muted transition-colors hover:text-accent">
                <BsLinkedin size={24} />
              </Link>
              <Link href={personalData.instagram} target="_blank" className="text-muted transition-colors hover:text-accent">
                <FaInstagram size={24} />
              </Link>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-7" delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
