// src/pages/profile.tsx
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="home" className="relative flex items-center justify-start w-screen h-screen text-center bg-[#EBE9E9]" data-aos="fade-up">
      <div className="w-1/2 flex justify-center md:justify-left mt-8 md:mt-0" data-aos="zoom-in" data-aos-delay="300">
        <div className="drop-shadow-2xl mr-14 w-80 h-80 mb-20 rounded-full overflow-hidden shadow-lg">
          <img src="/assets/profile.png" alt="Dzaky" className="w-full h-full bg-center bg-cover" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center mb-20 w-[70vh] h-96" data-aos="fade-right" data-aos-delay="600">
        <h2 className="text-[3vh] font-medium text-start text-[#2D2D2D] mb-2">Hi I'am</h2>
        <h1 className="text-[5vh] font-bold whitespace-nowrap text-start text-[#FCB07E] mb-2">Muhamad Dzaky Supriatna</h1>
        <p className="text-[2vh] font-regular text-start text-[#2D2D2D] mt-2">Passionate and enthusiastic student of designing attractive and engaging user interfaces.</p>
      </div>
    </section>
  );
};

export default Profile;
