import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects({ playSound }) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'namakkal-tourism',
      category: 'mobile',
      categoryLabel: 'Android Mobile App',
      title: 'Namakkal Tourism App',
      shortDescription: 'Android app promoting Namakkal region with tourist destinations, local attractions, hotels, SQLite database, and Google Maps API.',
      fullDescription: 'Namakkal Tourism is a comprehensive Android application designed to promote tourism in the Namakkal region, providing seamless navigation, itinerary planning, dynamic weather updates, and personalized user profiles.',
      features: [
        'User-facing Kotlin UI components tailored for seamless tourist navigation',
        'SQLite database to store and retrieve destinations, hotels, and local activities',
        'RESTful APIs in Java for real-time weather and service availability',
        'Google Maps API integration for geolocation and nearby attraction discovery',
        'Authentication & profile management for saved preferences and itineraries'
      ],
      tech: ['Kotlin', 'Android SDK', 'Java', 'SQLite', 'Google Maps API', 'REST API'],
      demoUrl: 'https://github.com/chandrukitkat',
      githubUrl: 'https://github.com/chandrukitkat',
      colorGradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    },
    {
      id: 'nexus-ai',
      category: 'react',
      categoryLabel: 'React & AI Web App',
      title: 'Nexus AI Analytics Hub',
      shortDescription: 'Modern dashboard featuring real-time AI metrics, interactive charts, dark glassmorphic widgets, and instant search.',
      fullDescription: 'Nexus AI is a modern SaaS web application designed for monitoring artificial intelligence workflows, token usage, latency metrics, and team performance in real time.',
      features: [
        'Real-time WebSocket data stream with auto-reconnect',
        'Glassmorphic dark UI with dynamic theme customization',
        'Export reports in PDF and CSV format',
        'Role-based access control and user permission management'
      ],
      tech: ['React 19', 'Vite', 'CSS Modules', 'Chart.js', 'Lucide Icons'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      colorGradient: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)',
    },
   
   
    
    {
      id: 'vibestream',
      category: 'creative',
      categoryLabel: 'Creative UI/UX',
      title: 'VibeStream Audio Visualizer',
      shortDescription: 'Sleek music player with real-time Web Audio API frequency spectrum analyzer, playlists, and equalizers.',
      fullDescription: 'VibeStream transforms audio playback into a visual masterpiece using HTML5 Canvas frequency bars, smooth sound effects, and spatial audio controls.',
      features: [
        'Real-time audio spectrum analyzer rendering on canvas',
        'Preset EQ (Bass Boost, Vocal, Electronic, Flat)',
        'Custom audio playlist management',
        'Keyboard shortcuts for play/pause and volume'
      ],
      tech: ['React', 'Web Audio API', 'Canvas API', 'Lucide React'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      colorGradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    },
    {
      id: 'smarthome',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Web',
      title: 'Aura IoT Smart Home',
      shortDescription: 'Central control dashboard for smart home devices, lighting automation, climate control, and security cameras.',
      fullDescription: 'Aura provides home automation enthusiasts with a central glassmorphic control dashboard to monitor power consumption, lock doors, and schedule routine automations.',
      features: [
        'Live temperature & humidity gauges',
        'Interactive room toggle switches with instant state response',
        'Energy consumption breakdown analytics',
        'Security camera live stream view'
      ],
      tech: ['React', 'WebSockets', 'Chart.js', 'CSS Design System'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      colorGradient: 'linear-gradient(135deg, #8b5cf6 0%, #00f0ff 100%)',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  const handleFilterClick = (cat) => {
    playSound?.();
    setFilter(cat);
  };

  const handleOpenProject = (project) => {
    playSound?.();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="section-subtitle">
        Developed a responsive web application using HTML, CSS, JavaScript, and React.
        Implemented user-friendly interfaces, API integration, and responsive design for different devices.
        Focused on clean code, smooth functionality, and an improved user experience.
      </p>

      {/* Filter Chips */}
      <div className="projects-filter">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'mobile', label: 'Android & Mobile' },
          { id: 'react', label: 'React & Web' },
          { id: 'creative', label: 'Creative & UI/UX' },
          { id: 'fullstack', label: 'Full-Stack' },
        ].map((f) => (
          <button
            key={f.id}
            className={`tab-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => handleFilterClick(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card project-card"
            onClick={() => handleOpenProject(project)}
          >
            <div
              className="project-thumb-wrapper"
              style={{ background: project.colorGradient }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                }}
              >
                {project.title}
              </div>

              <div className="project-overlay">
                <button
                  className="icon-btn"
                  style={{ background: '#fff', color: '#000' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenProject(project);
                  }}
                  title="View Details"
                >
                  <Eye size={20} />
                </button>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  style={{ background: '#fff', color: '#000' }}
                  onClick={(e) => e.stopPropagation()}
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="project-body">
              <div className="project-category">{project.categoryLabel}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDescription}</p>

              <div className="project-tech-pills">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="tech-pill">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="tech-pill">+{project.tech.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          playSound={playSound}
        />
      )}
    </section>
  );
}
