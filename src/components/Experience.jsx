import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Co-Founder & CEO',
      company: 'Vekta',
      period: '2026 - Present',
      description: 'Building and scaling Vekta, a  SaaS platform for remedial schools in Ghana..',
      type: 'Startup'
    },
    {
      role: 'Project & Client Manager',
      company: 'University of Ghana (Software Engineering)',
      period: '2026',
      description: 'Managed project teams and client requirements for software engineering deliverables. Oversaw system architecture, task distribution, and documentation.',
      type: 'Academic / Leadership'
    },
    {
      role: 'Computer Science Student',
      company: 'University of Ghana',
      period: '2024 - Present',
      description: 'Pursuing a Bachelor of Science in Computer Science with outstanding academic performance. Recipient of the Educational Pathways International (EPI) Scholarship.',
      type: 'Education'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center gap-12">
        
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-2">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            My professional journey and leadership roles
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-6 w-full text-left">
          {experiences.map((item, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#27272a] hover:border-zinc-700 transition-all flex flex-col gap-4 shadow-xl group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm mt-1">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span className="font-medium text-zinc-300">{item.company}</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181b] border border-[#27272a] text-xs font-semibold text-zinc-400 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pt-2 border-t border-[#27272a]/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}