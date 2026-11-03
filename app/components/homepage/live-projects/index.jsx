'use client';

import { useState } from 'react';
import { liveProjects } from '@/utils/data/live-projects';
import Section from '@/app/components/ui/section';
import SectionHeader from '@/app/components/ui/section-header';
import { StaggerGroup, motion, fadeUp } from '@/app/components/ui/motion';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';

// Membuat URL screenshot otomatis dari URL situs memakai Microlink
// (gratis untuk pemakaian ringan, tanpa API key). Kalau gagal, komponen
// menampilkan fallback sehingga tampilan tidak rusak.
function screenshotUrl(siteUrl) {
  const params = new URLSearchParams({
    url: siteUrl,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    'viewport.width': '1280',
    'viewport.height': '800',
    'viewport.deviceScaleFactor': '1',
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function LiveCard({ project }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      className="group block overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-accent"
    >
      {/* Preview screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-base">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={screenshotUrl(project.url)}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
            <FiExternalLink size={28} className="text-accent" />
            <span className="text-sm">{hostOf(project.url)}</span>
          </div>
        )}
        {/* Overlay host + arrow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-base/90 to-transparent px-4 py-3">
          <span className="text-xs text-muted">{hostOf(project.url)}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <FiArrowUpRight size={15} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-content transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        {project.description && (
          <p className="mt-2 text-sm leading-relaxed text-content/80">{project.description}</p>
        )}
        {project.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}

function LiveProjects() {
  if (!liveProjects || liveProjects.length === 0) return null;

  return (
    <Section id="live">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader index="05" label="Live" title="Live projects" />
        <p className="mt-4 max-w-2xl text-muted">
          Products that are live on the web — click any card to open the site.
        </p>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liveProjects.map((project) => (
            <LiveCard key={project.url} project={project} />
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}

export default LiveProjects;
