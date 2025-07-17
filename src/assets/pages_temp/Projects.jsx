
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with product catalog, cart system, and secure checkout. Built with React, Node.js, and Stripe integration.',
      image: 'https://img.freepik.com/free-vector/gradient-e-commerce-logo-collection_23-2148964598.jpg',
      link: '#',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Developer Portfolio',
      description: 'Modern responsive portfolio showcasing my work with smooth animations and dark mode. Built with React and Tailwind CSS.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVTCNB3SmBsIwsSpr--BxJ9-GOziHWyUvZA&s',
      link: '#',
      tags: ['React', 'Tailwind', 'Framer Motion']
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with 5-day forecasts, animated weather icons, and location search. Integrated with OpenWeather API.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5ZAW0T-gfSRyGLr0ImYvfbNz4dVPYh86tw&s',
      link: '#',
      tags: ['React', 'API', 'Chart.js']
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Featured Projects</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Selected works showcasing my skills and experience
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl mx-4 md:mx-16 lg:mx-24"
          >
            <div className="flex flex-col md:flex-row">
             
              <div className="p-6 md:p-8 w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium
                  hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
