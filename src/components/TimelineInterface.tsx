
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
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            TEMPORAL INTERFACE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through time showcasing the evolution of expertise and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-green-400"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-lg border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${event.color} mr-4`}>
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                      <p className="text-cyan-400 font-medium">{event.year}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  {event.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {event.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm font-medium text-cyan-300 border border-cyan-500/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-4 border-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
