// src/pages/projects.tsx
import React, { useState } from 'react';
import Project1 from '../assets/projects/project1.png';
import Project2 from '../assets/projects/project2.png';
import Project3 from '../assets/projects/project3.png';
import Project4 from '../assets/projects/project4.png';

const projects = [Project1, Project2, Project3, Project4];
const descriptions = ["Project 1", "Project 2", "Project 3", "Project 4"];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="h-screen">
      <section className="flex flex-col items-center justify-center h-screen bg-[#1E1E1E] px-8" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#FCB07E] mb-8">My Project</h2>
        <div className="relative flex items-center">
          <button
            onClick={handlePrevious}
            className="absolute left-[-50px] w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-[#3581B8] text-[#3581B8] hover:bg-[#3581B8] hover:text-white transition-all duration-300"
            data-aos="fade-left"
          >
            &lt;
          </button>

          <div className="w-full max-w-5xl aspect-video bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden shadow-lg" data-aos="zoom-in">
            <img src={projects[currentIndex]} alt={`Project ${currentIndex + 1}`} className="w-full h-full object-contain" />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-[-50px] w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-[#3581B8] text-[#3581B8] hover:bg-[#3581B8] hover:text-white transition-all duration-300"
            data-aos="fade-right"
          >
            &gt;
          </button>
        </div>
        <p className="text-white mt-4">{descriptions[currentIndex]}</p>
      </section>
    </section>
  );
};

export default Projects;
