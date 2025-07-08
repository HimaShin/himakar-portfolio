
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Code, Star } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  achievements?: string[];
}

export const TimelineInterface: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2021',
      title: 'B.Tech CSE - Siddharth Institute',
      description: 'Began Computer Science Engineering journey with focus on AI and full-stack development',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-cyan-400 to-blue-600',
      achievements: ['CGPA: 8.97', 'AI Specialization', 'Academic Excellence']
    },
    {
      year: '2023',
      title: 'MotionCut Internship',
      description: 'Delivered exceptional automation solutions with significant performance improvements',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-600',
      achievements: ['70% Workflow Improvement', '40% Error Reduction', '20% Response Optimization']
    },
    {
      year: '2024',
      title: 'AI Automation Mastery',
      description: 'Achieved breakthrough in agentic AI systems with LangGraph and enterprise solutions',
      icon: <Code className="w-6 h-6" />,
      color: 'from-orange-400 to-red-600',
      achievements: ['95% AI Resolution Rate', '500+ Users Served', 'Enterprise Scale']
    },
    {
      year: '2025',
      title: 'Future Projections',
      description: 'Expanding into advanced AI research and leading next-generation automation projects',
      icon: <Star className="w-6 h-6" />,
      color: 'from-green-400 to-teal-600',
      achievements: ['AI Research Leadership', 'Innovation Pipeline', 'Global Impact']
    }
  ];

  return (
    <section className="py-12 md:py-20 relative px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            TEMPORAL INTERFACE
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A journey through time showcasing the evolution of expertise and achievements
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-green-400"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`relative mb-8 md:mb-12 ${
                // Mobile: stack vertically, Desktop: alternate left/right
                'md:flex md:items-center ' + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
              }`}
            >
              {/* Content - Full width on mobile, half width on desktop */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-lg border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${event.color} mr-3 md:mr-4 flex-shrink-0`}>
                      {event.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-2xl font-bold text-white truncate">{event.title}</h3>
                      <p className="text-cyan-400 font-medium text-sm md:text-base">{event.year}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">{event.description}</p>
                  
                  {event.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {event.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-2 md:px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs md:text-sm font-medium text-cyan-300 border border-cyan-500/30 break-words"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Timeline node - Only visible on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-black border-4 border-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-1 md:w-2 h-1 md:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
