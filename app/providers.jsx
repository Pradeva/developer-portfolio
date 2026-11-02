'use client';

import { ThemeProvider } from 'next-themes';

// Provider tema (dark/light) via next-themes.
// attribute="class" -> menambah class "dark"/"light" pada <html>,
// cocok dengan CSS variables & tailwind darkMode: "class".
export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
