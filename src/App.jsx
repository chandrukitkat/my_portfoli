import { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import CreativeTerminal from './components/CreativeTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Audio effect player using Web Audio API
  const playSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio context fallback silent
    }
  };

  const toggleTheme = () => {
    playSound();
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  // Scroll Spy to track current section
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'terminal', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Background Interactive Particles */}
      <BackgroundCanvas theme={theme} />

      {/* Ambient Radial Blur Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Floating Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
      />

      {/* Main Content Sections */}
      <main>
        <Hero playSound={playSound} />
        <About playSound={playSound} />
        <Skills playSound={playSound} />
        <Projects playSound={playSound} />
        <Timeline />
        <CreativeTerminal toggleTheme={toggleTheme} playSound={playSound} />
        <Contact playSound={playSound} />
      </main>

      {/* Footer */}
      <Footer playSound={playSound} />
    </div>
  );
}
