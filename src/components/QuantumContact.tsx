
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from 'lucide-react';

export const QuantumContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91-9346285990',
      href: 'tel:+919346285990',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'himakarpendlimarri@gmail.com',
      href: 'mailto:himakarpendlimarri@gmail.com',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Kadapa, Andhra Pradesh',
      href: '#',
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'pendlimarri-himakar',
      href: 'https://linkedin.com/in/pendlimarri-himakar',
      color: 'from-green-400 to-teal-600'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'HimaShin',
      href: 'https://github.com/HimaShin',
      color: 'from-purple-400 to-indigo-600'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          QUANTUM COMMUNICATION
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Initiate contact through secured quantum channels for collaboration opportunities
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Connect with Me</h3>
          
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : '_self'}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 rounded-xl bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-lg border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500 group"
            >
              <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <div>
                <p className="text-sm text-gray-400">{info.label}</p>
                <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-8 rounded-xl bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-lg border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-black/40 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-black/40 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-4 rounded-lg bg-black/40 border border-gray-600 focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center p-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
