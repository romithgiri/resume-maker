

function TemplateDefault({ resumeData }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = resumeData;

  const renderBulletPoints = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      const content = trimmed.startsWith('-') ? trimmed.substring(1).trim() : trimmed;
      return <li key={index}>{content}</li>;
    });
  };

  return (
    <div className="resume-document template-default">
      {/* Header */}
      <header className="res-header">
        <h1 className="res-name">{personalInfo.fullName}</h1>
        <h2 className="res-title">{personalInfo.jobTitle}</h2>
        <div className="res-contact">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.email && <span><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>}
          {personalInfo.phone && <span><a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a></span>}
          {personalInfo.linkedin && <span><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></span>}
          {personalInfo.github && <span><a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a></span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="res-section">
          <h3 className="res-section-title">Summary</h3>
          <p className="res-summary">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Experience</h3>
          <div className="res-items">
            {experience.map(exp => (
              <div key={exp.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{exp.company}</h4>
                    <span className="res-role">{exp.role}</span>
                  </div>
                  <div className="res-item-meta">
                    <span className="res-location">{exp.location}</span>
                    <span className="res-date">{exp.startDate} - {exp.endDate}</span>
                  </div>
                </div>
                <ul className="res-bullets">
                  {renderBulletPoints(exp.description)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Projects</h3>
          <div className="res-items">
            {projects.map(proj => (
              <div key={proj.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{proj.name}</h4>
                    {proj.link && <span className="res-link">| <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer">{proj.link}</a></span>}
                  </div>
                  <div className="res-item-meta">
                    <span className="res-date">{proj.technologies}</span>
                  </div>
                </div>
                <p className="res-proj-desc">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Education</h3>
          <div className="res-items">
            {education.map(edu => (
              <div key={edu.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{edu.institution}</h4>
                    <span className="res-role">{edu.degree}</span>
                  </div>
                  <div className="res-item-meta">
                    <span className="res-location">{edu.location}</span>
                    <span className="res-date">{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
                {edu.description && <p className="res-edu-desc">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Certifications & Recognition</h3>
          <div className="res-items">
            {certifications.map(cert => (
              <div key={cert.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{cert.name}</h4>
                    {cert.issuer && <span className="res-role">{cert.issuer}</span>}
                  </div>
                  <div className="res-item-meta">
                    <span className="res-date">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Skills</h3>
          <div className="res-skills">
            {skills.map((skill) => (
              <div key={skill.id} className="res-skill-category">
                <span style={{ fontWeight: 600, color: 'var(--doc-accent)' }}>{skill.category}: </span>
                <span>{skill.items}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default TemplateDefault;
