// components/CallToAction.jsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center bg-indigo-600 dark:bg-indigo-700 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-4">Let's begin first step</h2>
        <p className="text-indigo-100 text-lg mb-8">
          Join thousands of learners mastering English grammar step by step — from Simple Present to advanced 'used to' structures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition shadow-md">
            Start Free Course
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500 transition">
            Watch Overview Video
          </button>
        </div>
        <p className="text-indigo-200 text-sm mt-6">
          ✓ Full tenses table ✓ Modal exercises ✓ Passive voice workshops ✓ Mentor support every Saturday
        </p>
      </div>
    </section>
  );
};

export default CallToAction;