

function TemplateModern({ resumeData }) {
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
    <div className="resume-document template-modern">
      <header className="res-header-modern">
        <div className="header-left">
          <h1 className="res-name">{personalInfo.fullName}</h1>
          <h2 className="res-title">{personalInfo.jobTitle}</h2>
        </div>
        <div className="header-right">
          {personalInfo.email && <span><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>}
          {personalInfo.phone && <span><a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a></span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></span>}
        </div>
      </header>

      {summary && (
        <section className="res-section">
          <h3 className="res-section-title">Profile</h3>
          <p className="res-summary">{summary}</p>
        </section>
      )}

      {experience && experience.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Work Experience</h3>
          <div className="res-items">
            {experience.map(exp => (
              <div key={exp.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{exp.role}</h4>
                    <span className="res-role">{exp.company}</span>
                  </div>
                  <div className="res-item-meta">
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

      {projects && projects.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Projects</h3>
          <div className="res-items">
            {projects.map(proj => (
              <div key={proj.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{proj.name}</h4>
                  </div>
                </div>
                <p className="res-proj-desc">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {education && education.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Education</h3>
          <div className="res-items">
            {education.map(edu => (
              <div key={edu.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{edu.degree}</h4>
                    <span className="res-role">{edu.institution}</span>
                  </div>
                  <div className="res-item-meta">
                    <span className="res-date">{edu.endDate}</span>
                  </div>
                </div>
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

      {skills && skills.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Skills</h3>
          <div className="res-skills-tags-container">
            {skills.map((skill) => (
              <div key={skill.id} style={{ marginBottom: '8px' }}>
                <strong style={{ display: 'block', marginBottom: '4px', fontSize: '10pt', color: '#374151' }}>
                  {skill.category}
                </strong>
                <div className="res-skills-tags">
                  {skill.items.split(',').map((item, index) => {
                    const trimmed = item.trim();
                    if (!trimmed) return null;
                    return <span key={index} className="skill-tag">{trimmed}</span>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default TemplateModern;
