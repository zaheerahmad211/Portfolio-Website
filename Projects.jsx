import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with product catalog, cart, checkout, and admin dashboard built with MERN stack.",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
      image: "🛒",
      github: "#",
      live: "#",
      accentColor: "#6366f1"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time social platform with user profiles, posts, comments, and notifications using Socket.io.",
      technologies: ["React", "Express", "MongoDB", "Socket.io", "JWT"],
      image: "📱",
      github: "#",
      live: "#",
      accentColor: "#3b82f6"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Kanban-style productivity tool with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "React DnD", "GraphQL"],
      image: "✅",
      github: "#",
      live: "#",
      accentColor: "#10b981"
    },
    {
      id: 4,
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe application with image uploads, search, and user ratings system.",
      technologies: ["React", "Express", "MongoDB", "Cloudinary", "Mongoose"],
      image: "🍳",
      github: "#",
      live: "#",
      accentColor: "#f59e0b"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Animated Background Elements */}
      <div className="background-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-element"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.2],
              y: [0, -50]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              background: `rgba(100, 255, 218, ${Math.random() * 0.1})`
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            MERN Stack <span className="gradient-text">Showcase</span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="project-card"
              style={{ '--accent-color': project.accentColor }}
            >
              <div className="project-image">
                <div className="image-wrapper">
                  {project.image}
                </div>
                <div className="tech-bubbles">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-bubble">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-footer">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      className="github-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.2 3.2 0 0 0-1-2.5c3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 20 4.8a5.2 5.2 0 0 0-1.5-2 5 5 0 0 0-.1-2s-1.3-.4-4.5 1.7a16 16 0 0 0-8 0C3.2 3.2 2 3.6 2 3.6a5 5 0 0 0-.1 2 5.2 5.2 0 0 0-1.5 2A5.4 5.4 0 0 0 4 16c0 5.4 3.3 6.6 6.5 7a3.2 3.2 0 0 0-1 2.5V22"/>
                      </svg>
                    </a>
                    <a 
                      href={project.live} 
                      className="live-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="view-more"
        >
          <button className="view-more-btn">
            View All Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;