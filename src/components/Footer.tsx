import React from 'react';
import { Heart, ArrowUp, Code } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-4 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <button
            onClick={scrollToTop}
            className={`group p-4 rounded-full transition-all duration-300 hover:scale-125 hover:-translate-y-2 cursor-hover-scale ${
              darkMode 
                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-gray-700/50' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-300/50'
            }`}
          >
            <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
          </button>
          
          <div className="text-center cursor-hover-scale">
            <div className="flex items-center justify-center mb-2">
              <Code className={`h-5 w-5 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <p className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Sudipta Mandal
              </p>
            </div>
            <p className={`text-sm flex items-center justify-center ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Made with{' '}
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;