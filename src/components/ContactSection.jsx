import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Clock, 
  Radio 
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { playKeyClick, playSuccessSound } from '../utils/soundEffects';

export const ContactSection = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-Time Engineering Opportunity',
    message: ''
  });

  const templates = [
    'Full-Time Engineering Opportunity',
    'Community Workshop / Technical Talk',
    'Open Source Wikimedia Collaboration',
    'Quick Virtual Coffee Chat'
  ];

  const handleCopyEmail = () => {
    playSuccessSound();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccessSound();
    
    // Construct mailto link
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.topic} - from ${formData.name}`);
    const body = encodeURIComponent(`Hi Avarti,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n\nSent via Developer Portfolio`);
    
    setFormSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag font-mono">
            <span>&lt;dispatch&gt;</span>
            <span>DIRECT IPC CHANNEL</span>
            <span>&lt;/dispatch&gt;</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="text-gradient">Something Remarkable</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an engineering role, technical workshop proposal, open-source initiative, or just want to connect — my terminal inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="contact-info-panel glass-panel">
            <div className="panel-status-bar font-mono">
              <span className="channel-indicator">
                <Radio size={14} className="channel-pulse" />
                <span>CHANNEL: ONLINE</span>
              </span>
              <span className="sla-badge">SLA: &lt; 24h</span>
            </div>

            <h3 className="contact-panel-title font-mono">Direct Coordinates</h3>

            <div className="contact-details-list">
              {/* Email item */}
              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <Mail size={18} />
                </div>
                <div className="detail-content">
                  <span className="detail-label font-mono">ELECTRONIC MAIL</span>
                  <a href={`mailto:${profile.email}`} className="detail-val font-mono">
                    {profile.email}
                  </a>
                </div>
                <button 
                  className="copy-btn font-mono" 
                  onClick={handleCopyEmail}
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location */}
              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="detail-content">
                  <span className="detail-label font-mono">BASE LOCATION</span>
                  <span className="detail-val font-mono">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Social Matrix */}
            <div className="social-links-block">
              <span className="detail-label font-mono" style={{ display: 'block', marginBottom: '0.8rem' }}>
                SOCIAL NODES & CODE REPOSITORIES
              </span>
              <div className="social-node-buttons">
                <a 
                  href={profile.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-node-btn font-mono"
                  onClick={() => playKeyClick()}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={profile.links.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-node-btn font-mono"
                  onClick={() => playKeyClick()}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="status-highlight-box font-mono">
              <span className="highlight-pill text-gradient">CURRENT AVAILABILITY:</span>
              <p className="highlight-text">
                Actively seeking high-impact Software Development Engineer (SDE) & Full-Stack roles. Open to relocation and remote opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Terminal Form */}
          <div className="contact-form-panel glass-panel">
            <div className="form-header font-mono">
              <Terminal size={16} className="form-icon text-gradient" />
              <span>DISPATCH_MESSAGE.sh</span>
            </div>

            {/* Topic Preset Chips */}
            <div className="topic-presets">
              <span className="preset-label font-mono">Select Template:</span>
              <div className="preset-chips">
                {templates.map((tpl) => (
                  <button
                    key={tpl}
                    type="button"
                    className={`preset-chip font-mono ${formData.topic === tpl ? 'active' : ''}`}
                    onClick={() => {
                      playKeyClick();
                      setFormData({ ...formData, topic: tpl });
                    }}
                  >
                    {tpl}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label font-mono">
                  <span>Your Name:</span>
                  <span className="text-muted">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  className="form-input font-mono"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label font-mono">
                  <span>Your Email:</span>
                  <span className="text-muted">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  className="form-input font-mono"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label font-mono">
                  <span>Selected Topic / Subject:</span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input font-mono"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label font-mono">
                  <span>Message Payload:</span>
                  <span className="text-muted">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, project, or event..."
                  className="form-textarea font-mono"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn font-mono">
                <Send size={16} />
                <span>Transmit Message via Email</span>
              </button>

              {formSent && (
                <div className="form-feedback font-mono">
                  <Check size={16} className="copied-icon" />
                  <span>Opening your mail client... You can also write directly to {profile.email}!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
