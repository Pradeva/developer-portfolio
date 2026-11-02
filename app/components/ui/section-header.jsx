'use client';

import { Reveal } from './motion';

/**
 * Header section bergaya editorial: nomor + label kecil beraksen, lalu judul
 * besar. Memberi kesan "mewah" lewat hierarki tipografi & whitespace.
 */
export default function SectionHeader({ index, label, title, align = 'left' }) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <div
        className={`flex items-center gap-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        {index && (
          <span className="font-mono text-sm text-accent">{index}</span>
        )}
        <span className="h-px w-8 bg-accent/60" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tightest text-content sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
