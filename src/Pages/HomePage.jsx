// HomePage.jsx - Main component
import React, { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import HeroSection from '../Components/HeroSection';
import CurriculumSection from '../Components/CurriculamSection.jsx';
import TensesSection from '../Components/TensesSection.jsx';
import AdvancedGrammarSection from '../Components/AdvancedGrammarSection.jsx';
import ActivePassiveSection from '../Components/ActivePassiveSection.jsx';
import TestimonialsSection from '../Components/TestimonialsSection.jsx';
import CallToAction from '../Components/CallToAction.jsx';
import Footer from '../Components/Footer.jsx';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection />
        <CurriculumSection />
        <TensesSection />
        <AdvancedGrammarSection />
        <ActivePassiveSection />
        <TestimonialsSection />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;