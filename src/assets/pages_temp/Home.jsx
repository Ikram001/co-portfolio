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
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Frontend</p>
                <p className="font-semibold">React</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-400">UI Design</p>
                <p className="font-semibold">Tailwind</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get to know me</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate frontend developer focused on clean UI and accessibility.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img src="https://images.unsplash.com/photo-1611078489935-d4b6b50d0f9e?auto=format&fit=crop&w=150&q=80" alt="Bookshelf" className="rounded-md" />
              <img src="https://images.unsplash.com/photo-1555617127-08fda3f9f4d5?auto=format&fit=crop&w=150&q=80" alt="Tech Stack" className="rounded-md" />
              <img src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=150&q=80" alt="Design System" className="rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="py-24 text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-3xl font-bold mb-4">Let’s work together</h2>
        <p className="text-gray-400 mb-6">Interested in working together? I’d love to hear from you.</p>
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">Say Hello</button>
      </section>

      {/* Footer */}
      <footer className="bg-white  border-t border-gray-800 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Work</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <p className="text-sm">&copy; 2025 Eihab Khan. All rights reserved.</p>
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