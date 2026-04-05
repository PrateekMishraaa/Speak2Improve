// components/ActivePassiveSection.jsx
import React from 'react';
import { Layers, ChevronRight } from 'lucide-react';

const ActivePassiveSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Active & Passive Voice</h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-md">
                Present tense transformations + Articles, Participles, Cultural context integrated.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                  Active: She writes a letter
                </span>
                <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Passive: A letter is written
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg w-full md:w-80">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Articles & Participles
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Definite, indefinite, zero article — participles as adjectives and in perfect tenses.
              </p>
              <button className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                Explore grammar tables <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivePassiveSection;