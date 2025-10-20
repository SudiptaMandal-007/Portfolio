import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse cursor-hover-scale ${darkMode ? 'bg-blue-600' : 'bg-blue-400'
          }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse delay-1000 cursor-hover-scale ${darkMode ? 'bg-purple-600' : 'bg-purple-400'
          }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 animate-spin-slow cursor-hover-scale ${darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-300 to-purple-300'
          }`}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="animate-fade-in-up">

          <div className="flex justify-center mb-2">
            <div className={`p-2 rounded-full cursor-hover-scale backdrop-blur-sm ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'
              }`}>
              <img
                src={darkMode ? "/img/pic-d.png" : "/img/pic.png"}
                alt="Header"
                className="w-24 object-contain rounded-full"
              />
            </div>
          </div>



          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 cursor-hover-scale ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Sudipta Mandal
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className={`h-6 w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} animate-pulse`} />
            <p className={`text-xl sm:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Fresher CSE Student & Aspiring Developer
            </p>
            <Sparkles className={`h-6 w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} animate-pulse delay-500`} />
          </div>

          <p className={`text-lg mb-12 max-w-3xl mx-auto leading-relaxed cursor-hover-scale ${darkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
            Passionate about creating innovative solutions and building amazing web experiences.
            Currently complete Computer Science Engineering with a focus on modern web technologies
            and software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/Resume/Sudipta-Resume.pdf"
              download
              className="group relative inline-block"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 cursor-hover-scale">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </a>


            <button
              onClick={scrollToAbout}
              className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 hover:scale-110 cursor-hover-scale ${darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-500 hover:text-blue-400'
                : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600'
                }`}
            >
              Explore My Work
              <ChevronDown className="inline-block ml-2 h-5 w-5 group-hover:animate-bounce" />
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/SudiptaMandal-007"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-full transition-all duration-300 hover:scale-125 hover:-translate-y-2 cursor-hover-scale ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-700/50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-lg hover:shadow-gray-300/50'
                }`}
            >
              <Github className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/sudipta-mandal-267907223/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-full transition-all duration-300 hover:scale-125 hover:-translate-y-2 cursor-hover-scale ${darkMode
                ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/20'
                : 'text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-lg hover:shadow-blue-300/50'
                }`}
            >
              <Linkedin className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="mailto:mandalsudipta968@gmail.com"
              className={`group p-4 rounded-full transition-all duration-300 hover:scale-125 hover:-translate-y-2 cursor-hover-scale ${darkMode
                ? 'text-gray-400 hover:text-green-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-green-500/20'
                : 'text-gray-600 hover:text-green-600 hover:bg-white hover:shadow-lg hover:shadow-green-300/50'
                }`}
            >
              <Mail className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-transform duration-300 cursor-hover-scale ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;