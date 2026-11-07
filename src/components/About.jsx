import React from 'react';
import { Crown, Users, Zap, Activity } from 'lucide-react';

export default function about() {
  const qualities = [
    {
      title: 'Leader',
      description: 'Guiding teams and projects with vision, ownership, and clarity.',
      icon: <Crown className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Team Player',
      description: 'Collaborating seamlessly with others to achieve shared goals.',
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Fast Learner',
      description: 'Quickly mastering new technologies, frameworks, and domains.',
      icon: <Zap className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Dynamic',
      description: 'Adapting fluidly to fast-paced environments and evolving challenges.',
      icon: <Activity className="w-5 h-5 text-blue-400" />
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center gap-10">
        
        {/* Section Heading & Paragraph */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
           I am a Computer Science student at the University of Ghana and Co-Founder & CEO of Vekta (Startup). I love solving problems that actually improve businesses and make them more efficient in their dealings. In recent years I've developed a strong interest in AI/ML and I am currently exploring the field to gain more knowledge and experience. I am passionate about leveraging technology to create innovative solutions that can make a positive impact on society.
          </p>
        </div>

        {/* Unique Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
          {qualities.map((item) => (
            <div 
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#121212] border border-[#27272a] hover:border-zinc-700 transition-all text-left group"
            >
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}