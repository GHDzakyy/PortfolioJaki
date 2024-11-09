import React from 'react';
import Navbar from './components/navbar';
import Profile from './components/profile';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contacts';
import SmoothScroll from './components/smoothscroll';
import Aos from './utils/aosInit';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Aos />
      <SmoothScroll />
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
