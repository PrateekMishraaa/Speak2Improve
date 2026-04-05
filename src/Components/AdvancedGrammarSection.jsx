// components/AdvancedGrammarSection.jsx
import React from 'react';
import { Zap, MessageCircle } from 'lucide-react';

const AdvancedGrammarSection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Modals · Conjunctions · Advanced Patterns</h2>
          <p className="text-slate-600 dark:text-slate-300">From Can/Could to 'used to' structures — complete command</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" /> Core Modals
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Can", "Could", "Should", "Must", "Have to", "Needn't", "Don't have to", "Don't need to"].map((m, i) => (
                <span key={i} className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">{m}</span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-500" /> Negative Forms
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Proper negation patterns:</p>
            <ul className="space-y-1 text-slate-700 dark:text-slate-200">
              <li>• must not / shouldn't / can't</li>
              <li>• don't have to / needn't</li>
              <li>• won't / shan't</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white">Used to & Habits</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">used to do</span> — past habits</p>
              <p><span className="font-semibold">be used to doing</span> — accustomed to</p>
              <p><span className="font-semibold">get used to doing</span> — become accustomed</p>
              <div className="mt-3 text-indigo-600 dark:text-indigo-400 text-xs">
                + ever use to / ever get used to structures
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedGrammarSection;