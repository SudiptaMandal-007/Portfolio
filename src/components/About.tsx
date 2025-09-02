import React from 'react';
import { Code, Users, Target, Award, Heart, Zap, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const interests = [
    { icon: Code, name: 'Web Development', color: 'text-blue-500' },
    { icon: Zap, name: 'Problem Solving', color: 'text-yellow-500' },
    { icon: Heart, name: 'Open Source', color: 'text-red-500' },
    { icon: Target, name: 'Learning', color: 'text-green-500' },
  ];

  const trainings = [
    {
      title: 'Node Fundamental and GPT Model Integration',
      provider: 'Webguru Infosys',
      duration: '2 months',
      date: 'Aug 2024 - Oct 2024',
      location: 'Solt Lake, Sector-V',
      description: ' Gained hands-on experience with Node.js and explored integration with AI models (GPT).',
      skills: ['Node.js','Express.js', 'MongoDB'],
      certificate: 'https://drive.google.com/file/d/1bS9PjdPp2Jw5RsRKIL23uapy9Sm30d1V/view?usp=sharing'
    },
  ];

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 animate-pulse ${
          darkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-pulse delay-1000 ${
          darkMode ? 'bg-purple-600' : 'bg-purple-400'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient ${
            darkMode ? '' : ''
          }`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate CSE student on a journey to master modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-2">
          {/* Profile Image */}
          <div className="relative group">
            <div className={`w-96 absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
            <div className={`w-96 relative p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
              <img
                src={darkMode ? "/img/header-pic-d.png" : "/img/header-pic.png"}
                alt="Sudipta Mandal"
                className="w-96 object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate Computer Science Engineering student with a strong foundation in 
                web development and software engineering. My journey began with curiosity about 
                how technology works, and it has evolved into a deep love for creating digital solutions.
              </p>              
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                As a fresher, I'm currently pursuing my degree while actively working on projects 
                that bridge theoretical knowledge with practical applications. I specialize in 
                full-stack development with modern technologies like React, Node.js, and various 
                web frameworks.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                My Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <div
                    key={interest.name}
                    className={`group flex items-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                      darkMode 
                        ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50' 
                        : 'bg-gray-50/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300/50'
                    }`}
                  >
                    <interest.icon className={`h-6 w-6 mr-3 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Training Section */}
        <div>
          <div className="text-center mb-6 mt-16">
            <h3 className={`text-4xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Training & Certifications
            </h3>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Continuous learning through specialized training programs and certifications
            </p>
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> */}
          <div className="grid place-items-center max-w-2xl mx-auto">
            {trainings.map((training, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50' 
                    : 'bg-gray-50/80 backdrop-blur-sm border border-gray-200 hover:border-purple-300/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                    darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                  }`}>
                    <Award className={`h-8 w-8 ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    } group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                  <a
                    href={training.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-blue-900/50 text-blue-400 hover:bg-blue-800/50' 
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Certificate
                  </a>
                </div>

                <h4 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {training.title}
                </h4>

                <div className={`space-y-2 mb-4 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {training.provider}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {training.date} ({training.duration})
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {training.location}
                  </div>
                </div>

                <p className={`text-sm mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {training.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {training.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;