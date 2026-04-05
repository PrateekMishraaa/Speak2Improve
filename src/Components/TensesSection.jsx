// components/TensesSection.jsx
import React from 'react';
import { FileText, Award } from 'lucide-react';

const usageExamples = [
  { verb: "Do", example: "I do my homework every day." },
  { verb: "Does", example: "She does yoga every morning." }
];

const tenseTypes = [
  "Simple Present", "Simple Past", "Simple Future",
  "Present Continuous", "Present Perfect", "Past Perfect", "Future in English"
];

const TensesSection = () => {
  return (
    <section id="tenses" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-indigo-100 dark:bg-indigo-900/40 inline-block px-4 py-1 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-4">
              Core Focus
            </div>
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Tenses: The Backbone of English</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Simple Present, Present Continuous, Present Perfect, Past Perfect, and Future constructions — 
              we cover all with real-world examples, Do/Does distinctions, and interactive drills.
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md mb-6">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> Usage of Simple Present
              </h3>
              <div className="grid gap-3">
                {usageExamples.map((item, i) => (
                  <div key={i} className="border-l-4 border-indigo-400 pl-4">
                    <p className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{item.verb}</p>
                    <p className="text-slate-700 dark:text-slate-200">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {tenseTypes.map((tense, i) => (
                <span key={i} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">
                  {tense}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-indigo-600" /> Types of Tenses
            </h3>
            <div className="space-y-4">
              {["Simple Present · Do/Does", "Simple Past · Regular/Irregular", "Simple Future · Will/Going to", 
                "Present Continuous · Is/Am/Are + ing", "Present Perfect · Have/Has + V3", "Past Perfect · Had + V3"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/60 rounded-lg p-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-xl">
              <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                "Future in English" — detailed module on predictions, plans, and spontaneous decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TensesSection;