import "./contact.css";
import { useState, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCopy, FaCheck, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const emailRef = useRef(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("menenirao1234@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "menenirao1234@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:menenirao1234@gmail.com",
      color: "#6366F1",
      gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
      description: "Drop me a message anytime",
      actionText: "Send Message"
    },
    {
      id: 2,
      title: "LinkedIn",
      value: "@sahithi-meneni",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sahithi-meneni-85274a2a5/",
      color: "#0077B5",
      gradient: "linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)",
      description: "Professional network & updates",
      actionText: "Connect on LinkedIn"
    },
    {
      id: 3,
      title: "GitHub",
      value: "@sahithimeneni06",
      icon: <FaGithub />,
      link: "https://github.com/sahithimeneni06",
      color: "#333333",
      gradient: "linear-gradient(135deg, #333333 0%, #666666 100%)",
      description: "Projects & code repositories",
      actionText: "View Projects"
    }
  ];

  const contactMessage = {
    main: "Open to opportunities, collaborations, and meaningful conversations",
    highlight: "AI-powered | Data-driven | Full-stack",
    cta: "Let's create something impactful together",
    emoji: "🚀"
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-dots"></div>
      </div>

      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="main-section-title">
            Contact <span className="title-highlight">Me</span>
          </h2>
          
        </div>

        <div className="contact-header">
          <p className="contact-subtitle">
            {contactMessage.main}
            <span className="subtitle-highlight"> {contactMessage.highlight}</span>
          </p>
        </div>

        <div className="contact-info-grid">
          {contactInfo.map((item) => (
            <div 
              key={item.id}
              className={`contact-info-card ${hoveredCard === item.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--card-color': item.color }}
            >
              <div 
                className="card-glow"
                style={{ background: item.gradient }}
              />
              
              <div className="info-icon" style={{ background: item.gradient }}>
                {item.icon}
              </div>
              
              <div className="info-content">
                <div className="info-header">
                  <h3 className="info-title">{item.title}</h3>
                  <span className="info-badge" style={{ background: item.gradient }}>
                    Direct Link
                  </span>
                </div>
                
                <div className="info-value-wrapper">
                  <p className="info-value" ref={item.title === "Email" ? emailRef : null}>
                    {item.value}
                  </p>
                  
                  {item.title === "Email" && (
                    <button 
                      className={`copy-btn ${copied ? 'copied' : ''}`}
                      onClick={copyEmail}
                      aria-label="Copy email"
                    >
                      {copied ? <FaCheck /> : <FaCopy />}
                      <span className="copy-tooltip">
                        {copied ? 'Copied!' : 'Copy'}
                      </span>
                    </button>
                  )}
                </div>
                
                <p className="info-description">{item.description}</p>
              </div>
              
              <a
                href={item.link}
                target={item.title !== "Email" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="info-action-btn"
                style={{ background: item.gradient }}
                onMouseEnter={() => setHoveredCard(item.id)}
              >
                <span>{item.actionText}</span>
                <FaExternalLinkAlt className="action-icon" />
                <div className="btn-sparkle"></div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}