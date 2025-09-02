import React from 'react';

interface Skill {
  iconPath: string;
  name: string;
}

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const allSkills: Skill[] = [
    { iconPath: '/img/html.png', name: 'HTML5' },
    { iconPath: '/img/css.png', name: 'CSS3' },
    { iconPath: '/img/javascript.png', name: 'JavaScript' },
    { iconPath: '/img/react.png', name: 'React' },
    { iconPath: '/img/node.png', name: 'Node.js' },
    { iconPath: '/img/express.png', name: 'Express.js' },
    { iconPath: '/img/tailwind.png', name: 'Tailwind CSS' },
    { iconPath: '/img/bootstrap.png', name: 'Bootstrap' },
    { iconPath: '/img/mongodb.png', name: 'MongoDB' },
    { iconPath: '/img/c.png', name: 'C' },
    { iconPath: '/img/java.png', name: 'Java' },
    { iconPath: '/img/python.png', name: 'Python' },
    { iconPath: '/img/vscode.png', name: 'VS Code' },
    { iconPath: '/img/git.png', name: 'Git' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </div>

        {/* Grid of skills only — no outer box */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center">
          {allSkills.map(({ iconPath, name }, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col items-center justify-center
                p-3 rounded-lg shadow-md cursor-pointer
                transition-shadow duration-300 w-24 h-24
                ${darkMode
                  ? 'bg-gray-900 border border-gray-700 hover:shadow-xl'
                  : 'bg-white border border-gray-200 hover:shadow-xl'}
                transform-gpu will-change-transform hover:scale-105
              `}
            >
              <img
                src={iconPath}
                alt={name}
                className="w-12 h-12 object-contain drop-shadow-md"
                style={{
                  filter: darkMode
                    ? 'drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.7))'
                    : 'drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.3))',
                }}
              />
              <span
                className={`absolute bottom-2 left-1/2 -translate-x-1/2
                  opacity-0 group-hover:opacity-100 text-center text-sm font-semibold
                  transition-opacity duration-300
                  ${darkMode ? 'text-gray-300' : 'text-gray-700'}
                `}
                style={{ lineHeight: 1 }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
