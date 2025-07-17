

import React from 'react';

const ProjectCard = ({ title, description, image, link, ctaText = "View Project →" }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-zinc-800 my-8 mx-4 md:mx-0">
     
      <div className="md:hidden w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
     
      <div className="md:flex">
        <div className="p-6 md:w-1/2 md:pr-4 md:pl-8 md:py-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
          >
            {ctaText}
          </a>
        </div>
        
       
        <div className="hidden md:block md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
