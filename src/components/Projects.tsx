import React from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
    title: 'QuickChat',
    description: 'QuickChat is a real-time chat app built using the MERN stack and Socket.io. It enables fast and smooth messaging between users.',
    image: '/img/pro/quickchat.png',
    technologies: ['React', 'Node.js','Express.js','Socket.io', 'MongoDb', 'Cloudinary', 'Tailwind Css'],
    liveUrl: 'https://chat-app-007.vercel.app/',
    githubUrl: 'https://github.com/SudiptaMandal-007/Chat-App.git',
    date: 'Oct 2025',
    featured: false,
  },
  {
    title: 'NewsIts-News Website',
    description: 'NewsIts is a simple news app that shows top headlines in different categories. It also has a light/dark mode option.',
    image: '/img/pro/news.png',
    technologies: ['React', 'Node.js','NewsApi','Bootstrap'],
    liveUrl: 'https://news-its.vercel.app/',
    githubUrl: 'https://github.com/SudiptaMandal-007/NewsIts.git',
    date: 'Dec 2024',
    featured: false,
  },
  {
    title: 'TextIts - Text Analyser',
    description: 'Textits is a helpful tool where users can change, count, or summarize their text easily with just a few clicks. It also has a light/dark mode switch.',
    image: '/img/pro/text.png',
    technologies: ['React', 'Node.js','Bootstrap'],
    liveUrl: 'https://text-its.vercel.app/',
    githubUrl: 'https://github.com/SudiptaMandal-007/TextIts.git',
    date: 'Nov 2024',
    featured: false,
  },
  {
    title: 'TestMate',
    description: 'TasteMate – an intuitive online exam registration platform, emphasizing easy and secure user experience.',
    image: '/img/pro/exam.png',
    technologies: ['Node.Js', 'Express.js', 'Nodemailer', 'mySql'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/SudiptaMandal-007/TestMate.git',
    date: 'Aug 2024',
    featured: false,
  },
  {
    title: 'Chrome Landing Clone',
    description: 'A simple copy of the Google homepage made using basic web tools. It looks and works like the real Google page.',
    image: '/img/pro/google.png',
    technologies: ['HTML', 'Tailwind CSS', 'Js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/SudiptaMandal-007/Google-Landing-Page.git',
    date: 'Oct 2024',
    featured: false,
  },
  {
    title: 'Facebook Landing Clone',
    description: 'A polished Facebook login screen clone, crafted to exhibit front-end form styling, layout precision, and responsive design elements.',
    image: '/img/pro/facebook.png',
    technologies: ['Node.js', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/SudiptaMandal-007/Facebook-Landing-Page.git',
    date: 'Sep 2024',
    featured: false,
  },
  {
    title: 'Amazon clone',
    description: 'A colorful copy of the Amazon India homepage, made to show how to build shopping websites with good layout and design.',
    image: '/img/pro/amazon.png',
    technologies: ['HTML', 'CSS', 'Js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/SudiptaMandal-007/Amazon-Clone.git',
    date: 'Jul 2024',
    featured: false,
  },
  {
    title: 'Blood Bank & Donation Management System',
    description: 'A Blood Bank & Donation Management System designed to streamline donations, featuring clear calls-to-action and essential information for donors and recipients.',
    image: '/img/pro/blood.png',
    technologies: ['PHP', 'Bootstarp', 'mySql','XAMPP'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/SudiptaMandal-007/Blood-Donation-Management-System.git',
    date: 'Aug 2024',
    featured: false,
  }
];


  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <div 
      className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-hover-scale ${
        darkMode 
          ? 'bg-gray-900 border border-gray-700 hover:border-blue-500/50' 
          : 'bg-white border border-gray-200 hover:border-blue-300/50'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.featured && (
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              Featured
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-xl font-bold group-hover:text-blue-500 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h3>
          {/* <div className={`flex items-center text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Calendar className="h-4 w-4 mr-1" />
            {project.date}
          </div> */}
        </div>
        
        <p className={`text-sm mb-4 leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 cursor-hover-scale ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-blue-400'
              }`}
            >
              <Tag className="h-3 w-3 mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 cursor-hover-scale"
          >
            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-hover-scale ${
              darkMode 
                ? 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-500' 
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400'
            }`}
          >
            <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 cursor-hover-scale">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          {/* <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A showcase of my recent work and personal projects as a fresher developer
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;