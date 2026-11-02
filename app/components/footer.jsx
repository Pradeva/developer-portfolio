// @flow strict
import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Get in touch</p>
            <Link
              href={`mailto:${personalData.email}`}
              className="mt-2 block font-display text-2xl font-bold tracking-tightest text-content transition-colors hover:text-accent sm:text-3xl"
            >
              {personalData.email}
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href={personalData.github} target="_blank" className="text-muted transition-colors hover:text-accent">
              GitHub
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="text-muted transition-colors hover:text-accent">
              LinkedIn
            </Link>
            <Link href={personalData.instagram} target="_blank" className="text-muted transition-colors hover:text-accent">
              Instagram
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} Pradeva Fairuz Zabbar
          </p>
          <p>Software Developer &amp; Computer Vision Engineer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
