'use client';

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 sm:px-10">
      {/* Latar gradient emerald sangat halus + grid tipis */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted"
        >
          <span className="h-px w-10 bg-accent" />
          Software Developer &amp; CV Engineer
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-[16vw] font-extrabold uppercase leading-[0.9] tracking-tightest text-content sm:text-[12vw] lg:text-[9rem]"
        >
          Pradeva
          <br />
          <span className="text-accent">Fairuz</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Software Developer &amp; Computer Vision Engineer. I build reliable
            back-end systems and intelligent vision solutions, turning complex
            problems into clean, working products.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-accent-strong"
            >
              View Work
              <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm font-semibold uppercase tracking-wider text-content transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Contact
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex items-center gap-6 border-t border-line pt-8"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">Follow</span>
          <div className="flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="text-muted transition-colors hover:text-accent">
              <BsGithub size={22} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="text-muted transition-colors hover:text-accent">
              <BsLinkedin size={22} />
            </Link>
            <Link href={personalData.instagram} target="_blank" className="text-muted transition-colors hover:text-accent">
              <FaInstagram size={22} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
