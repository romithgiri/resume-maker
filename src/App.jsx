import { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { Download, FileText, Upload } from 'lucide-react';
import './index.css';

const INITIAL_STATE = {
  personalInfo: {
    fullName: 'John Doe',
    jobTitle: 'Senior Full Stack Engineer',
    email: 'john.doe@example.com',
    phone: '+1 (555) 019-2834',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
  },
  summary: 'Results-driven Senior Full Stack Engineer with 7+ years of experience in designing, building, and maintaining high-performance web applications. Expert in React, Node.js, and cloud architecture. Proven track record of improving web application performance by 40% and leading cross-functional teams to deliver scalable SaaS solutions.',
  experience: [
    {
      id: '1',
      company: 'Acme Corporation',
      role: 'Senior Full Stack Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'Present',
      description: '- Spearheaded the migration of the core flagship application from legacy architectures to React and Node.js, accelerating UI rendering speed by 35%.\n- Architected a robust offline-first synchronization layer, ensuring seamless functionality for users in low-bandwidth areas.\n- Mentored 4 junior developers, conducting code reviews and establishing best practices in clean architecture and modularization.',
    },
    {
      id: '2',
      company: 'Beta Tech',
      role: 'Software Engineer',
      location: 'San Francisco, CA',
      startDate: 'Mar 2019',
      endDate: 'Dec 2021',
      description: '- Developed and published 3 consumer-facing web products with over 5M+ active sessions.\n- Integrated secure RESTful APIs and optimized query responses, reducing latency by 20%.\n- Implemented robust CI/CD pipelines using GitHub Actions to automate testing and deployments.',
    }
  ],
  education: [
    {
      id: '1',
      institution: 'State University',
      degree: 'B.S. in Computer Science',
      location: 'San Francisco, CA',
      startDate: 'Aug 2015',
      endDate: 'May 2019',
      description: 'GPA: 3.8/4.0. Relevant Coursework: Data Structures, Algorithms, Distributed Systems.',
    }
  ],
  skills: [
    { id: '1', category: 'Languages', items: 'JavaScript, TypeScript, Python, HTML/CSS' },
    { id: '2', category: 'Frameworks', items: 'React, Node.js, Express, Next.js' },
    { id: '3', category: 'Tools & Architecture', items: 'Docker, AWS, Git, REST APIs, CI/CD, SQL/NoSQL' }
  ],
  projects: [
    {
      id: '1',
      name: 'TaskFlow Dashboard',
      technologies: 'React, Node.js, PostgreSQL',
      link: 'github.com/johndoe/taskflow',
      description: 'An open-source task management dashboard demonstrating modern web development best practices, clean design, and real-time state synchronization.'
    }
  ]
};

function App() {
  const [resumeData, setResumeData] = useState(INITIAL_STATE);
  const [selectedTemplate, setSelectedTemplate] = useState('default');
  const fileInputRef = useRef(null);

  const handleExportJSON = () => {
    const dataStr = JSON.stringify({ resumeData, selectedTemplate }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const name = resumeData.personalInfo.fullName.replace(/\s+/g, '_') || 'Resume';
    link.href = url;
    link.download = `${name}_data.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed && typeof parsed === 'object') {
          const incomingData = parsed.resumeData || parsed;
          if (incomingData && incomingData.personalInfo && typeof incomingData.personalInfo === 'object') {
            setResumeData(incomingData);
            if (parsed.selectedTemplate) {
              setSelectedTemplate(parsed.selectedTemplate);
            }
            alert('Resume data imported successfully!');
          } else {
            alert('Invalid file format: Could not find valid resume data structure.');
          }
        } else {
          alert('Invalid file format: Selected file is not a valid JSON object.');
        }
      } catch (err) {
        console.error(err);
        alert('Error parsing file: Please make sure it is a valid JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // clear select state
  };

  const handlePrint = () => {
    const element = document.querySelector('#resume-preview-root .resume-document');
    if (!element) return;

    // Temporarily add class to force A4 dimensions on mobile during render
    document.body.classList.add('pdf-export-mode');

    const opt = {
      margin: [15, 20, 15, 20],
      filename: `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      enableLinks: true,
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      document.body.classList.remove('pdf-export-mode');
    }).catch((err) => {
      console.error('PDF Generation Error:', err);
      document.body.classList.remove('pdf-export-mode');
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <FileText size={24} className="icon" />
          <h1>ResumeBuilder <span className="highlight">Pro</span></h1>
        </div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={handleExportJSON} title="Export filled data as JSON file">
            <Download size={16} />
            <span>Export JSON</span>
          </button>
          <button className="btn-secondary" onClick={handleImportClick} title="Import data from JSON file">
            <Upload size={16} />
            <span>Import JSON</span>
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImportJSON} 
            accept=".json" 
            style={{ display: 'none' }} 
          />
          <button className="btn-primary" onClick={handlePrint}>
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </header>

      <main className="app-main">
        <div className="left-panel">
          <ResumeForm 
            resumeData={resumeData} 
            setResumeData={setResumeData} 
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        </div>
        <div className="right-panel">
          <div className="preview-container" id="resume-preview-root">
            <ResumePreview 
              resumeData={resumeData} 
              selectedTemplate={selectedTemplate} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
