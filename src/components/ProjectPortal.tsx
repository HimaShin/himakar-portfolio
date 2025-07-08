
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

interface ProjectPortalProps {
  title: string;
  description: string;
  metrics: string[];
  technologies: string[];
  gradient: string;
  delay?: number;
}

export const ProjectPortal: React.FC<ProjectPortalProps> = ({
  title,
  description,
  metrics,
  technologies,
  gradient,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay }}
      whileHover={{ 
        scale: 1.02, 
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 rounded-xl bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-lg border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500 overflow-hidden"
    >
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Floating energy particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-purple-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 text-cyan-400" />
            </motion.button>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Key Metrics
          </h4>
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric, index) => (
              <motion.span
                key={metric}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + index * 0.1 }}
                className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm font-medium text-cyan-300 border border-cyan-500/30"
              >
                {metric}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.3 + index * 0.1 }}
                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium text-purple-300 border border-purple-500/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
