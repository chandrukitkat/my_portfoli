import { X, ExternalLink, Check } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose, playSound }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => { playSound?.(); onClose(); }}>
          <X size={24} />
        </button>

        <div className="project-category" style={{ marginTop: '10px' }}>
          {project.categoryLabel}
        </div>

        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }} className="gradient-text">
          {project.title}
        </h2>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
          {project.fullDescription}
        </p>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Key Features & Highlights</h4>
          <ul className="highlights-list">
            {project.features.map((feat, i) => (
              <li key={i} className="highlight-item">
                <Check size={18} className="highlight-icon" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ marginBottom: '12px', fontSize: '1rem', color: 'var(--text-muted)' }}>
            Technologies Used
          </h4>
          <div className="project-tech-pills">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-pill" style={{ borderColor: 'var(--border-accent)', color: 'var(--accent-cyan)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            onClick={playSound}
          >
            Live Demo Preview <ExternalLink size={18} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            onClick={playSound}
          >
            Source Code <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
