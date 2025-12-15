import { useEffect, useRef, useState } from "react";
import "./about.css";

export default function About() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className={`about-section ${show ? "show" : ""}`}>
      <div className="container">

        <h2 className="about-title">About Me</h2>

        <div className="about-grid">

          <div className="about-card" style={{ "--i": 1 }}>
            <h3>Who I Am</h3>
            <p>
            
            I am an aspiring <span>AI & Data Science professional</span> driven by curiosity and a strong willingness to learn and build. I enjoy exploring how data and intelligence come together to solve real-world problems. Along with technical skills, <span>I bring strong leadership qualities, effective time management</span>, and a proactive mindset, enabling me to collaborate well, take ownership, and consistently deliver results
            </p>
          </div>

          <div className="about-card" style={{ "--i": 2 }}>
            <h3>Technical Strength</h3>
            <p>
            I specialize in building <span>data-driven and AI-powered applications</span>, with experience across <b>Machine Learning, Deep Learning, Natural Language Processing (NLP), Generative AI</b>, and <b>Large Language Models (LLMs)</b>. I work with tools and frameworks such as <b>Python, SQL, NumPy, Pandas, Scikit-Learn, TensorFlow, Power BI</b>, and <b>Flask</b>, and I am actively exploring prompt engineering and GenAI workflows for intelligent applications.
            </p>
          </div>

          <div className="about-card highlight-card" style={{ "--i": 3 }}>
            <h3>Academic Excellence</h3>
            <p>
                I am currently pursuing <b>BTech in Computer Science and Engineering (AI & ML)</b> at <b>CVR College of Engineering</b>, maintaining a <span className="score">CGPA of 9.19</span>. This reflects my academic consistency, discipline, and deep interest in emerging AI and data technologies.

            </p>
          </div>

          <div className="about-card" style={{ "--i": 4 }}>
            <h3>Vision & Mindset</h3>
            <p>
            I strongly believe in <span>continuous learning</span>, experimentation, and innovation. I actively seek opportunities to expand my skill set, work on real-world projects, and stay aligned with evolving industry trends. My long-term goal is to grow into an AI professional who builds <span>scalable, impactful, and intelligent systems</span> that create meaningful value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
