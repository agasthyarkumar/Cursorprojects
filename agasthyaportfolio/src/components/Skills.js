import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "📝" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Vue.js", level: 75, icon: "💚" },
        { name: "TypeScript", level: 80, icon: "📘" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "FastAPI", level: 75, icon: "⚡" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 80, icon: "🐘" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "TensorFlow", level: 85, icon: "🧠" },
        { name: "PyTorch", level: 80, icon: "🔥" },
        { name: "Scikit-learn", level: 90, icon: "📊" },
        { name: "OpenCV", level: 75, icon: "👁️" },
        { name: "NLP", level: 80, icon: "💬" },
        { name: "Deep Learning", level: 85, icon: "🔬" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90, icon: "📂" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Firebase", level: 85, icon: "🔥" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        { name: "Problem Solving", level: 95, icon: "🧩" },
        { name: "Team Collaboration", level: 90, icon: "👥" },
        { name: "Communication", level: 85, icon: "💬" },
        { name: "Leadership", level: 80, icon: "👑" },
        { name: "Time Management", level: 85, icon: "⏰" },
        { name: "Adaptability", level: 90, icon: "🔄" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Skills & Expertise</h2>
        
        <div className="skills-grid fade-in">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary fade-in">
          <div className="summary-card">
            <h4>Technical Proficiency</h4>
            <p>
              Experienced in full-stack development with a strong focus on AI/ML technologies. 
              Proficient in modern web frameworks, cloud platforms, and machine learning algorithms.
            </p>
          </div>
          <div className="summary-card">
            <h4>Learning Journey</h4>
            <p>
              Continuously exploring emerging technologies and best practices. 
              Currently focusing on advanced AI techniques and scalable architecture patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;