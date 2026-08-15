import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Code, Terminal, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import avatarImg from '../assets/avatar.jpg';

export default function Hero({ playSound }) {
  const roles = [
    'Web developer'

  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollTo = (id) => {
    playSound?.();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section-container hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="logo-dot"></span> Available for New Opportunities
          </div>

          <h1 className="hero-title">
            I am<span className="gradient-text"> Chandru</span>
          </h1>

          <div className="role-container">
            <span>I'm a</span>
            <span className="role-typing">{displayText}</span>
          </div>

          <p className="hero-description">
            Passionate about building highly responsive, scalable, and visually stunning web applications.
            Transforming complex ideas into sleek user interfaces using React, JavaScript, and modern CSS Web Development.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              Explore Projects <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/chandrukitkat"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              title="GitHub Profile"
              onClick={playSound}
            >
              <GithubIcon size={20} />
            </a>


            <a
              href="mailto:thechandru9442@gmail.com"
              className="hero-social-link"
              title="Send Email"
              onClick={playSound}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-avatar-wrapper">
          <div className="avatar-halo"></div>
          <div className="avatar-border-spin">
            <img src={avatarImg} alt="Developer Avatar" className="avatar-img" />
          </div>

          {/* Floating Badges */}
          <div className="floating-tech-badge badge-top-right">
            <Code size={16} style={{ color: 'var(--accent-cyan)' }} />
            <span>Chandru V</span>
          </div>

          <div className="floating-tech-badge badge-bottom-left">
            <Cpu size={16} style={{ color: 'var(--accent-purple)' }} />
            <span>Web developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
