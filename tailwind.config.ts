import type { Config } from 'tailwindcss';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add your custom theme extensions here if needed
    }
  },
  plugins: [containerQueries],
} satisfies Config;
