
import TemplateDefault from './templates/TemplateDefault';

// Lazy loading templates isn't strictly necessary for just 6 components, but it's good practice
// We'll import them directly for simplicity since they are small.
import TemplateMinimal from './templates/TemplateMinimal';
import TemplateExecutive from './templates/TemplateExecutive';
import TemplateModern from './templates/TemplateModern';
import TemplateCompact from './templates/TemplateCompact';
import TemplateAcademic from './templates/TemplateAcademic';

function ResumePreview({ resumeData, selectedTemplate }) {
  
  switch(selectedTemplate) {
    case 'minimal':
      return <TemplateMinimal resumeData={resumeData} />;
    case 'executive':
      return <TemplateExecutive resumeData={resumeData} />;
    case 'modern':
      return <TemplateModern resumeData={resumeData} />;
    case 'compact':
      return <TemplateCompact resumeData={resumeData} />;
    case 'academic':
      return <TemplateAcademic resumeData={resumeData} />;
    case 'default':
    default:
      return <TemplateDefault resumeData={resumeData} />;
  }
}

export default ResumePreview;
