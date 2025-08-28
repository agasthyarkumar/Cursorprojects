import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      type: "Cloud Computing",
      icon: "☁️",
      description: "Demonstrated expertise in designing distributed systems on AWS platform"
    },
    {
      id: 2,
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2023",
      type: "Machine Learning",
      icon: "🧠",
      description: "Proficiency in building and training neural networks using TensorFlow"
    },
    {
      id: 3,
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      type: "Frontend Development",
      icon: "⚛️",
      description: "Advanced skills in React.js and modern frontend development practices"
    },
    {
      id: 4,
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2022",
      type: "Data Science",
      icon: "🐍",
      description: "Comprehensive knowledge of Python libraries for data analysis and visualization"
    },
    {
      id: 5,
      title: "Google Analytics Certified",
      issuer: "Google",
      year: "2023",
      type: "Analytics",
      icon: "📊",
      description: "Expert-level understanding of Google Analytics and data insights"
    },
    {
      id: 6,
      title: "Agile Fundamentals",
      issuer: "Scrum Alliance",
      year: "2022",
      type: "Project Management",
      icon: "🔄",
      description: "Understanding of Agile methodologies and Scrum framework"
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Certifications & Achievements</h2>
        
        <div className="certifications-grid fade-in">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="cert-header">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-type">{cert.type}</div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-details">
                  <div className="cert-issuer">
                    <span className="detail-label">Issued by:</span>
                    <span className="detail-value">{cert.issuer}</span>
                  </div>
                  <div className="cert-year">
                    <span className="detail-label">Year:</span>
                    <span className="detail-value">{cert.year}</span>
                  </div>
                </div>
                <p className="cert-description">{cert.description}</p>
              </div>
              
              <div className="cert-badge">
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications-summary fade-in">
          <div className="summary-stats">
            <div className="stat">
              <div className="stat-number">6+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Tech Domains</div>
            </div>
            <div className="stat">
              <div className="stat-number">2023</div>
              <div className="stat-label">Latest Achievement</div>
            </div>
          </div>
          
          <div className="commitment-note">
            <h4>Continuous Learning</h4>
            <p>
              I believe in staying current with industry standards and emerging technologies. 
              These certifications represent my commitment to professional development and 
              expertise validation across various technical domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;