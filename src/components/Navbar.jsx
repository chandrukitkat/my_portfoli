import { useState, useEffect } from 'react';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Sparkles, Download } from 'lucide-react';

export default function Navbar({ activeSection, theme, toggleTheme, soundEnabled, toggleSound }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Education' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="logo-text" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <Sparkles className="icon-cyan" size={20} />
          <span><span className="gradient-text">CHANDRU</span></span>
          <span className="logo-dot"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (CV Download, Theme & Audio & Mobile Toggle) */}
        <div className="nav-actions">
          <a
            href="/Chandru_V_Resume.pdf"
            download="Chandru_V_Resume.pdf"
            className="icon-btn"
            title="Download CV / Resume"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Download size={18} />
          </a>

          <button
            className="icon-btn"
            onClick={toggleSound}
            title={soundEnabled ? 'Disable Audio Effects' : 'Enable Audio Effects'}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="icon-btn mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
