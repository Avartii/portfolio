import React, { useState } from 'react';
import { 
  ExternalLink, 
  Code2, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Globe,
  Share2
} from 'lucide-react';
import { Github } from './BrandIcons';
import { playKeyClick, playSuccessSound } from '../utils/soundEffects';

export const ProjectsSection = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [activeTabs, setActiveTabs] = useState({
    wikicontest: 'overview',
    resolvex: 'overview',
    taskflow: 'overview',
    triviaedge: 'overview',
    uitmap: 'overview'
  });

  const categories = ['all', 'Open Source', 'AI & Civic Tech', 'Full-Stack', 'Institutional Tech'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const handleTabChange = (projectId, tab) => {
    playKeyClick();
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag font-mono">
            <span>&lt;deployments&gt;</span>
            <span>SHIPPED CODE & ARCHITECTURE</span>
            <span>&lt;/deployments&gt;</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects & Engineering</span>
          </h2>
          <p className="section-subtitle">
            Production-grade systems ranging from official Wikimedia open-source contest infrastructure to AI-assisted civic intelligence and campus-adopted enterprise portals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-filter-btn font-mono ${filter === cat ? 'active' : ''}`}
              onClick={() => {
                playKeyClick();
                setFilter(cat);
              }}
            >
              {cat === 'all' ? 'All Deployments' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const currentTab = activeTabs[project.id] || 'overview';

            return (
              <div key={project.id} className="project-card glass-panel">
                
                {/* Project Header Bar */}
                <div className="project-card-header">
                  <div className="project-meta">
                    <span className="project-badge font-mono">{project.badge}</span>
                    <span className="project-category font-mono text-muted">
                      [{project.category}]
                    </span>
                  </div>

                  <div className="project-links">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="project-icon-link"
                        title="View Source on GitHub"
                        onClick={() => playKeyClick()}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="project-icon-link live-link"
                        title="Open Live Application"
                        onClick={() => playKeyClick()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="project-title font-mono">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                {/* Interactive IDE Inspection Tabs */}
                <div className="project-tabs font-mono">
                  <button
                    className={`proj-tab-btn ${currentTab === 'overview' ? 'active' : ''}`}
                    onClick={() => handleTabChange(project.id, 'overview')}
                  >
                    // 01. Overview
                  </button>
                  <button
                    className={`proj-tab-btn ${currentTab === 'architecture' ? 'active' : ''}`}
                    onClick={() => handleTabChange(project.id, 'architecture')}
                  >
                    // 02. Architecture
                  </button>
                  <button
                    className={`proj-tab-btn ${currentTab === 'impact' ? 'active' : ''}`}
                    onClick={() => handleTabChange(project.id, 'impact')}
                  >
                    // 03. Impact
                  </button>
                </div>

                {/* Tab Content Panel */}
                <div className="project-tab-content">
                  {currentTab === 'overview' && (
                    <div className="tab-pane">
                      <p className="project-description">{project.description}</p>
                      <ul className="project-highlights">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="highlight-item">
                            <span className="highlight-bullet">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentTab === 'architecture' && (
                    <div className="tab-pane architecture-pane font-mono">
                      <div className="arch-box">
                        <span className="arch-label text-gradient">SYSTEM DESIGN & STACK FLOW:</span>
                        <p className="arch-text">{project.architecture}</p>
                      </div>
                      <div className="arch-tech-list">
                        <span className="tech-list-label">DEPS:</span>
                        <div className="tech-pills">
                          {project.tech.map((t) => (
                            <span key={t} className="tech-pill-sm font-mono">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab === 'impact' && (
                    <div className="tab-pane impact-pane">
                      <div className="impact-box glass-panel">
                        <div className="impact-icon-wrapper">
                          <CheckCircle2 size={20} className="impact-icon" />
                        </div>
                        <div>
                          <h4 className="impact-title font-mono">Outcome & Adoption</h4>
                          <p className="impact-text">{project.metrics}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Pills Footer */}
                <div className="project-card-footer">
                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag font-mono">{t}</span>
                    ))}
                  </div>

                  <div className="project-cta-row">
                    {project.links.live ? (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-primary btn-sm font-mono"
                        onClick={() => playSuccessSound()}
                      >
                        <span>Launch App</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-secondary btn-sm font-mono"
                        onClick={() => playKeyClick()}
                      >
                        <span>Inspect Repo</span>
                        <Github size={13} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
