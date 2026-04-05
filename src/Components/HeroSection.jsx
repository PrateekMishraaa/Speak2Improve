// components/HeroSection.jsx
import React from 'react';
import { Play, ArrowRight, Briefcase } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" /> Watch intro video first
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 dark:text-white mb-6 leading-tight">
            A Thousand Miles Journey<br />
            <span className="text-indigo-600 dark:text-indigo-400">Starts with First Step</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Master English tenses, modal verbs, and advanced grammar structures with our interactive, mentor-led curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition flex items-center justify-center gap-2">
              Begin First Step <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 dark:hover:bg-slate-700 transition">
              Explore Curriculum
            </button>
          </div>
        </div>

        {/* Mentor Badge */}
        <div className="flex justify-center mt-12">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg inline-flex items-center gap-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-3">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Your mentor & teacher</p>
              <p className="font-bold text-slate-800 dark:text-white">Professor English · Saturday sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;