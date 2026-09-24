import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  MapPin, 
  GitCommit, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Award,
  Sparkles,
  Smartphone,
  Cloud,
  Heart,
  Cpu,
  Terminal
} from 'lucide-react';
import { playKeyClick } from '../utils/soundEffects';

const communityIcons = {
  Smartphone,
  Award,
  Heart,
  Cloud,
  Cpu,
  Terminal
};

export const ExperienceSection = ({ experience, communityLeadership }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedId, setExpandedId] = useState('polycab');

  const toggleExpand = (id) => {
    playKeyClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag font-mono">
            <span>&lt;timeline&gt;</span>
            <span>CAREER PATH & COMMUNITY IMPACT</span>
            <span>&lt;/timeline&gt;</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="text-gradient">Leadership Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of production engineering roles and high-impact developer community organizing across India.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="timeline-tabs-row">
          <button
            className={`timeline-tab-btn font-mono ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => {
              playKeyClick();
              setActiveTab('all');
            }}
          >
            // 01. Complete History
          </button>
          <button
            className={`timeline-tab-btn font-mono ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => {
              playKeyClick();
              setActiveTab('work');
            }}
          >
            // 02. Engineering Roles ({experience.length})
          </button>
          <button
            className={`timeline-tab-btn font-mono ${activeTab === 'community' ? 'active' : ''}`}
            onClick={() => {
              playKeyClick();
              setActiveTab('community');
            }}
          >
            // 03. Community Leadership ({communityLeadership.length})
          </button>
        </div>

        {/* Git Timeline Container */}
        <div className="git-timeline">
          
          {/* Engineering Roles */}
          {(activeTab === 'all' || activeTab === 'work') && (
            <div className="timeline-category-block">
              <div className="category-marker font-mono">
                <Briefcase size={16} />
                <span>PROFESSIONAL ENGINEERING ROLES</span>
              </div>

              {experience.map((job) => {
                const isExpanded = expandedId === job.id;
                return (
                  <div key={job.id} className="timeline-node">
                    {/* Git Commit Hash & Dot */}
                    <div className="timeline-line-marker">
                      <div className="git-commit-dot">
                        <GitCommit size={14} />
                      </div>
                      <div className="timeline-connector"></div>
                    </div>

                    {/* Content Card */}
                    <div className="timeline-card glass-panel">
                      <div 
                        className="timeline-card-header"
                        onClick={() => toggleExpand(job.id)}
                      >
                        <div className="header-left">
                          <div className="role-title-row">
                            <h3 className="role-title font-mono">{job.role}</h3>
                            <span className="company-badge font-mono">{job.company}</span>
                            {job.status === 'Current Role' && (
                              <span className="current-badge font-mono">
                                <span className="status-pulse-dot"></span>
                                Present
                              </span>
                            )}
                          </div>

                          <div className="timeline-meta font-mono text-muted">
                            <span className="meta-item">
                              <Calendar size={13} /> {job.period}
                            </span>
                            <span className="meta-item">
                              <MapPin size={13} /> {job.location} ({job.type})
                            </span>
                          </div>
                        </div>

                        <button className="expand-btn font-mono" aria-label="Toggle details">
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="timeline-card-body">
                          <ul className="timeline-bullet-list">
                            {job.highlights.map((h, i) => (
                              <li key={i} className="timeline-bullet-item">
                                <span className="bullet-dash font-mono">git&gt;</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="timeline-tags">
                            {job.tags.map((t) => (
                              <span key={t} className="timeline-tag font-mono">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Community Leadership */}
          {(activeTab === 'all' || activeTab === 'community') && (
            <div id="community" className="timeline-category-block">
              <div className="category-marker font-mono">
                <Users size={16} />
                <span>COMMUNITY LEADERSHIP & ECOSYSTEM IMPACT</span>
              </div>

              <div className="community-grid">
                {communityLeadership.map((item) => {
                  const IconComp = communityIcons[item.icon] || Sparkles;
                  return (
                    <div key={item.id} className="community-card glass-panel">
                      <div className="community-card-top">
                        <div className="community-icon-box">
                          <IconComp size={18} className="community-icon" />
                        </div>
                        <span className="community-period font-mono">{item.period}</span>
                      </div>

                      <h4 className="community-role font-mono">{item.role}</h4>
                      <div className="community-org font-mono text-gradient">{item.organization}</div>
                      
                      <p className="community-summary">{item.summary}</p>
                      
                      <div className="community-impact-box">
                        <span className="impact-pill font-mono">IMPACT</span>
                        <p className="community-impact-text">{item.impact}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
