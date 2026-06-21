

function TemplateExecutive({ resumeData }) {
  const { personalInfo, summary, experience, education, skills, projects } = resumeData;

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
    <div className="resume-document template-executive">
      <header className="res-header">
        <h1 className="res-name">{personalInfo.fullName.toUpperCase()}</h1>
        <div className="res-contact">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.email && <span><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>}
          {personalInfo.phone && <span><a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a></span>}
          {personalInfo.linkedin && <span><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></span>}
        </div>
      </header>

      {summary && (
        <section className="res-section">
          <h3 className="res-section-title">PROFESSIONAL SUMMARY</h3>
          <p className="res-summary">{summary}</p>
        </section>
      )}

      {experience && experience.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">PROFESSIONAL EXPERIENCE</h3>
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
                    <span className="res-date">{exp.startDate} – {exp.endDate}</span>
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
          <h3 className="res-section-title">PROJECTS</h3>
          <div className="res-items">
            {projects.map(proj => (
              <div key={proj.id} className="res-item">
                <div className="res-item-header">
                  <div className="res-item-main">
                    <h4 className="res-company">{proj.name}</h4>
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

      {education && education.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">EDUCATION</h3>
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
                    <span className="res-date">{edu.startDate} – {edu.endDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {skills && skills.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">TECHNICAL SKILLS</h3>
          <div className="res-skills-minimal" style={{ fontSize: '10.5pt' }}>
            {skills.map((skill) => (
              <div key={skill.id} style={{ marginBottom: '6px' }}>
                <strong>{skill.category.toUpperCase()}:</strong> {skill.items}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default TemplateExecutive;
