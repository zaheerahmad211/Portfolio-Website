import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  // MERN Stack Skills with proficiency levels
  const mernSkills = [
    { 
      category: 'Frontend', 
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️', color: '#61DAFB' },
        { name: 'HTML5', level: 95, icon: '📄', color: '#E34F26' },
        { name: 'CSS3', level: 90, icon: '🎨', color: '#264DE4' },
        { name: 'JavaScript', level: 92, icon: '🟨', color: '#F7DF1E' },
        { name: 'Tailwind CSS', level: 85, icon: '🌀', color: '#38B2AC' },
      ]
    },
    { 
      category: 'Backend', 
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢', color: '#68A063' },
        { name: 'Express.js', level: 85, icon: '🚀', color: '#000000' },
        { name: 'REST API', level: 87, icon: '🔗', color: '#FF6B6B' },
        { name: 'GraphQL', level: 80, icon: '📊', color: '#E10098' },
      ]
    },
    { 
      category: 'Database', 
      skills: [
        { name: 'MongoDB', level: 86, icon: '🍃', color: '#47A248' },
        { name: 'Mongoose', level: 84, icon: '🦉', color: '#880000' },
        { name: 'PostgreSQL', level: 75, icon: '🐘', color: '#336791' },
      ]
    },
    { 
      category: 'DevOps', 
      skills: [
        { name: 'Docker', level: 78, icon: '🐳', color: '#2496ED' },
        { name: 'Git', level: 90, icon: '🐙', color: '#F05032' },
        { name: 'AWS', level: 70, icon: '☁️', color: '#FF9900' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          MERN Stack Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="section-subtitle"
        >
          Full-stack development skills with MongoDB, Express, React, and Node.js
        </motion.p>
      </div>

      <div className="skills-grid">
        {mernSkills.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="skill-category"
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.05 }}
                  className="skill-card"
                  style={{ borderBottom: `3px solid ${skill.color}` }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-details">
                    <h4>{skill.name}</h4>
                    <div className="skill-progress">
                      <div 
                        className="progress-bar"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mern-badge"
      >
        <div className="mern-letters">
          <span style={{ color: '#47A248' }}>M</span>
          <span style={{ color: '#000000' }}>E</span>
          <span style={{ color: '#61DAFB' }}>R</span>
          <span style={{ color: '#68A063' }}>N</span>
        </div>
        <p>Certified Full Stack Developer</p>
      </motion.div>
    </section>
  );
};

export default Skills;