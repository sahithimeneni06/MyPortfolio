import { useEffect, useState } from "react";
import "./home.css";
import profileImg from "../assets/photo2.jpg";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-wrapper" id="home">
      <div className={`hero ${animate ? "animate" : ""}`}>

        <div className="hero-image">
          <img src={profileImg} alt="Sahithi Meneni" />
        </div>

        <div className="hero-text">
          <h1>
            SAHITHI <span>MENENI</span>
          </h1>

          <p className="hero-role">AI & Data Science Enthusiast</p>
          <p className="hero-sub">Frontend Developer | ML & Analytics Learner</p>

          <div className="social-links">
            <a
              href="https://github.com/sahithimeneni06"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/sahithi-meneni-85274a2a5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="mailto:sahithimeneni06@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
