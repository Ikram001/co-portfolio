import React from "react";

function Home(){
  return (
    <div className="bg-white text-black"> {/* Background made white here */}
      {/* Hero Section */}
      <section className="text-left pt-32 pb-24 px-4 md:px-20 bg-white text-black">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 font-sans">
      <span className="text-gray-500">I'm</span> Eihab Khan
    </h1>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
      A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality.
      I specialize in designing and building modern mobile and web-based apps.
    </p>
    <div className="flex gap-4 flex-wrap">
      <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
        See my Resume
      </button>
      <button className="border border-black px-6 py-3 rounded hover:bg-gray-200 transition">
        Get in touch
      </button>
    </div>
  </div>
</section>


      {/* Selected Work */}
<section className="max-w-6xl mx-auto px-4 py-20">
  <h2 className="text-3xl font-semibold mb-12 text-black">Selected Work</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v3G3rowZDgi2vUGHPlcV_ylmjHjOn2INyg&s"
        alt="Token Sale Platform"
        className="rounded-lg mb-4 w-full h-56 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-black">Token Sale Platform</h3>
      <p className="text-gray-500 mb-2">
        Built a token sale platform with dashboard UI and responsive design.
      </p>
      <p className="text-sm text-gray-500">React, Tailwind CSS</p>
    </div>

    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        alt="Open Source Docs"
        className="rounded-lg mb-4 w-full h-56 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-black">Open Source Docs</h3>
      <p className="text-gray-500 mb-2">
        Created reusable docs using Markdown and Storybook.
      </p>
      <p className="text-sm text-gray-500">Markdown, Storybook</p>
    </div>
     <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9jRDT1sYUyVEnQvripG0O8C0jdq-gcpCWw&s"
        alt="Token Sale Platform"
        className="rounded-lg mb-4 w-full h-56 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-black">React Documentation</h3>
      <p className="text-gray-500 mb-2">
        Built a token sale platform with dashboard UI and responsive design.
      </p>
      <p className="text-sm text-gray-500">React, Tailwind CSS</p>
    </div>
  </div>
</section>


      {/* Get to Know Me */}
<section className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Get to Know Me</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center bg-gray-100 text-black rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-serif font-bold mb-2">About Me</h2>
        <h4 className="text-gray-600 mb-4">Who I am and what I do</h4>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaygPgtROWQbux82QCWACloREjQA2CWCORQ&s"
          alt="Bookshelf"
          className="rounded-md w-full h-48 object-cover"
        />
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center bg-gray-100 text-black rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-serif font-bold mb-2">NotBook</h2>
        <h4 className="text-gray-600 mb-4">My thoughts, insights and reflection</h4>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUUxoZ8cTQ0XiNI0SO7WA9TqCeqvcjYw-FQ&s"
          alt="NoteBOOK"
          className="rounded-md w-full h-48 object-cover"
        />
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center bg-gray-100 text-black rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-serif font-bold mb-2">BookShelf</h2>
        <h4 className="text-gray-600 mb-4">Books and Piece of wisdom I 've enjoyed reading </h4>
        <img
          src="https://images.timesnownews.com/thumb/msid-114448999,thumbsize-1317425,width-1280,height-720,resizemode-75/114448999.jpg"
          alt="Design System"
          className="rounded-md w-full h-48 object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* Let's Work Together */}
      <section className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="text-left">
      <h2 className="text-3xl font-bold mb-2">Let’s work together</h2>
      <p className="text-gray-600">Want to discuss an opportunity to create something great?
        I am ready when you are. </p>
    </div>
    <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
      Get in touch
    </button>

  </div>
</section>

{/* Footer */}
<footer className="bg-white border-t border-gray-800 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 py-8">
    
    {/* Left Side */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl font-serif font-black">[e]</h1>
      <p className="text-gray-600">Thanks for stopping by</p>
      <p className="text-sm text-gray-500 mt-4">&copy; 2025 Eihab Khan. All rights reserved.</p>
    </div>

    {/* Right Side - Two Lists */}
    <div className="flex flex-col md:flex-row gap-12 text-left">
      
      {/* Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Links</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li><a href="/about" className="hover:text-black">About</a></li>
          <li><a href="/projects" className="hover:text-black">Projects</a></li>
          <li><a href="/contact" className="hover:text-black">Contact</a></li>
          <li><a href="/techstack" className="hover:text-black">Tech Stack</a></li>
        </ul>
      </div>

      {/* Elsewhere Section */}
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

    </div>
  );
};

const WorkCard = ({ title, description, tech, image }) => (
  <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl transition-all duration-300">
    <img src={image} alt={title} className="rounded-lg mb-4 w-full h-56 object-cover" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-2">{description}</p>
    <p className="text-sm text-gray-500">{tech}</p>
  </div>
);

export default Home;