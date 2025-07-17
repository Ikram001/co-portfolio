import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A clean personal portfolio using React and Tailwind CSS.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVTCNB3SmBsIwsSpr--BxJ9-GOziHWyUvZA&s',
    link: 'https://co-portfolio-two.vercel.app/',
  },
  {
    title: 'Weather App',
    description: 'Get live weather updates using OpenWeather API.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5ZAW0T-gfSRyGLr0ImYvfbNz4dVPYh86tw&s', 
    link: 'https://co-portfolio-two.vercel.app/',
  },
  {
    title: 'E-Commerce Store',
    description: 'Frontend for an e-commerce store with React.',
    image: 'https://img.freepik.com/free-vector/gradient-e-commerce-logo-collection_23-2148964598.jpg',
    link: 'https://co-portfolio-two.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
