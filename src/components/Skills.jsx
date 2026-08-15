import { useState } from 'react';
import { Layout, Server, Palette, Wrench } from 'lucide-react';

export default function Skills({ playSound }) {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend Development', icon: <Layout size={18} /> },
    { id: 'backend', label: 'Backend & Cloud', icon: <Server size={18} /> },
    { id: 'design', label: 'UI/UX & Creative', icon: <Palette size={18} /> },
    { id: 'tools', label: 'Tools & Ecosystem', icon: <Wrench size={18} /> },
  ];

  const skillData = {
    frontend: [
      { name: 'React+vite', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Python Basic', level: 50 },
      { name: 'HTML5', level: 94 },
     ],
    backend: [
      { name: 'Django', level: 85 },
      { name: 'Rest Framework', level: 88 },
      { name: 'My SQL', level: 80 },
     
    ],
    design: [
      { name: 'UI / UX Component Design', level: 92 },
      { name: 'Figma & Design Systems', level: 90 },
      
    ],
    tools: [
      { name: 'Git / GitHub Workflow', level: 92 },
      { name: 'Visual Studio', level: 78 },
      { name: 'Android Studio', level: 82 },
     
    ],
  };

  const handleTabChange = (id) => {
    playSound?.();
    setActiveTab(id);
  };

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">
        Technical <span className="gradient-text">Skills</span>
      </h2>
      <p className="section-subtitle">
        A comprehensive breakdown of technologies and tools I specialize in.
      </p>

      {/* Category Tabs */}
      <div className="skills-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => handleTabChange(cat.id)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {cat.icon} {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillData[activeTab]?.map((skill, index) => (
          <div key={index} className="glass-card skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
