import React from 'react';
// import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, Code, Globe } from 'lucide-react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Brainware University',
      location: 'Kolkata, India',
      period: '2021 - 2025',
      percentage: '82.25% & CGPA: 8.79/10',
      status: 'Completed',
      description: 'Specialized in Artificial Intelligence and Machine Learning (AIML)',
    },
    {
      degree: 'Higher Secondary Education (12th Grade)',
      institution: 'Rajnagar Biswambhar High School',
      location: 'Rajnagar, South 24 Parganas',
      period: '2019 - 2021',
      percentage: '82.6%',
      status: 'Completed',
      description: 'Completed with Science stream focusing on Physics, Chemistry, Mathematics and Biology.',
    },
  ];

  // const certifications = [
  //   {
  //     name: 'JavaScript Algorithms and Data Structures',
  //     issuer: 'freeCodeCamp',
  //     date: 'Nov 2024',
  //     credentialId: 'FCC-JS-123456',
  //     icon: Code,
  //   },
  //   {
  //     name: 'Responsive Web Design',
  //     issuer: 'freeCodeCamp',
  //     date: 'Oct 2024',
  //     credentialId: 'FCC-RWD-789012',
  //     icon: Globe,
  //   },
  //   {
  //     name: 'Introduction to Programming',
  //     issuer: 'Coursera',
  //     date: 'Sep 2024',
  //     credentialId: 'COURSERA-345678',
  //     icon: BookOpen,
  //   },
  // ];

  const EducationCard = ({ edu, index }: { edu: typeof education[0]; index: number }) => (
    <div 
      className={`group p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 mb-4 cursor-hover-scale ${
        darkMode 
          ? 'bg-gray-900 border border-gray-700 hover:border-blue-500/50' 
          : 'bg-white border border-gray-200 hover:border-blue-300/50'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 ${
            darkMode ? 'bg-blue-900/50' : 'bg-blue-100'
          }`}>
            <GraduationCap className={`h-8 w-8 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            } group-hover:rotate-12 transition-transform duration-300`} />
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {edu.degree}
            </h3>
            <p className={`text-lg font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {edu.institution}
            </p>
          </div>
        </div>
        <div className={`text-right text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <div className="flex items-center mb-1">
            <Calendar className="h-4 w-4 mr-1" />
            {edu.period}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {edu.location}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-6">
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
          darkMode 
            ? 'bg-green-900/50 text-green-400 border border-green-800' 
            : 'bg-green-100 text-green-800 border border-green-200'
        }`}>
          <Award className="h-4 w-4 mr-1" />
          Percentage: {edu.percentage}
        </div>
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
          edu.status === 'Currently Pursuing'
            ? darkMode 
              ? 'bg-blue-900/50 text-blue-400 border border-blue-800' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
            : darkMode 
              ? 'bg-purple-900/50 text-purple-400 border border-purple-800' 
              : 'bg-purple-100 text-purple-800 border border-purple-200'
        }`}>
          {edu.status}
        </div>
      </div>
      
      <p className={`text-sm mb-6 leading-relaxed ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {edu.description}
      </p>
    </div>
  );

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 cursor-hover-scale">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="mb-2">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;