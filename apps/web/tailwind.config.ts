import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic colors for the Bible translation app
        source: {
          hebrew: '#8B4513',
          greek: '#1E40AF',
          aramaic: '#7C3AED',
        },
        confidence: {
          high: '#22C55E',
          medium: '#EAB308',
          low: '#F97316',
          uncertain: '#EF4444',
        },
        layer: {
          literal: '#3B82F6',
          idiomatic: '#10B981',
          literary: '#8B5CF6',
        },
      },
      fontFamily: {
        hebrew: ['SBL Hebrew', 'Times New Roman', 'serif'],
        greek: ['SBL Greek', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
