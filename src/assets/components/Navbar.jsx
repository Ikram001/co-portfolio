import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-black/60 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-black dark:text-white">
          [e]
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>

          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="hover:text-black dark:hover:text-white"
            >
              More ▾
            </button>
            {moreOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border rounded shadow-md w-40 z-10">
                <Link to="/bookshelf" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Bookshelf</Link>
                <Link to="/techstack" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Tech Stack</Link>
                <Link to="/ui-kit" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">This UI Kit</Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">✖</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">🐙</a>
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            title="Toggle Theme"
          >
            ☀️ / 🌙
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
