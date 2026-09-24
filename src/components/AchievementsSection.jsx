import React from 'react';
import { 
  Trophy, 
  Award, 
  Compass, 
  CloudLightning, 
  GitPullRequest, 
  Sparkles,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle
} from 'lucide-react';
import { playKeyClick } from '../utils/soundEffects';

const achievementIcons = {
  Award,
  Trophy,
  Compass,
  CloudLightning,
  GitPullRequest,
  Sparkles
};

export const AchievementsSection = ({ achievements, education }) => {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        
        {/* Achievements Header */}
        <div className="section-header">
          <div className="section-tag font-mono">
            <span>&lt;trophies&gt;</span>
            <span>AWARDS & RECOGNITION</span>
            <span>&lt;/trophies&gt;</span>
          </div>
          <h2 className="section-title">
            Honors & <span className="text-gradient">Milestone Achievements</span>
          </h2>
          <p className="section-subtitle">
            National recognitions, corporate felicitations from Big Tech headquarters, and academic honors.
          </p>
        </div>

        {/* Trophy Cards Grid */}
        <div className="achievements-grid">
          {achievements.map((item) => {
            const IconComp = achievementIcons[item.icon] || Trophy;
            return (
              <div 
                key={item.id} 
                className="achievement-card glass-panel"
                onClick={() => playKeyClick()}
              >
                <div className="achievement-card-top">
                  <div className="achievement-icon-box">
                    <IconComp size={22} className="achievement-icon" />
                  </div>
                  <span className="achievement-badge font-mono">{item.badge}</span>
                </div>

                <h3 className="achievement-title font-mono">{item.title}</h3>
                
                <div className="achievement-org-row font-mono">
                  <span className="achievement-org text-gradient">{item.organization}</span>
                  <span className="achievement-date text-muted">[{item.date}]</span>
                </div>

                <p className="achievement-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Education Subsection */}
        <div className="education-block">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="section-tag font-mono">
              <GraduationCap size={16} />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h3 className="section-title" style={{ fontSize: '1.75rem' }}>
              Education & <span className="text-gradient">Credentials</span>
            </h3>
          </div>

          <div className="education-grid">
            {education.map((edu, idx) => (
              <div key={idx} className="education-card glass-panel">
                <div className="edu-header">
                  <div>
                    <h4 className="edu-degree font-mono">{edu.degree}</h4>
                    <div className="edu-institution text-gradient">{edu.institution}</div>
                  </div>
                </div>

                <div className="edu-meta font-mono text-muted">
                  <span><Calendar size={13} /> {edu.period}</span>
                  <span><MapPin size={13} /> {edu.location}</span>
                </div>

                <p className="edu-desc">{edu.description}</p>

                {edu.highlights && (
                  <div className="edu-highlights">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="edu-highlight-item font-mono">
                        <CheckCircle size={13} className="edu-check" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
