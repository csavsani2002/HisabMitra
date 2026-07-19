/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F1416',
        surface: '#161D20',
        surface2: '#1C262A',
        paper: '#EDE6D3',
        paperdim: '#B7B096',
        thread: '#C1483B',
        threaddim: '#7A2E26',
        brass: '#C79A4B',
        ledger: '#4FA37A',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'rule-lines':
          'repeating-linear-gradient(to bottom, transparent, transparent 39px, rgba(237,230,211,0.05) 40px)',
      },
    },
  },
  plugins: [],
};
