import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, Sparkles, Phone } from 'lucide-react';

export default function Contact({ playSound }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound?.();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="section-subtitle">
        Have a project idea, question, or opportunity? Feel free to reach out directly!
      </p>

      <div className="contact-grid">
        {/* Info Cards */}
        <div className="glass-card contact-info-card">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
            Let's Talk About Your Idea
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            I am always excited to discuss new web projects, mobile apps, or potential team collaborations.
          </p>

          <div className="info-item">
            <div className="info-icon">
              <Mail size={20} />
            </div>
            <div>
              <div className="info-title">Email Address</div>
              <div className="info-val">thechandru9442@gmail.com</div>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <Phone size={20} />
            </div>
            <div>
              <div className="info-title">Phone</div>
              <div className="info-val">+91 6380337169</div>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <MapPin size={20} />
            </div>
            <div>
              <div className="info-title">Location</div>
              <div className="info-val">Chennai / Tamil Nadu</div>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="info-title">Availability</div>
              <div className="info-val" style={{ color: 'var(--accent-cyan)' }}>
                Open for Freelance & Full-time Roles
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card contact-form-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle size={48} className="icon-cyan" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }} className="gradient-text">
                Message Sent Successfully!
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Thank you for reaching out, {formData.name || 'friend'}. I'll get back to you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry / Hello"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
