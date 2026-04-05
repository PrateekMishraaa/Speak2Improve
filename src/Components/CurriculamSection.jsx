// components/CurriculumSection.jsx
import React from 'react';
import { Clock, Zap, Layers, BookOpen, CheckCircle } from 'lucide-react';

const modules = [
  {
    title: "Tenses Mastery",
    icon: <Clock className="w-6 h-6" />,
    topics: ["Simple Present", "Present Continuous", "Present Perfect", "Past Perfect", "Future in English"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Modal Verbs",
    icon: <Zap className="w-6 h-6" />,
    topics: ["Can/Could", "Should", "Must", "Have to", "Needn't", "Don't have to", "Don't need to"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Advanced Usage",
    icon: <Layers className="w-6 h-6" />,
    topics: ["Used to", "Be used to doing", "Get used to doing", "Ever use to", "Ever get used to"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Active & Passive",
    icon: <BookOpen className="w-6 h-6" />,
    topics: ["Active Voice Present", "Passive Voice Present", "Articles", "Participles", "Cultural Notes"],
    color: "from-green-500 to-emerald-500"
  }
];

const ModuleCard = ({ module }) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
    <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
    <div className="p-6">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} p-2.5 text-white mb-4`}>
        {module.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{module.title}</h3>
      <ul className="space-y-2">
        {module.topics.slice(0, 4).map((topic, tIdx) => (
          <li key={tIdx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            {topic}
          </li>
        ))}
        {module.topics.length > 4 && (
          <li className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-2">
            +{module.topics.length - 4} more
          </li>
        )}
      </ul>
    </div>
  </div>
);

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-20 px-4 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Complete Grammar Framework</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Based on proven methodology — from basics to advanced structures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, idx) => (
            <ModuleCard key={idx} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;