import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="relative fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-black/60 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      {/* Radial Gradient Glow Behind Navbar */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[800px] h-[300px] rounded-full bg-gradient-radial from-purple-500 via-pink-500 to-orange-400 opacity-30 blur-3xl mt-[-150px]" />
      </div>

      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-black dark:text-white">
          [e]
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-2xl text-black dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/Notebook">Notebook</Link>
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
                <Link
                  to="/bookshelf"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Bookshelf
                </Link>
                <Link
                  to="/techstack"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Tech Stack
                </Link>
                <Link
                  to="/ui-kit"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  This UI Kit
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Social Icons + Theme */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmLTeTgasqNYDD4VtGG7ghE9NO-nNGGTQoQ&s"
              alt="LinkedIn"
              className="w-6 h-6 object-contain rounded-full"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✖
          </a>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s"
            alt="Custom Icon"
            className="w-6 h-6 object-contain rounded-full"
          />

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
            className="transition-transform hover:scale-110"
          >
            <img
              src={
                darkMode
                  ? "https://cdn-icons-png.flaticon.com/128/8637/8637690.png" // Sun
                  : "https://cdn-icons-png.flaticon.com/128/4489/4489231.png" // Moon
              }
              alt="Toggle Theme"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-2 bg-white dark:bg-black text-gray-700 dark:text-gray-300 text-sm font-medium">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/about" className="block">
            About
          </Link>
          <Link to="/projects" className="block">
            Projects
          </Link>
          <Link to="/Notebook" className="block">
            Notebook
          </Link>
          <Link to="/contact" className="block">
            Contact
          </Link>
          <div className="border-t pt-2">
            <Link to="/bookshelf" className="block">
              Bookshelf
            </Link>
            <Link to="/techstack" className="block">
              Tech Stack
            </Link>
            <Link to="/ui-kit" className="block">
              This UI Kit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
