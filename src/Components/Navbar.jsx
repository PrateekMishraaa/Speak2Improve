
import React, { useState } from 'react';
import { BookOpen, Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path:'/', label: "Home" },
    { path:'/curriculum', label: "Curriculum" },
    { path:'/tenses', label: "Tenses" },
    { path:'/success', label: "Success" }
  ];

  const handleNavigate=()=>{
    navigate('/register')
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl text-slate-800 dark:text-white">
              Speak 2 <span className="text-indigo-600 dark:text-indigo-400">Improve</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-slate-600 cursor-pointer dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {link.label}
              </Link>
            ))}
            <button onClick={handleNavigate} className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition shadow-md flex items-center gap-2">
              Start Free <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-4 px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full w-full">
                Start Learning
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;