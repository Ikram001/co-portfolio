import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">A little bit about me</h1>
        <p className="text-gray-500 text-lg mb-12">Who I am and what I do.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest">Who I Am</h3>
              <p className="text-base mt-2">
                I’m Eihab (Pronounced “Ee-hab”) a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest">What I Do</h3>
              <p className="text-base mt-2">
                With two years of invaluable experience in my role at Harmony Technology — a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest">What I Did</h3>
              <p className="text-base mt-2">
                Before delving into the realm of front-end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaygPgtROWQbux82QCWACloREjQA2CWCORQ&s" alt="Eihab Khan"
    className="w-60 h-72 object-cover rounded-lg shadow-md mb-6"/>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 flex items-center gap-2">
              <span></span> Get in touch
            </button>
          </div>
        </div>

        <div className="mt-20 space-y-6 text-base text-gray-600 dark:text-gray-400">
          <p>
            Feel free to reach out via <a href="#" className="underline">e-mail</a>,
            or follow me on <a href="#" className="underline">Twitter</a>.
            Want to see where I’ve worked? Check out my <a href="#" className="underline">Resume</a>,
            or connect with me on <a href="#" className="underline">LinkedIn</a>.
          </p>

          <p className="text-3xl font-signature">Eihab Khan</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;