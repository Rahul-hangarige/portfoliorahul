import { useState, useEffect } from 'react';

const featuredProjects = [
  {
    title: 'HireSight',
    category: 'AI / Full Stack',
    icon: 'fa-user-check',
    description: 'AI-powered recruitment and candidate matching platform that streamlines the hiring workflow with intelligent profile analysis.',
    problem: 'Recruiters spend countless hours manually parsing resumes and matching candidate profiles to open requisitions.',
    solution: 'Built an intelligent platform with automated skill gap analysis, profile scoring, and candidate filtering.',
    features: [
      'Automated Resume Parsing',
      'Skill Gap Scoring',
      'Candidate Ranking Matrix',
      'Interactive Recruiter Dashboard',
      'Role Matching Algorithm',
    ],
    techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js'],
    github: 'https://github.com/Rahul-Hangarige',
    live: 'https://github.com/Rahul-Hangarige',
  },
  {
    title: 'GitAnalyser',
    category: 'Frontend / API',
    icon: 'fa-chart-line',
    description: 'Comprehensive GitHub profile and repository analyzer delivering instant developer metrics, language statistics, and contribution insights.',
    problem: 'Evaluating a candidate’s GitHub portfolio manually across dozens of repositories is tedious and unstructured.',
    solution: 'Developed an analytics interface consuming GitHub API to visualize commit activity, top languages, and repository quality.',
    features: [
      'GitHub Profile Overview',
      'Language Distribution Breakdown',
      'Commit Frequency & Activity Trends',
      'Repository Quality Insights',
      'Quick PDF/JSON Export',
    ],
    techStack: ['React.js', 'GitHub API', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Rahul-Hangarige',
    live: 'https://github.com/Rahul-Hangarige',
  },
  {
    title: 'Blood Bank Donation Platform',
    category: 'Healthcare / Web',
    icon: 'fa-heart-pulse',
    description: 'A real-time donor-recipient connectivity and blood bank inventory management system designed for emergency response.',
    problem: 'Emergency blood shortages and delays in finding verified matching donors during critical hospital requirements.',
    solution: 'Engineered a real-time web application with donor-recipient matching, emergency alerts, and live inventory tracking.',
    features: [
      'Emergency Blood Request Broadcast',
      'Donor-Recipient Matching by Group',
      'Live Hospital Inventory Tracking',
      'Donor History & Reminders',
      'Responsive Mobile-First UI',
    ],
    techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    github: 'https://github.com/Rahul-Hangarige',
    live: 'https://github.com/Rahul-Hangarige',
  },
  {
    title: 'Smart Resume Ranker',
    category: 'Data Science / ML',
    icon: 'fa-file-invoice',
    description: 'Intelligent resume scoring and skill gap analyzer that evaluates candidate qualifications against job descriptions.',
    problem: 'High volume job applications make it hard for talent teams to objectively rank candidates based on precise criteria.',
    solution: 'Implemented an NLP-inspired keyword and skill gap analyzer that calculates compatibility scores with actionable feedback.',
    features: [
      'NLP Skill Extraction',
      'Job Compatibility Score (%)',
      'Skill Gap Recommendations',
      'Multi-resume Batch Processing',
      'Exportable Candidate Reports',
    ],
    techStack: ['React.js', 'Python', 'JavaScript', 'CSS3', 'Data Science'],
    github: 'https://github.com/Rahul-Hangarige',
    live: 'https://github.com/Rahul-Hangarige',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const goTo = (index) => {
    if (index < 0) {
      setCurrentIndex(featuredProjects.length - 1);
    } else if (index >= featuredProjects.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextProject = () => goTo(currentIndex + 1);
  const prevProject = () => goTo(currentIndex - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === 'Escape') setSelectedProject(null);
        return;
      }
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'ArrowRight') nextProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, selectedProject]);

  return (
    <section id="featured-projects" className="featured-projects">
      <div className="container">
        <div className="fp-header">
          <span className="fp-badge">Showcase</span>
          <h2 className="fp-title">Featured Projects</h2>
          <p className="fp-subtitle">Real-world applications and intelligent tools I've built</p>
        </div>

        <div className="fp-carousel">
          <button
            className="fp-carousel-btn fp-carousel-btn-prev"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="fp-track-wrapper">
            <div
              className="fp-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.title}
                  className="fp-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="fp-card-header">
                    <div className="fp-card-icon">
                      <i className={`fas ${project.icon}`}></i>
                    </div>
                    <span className="fp-card-category">{project.category}</span>
                  </div>
                  <h3 className="fp-card-title">{project.title}</h3>
                  <p className="fp-card-desc">{project.description}</p>
                  <div className="fp-card-tech">
                    {project.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="fp-card-footer">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fp-btn-gh"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fp-btn-ld"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    )}
                  </div>
                  <div className="fp-card-hint">
                    <i className="fas fa-mouse-pointer"></i> Click to view details
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="fp-carousel-btn fp-carousel-btn-next"
            onClick={nextProject}
            aria-label="Next project"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="fp-dots">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                className={`fp-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Spotlight Project Modal */}
      {selectedProject && (
        <div
          className="fp-modal-overlay open"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="fp-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fp-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="fp-modal-content">
              <h3 className="fp-modal-title">{selectedProject.title}</h3>
              <p className="fp-modal-desc">{selectedProject.description}</p>

              <div className="fp-modal-section">
                <h4>
                  <i className="fas fa-exclamation-triangle"></i> Problem Solved
                </h4>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="fp-modal-section">
                <h4>
                  <i className="fas fa-lightbulb"></i> Solution
                </h4>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="fp-modal-section">
                <h4>
                  <i className="fas fa-star"></i> Key Features
                </h4>
                <ul>
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="fp-modal-section">
                <h4>
                  <i className="fas fa-code"></i> Tech Stack
                </h4>
                <div className="fp-modal-tech">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="fp-modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-btn-gh"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fp-btn-ld"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
