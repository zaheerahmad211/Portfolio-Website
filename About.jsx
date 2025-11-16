import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Floating Tech Icons Background */}
        <div className="tech-icons-bg">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [0, -20],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
              className="tech-icon"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                fontSize: `${Math.random() * 2 + 1}rem`,
              }}
            >
              {['⚛️', '🔷', '🟨', '🍃', '🚀', '💎', '🎨', '🟢', '🐳', '🐙', '📊', '🔗'][i]}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="content-wrapper"
        >
          {/* Title Section */}
          <div className="section-header">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              About <span className="highlight">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="section-subtitle"
            >
              MERN Stack <span className="gradient-text">Specialist</span>
            </motion.p>
          </div>

          <div className="about-content">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="profile-card"
            >
              <div className="profile-image">
                <div className="image-placeholder">👨‍💻</div>
                <div className="tech-orbits">
                  <div className="orbit mongo-orbit">
                    <div className="tech-point mongo">M</div>
                  </div>
                  <div className="orbit express-orbit">
                    <div className="tech-point express">E</div>
                  </div>
                  <div className="orbit react-orbit">
                    <div className="tech-point react">R</div>
                  </div>
                  <div className="orbit node-orbit">
                    <div className="tech-point node">N</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bio-text"
            >
              <h3>
                Full Stack <span className="mern-gradient">MERN</span> Developer
              </h3>
              
              <p className="bio-description">
                Passionate MERN Stack Developer | Crafting Powerful Web Apps with MongoDB, Express, React & Node.js
               I build fast, scalable, and dynamic full-stack applications using the MERN stack. With expertise
               in frontend React interfaces and backend Node.js APIs, I deliver seamless user experiences and robust server-side solutions.
               Ready to turn your ideas into reality with clean code and modern technologies!
              </p>
              
              <div className="expertise-section">
                <h4>
                  <span className="underline-animation">My Core Expertise</span>
                </h4>
                <ul>
                  <li>
                    <span className="icon">⚡</span>
                    <span>Modern React with Hooks & Context API</span>
                  </li>
                  <li>
                    <span className="icon">⚡</span>
                    <span>Node.js backend development</span>
                  </li>
                  <li>
                    <span className="icon">⚡</span>
                    <span>MongoDB database design</span>
                  </li>
                  <li>
                    <span className="icon">⚡</span>
                    <span>RESTful & GraphQL APIs</span>
                  </li>
                  <li>
                    <span className="icon">⚡</span>
                    <span>JWT Authentication</span>
                  </li>
                  <li>
                    <span className="icon">⚡</span>
                    <span>Cloud Deployment (AWS/Vercel)</span>
                  </li>
                </ul>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">MERN Focus</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;