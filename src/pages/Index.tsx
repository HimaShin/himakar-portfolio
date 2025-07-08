import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Code, Brain, Zap, Database, Globe, Star, Award, ChevronDown } from 'lucide-react';
import { ParticleField } from '../components/ParticleField';
import { HolographicCard } from '../components/HolographicCard';
import { SkillsConstellation } from '../components/SkillsConstellation';
import { ProjectPortal } from '../components/ProjectPortal';
import { TimelineInterface } from '../components/TimelineInterface';
import { QuantumContact } from '../components/QuantumContact';
import { NeuralBackground } from '../components/NeuralBackground';
const Index = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const isHeroInView = useInView(heroRef, {
    once: true
  });
  const isAboutInView = useInView(aboutRef, {
    once: true
  });
  const isSkillsInView = useInView(skillsRef, {
    once: true
  });
  const isProjectsInView = useInView(projectsRef, {
    once: true
  });
  const isContactInView = useInView(contactRef, {
    once: true
  });
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <NeuralBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">HIMAKAR-PORTFOLIO</motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => <button key={item} onClick={() => scrollToSection(item === 'About' ? aboutRef : item === 'Skills' ? skillsRef : item === 'Projects' ? projectsRef : contactRef)} className="relative group text-sm font-medium tracking-wide hover:text-cyan-400 transition-colors duration-300">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Quantum Portal */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <ParticleField />
        
        <div className="text-center z-10 relative">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={isHeroInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1,
          delay: 0.2
        }} className="mb-8">
            <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent" animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}>
              HIMAKAR
            </motion.h1>
            <motion.h2 className="text-2xl md:text-4xl font-light mb-4 text-purple-300" initial={{
            opacity: 0
          }} animate={isHeroInView ? {
            opacity: 1
          } : {}} transition={{
            duration: 1,
            delay: 0.6
          }}>
              PENDLIMARRI
            </motion.h2>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={isHeroInView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            duration: 1,
            delay: 0.8
          }} className="text-lg md:text-xl text-cyan-300 font-light tracking-wider">
              AI AUTOMATION ARCHITECT • AGENTIC WORKFLOW SPECIALIST
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isHeroInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1,
          delay: 1
        }} className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-green-400">
              <Star className="w-4 h-4" />
              <span>95% AI Resolution Rate</span>
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <Award className="w-4 h-4" />
              <span>B.Tech CSE • CGPA 8.97</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <MapPin className="w-4 h-4" />
              <span>Kadapa, Andhra Pradesh</span>
            </div>
          </motion.div>

          <motion.button initial={{
          opacity: 0
        }} animate={isHeroInView ? {
          opacity: 1
        } : {}} transition={{
          duration: 1,
          delay: 1.2
        }} onClick={() => scrollToSection(aboutRef)} className="mt-12 group">
            <ChevronDown className="w-8 h-8 text-cyan-400 animate-bounce group-hover:text-purple-400 transition-colors duration-300" />
          </motion.button>
        </div>
      </section>

      {/* About Section - Digital Avatar */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={isAboutInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DIGITAL CONSCIOUSNESS
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized in crafting agentic AI systems and full-stack solutions that bridge the gap between human intelligence and artificial consciousness. 
              With a 95% success rate in AI automation and 70% workflow improvement across projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HolographicCard title="Academic Excellence" icon={<Award className="w-8 h-8" />} content="B.Tech Computer Science Engineering from Siddharth Institute of Engineering and Technology with an impressive CGPA of 8.97, demonstrating consistent academic excellence." gradient="from-cyan-400 to-blue-600" delay={0.2} />
            
            <HolographicCard title="AI Automation Master" icon={<Brain className="w-8 h-8" />} content="Expert in LangGraph, Together.ai, and agentic workflows with 95% resolution rate and 80% reduction in manual intervention across enterprise systems." gradient="from-purple-400 to-pink-600" delay={0.4} />
            
            <HolographicCard title="Full-Stack Innovation" icon={<Code className="w-8 h-8" />} content="Proficient in Java, Python, JavaScript with expertise in cross-platform integration, serving 500+ users with high-performance applications." gradient="from-orange-400 to-red-600" delay={0.6} />
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isAboutInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1,
          delay: 0.8
        }} className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">95%</div>
                <div className="text-sm text-gray-400">AI Resolution Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">70%</div>
                <div className="text-sm text-gray-400">Workflow Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-gray-400">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">8.97</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Synaptic Matrix */}
      <section ref={skillsRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={isSkillsInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SYNAPTIC MATRIX
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A constellation of interconnected technologies and methodologies that power next-generation AI solutions
            </p>
          </motion.div>

          <SkillsConstellation />
        </div>
      </section>

      {/* Projects Section - Dimensional Portals */}
      <section ref={projectsRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={isProjectsInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 1
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              DIMENSIONAL PORTALS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breakthrough projects that demonstrate mastery of agentic AI systems and full-stack development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectPortal title="Agentic Workflow Automation" description="Advanced LangGraph-based system achieving 95% resolution rate with intelligent fallback mechanisms" metrics={["95% Resolution Rate", "80% Manual Reduction", "Enterprise Scale"]} technologies={["LangGraph", "Together.ai", "Mixtral-8x7B", "Python"]} gradient="from-cyan-400 to-blue-600" delay={0.2} />
            
            <ProjectPortal title="Real-Time Object Detection" description="YOLOv3-powered computer vision system with 30% performance improvement" metrics={["30% Performance Boost", "Real-time Processing", "Multi-object Detection"]} technologies={["YOLOv3", "OpenCV", "TensorFlow", "Python"]} gradient="from-purple-400 to-pink-600" delay={0.4} />
            
            <ProjectPortal title="E-Commerce Platform" description="Full-stack marketplace serving 500+ users with advanced payment integration" metrics={["500+ Users", "Secure Payments", "Cross-platform"]} technologies={["Java", "JavaScript", "HTML", "MySQL"]} gradient="from-orange-400 to-red-600" delay={0.6} />
            
            <ProjectPortal title="MotionCut Automation" description="Internship project delivering 70% workflow improvement and 40% error reduction" metrics={["70% Workflow Improvement", "40% Error Reduction", "20% Response Optimization"]} technologies={["Python", "Automation", "API Integration", "Testing"]} gradient="from-green-400 to-teal-600" delay={0.8} />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineInterface />

      {/* Contact Section - Quantum Communication */}
      <section ref={contactRef} className="py-20 relative">
        <QuantumContact />
      </section>
    </div>;
};
export default Index;