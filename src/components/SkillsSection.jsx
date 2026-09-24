import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Smartphone, 
  Boxes, 
  Palette, 
  Component, 
  Layout, 
  RefreshCw, 
  Server, 
  Zap, 
  ServerCrash, 
  Network, 
  Radio, 
  Lock, 
  HardDrive, 
  DatabaseZap, 
  Cloud, 
  CloudRain, 
  Globe, 
  GitBranch, 
  Send, 
  Flame, 
  MapPin, 
  Mic, 
  BookOpen, 
  Search,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { playKeyClick } from '../utils/soundEffects';

const iconMap = {
  Code, Terminal, Cpu, Database, Layers, Smartphone, Boxes,
  Palette, Component, Layout, RefreshCw, Server, Zap, ServerCrash,
  Network, Radio, Lock, HardDrive, DatabaseZap, Cloud, CloudRain,
  Globe, GitBranch, Send, Flame, MapPin, Mic, BookOpen
};

export const SkillsSection = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = skills.items.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag font-mono">
            <span>&lt;stack&gt;</span>
            <span>TECHNOLOGY RADAR</span>
            <span>&lt;/stack&gt;</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of languages, client-side frameworks, backend runtimes, distributed databases, and developer tooling utilized across production codebases.
          </p>
        </div>

        {/* Filter Toolbar & Live Search */}
        <div className="skills-toolbar glass-panel">
          {/* Category Tabs */}
          <div className="skills-tabs">
            {skills.categories.map((cat) => (
              <button
                key={cat.id}
                className={`skill-tab-btn font-mono ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  playKeyClick();
                  setActiveCategory(cat.id);
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Real-time search */}
          <div className="skills-search-wrapper">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              className="skills-search-input font-mono"
              placeholder="Search tech, library or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="clear-search-btn" 
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredItems.map((item, index) => {
            const IconComp = iconMap[item.icon] || Code;
            return (
              <div 
                key={item.name} 
                className="skill-card glass-panel"
                onClick={() => playKeyClick()}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-box">
                    <IconComp size={20} className="skill-icon" />
                  </div>
                </div>

                <h3 className="skill-name font-mono">{item.name}</h3>

                <div className="skill-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="skill-tag-pill font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-skills-found font-mono glass-panel">
            <p>No technologies found matching "{searchQuery}" in this filter.</p>
            <button 
              className="btn btn-secondary font-mono"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Core Engineering Competencies & Leadership Principles */}
        <div className="competencies-container">
          <div className="competency-box glass-panel">
            <div className="comp-header font-mono">
              <ShieldCheck size={18} className="text-gradient" />
              <span>CORE ARCHITECTURAL COMPETENCIES</span>
            </div>
            <div className="comp-tags">
              {(skills.coreCompetencies || []).map((comp) => (
                <div key={comp} className="comp-pill font-mono">
                  <span className="comp-bullet">✓</span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="competency-box glass-panel">
            <div className="comp-header font-mono">
              <Sparkles size={18} className="text-gradient" />
              <span>LEADERSHIP & COLLABORATION STRENGTHS</span>
            </div>
            <div className="comp-tags">
              {(skills.softSkills || []).map((soft) => (
                <div key={soft} className="comp-pill font-mono">
                  <span className="comp-bullet">✦</span>
                  <span>{soft}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
