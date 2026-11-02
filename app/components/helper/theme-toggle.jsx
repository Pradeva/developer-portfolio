'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

// Tombol toggle tema dark/light. Dibungkus pengecekan "mounted" agar aman
// dari mismatch hydration (tema baru diketahui di client).
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme !== 'light';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-content transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      {mounted && isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
