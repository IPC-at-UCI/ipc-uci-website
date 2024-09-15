import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ipc-blue": "#103057",
        "ipc-yellow": "#FFD700",
        "ipc-white": "#FBFCF8",
        "ipc-gray": "#777B7E",
        "ipc-black": "#181818",
      },
    },
  },
  plugins: [],
};
export default config;
