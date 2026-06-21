

function TemplateMinimal({ resumeData }) {
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
    <div className="resume-document template-minimal">
      <header className="res-header">
        <h1 className="res-name">{personalInfo.fullName}</h1>
        <div className="res-contact">
          {personalInfo.email && <span><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>}
          {personalInfo.phone && <span><a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a></span>}
          {personalInfo.linkedin && <span><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></span>}
        </div>
      </header>

      {summary && (
        <section className="res-section">
          <p className="res-summary">{summary}</p>
        </section>
      )}

      {experience && experience.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Experience</h3>
          <div className="res-items">
            {experience.map(exp => (
              <div key={exp.id} className="res-item">
                <div className="res-item-header">
                  <h4 className="res-company">{exp.company} — <span className="res-role">{exp.role}</span></h4>
                  <span className="res-date">{exp.startDate} - {exp.endDate}</span>
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
                  <h4 className="res-company">{proj.name}</h4>
                  <span className="res-date">{proj.technologies}</span>
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
                  <h4 className="res-company">{edu.institution} — <span className="res-role">{edu.degree}</span></h4>
                  <span className="res-date">{edu.endDate}</span>
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
                  <h4 className="res-company">{cert.name} {cert.issuer && <span className="res-role">— {cert.issuer}</span>}</h4>
                  <span className="res-date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {skills && skills.length > 0 && (
        <section className="res-section">
          <h3 className="res-section-title">Skills</h3>
          <div className="res-skills-minimal">
            {skills.map((skill) => (
              <div key={skill.id} style={{ marginBottom: '4px' }}>
                <strong style={{ fontWeight: 600 }}>{skill.category}:</strong> {skill.items}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default TemplateMinimal;
