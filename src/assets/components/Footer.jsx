import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-800 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 py-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-serif font-black text-black dark:text-white">[e]</h1>
          <p className="text-gray-600 dark:text-gray-300">Thanks for stopping by</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            &copy; 2025 Eihab Khan. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Links</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li><a href="/about" className="hover:text-black dark:hover:text-white">About</a></li>
              <li><a href="/projects" className="hover:text-black dark:hover:text-white">Projects</a></li>
              <li><a href="/contact" className="hover:text-black dark:hover:text-white">Contact</a></li>
              <li><a href="/techstack" className="hover:text-black dark:hover:text-white">Tech Stack</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Elsewhere</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li><a href="https://linkedin.com" target="_blank" className="hover:text-black dark:hover:text-white">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" className="hover:text-black dark:hover:text-white">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" className="hover:text-black dark:hover:text-white">Twitter</a></li>
              <li><a href="https://discord.com" target="_blank" className="hover:text-black dark:hover:text-white">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
