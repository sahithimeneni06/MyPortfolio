import "./skills.css";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Color schemes for each category
  const colorSchemes = {
    web: { 
      gradient: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
      light: "rgba(99, 102, 241, 0.1)",
      medium: "rgba(99, 102, 241, 0.3)",
      dark: "#6366F1"
    },
    ai: { 
      gradient: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
      light: "rgba(168, 85, 247, 0.1)",
      medium: "rgba(168, 85, 247, 0.3)",
      dark: "#A855F7"
    },
    ml: { 
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #C026D3 100%)",
      light: "rgba(139, 92, 246, 0.1)",
      medium: "rgba(139, 92, 246, 0.3)",
      dark: "#8B5CF6"
    },
    data: { 
      gradient: "linear-gradient(135deg, #22C55E 0%, #14B8A6 100%)",
      light: "rgba(34, 197, 94, 0.1)",
      medium: "rgba(34, 197, 94, 0.3)",
      dark: "#22C55E"
    },
    tools: { 
      gradient: "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
      light: "rgba(245, 158, 11, 0.1)",
      medium: "rgba(245, 158, 11, 0.3)",
      dark: "#F59E0B"
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 2 + 1,
      color: i % 5 === 0 ? colorSchemes.web.dark : 
             i % 5 === 1 ? colorSchemes.ai.dark : 
             i % 5 === 2 ? colorSchemes.ml.dark : 
             i % 5 === 3 ? colorSchemes.data.dark : 
             colorSchemes.tools.dark
    }));
    setParticles(newParticles);
  }, []);

  const skillGroups = [
    {
      title: "Artificial Intelligence",
      emoji: "🤖",
      color: "ai",
      description: "Creating intelligent systems & models",
      skills: ["Machine Learning", "NLP", "Transformers", "Generative AI", "LLMs", "Prompt Engineering"]
    },
    {
      title: "Machine Learning",
      emoji: "⚡",
      color: "ml",
      description: "Model preprocessing and making predictions",
      skills: ["Scikit-Learn", "Tensorflow", "PyTorch", "Feature Extraction", "Time Series Analysis"]
    },
    {
      title: "Data Analytics",
      emoji: "📊",
      color: "data",
      description: "Transforming data into insights",
      skills: ["Python", "NumPy", "Pandas", "Power BI", "Data Visualization"]
    },
    {
      title: "Web Development",
      emoji: "💻",
      color: "web",
      description: "Building modern, responsive web experiences",
      skills: ["React", "Bootstrap", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Tools & Platforms",
      emoji: "🛠️",
      color: "tools",
      description: "Essential tools for development",
      skills: ["Flask", "Git & GitHub", "SQL", "Jupyter Notebook", "APIs", "Google Colab", "Kaggle"]
    }
  ];

  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };

  const progressItems = [
    { skill: "Python", level: 85, color: colorSchemes.data.dark },
    { skill: "Machine Learning", level: 80, color: colorSchemes.ai.dark },
    { skill: "NLP", level: 75, color: colorSchemes.ml.light },
    { skill: "Transformers", level: 70, color: colorSchemes.ai.medium },
    { skill: "Gen AI", level: 70, color: colorSchemes.ai.medium },
    { skill: "Prompt Engineering", level: 95, color: colorSchemes.ml.dark },
    { skill: "Scikit-Learn", level: 80, color: colorSchemes.web.gradient },
    { skill: "Tensorflow", level: 80, color: colorSchemes.data.gradient },
    { skill: "Power BI", level: 70, color: colorSchemes.data.medium},
    { skill: "Data Analysis", level: 75, color: colorSchemes.ml.medium },
    { skill: "React", level: 80, color: colorSchemes.web.dark },
    { skill: "SQL", level: 75, color: colorSchemes.data.light},
    { skill: "Flask", level: 70, color: colorSchemes.web.light }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
    
      <div className="skills-bg">
        <div className="floating-particles">
          {particles.map(particle => (
            <div 
              key={particle.id}
              className="skill-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                animationDuration: `${particle.speed}s`
              }}
            />
          ))}
        </div>
        <div className="gradient-orb orb-1" style={{ background: colorSchemes.web.gradient }}></div>
        <div className="gradient-orb orb-2" style={{ background: colorSchemes.ai.gradient }}></div>
        <div className="gradient-orb orb-3" style={{ background: colorSchemes.ml.gradient }}></div>
        <div className="gradient-orb orb-4" style={{ background: colorSchemes.data.gradient }}></div>
        <div className="gradient-orb orb-5" style={{ background: colorSchemes.tools.gradient }}></div>
      </div>

      <div className="container">
        <div className={`title-wrapper ${isVisible ? 'visible' : ''}`}>
          <h2 className="skills-title">
            <span className="title-text">Skills</span>
            <span className="title-emoji"></span>
          </h2>
          
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className={`skill-card ${group.color} ${activeCategory === group.color ? 'active' : ''} ${isVisible ? 'card-visible' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setActiveCategory(group.color)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="card-header">
                <div className="card-emoji">{group.emoji}</div>
                <h3 className="card-title">{group.title}</h3>
                <p className="card-description">{group.description}</p>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag"
                    onMouseEnter={() => handleSkillHover(skill)}
                    onMouseLeave={() => handleSkillHover(null)}
                    style={{
                      backgroundColor: colorSchemes[group.color].light,
                      borderColor: colorSchemes[group.color].medium,
                      color: hoveredSkill === skill ? colorSchemes[group.color].dark : '#020617'
                    }}
                  >
                    <span className="skill-tag-text">{skill}</span>
                    {hoveredSkill === skill && (
                      <span className="skill-tag-glow" 
                        style={{ background: colorSchemes[group.color].gradient }}
                      />
                    )}
                  </span>
                ))}
              </div>

              <div className="card-glow" 
                style={{ background: colorSchemes[group.color].gradient }}
              />
              <div className="card-sparkles">
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className="sparkle" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`skill-progress-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="progress-title">Skill Progression</h3>
          <div className="progress-bars">
            {progressItems.map((item, idx) => (
              <div key={idx} className="progress-item">
                <div className="progress-label">
                  <span>{item.skill}</span>
                  <span className="progress-percent">{item.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${item.level}%`,
                      background: item.color,
                      animationDelay: `${idx * 0.2}s`
                    }}
                  />
                  <div className="progress-dots">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`progress-dot ${i < item.level / 10 ? 'active' : ''}`}
                        style={{ 
                          backgroundColor: i < item.level / 10 ? item.color : '#e2e8f0'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-fab">
          <button 
            className="fab-button" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="fab-text">Let's Build Something!</span>
            <span className="fab-emoji">🚀</span>
          </button>
        </div>
      </div>
    </section>
  );
}