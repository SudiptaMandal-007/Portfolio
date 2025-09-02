import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers to implement new features and optimize performance.',
      achievements: [
        'Improved page load times by 40% through code optimization',
        'Implemented responsive design for mobile compatibility',
        'Contributed to the company\'s design system documentation',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
    },
    {
      title: 'Web Development Freelancer',
      company: 'Self-Employed',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      description: 'Providing web development services to small businesses and startups. Specializing in modern web technologies and responsive design.',
      achievements: [
        'Delivered 10+ projects on time and within budget',
        'Maintained 100% client satisfaction rate',
        'Built long-term relationships with recurring clients',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      title: 'Teaching Assistant',
      company: 'University Computer Science Dept',
      location: 'On-Campus',
      period: 'Sep 2023 - Dec 2023',
      description: 'Assisted professors in teaching Data Structures and Algorithms course. Helped students understand complex concepts and debug their code.',
      achievements: [
        'Mentored 50+ students in programming fundamentals',
        'Organized coding workshops and study sessions',
        'Received excellent feedback from students and faculty',
      ],
      technologies: ['C++', 'Python', 'Algorithm Design', 'Code Review'],
    },
  ];

  const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => (
    <div className="relative">
      {/* Timeline line */}
      <div className={`absolute left-4 top-0 w-0.5 h-full ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      } ${index === experiences.length - 1 ? 'hidden' : ''}`}></div>
      
      {/* Timeline dot */}
      <div className={`absolute left-2 top-6 w-4 h-4 rounded-full border-4 ${
        darkMode 
          ? 'bg-gray-900 border-blue-500' 
          : 'bg-white border-blue-600'
      }`}></div>
      
      <div className={`ml-12 mb-12 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${
        darkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}>
        <div className="mb-4">
          <h3 className={`text-xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {experience.title}
          </h3>
          
          <div className="flex flex-wrap gap-4 mb-3">
            <div className={`flex items-center text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <Building className="h-4 w-4 mr-1" />
              {experience.company}
            </div>
            <div className={`flex items-center text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <MapPin className="h-4 w-4 mr-1" />
              {experience.location}
            </div>
            <div className={`flex items-center text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <Calendar className="h-4 w-4 mr-1" />
              {experience.period}
            </div>
          </div>
        </div>
        
        <p className={`text-sm mb-4 leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {experience.description}
        </p>
        
        <div className="mb-4">
          <h4 className={`font-medium mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Key Achievements:
          </h4>
          <ul className={`text-sm space-y-1 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My professional journey and key contributions
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;