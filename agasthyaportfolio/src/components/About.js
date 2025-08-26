import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="about-content fade-in">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm Agasthya R Kumar</h3>
              <p>
                A passionate Computer Science and Engineering student specializing in 
                Artificial Intelligence and Machine Learning. I thrive on solving complex 
                problems and creating innovative solutions that make a meaningful impact.
              </p>
              <p>
                My journey in technology began with curiosity about how things work, 
                and has evolved into a deep passion for building intelligent systems 
                that can understand, learn, and adapt. I believe in the power of 
                technology to transform lives and am committed to being part of that change.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-content">
                  <h4>Education</h4>
                  <p>B.Tech in Computer Science & Engineering (AI & ML)</p>
                  <span className="highlight-detail">Currently pursuing</span>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <div className="highlight-content">
                  <h4>Current Focus</h4>
                  <p>AI/ML Research & Development</p>
                  <span className="highlight-detail">Building intelligent solutions</span>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Interests</h4>
                  <p>Innovation & Problem Solving</p>
                  <span className="highlight-detail">Creating impactful technology</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>
            
            <div className="about-qualities">
              <h4>What I Bring</h4>
              <ul className="qualities-list">
                <li>
                  <span className="quality-icon">✨</span>
                  <strong>Innovation:</strong> Creative problem-solving approach
                </li>
                <li>
                  <span className="quality-icon">🔍</span>
                  <strong>Analytical Thinking:</strong> Data-driven decision making
                </li>
                <li>
                  <span className="quality-icon">🤝</span>
                  <strong>Collaboration:</strong> Strong teamwork and communication
                </li>
                <li>
                  <span className="quality-icon">📚</span>
                  <strong>Continuous Learning:</strong> Always exploring new technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;