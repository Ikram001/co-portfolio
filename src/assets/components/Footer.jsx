import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-800 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 py-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-serif font-black">[e]</h1>
          <p className="text-gray-600">Thanks for stopping by</p>
          <p className="text-sm text-gray-500 mt-4">&copy; 2025 Eihab Khan. All rights reserved.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><a href="/about" className="hover:text-black">About</a></li>
              <li><a href="/projects" className="hover:text-black">Projects</a></li>
              <li><a href="/contact" className="hover:text-black">Contact</a></li>
              <li><a href="/techstack" className="hover:text-black">Tech Stack</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Elsewhere</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><a href="https://linkedin.com" target="_blank" className="hover:text-black">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" className="hover:text-black">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" className="hover:text-black">Twitter</a></li>
              <li><a href="https://discord.com" target="_blank" className="hover:text-black">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
