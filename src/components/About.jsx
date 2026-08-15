import { Award, Briefcase, Users, Zap, CheckCircle2, FileText } from 'lucide-react';

export default function About({ playSound }) {
 

  const highlights = [
    'Specialized in React, Next.js, and Modern JavaScript (ES6+)',
    'Proficient in responsive Glassmorphism & custom CSS Design Systems',
    'Experience with REST APIs, GraphQL, and micro-frontend architecture',
    'Focus on web accessibility (WCAG), performance optimization & SEO',
  ];

  const handleDownloadResume = () => {
    playSound?.();
    const link = document.createElement('a');
    link.href = '/Chandru_V_Resume.pdf';
    link.download = 'Chandru_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="section-subtitle">
        Bridging the gap between engineering perfection and captivating visual art.
      </p>

      

      {/* Bio & Highlights */}
      <div className="about-bio-grid">
        <div className="glass-card bio-card">
          <h3 className="bio-heading">
            <span className="gradient-text">Who I Am</span>
          </h3>
          <p className="bio-text">
    I am Chandru V, a passionate and motivated Android & Web Developer with a strong interest in building responsive, high-performance applications. I have solid experience in Kotlin, Core Java, Android Studio, SQLite, RESTful APIs, JavaScript, HTML5, CSS3, and React. I enjoy solving complex problems, building sleek components, and delivering high-quality products.
          </p>
          
          
          <a 
            href="/Chandru_V_Resume.pdf" 
            download="Chandru_V_Resume.pdf" 
            className="btn-secondary" 
            style={{ marginTop: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }} 
            onClick={playSound}
          >
            <FileText size={18} /> Download CV / Resume
          </a>
        </div>

        <div className="glass-card bio-card">
          <h3 className="bio-heading">
            <span className="gradient-text">Core Technical Strengths</span>
          </h3>
          <ul className="highlights-list">
            {highlights.map((h, i) => (
              <li key={i} className="highlight-item">
                <CheckCircle2 size={20} className="highlight-icon" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
