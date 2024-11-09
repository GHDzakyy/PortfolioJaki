// src/pages/about.tsx
import React from 'react';
import FigmaIcon from '../assets/figma.svg';
import GithubIcon from '../assets/github.svg';
import AdobeIcon from '../assets/adobeillustrator.svg';
import InstagramIcon from '../assets/instagram.svg';

const About: React.FC = () => {
  return (
    <section id="about" className="h-screen">
      <section className="flex justify-between items-center h-screen bg-[#FCB07E] px-28" data-aos="fade-up">
        <div className="w-1/2" data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-4xl font-bold text-[#3581B8]">About <span className="text-[#2D2D2D]">me</span></h2>
          <p className="text-[#2D2D2D] mt-4">
          Hi! I am a student who is currently studying and exploring the field of UI/UX Design. I am interested in how design can create a better experience for users. Even though I am still a beginner, I am excited to continue to develop and explore creative ways in designing interfaces that are intuitive and functional. I believe that good design can make a big difference, and I want to be part of that journey. And this is my skills, social media, and my GitHub.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-14">
          <a href="#" className="group" data-aos="zoom-in" data-aos-delay="300">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#FCB07E] shadow-lg transition-colors duration-300 group-hover:bg-[#FF9B5A]">
              <img src={FigmaIcon} alt="Figma" className="w-14 h-14" />
            </div>
          </a>
          <a href="https://github.com/GHDzakyy" target="_blank" rel="noopener noreferrer" className="group" data-aos="zoom-in" data-aos-delay="400">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#FCB07E] shadow-lg transition-colors duration-300 group-hover:bg-[#FF9B5A]">
              <img src={GithubIcon} alt="Github" className="w-14 h-14" />
            </div>
          </a>
          <a href="#" className="group" data-aos="zoom-in" data-aos-delay="500">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#FCB07E] shadow-lg transition-colors duration-300 group-hover:bg-[#FF9B5A]">
              <img src={AdobeIcon} alt="Adobe Illustrator" className="w-14 h-14" />
            </div>
          </a>
          <a href="https://instagram.com/_dzakysupp" target="_blank" rel="noopener noreferrer" className="group" data-aos="zoom-in" data-aos-delay="600">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#FCB07E] shadow-lg transition-colors duration-300 group-hover:bg-[#FF9B5A]">
              <img src={InstagramIcon} alt="Instagram" className="w-14 h-14" />
            </div>
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
