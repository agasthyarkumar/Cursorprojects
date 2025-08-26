import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Chat Application",
      description: "A real-time chat application with AI-powered responses using natural language processing. Features include smart replies, sentiment analysis, and conversation insights.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "Socket.io"],
      category: "AI/ML",
      githubUrl: "https://github.com/agasthya/ai-chat-app",
      liveUrl: "https://ai-chat-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Smart Expense Tracker",
      description: "A comprehensive expense tracking application with machine learning-based categorization and spending insights. Includes data visualization and budget planning features.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "Python", "Chart.js"],
      category: "Mobile",
      githubUrl: "https://github.com/agasthya/expense-tracker",
      liveUrl: "https://expense-tracker-app.vercel.app",
      featured: false
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React. Features smooth animations, dark mode toggle, and optimized performance.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
      category: "Web",
      githubUrl: "https://github.com/agasthya/portfolio",
      liveUrl: "https://agasthya-portfolio.netlify.app",
      featured: true
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data analysis and visualization. Supports multiple data sources and provides real-time insights with customizable charts.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "Data Science",
      githubUrl: "https://github.com/agasthya/data-dashboard",
      liveUrl: "https://data-viz-dashboard.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features like recommendation engine, payment integration, and inventory management.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
      category: "Web",
      githubUrl: "https://github.com/agasthya/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 6,
      title: "Image Recognition App",
      description: "A mobile application that uses computer vision to identify objects in real-time. Includes augmented reality features and offline capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "TensorFlow Lite", "Firebase", "ARCore"],
      category: "AI/ML",
      githubUrl: "https://github.com/agasthya/image-recognition",
      liveUrl: null,
      featured: false
    }
  ];

  const categories = ['all', 'AI/ML', 'Web', 'Mobile', 'Data Science'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>
        
        <div className="projects-filter fade-in">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid fade-in">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project Screenshot</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>GitHub</span>
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;