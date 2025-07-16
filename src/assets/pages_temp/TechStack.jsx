// src/assets/components/TechStackSection.jsx
import React from "react";
import TechCard from "../components/TechCard";

const devTools = [
  { name: "Figma", category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Next.js", category: "Web Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TailwindCSS", category: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "GitHub", category: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Warp", category: "Terminal", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/warp.svg" },
  { name: "Vercel", category: "Deployment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "VSCode", category: "Editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Framer Motion", category: "Animation", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/framermotion.svg" },
  { name: "TypeScript", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React Hook Form", category: "Forms", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reacthookform.svg" },
  { name: "React Query", category: "Data", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reactquery.svg" },
  { name: "Zustand", category: "State", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zustand.svg" },
  { name: "Zod", category: "Validation", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zod.svg" },
  { name: "Expo", category: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
  { name: "Sanity", category: "CMS", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sanity.svg" },
];

const games = [
  { name: "Valorant", category: "FPS", icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/Valorant_logo_-_pink_color_version.svg" },
  { name: "Elden Ring", category: "RPG", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/eldenring.svg" },
  { name: "Minecraft", category: "Sandbox", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/minecraft/minecraft-original.svg" },
  { name: "Fortnite", category: "Battle Royale", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/fortnite.svg" },
];

const hardware = [
  { name: "MacBook Pro M1", category: "Laptop", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/macbook.svg" },
  { name: "Logitech MX Master 3", category: "Mouse", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/logitech.svg" },
  { name: "Keychron K6", category: "Keyboard", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/keychron.svg" },
  { name: "LG UltraFine 4K", category: "Monitor", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lg.svg" },
];

const TechStackSection = () => (
  <section className="py-12 px-4 md:px-12 lg:px-24 bg-white dark:bg-black transition-colors duration-300">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
      My Setup & Favorites
    </h2>
    <p className="text-gray-700 dark:text-gray-300 mb-10">
      The tools, games, and hardware I use every day.
    </p>

    <Section title="Dev & Design" items={devTools} />
    <Section title="Games" items={games} />
    <Section title="Hardware" items={hardware} />
  </section>
);

const Section = ({ title, items }) => (
  <>
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12 last:mb-0">
      {items.map(item => (
        <TechCard key={item.name} {...item} />
      ))}
    </div>
  </>
);

export default TechStackSection;
