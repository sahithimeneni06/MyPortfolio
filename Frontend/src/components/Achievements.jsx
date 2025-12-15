import "./achievements.css";
import { useState } from "react";
import badge50 from "../badges/50days.png";
import badge100 from "../badges/100days.png";
import badgeSep from "../badges/sep-9.png";
import badgePandas from "../badges/pandas.png";
import hrPython from "../badges/hr-py.svg";
import hrSQL from "../badges/hr-sql.svg";
import hrPS from "../badges/hr-ps.svg";

export default function Achievements() {

  /* ================= STATE ================= */
  const [active, setActive] = useState("leetcode");

  /* ================= CERTIFICATES ================= */
  const certificates = [
    { title: "Python", year: "2025", desc: "HackerRank Certified", link: "https://www.hackerrank.com/certificates/52bd877f9147?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate" },
    { title: "SQL (Basic)", year: "2025", desc: "HackerRank Certified", link: "https://www.hackerrank.com/certificates/543fa4836be9" },
    { title: "SQL (Intermediate)", year: "2025", desc: "HackerRank Certified", link: "https://www.hackerrank.com/certificates/ced8bcd0f16e?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate" },
    { title: "Supervised Machine Learning", year: "2025", desc: "DeepLearning.AI (Coursera)", link: "https://www.coursera.org/account/accomplishments/records/7GSYCS2UIGV1" },
    { title: "Neural Networks and Deep Learning", year: "2025", desc: "DeepLearning.AI (Coursera)", link: "https://coursera.org/share/b4dda742c1a0d8d0a4504b0f331ad744" },
    { title: "Data Science Orientation", year: "2025", desc: "IBM (Coursera)", link: "https://coursera.org/share/de5cf8a07f0f115bf901037f1e8dae9f" },
    { title: "Power BI", year: "2025", desc: "Microsoft (Coursera)", link: "https://coursera.org/share/4f7fe093768d9a08fbba0e5e5a850a1d" },
    { title: "Microsoft Excel", year: "2025", desc: "Microsoft (Coursera)", link: "https://coursera.org/share/a38ee31090bebda0ebbf0fa74038b99a" },
    { title: "Microsoft SQL Certification", year: "2025", desc: "Intellipaat", link: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtMjEyMTMwNCZ1PTI4NDQ4MyZleHQ9MQ==" },
    { title: "Data Science Course", year: "2025", desc: "Intellipaat", link: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtMjEyMTMwNCZ1PTI4NDQ4MyZleHQ9MQ==" },
    { title: "Python Preparatory", year: "2024", desc: "Intellipaat", link: "https://lms.intellipaat.com/certificate-link/?Yz0xMTI2ODI0JnU9Mjg0NDgzJmV4dD0x" },
    { title: "Database Design", year: "2024", desc: "Oracle", link: "" },
    { title: "Database Programming Language", year: "2024", desc: "Oracle", link: "" },
  ];

  /* ================= BADGES ================= */
  const badgesData = {
    leetcode: [
    // {
    //   title: "400+ Problems Solved",
    //   desc: "Consistent DSA practice",
    //   image: ,
    //   link: "https://leetcode.com/u/menenirao1234/"
    // },
    {
      title: "50 Days Challenge",
      desc: "Completed coding streak",
      image: badge50,
      link: "https://leetcode.com/u/menenirao1234/"
    },
    {
      title: "100 Days Challenge",
      desc: "Completed 100-day streak",
      image: badge100,
      link: "https://leetcode.com/u/menenirao1234/"
    },
    {
      title: "September Challenge",
      desc: "Monthly challenge completion",
      image: badgeSep,
      link: "https://leetcode.com/u/menenirao1234/"
    },
    {
      title: "Pandas Badge",
      desc: "Pandas learning milestone",
      image: badgePandas,
      link: "https://leetcode.com/u/menenirao1234/"
    }
  ],

    hackerrank: [
  {
    title: "Python – 5 Star",
    desc: "Advanced Python proficiency",
    image: hrPython,
    link: "https://www.hackerrank.com/profile/menenirao1234",
  },
  {
    title: "SQL – 4 Star",
    desc: "Database & query optimization",
    image: hrSQL,
    link: "https://www.hackerrank.com/profile/menenirao1234",
  },
  {
    title: "Problem Solving – 3 Star",
    desc: "Core DSA skills",
    image: hrPS,
    link: "https://www.hackerrank.com/profile/menenirao1234",
  },
],


    gfg: [
      { title: "200+ Problems Solved", desc: "Topic-wise problem solving", icon: "📘", link: "https://www.geeksforgeeks.org/profile/sahithimeneni06?tab=activity" },
      { title: "Institute Rank 50", desc: "Top institute performer", icon: "🏅", link: "https://www.geeksforgeeks.org/colleges/cvr-college-of-engineering-hyderabad/students/" },
    ],
  };

  /* ================= PROJECTS ================= */
  const projects = [
    { title: "Amazon Review Sentiment Analysis", tech: "Deep Learning • NLP • Streamlit", desc: "Sentiment analysis using LSTM", link: "https://github.com/sahithimeneni06/Amazon-Reviews-Analyzer" },

    { title: "Text Summarizer", tech: "Transformers • NLP • Streamlit", desc: "AI-powered text summarization", link: "https://github.com/sahithimeneni06/TextSummarizer" },

    { title: "Language Translator", tech: "Transformers • PyTorch • NLP", desc: "AI language translation system", link: "https://github.com/sahithimeneni06/Language-Translator" },

    { title: "News Classification", tech: "TensorFlow • Deep Learning • NLP", desc: "Headline classification model", link: "https://github.com/sahithimeneni06/NewsClassification" },

    { title: "VibeSense AI", tech: "Transformers • PyTorch", desc: "Emotion detection from text", link: "https://github.com/sahithimeneni06/EmotionDetector" },

    { title: "Portfolio Website", tech: "React • UI/UX", desc: "Modern single-page portfolio", link: "" },

    { title: "StudBud", tech: "Transformers • Flask • HTML • CSS", desc: "Personalized study planner", link: "https://github.com/sahithimeneni06/StudBudProject" },
    
    { title: "Image Transformer", tech: "Python • OpenCV • Streamlit", desc: "Basic image transformations", link: "https://github.com/sahithimeneni06/ImageTransformer" },
  ];

  return (
    <section id="achievements" className="achievements-section">

      {/* ================= TITLE ================= */}
      <div className="container">
        <h2 className="section-title">My <span>Achievements</span></h2>
        {/* <p className="section-sub">Certifications, coding milestones, and impactful projects</p> */}
        <h3 className="sub-title">Certifications</h3>
      </div>

      {/* ================= CERTIFICATES ================= */}
      <div className="certificates-scroll">
        {certificates.map((item, i) => (
          <div className="certificate-card" key={i}>
            <span className="certificate-year">{item.year}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-link">
              View Certificate →
            </a>
          </div>
        ))}
      </div>

      {/* ================= BADGES ================= */}
      <div className="container badges-container">
        <h3 className="sub-title">Coding Platform Badges</h3>

        {/* Mini Navbar */}
        <div className="badge-tabs">
          {["leetcode", "hackerrank", "gfg"].map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={active === p}
              className={`badge-tab ${active === p ? `active ${p}` : ""}`}
              onClick={() => setActive(p)}
            >
              {p === "leetcode" && "LeetCode"}
              {p === "hackerrank" && "HackerRank"}
              {p === "gfg" && "GeeksforGeeks"}
            </button>
          ))}
        </div>

        {/* Badge Cards */}
        <div className="badges-grid">
          {badgesData[active]?.map((badge, i) => (
            <div className={`badge-card ${active}`} key={i}>
  {badge.image ? (
    <img
      src={badge.image}
      alt={badge.title}
      className="badge-img"
    />
  ) : (
    <div className="badge-icon">{badge.icon}</div>
  )}

  <h5>{badge.title}</h5>
  <p>{badge.desc}</p>

  <a href={badge.link} target="_blank" rel="noreferrer">
    View Badge →
  </a>
</div>

          ))}
        </div>
      </div>

      {/* ================= PROJECTS ================= */}
      <div className="container projects-container">
        <h3 className="sub-title">Projects</h3>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <h4>{project.title}</h4>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.desc}</p>
              <a
  href={project.link || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className={`project-link ${!project.link ? "disabled" : ""}`}
>
  {project.link ? "View Project →" : "Private / Live"}
</a>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
