import React from "react";

function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="text-left pt-32 pb-24 px-4 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 font-sans">
            <span className="text-gray-500 dark:text-gray-400">I'm</span> Eihab Khan
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality.
            I specialize in designing and building modern mobile and web-based apps.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              See my Resume
            </button>
            <button className="border border-black dark:border-white px-6 py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            {
              title: "Token Sale Platform",
              desc: "Built a token sale platform with dashboard UI and responsive design.",
              tech: "React, Tailwind CSS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v3G3rowZDgi2vUGHPlcV_ylmjHjOn2INyg&s",
            },
            {
              title: "Open Source Docs",
              desc: "Created reusable docs using Markdown and Storybook.",
              tech: "Markdown, Storybook",
              image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "React Documentation",
              desc: "Built a token sale platform with dashboard UI and responsive design.",
              tech: "React, Tailwind CSS",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9jRDT1sYUyVEnQvripG0O8C0jdq-gcpCWw&s",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get to Know Me */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get to Know Me</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "About Me",
                desc: "Who I am and what I do",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaygPgtROWQbux82QCWACloREjQA2CWCORQ&s",
              },
              {
                title: "NotBook",
                desc: "My thoughts, insights and reflection",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUUxoZ8cTQ0XiNI0SO7WA9TqCeqvcjYw-FQ&s",
              },
              {
                title: "BookShelf",
                desc: "Books and Piece of wisdom I've enjoyed reading",
                image:
                  "https://images.timesnownews.com/thumb/msid-114448999,thumbsize-1317425,width-1280,height-720,resizemode-75/114448999.jpg",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <h2 className="text-2xl font-serif font-bold mb-2">{card.title}</h2>
                <h4 className="text-gray-600 dark:text-gray-300 mb-4">{card.desc}</h4>
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-md w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-2">Let’s work together</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Want to discuss an opportunity to create something great?
              I am ready when you are.
            </p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Get in touch
          </button>
        </div>
      </section>

    </div>
  );
}

export default Home;
