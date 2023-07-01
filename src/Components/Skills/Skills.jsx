import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', color: 'bg-blue-500' },
    { name: 'CSS', color: 'bg-pink-500' },
    { name: 'JavaScript', color: 'bg-purple-500' },
    { name: 'React', color: 'bg-green-500' },
    { name: 'Node.js', color: 'bg-yellow-500' },
    { name: 'MongoDB', color: 'bg-red-500' },
    { name: 'Responsive Design', color: 'bg-teal-500' },
    { name: 'Git and GitHub', color: 'bg-indigo-500' },
    { name: 'UI/UX Design', color: 'bg-orange-500' },
  ];

  return (
    <div className="bg-gray-900 py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center -mx-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex items-center justify-center rounded-full w-20 h-20 mx-2 mb-4 ${skill.color}`}
            >
              <span className="text-white font-semibold text-lg text-center overflow-hidden whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
