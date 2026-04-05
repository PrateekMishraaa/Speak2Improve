// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12 px-4 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto text-center text-slate-500 dark:text-slate-400">
        <div className="flex justify-center space-x-6 mb-6">
          <span>Simple Present</span>
          <span>·</span>
          <span>Present Continuous</span>
          <span>·</span>
          <span>Present Perfect</span>
          <span>·</span>
          <span>Past Perfect</span>
        </div>
        <p>© 2026 EnglishMastery — A thousand miles journey starts with first step. Mentor-led curriculum.</p>
        <p className="text-sm mt-2">Do / Does · Can / Could · Must / Should · Used to & Be used to</p>
      </div>
    </footer>
  );
};

export default Footer;