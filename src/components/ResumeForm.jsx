
import { User, Briefcase, GraduationCap, Code, LayoutList, Trash2, Plus, LayoutTemplate, Award } from 'lucide-react';

function ResumeForm({ resumeData, setResumeData, selectedTemplate, setSelectedTemplate }) {
  const handleChange = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleTextChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (section, id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleAddArrayItem = (section, emptyItem) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], { ...emptyItem, id: Date.now().toString() }]
    }));
  };

  const handleRemoveArrayItem = (section, id) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  return (
    <div className="resume-form">
      
      <section className="form-section">
        <h2 className="section-title"><LayoutTemplate size={20} /> Template Selection</h2>
        <div className="input-group full-width">
          <label>Choose a Template</label>
          <select 
            value={selectedTemplate} 
            onChange={(e) => setSelectedTemplate(e.target.value)}
            style={{ 
              background: 'var(--input-bg)', 
              color: 'var(--text-primary)', 
              padding: '10px', 
              borderRadius: '6px', 
              border: '1px solid var(--input-border)'
            }}
          >
            <option value="default">Default (Clean & Professional)</option>
            <option value="minimal">Minimal (Whitespace Heavy)</option>
            <option value="executive">Executive (Traditional Serif)</option>
            <option value="modern">Modern (Bold & Tech-Focused)</option>
            <option value="compact">Compact (High Density)</option>
            <option value="academic">Academic (Structured)</option>
          </select>
        </div>
      </section>

      <section className="form-section">
        <h2 className="section-title"><User size={20} /> Personal Information</h2>
        <div className="input-grid">
          <div className="input-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.fullName} 
              onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Job Title</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.jobTitle} 
              onChange={(e) => handleChange('personalInfo', 'jobTitle', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={resumeData.personalInfo.email} 
              onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.phone} 
              onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Location</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.location} 
              onChange={(e) => handleChange('personalInfo', 'location', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>LinkedIn</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.linkedin} 
              onChange={(e) => handleChange('personalInfo', 'linkedin', e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>GitHub</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.github} 
              onChange={(e) => handleChange('personalInfo', 'github', e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="form-section">
        <h2 className="section-title"><LayoutList size={20} /> Professional Summary</h2>
        <div className="input-group full-width">
          <textarea 
            rows="4" 
            value={resumeData.summary}
            onChange={(e) => handleTextChange('summary', e.target.value)}
            placeholder="Write a brief professional summary..."
          />
        </div>
      </section>

      <section className="form-section">
        <h2 className="section-title"><Briefcase size={20} /> Experience</h2>
        {resumeData.experience.map((exp) => (
          <div key={exp.id} className="item-card relative">
            <button 
              className="btn-remove" 
              onClick={() => handleRemoveArrayItem('experience', exp.id)}
              title="Remove Experience"
            >
              <Trash2 size={16} />
            </button>
            <div className="input-grid">
              <div className="input-group">
                <label>Company</label>
                <input 
                  type="text" 
                  value={exp.company} 
                  onChange={(e) => handleArrayChange('experience', exp.id, 'company', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Role</label>
                <input 
                  type="text" 
                  value={exp.role} 
                  onChange={(e) => handleArrayChange('experience', exp.id, 'role', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Start Date</label>
                <input 
                  type="text" 
                  value={exp.startDate} 
                  onChange={(e) => handleArrayChange('experience', exp.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>End Date</label>
                <input 
                  type="text" 
                  value={exp.endDate} 
                  onChange={(e) => handleArrayChange('experience', exp.id, 'endDate', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Location</label>
                <input 
                  type="text" 
                  value={exp.location} 
                  onChange={(e) => handleArrayChange('experience', exp.id, 'location', e.target.value)}
                />
              </div>
            </div>
            <div className="input-group full-width" style={{marginTop: '12px'}}>
              <label>Description (Bullet points)</label>
              <textarea 
                rows="5" 
                value={exp.description}
                onChange={(e) => handleArrayChange('experience', exp.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
        <button 
          className="btn-add" 
          onClick={() => handleAddArrayItem('experience', { company: '', role: '', startDate: '', endDate: '', location: '', description: '' })}
        >
          <Plus size={16} /> Add Experience
        </button>
      </section>

      <section className="form-section">
        <h2 className="section-title"><GraduationCap size={20} /> Education</h2>
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="item-card relative">
            <button 
              className="btn-remove" 
              onClick={() => handleRemoveArrayItem('education', edu.id)}
              title="Remove Education"
            >
              <Trash2 size={16} />
            </button>
            <div className="input-grid">
              <div className="input-group">
                <label>Institution</label>
                <input 
                  type="text" 
                  value={edu.institution} 
                  onChange={(e) => handleArrayChange('education', edu.id, 'institution', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Degree</label>
                <input 
                  type="text" 
                  value={edu.degree} 
                  onChange={(e) => handleArrayChange('education', edu.id, 'degree', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Start Date</label>
                <input 
                  type="text" 
                  value={edu.startDate} 
                  onChange={(e) => handleArrayChange('education', edu.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>End Date</label>
                <input 
                  type="text" 
                  value={edu.endDate} 
                  onChange={(e) => handleArrayChange('education', edu.id, 'endDate', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Location</label>
                <input 
                  type="text" 
                  value={edu.location || ''} 
                  onChange={(e) => handleArrayChange('education', edu.id, 'location', e.target.value)}
                  placeholder="e.g. San Francisco, CA"
                />
              </div>
              <div className="input-group full-width" style={{marginTop: '12px'}}>
                <label>Additional Info (CGPA, Coursework)</label>
                <input 
                  type="text" 
                  value={edu.description} 
                  onChange={(e) => handleArrayChange('education', edu.id, 'description', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        <button 
          className="btn-add" 
          onClick={() => handleAddArrayItem('education', { institution: '', degree: '', startDate: '', endDate: '', location: '', description: '' })}
        >
          <Plus size={16} /> Add Education
        </button>
      </section>

      <section className="form-section">
        <h2 className="section-title"><Code size={20} /> Skills</h2>
        {resumeData.skills.map((skill) => (
          <div key={skill.id} className="item-card relative">
            <button 
              className="btn-remove" 
              onClick={() => handleRemoveArrayItem('skills', skill.id)}
              title="Remove Skill Category"
            >
              <Trash2 size={16} />
            </button>
            <div className="input-grid">
              <div className="input-group">
                <label>Category (e.g., Languages)</label>
                <input 
                  type="text" 
                  value={skill.category} 
                  onChange={(e) => handleArrayChange('skills', skill.id, 'category', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Comma-separated skills</label>
                <input 
                  type="text" 
                  value={skill.items} 
                  onChange={(e) => handleArrayChange('skills', skill.id, 'items', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        <button 
          className="btn-add" 
          onClick={() => handleAddArrayItem('skills', { category: '', items: '' })}
        >
          <Plus size={16} /> Add Skill Category
        </button>
      </section>

      <section className="form-section">
        <h2 className="section-title"><LayoutList size={20} /> Projects</h2>
        {resumeData.projects.map((proj) => (
          <div key={proj.id} className="item-card relative">
            <button 
              className="btn-remove" 
              onClick={() => handleRemoveArrayItem('projects', proj.id)}
              title="Remove Project"
            >
              <Trash2 size={16} />
            </button>
            <div className="input-grid">
              <div className="input-group">
                <label>Project Name</label>
                <input 
                  type="text" 
                  value={proj.name} 
                  onChange={(e) => handleArrayChange('projects', proj.id, 'name', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Technologies Used</label>
                <input 
                  type="text" 
                  value={proj.technologies} 
                  onChange={(e) => handleArrayChange('projects', proj.id, 'technologies', e.target.value)}
                />
              </div>
              <div className="input-group full-width">
                <label>Link / Repository</label>
                <input 
                  type="text" 
                  value={proj.link} 
                  onChange={(e) => handleArrayChange('projects', proj.id, 'link', e.target.value)}
                />
              </div>
            </div>
            <div className="input-group full-width" style={{marginTop: '12px'}}>
              <label>Description</label>
              <textarea 
                rows="3" 
                value={proj.description}
                onChange={(e) => handleArrayChange('projects', proj.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
        <button 
          className="btn-add" 
          onClick={() => handleAddArrayItem('projects', { name: '', technologies: '', link: '', description: '' })}
        >
          <Plus size={16} /> Add Project
        </button>
      </section>

      <section className="form-section" style={{marginBottom: '40px'}}>
        <h2 className="section-title"><Award size={20} /> Certifications & Recognition</h2>
        {(resumeData.certifications || []).map((cert) => (
          <div key={cert.id} className="item-card relative">
            <button 
              className="btn-remove" 
              onClick={() => handleRemoveArrayItem('certifications', cert.id)}
              title="Remove Certification"
            >
              <Trash2 size={16} />
            </button>
            <div className="input-grid">
              <div className="input-group">
                <label>Certification Name</label>
                <input 
                  type="text" 
                  value={cert.name} 
                  onChange={(e) => handleArrayChange('certifications', cert.id, 'name', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Issuing Organization</label>
                <input 
                  type="text" 
                  value={cert.issuer} 
                  onChange={(e) => handleArrayChange('certifications', cert.id, 'issuer', e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Date Earned</label>
                <input 
                  type="text" 
                  value={cert.date} 
                  onChange={(e) => handleArrayChange('certifications', cert.id, 'date', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        <button 
          className="btn-add" 
          onClick={() => handleAddArrayItem('certifications', { name: '', issuer: '', date: '' })}
        >
          <Plus size={16} /> Add Certification
        </button>
      </section>

    </div>
  );
}

export default ResumeForm;
