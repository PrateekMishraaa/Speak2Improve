import React, { useState } from 'react';
import { 
  Play, 
  BookOpen, 
  Clock, 
  Zap, 
  ChevronRight, 
  CheckCircle, 
  Menu, 
  X,
  Sun,
  Moon,
  Layers,
  FileText,
  Briefcase,
  MessageCircle,
  Award,
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Course modules based on the overview
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

  const tenseTypes = [
    "Simple Present", "Simple Past", "Simple Future",
    "Present Continuous", "Present Perfect", "Past Perfect", "Future in English"
  ];

  const usageExamples = [
    { verb: "Do", example: "I do my homework every day." },
    { verb: "Does", example: "She does yoga every morning." }
  ];

  const testimonials = [
    { name: "Sarah J.", text: "The tenses explanation finally made sense! I was stuck on Present Perfect for months.", role: "Intermediate Learner" },
    { name: "Marco R.", text: "Modal verbs section is incredibly clear. Should, must, have to — now I use them naturally.", role: "Business Professional" },
    { name: "Li Wei", text: "The 'used to' vs 'be used to' breakdown saved me. Great interactive approach!", role: "English Student" }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Main container with light/dark mode support */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <span className="font-bold text-xl text-slate-800 dark:text-white">English<span className="text-indigo-600 dark:text-indigo-400">Mastery</span></span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a>
                <a href="#curriculum" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Curriculum</a>
                <a href="#tenses" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Tenses</a>
                <a href="#testimonials" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Success</a>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition shadow-md flex items-center gap-2">
                  Start Free <ChevronRight className="w-4 h-4" />
                </button>
                <button onClick={toggleDarkMode} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-3">
                <button onClick={toggleDarkMode} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 dark:text-white">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-4 px-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600">Home</a>
                <a href="#curriculum" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600">Curriculum</a>
                <a href="#tenses" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600">Tenses</a>
                <a href="#testimonials" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600">Success</a>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-full w-full">Start Learning</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
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

        {/* Curriculum Overview Section */}
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
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
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
                        <li className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-2">+{module.topics.length - 4} more</li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tenses Deep Dive Section */}
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

        {/* Modal Verbs & Advanced Grammar */}
        <section className="py-20 px-4 bg-white dark:bg-slate-900/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Modals · Conjunctions · Advanced Patterns</h2>
              <p className="text-slate-600 dark:text-slate-300">From Can/Could to 'used to' structures — complete command</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-500" /> Core Modals</h3>
                <div className="flex flex-wrap gap-2">
                  {["Can", "Could", "Should", "Must", "Have to", "Needn't", "Don't have to", "Don't need to"].map((m, i) => (
                    <span key={i} className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">{m}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white flex items-center gap-2"><MessageCircle className="w-5 h-5 text-green-500" /> Negative Forms</h3>
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
                  <div className="mt-3 text-indigo-600 dark:text-indigo-400 text-xs">+ ever use to / ever get used to structures</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active / Passive & Articles */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Active & Passive Voice</h3>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md">Present tense transformations + Articles, Participles, Cultural context integrated.</p>
                  <div className="flex gap-2 mt-4">
                    <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">Active: She writes a letter</span>
                    <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Passive: A letter is written</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg w-full md:w-80">
                  <h4 className="font-bold mb-3 flex items-center gap-2"><Layers className="w-4 h-4" /> Articles & Participles</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Definite, indefinite, zero article — participles as adjectives and in perfect tenses.</p>
                  <button className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">Explore grammar tables <ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-white dark:bg-slate-800/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">Learner's Journey</h2>
              <p className="text-slate-600 dark:text-slate-300">What our students say about mastering tenses and modals</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1 text-yellow-400 mb-3">★★★★★</div>
                  <p className="text-slate-700 dark:text-slate-200 italic mb-4">“{t.text}”</p>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-white">{t.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - Final Step */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center bg-indigo-600 dark:bg-indigo-700 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">Let's begin first step</h2>
            <p className="text-indigo-100 text-lg mb-8">Join thousands of learners mastering English grammar step by step — from Simple Present to advanced 'used to' structures.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition shadow-md">Start Free Course</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500 transition">Watch Overview Video</button>
            </div>
            <p className="text-indigo-200 text-sm mt-6">✓ Full tenses table ✓ Modal exercises ✓ Passive voice workshops ✓ Mentor support every Saturday</p>
          </div>
        </section>

        {/* Footer */}
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
      </div>
    </div>
  );
};

export default HomePage;