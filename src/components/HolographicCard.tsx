
import React from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  gradient: string;
  delay?: number;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({
  title,
  icon,
  content,
  gradient,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay }}
      whileHover={{ 
        scale: 1.05, 
        rotateX: 5, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 rounded-xl bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Holographic glow */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${gradient} mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {content}
        </p>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-400/50 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl" />
    </motion.div>
  );
};
