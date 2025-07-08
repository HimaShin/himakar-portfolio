
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  x: number;
  y: number;
  size: number;
  color: string;
  category: string;
}

export const SkillsConstellation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const skills: Skill[] = [
    // AI/ML Nebula
    { name: 'LangGraph', x: 20, y: 20, size: 12, color: '#00f5ff', category: 'AI' },
    { name: 'TensorFlow', x: 15, y: 35, size: 10, color: '#00f5ff', category: 'AI' },
    { name: 'OpenCV', x: 25, y: 45, size: 8, color: '#00f5ff', category: 'AI' },
    { name: 'YOLOv3', x: 35, y: 25, size: 9, color: '#00f5ff', category: 'AI' },
    { name: 'Together.ai', x: 30, y: 40, size: 11, color: '#00f5ff', category: 'AI' },
    
    // Full-Stack Galaxy
    { name: 'Java', x: 60, y: 15, size: 14, color: '#39ff14', category: 'Backend' },
    { name: 'Python', x: 70, y: 25, size: 13, color: '#39ff14', category: 'Backend' },
    { name: 'JavaScript', x: 65, y: 35, size: 12, color: '#39ff14', category: 'Frontend' },
    { name: 'HTML', x: 75, y: 45, size: 8, color: '#39ff14', category: 'Frontend' },
    { name: 'CSS', x: 80, y: 30, size: 8, color: '#39ff14', category: 'Frontend' },
    { name: 'Bootstrap', x: 85, y: 40, size: 7, color: '#39ff14', category: 'Frontend' },
    
    // Tools Constellation
    { name: 'Git', x: 20, y: 70, size: 9, color: '#8a2be2', category: 'Tools' },
    { name: 'GitHub', x: 30, y: 75, size: 8, color: '#8a2be2', category: 'Tools' },
    { name: 'VS Code', x: 40, y: 80, size: 7, color: '#8a2be2', category: 'Tools' },
    { name: 'Jupyter', x: 25, y: 85, size: 6, color: '#8a2be2', category: 'Tools' },
    { name: 'IntelliJ', x: 35, y: 90, size: 6, color: '#8a2be2', category: 'Tools' },
    
    // Database Stars
    { name: 'SQL', x: 75, y: 70, size: 10, color: '#ff6600', category: 'Database' },
    { name: 'MySQL', x: 80, y: 80, size: 9, color: '#ff6600', category: 'Database' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between related skills
      skills.forEach((skill, i) => {
        skills.slice(i + 1).forEach(otherSkill => {
          if (skill.category === otherSkill.category) {
            const x1 = (skill.x / 100) * canvas.width;
            const y1 = (skill.y / 100) * canvas.height;
            const x2 = (otherSkill.x / 100) * canvas.width;
            const y2 = (otherSkill.y / 100) * canvas.height;

            ctx.save();
            ctx.globalAlpha = 0.3;
            ctx.strokeStyle = skill.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-96 w-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ 
            scale: 1.3, 
            transition: { duration: 0.2 }
          }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
          }}
        >
          <div 
            className="rounded-full border-2 flex items-center justify-center relative"
            style={{
              width: `${skill.size * 4}px`,
              height: `${skill.size * 4}px`,
              borderColor: skill.color,
              backgroundColor: `${skill.color}20`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
            
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                backgroundColor: skill.color,
                opacity: 0.2,
                filter: 'blur(8px)',
              }}
            />
          </div>
          
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {skill.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
