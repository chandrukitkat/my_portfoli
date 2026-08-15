import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Timeline() {
  const journey = [
    {
      type: 'cert',
      year: 'July 2023',
      role: 'Cloud Computing with AWS',
      org: 'ETS Academy (Erode-TN)',
      desc: 'Certification & training course conducted by ETS Academy focusing on AWS Cloud infrastructure and services.',
    },
    {
      type: 'cert',
      year: 'Feb 2023',
      role: 'Computing Application with AWS',
      org: 'Foss Club (Erode-TN)',
      desc: 'Certification program conducted by Foss Club on cloud computing applications and deployment.',
    },
    {
      type: 'cert',
      year: 'Dec 2022',
      role: 'Web Technology Certification',
      org: 'Extol Tech Solution (Erode-TN)',
      desc: 'Hands-on technical certification program on modern web technologies.',
    },
    {
      type: 'edu',
      year: '2020 - 2024',
      role: 'B.E. in Computer Science and Engineering',
      org: 'Sengunthar Engineering College',
      desc: 'Successfully completed graduation with a 7.8 CGPA, demonstrating consistent academic performance, dedication, and a strong understanding of core subjects.',
    },
    {
      type: 'edu',
      year: '2020',
      role: 'HSC (12th Standard)',
      org: 'Vivekananda Vidyalaya Higher Secondary School',
      desc: 'Successfully completed 12th Standard with 64% marks.',
    },
    {
      type: 'edu',
      year: '2018',
      role: 'SSLC (10th Standard)',
      org: 'Vivekananda Vidyalaya Higher Secondary School',
      desc: 'Successfully completed 10th Standard with 84% marks.',
    },
  ];

  return (
    <section id="timeline" className="section-container">
      <h2 className="section-title">
        Education & <span className="gradient-text">Certifications</span>
      </h2>
      <p className="section-subtitle">
        My professional journey, career milestones, and academic background.
      </p>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {journey.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-card">
              <div className="timeline-year">
                <Calendar size={14} /> {item.year}
              </div>

              <h3 className="timeline-role" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {item.type === 'cert' ? (
                  <Award size={18} className="icon-cyan" />
                ) : item.type === 'work' ? (
                  <Briefcase size={18} className="icon-cyan" />
                ) : (
                  <GraduationCap size={18} style={{ color: 'var(--accent-purple)' }} />
                )}
                {item.role}
              </h3>

              <div className="timeline-org">{item.org}</div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
