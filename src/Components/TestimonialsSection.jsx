// components/TestimonialsSection.jsx
import React from 'react';

const testimonials = [
  { name: "Sarah J.", text: "The tenses explanation finally made sense! I was stuck on Present Perfect for months.", role: "Intermediate Learner" },
  { name: "Marco R.", text: "Modal verbs section is incredibly clear. Should, must, have to — now I use them naturally.", role: "Business Professional" },
  { name: "Li Wei", text: "The 'used to' vs 'be used to' breakdown saved me. Great interactive approach!", role: "English Student" }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
    <div className="flex items-center gap-1 text-yellow-400 mb-3">★★★★★</div>
    <p className="text-slate-700 dark:text-slate-200 italic mb-4">“{testimonial.text}”</p>
    <div>
      <p className="font-bold text-slate-800 dark:text-white">{testimonial.name}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-slate-800/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">Learner's Journey</h2>
          <p className="text-slate-600 dark:text-slate-300">What our students say about mastering tenses and modals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;