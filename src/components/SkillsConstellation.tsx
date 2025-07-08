
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
    // AI/ML Nebula - Top Left
    { name: 'LangGraph', x: 15, y: 15, size: 14, color: '#00f5ff', category: 'AI' },
    { name: 'TensorFlow', x: 25, y: 25, size: 12, color: '#00f5ff', category: 'AI' },
    { name: 'OpenCV', x: 35, y: 15, size: 10, color: '#00f5ff', category: 'AI' },
    { name: 'YOLOv3', x: 45, y: 25, size: 11, color: '#00f5ff', category: 'AI' },
    { name: 'Together.ai', x: 30, y: 35, size: 13, color: '#00f5ff', category: 'AI' },
    
    // Full-Stack Galaxy - Top Right
    { name: 'Java', x: 65, y: 15, size: 16, color: '#39ff14', category: 'Backend' },
    { name: 'Python', x: 75, y: 25, size: 15, color: '#39ff14', category: 'Backend' },
    { name: 'JavaScript', x: 85, y: 15, size: 14, color: '#39ff14', category: 'Frontend' },
    { name: 'HTML', x: 70, y: 35, size: 10, color: '#39ff14', category: 'Frontend' },
    { name: 'CSS', x: 80, y: 35, size: 10, color: '#39ff14', category: 'Frontend' },
    { name: 'Bootstrap', x: 90, y: 25, size: 9, color: '#39ff14', category: 'Frontend' },
    
    // Tools Constellation - Bottom Left
    { name: 'Git', x: 15, y: 65, size: 11, color: '#8a2be2', category: 'Tools' },
    { name: 'GitHub', x: 25, y: 75, size: 10, color: '#8a2be2', category: 'Tools' },
    { name: 'VS Code', x: 35, y: 65, size: 9, color: '#8a2be2', category: 'Tools' },
    { name: 'Jupyter', x: 15, y: 85, size: 8, color: '#8a2be2', category: 'Tools' },
    { name: 'IntelliJ', x: 25, y: 85, size: 8, color: '#8a2be2', category: 'Tools' },
    
    // Database Stars - Bottom Right
    { name: 'SQL', x: 75, y: 65, size: 12, color: '#ff6600', category: 'Database' },
    { name: 'MySQL', x: 85, y: 75, size: 11, color: '#ff6600', category: 'Database' },
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
            ctx.globalAlpha = 0.4;
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
    <div ref={containerRef} className="relative h-96 w-full bg-black/20 rounded-lg overflow-hidden">
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
            scale: 1.4, 
            transition: { duration: 0.2 }
          }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
          }}
        >
          <div 
            className="rounded-full border-2 flex items-center justify-center relative shadow-lg"
            style={{
              width: `${skill.size * 3}px`,
              height: `${skill.size * 3}px`,
              borderColor: skill.color,
              backgroundColor: `${skill.color}30`,
              boxShadow: `0 0 20px ${skill.color}40`,
            }}
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: skill.color }}
            />
            
            {/* Enhanced glow effect */}
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                backgroundColor: skill.color,
                opacity: 0.3,
                filter: 'blur(10px)',
              }}
            />
          </div>
          
          {/* Skill name tooltip */}
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 bg-black/90 backdrop-blur-sm rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 border"
            style={{ 
              color: skill.color,
              borderColor: `${skill.color}50`,
              boxShadow: `0 4px 12px ${skill.color}20`
            }}
          >
            {skill.name}
            {/* Arrow pointing up */}
            <div 
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent"
              style={{ borderBottomColor: skill.color }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Category labels */}
      <div className="absolute top-4 left-4 text-cyan-400 text-sm font-semibold">AI/ML</div>
      <div className="absolute top-4 right-4 text-green-400 text-sm font-semibold">Full-Stack</div>
      <div className="absolute bottom-4 left-4 text-purple-400 text-sm font-semibold">Tools</div>
      <div className="absolute bottom-4 right-4 text-orange-400 text-sm font-semibold">Database</div>
    </div>
  );
};
