import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
// const withMT = require("@material-tailwind/html/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.plugin(),
  ],
  theme: {
    extend: {
      colors: {
        'tosca': '#2d5a7b',
        'army': '#4B6B35',
        'red-wine': '#A7282E',
      },
      h2: {
        'accordion': {
          width: '100%'
        }
      }
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
