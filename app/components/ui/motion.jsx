'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/**
 * Hook: true ketika elemen pernah masuk viewport.
 * Memakai IntersectionObserver DENGAN fallback: jika observer tidak tersedia
 * atau elemen sudah terlihat saat mount, langsung set visible. Ini mencegah
 * konten "stuck" tak terlihat (masalah umum whileInView).
 */
function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setInView(true);
      return;
    }
    // Fallback: kalau IntersectionObserver tidak ada, tampilkan saja.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    // Jika elemen sudah dalam viewport saat mount, langsung tampilkan.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    // Jaring pengaman: apa pun yang terjadi, tampilkan setelah 1.2s.
    const t = setTimeout(() => setInView(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, [ref]);

  return inView;
}

/**
 * Pembungkus reveal yang ANDAL: animasi fade-up saat masuk viewport,
 * dengan fallback agar konten tidak pernah tersembunyi permanen.
 */
export function Reveal({
  children,
  className = '',
  variants = fadeUp,
  delay = 0,
  as = 'div',
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Grup dengan efek stagger untuk anak-anaknya.
 */
export function StaggerGroup({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export { motion };
