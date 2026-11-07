import React from 'react';
import { Layout, Server, Database, GitBranch, Cpu, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'React, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, Vite',
      icon: <Layout className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Backend Development',
      description: 'Python, Django',
      icon: <Server className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Database',
      description: 'PostgreSQL, MySQL, SQLite , Database Design',
      icon: <Database className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'DevOps & Tools',
      description: 'Git, GitHub, Docker , VS Code, Postman',
      icon: <GitBranch className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'AI / ML',
      description: 'PyTorch, Pandas, NumPy, Matplotlib, Data Analysis',
      icon: <Cpu className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Other',
      description: 'Problem Solving, System Architecture',
      icon: <Terminal className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center gap-10">
        
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            My Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            What I actually do
          </p>
        </div>

        {/* Categories Stack */}
        <div className="flex flex-col gap-4 w-full text-left">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#121212] border border-[#27272a] hover:border-zinc-700 transition-all group"
            >
              {/* Icon Box */}
              <div className="p-3.5 rounded-xl bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all shrink-0">
                {category.icon}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1 overflow-hidden">
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed truncate sm:whitespace-normal">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}