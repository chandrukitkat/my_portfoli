import { useState, useEffect } from 'react';
import { ArrowUp, Clock, Heart } from 'lucide-react';

export default function Footer({ playSound }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    playSound?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-text">
          <span>© {new Date().getFullYear()} Creative React Portfolio. Built with </span>
          <Heart size={14} style={{ color: '#ef4444', display: 'inline', margin: '0 4px' }} />
          <span> using React 19 & Vite.</span>
        </div>

        <div className="clock-badge">
          <Clock size={14} /> {time} Local Time
        </div>

        <button className="icon-btn" onClick={scrollToTop} title="Scroll Back to Top">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
