// src/utils/aosInit.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',  // Efek easing
      offset: 100,  // Offset animasi dari viewport
      once: true,  // Animasi hanya berjalan sekali
    });
  }, []);

  return null;
};

export default AosInit;
