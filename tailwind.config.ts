import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0b1730",
        midnight: "#101f3d",
        gold: "#d8b46a",
        champagne: "#f5ead2",
        mist: "#eef3f8"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(0, 0, 0, 0.28)",
        glow: "0 0 0 1px rgba(216, 180, 106, 0.22), 0 18px 60px rgba(3, 10, 23, 0.35)"
      },
      backgroundImage: {
        "hero-photo":
          "linear-gradient(90deg, rgba(7,17,31,.96) 0%, rgba(7,17,31,.84) 45%, rgba(7,17,31,.38) 100%), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80')"
      }
    }
  },
  plugins: []
};

export default config;
