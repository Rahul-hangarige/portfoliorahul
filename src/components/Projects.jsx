const Projects = () => (
  <section className="section projects-section" id="projects">
    <div className="section-header">
      <p className="section-label">Projects</p>
      <h2>Featured Projects</h2>
    </div>
    <div className="project-grid">
      <article className="project-card">
        <div className="project-image">
          <div className="project-placeholder">
            <span>HS</span>
          </div>
        </div>
        <div className="project-content">
          <h3>HireSight</h3>
          <p>AI-powered recruitment platform that streamlines the hiring process with intelligent candidate matching and profile analysis.</p>
          <p className="project-tech">React • JavaScript • HTML • CSS</p>
        </div>
      </article>
      <article className="project-card">
        <div className="project-image">
          <div className="project-placeholder">
            <span>GA</span>
          </div>
        </div>
        <div className="project-content">
          <h3>GitAnalyser</h3>
          <p>Comprehensive GitHub profile analyzer that provides insights into developer activity, contributions, and repository statistics.</p>
          <p className="project-tech">React • GitHub API • JavaScript</p>
        </div>
      </article>
      <article className="project-card">
        <div className="project-image">
          <div className="project-placeholder">
            <span>BB</span>
          </div>
        </div>
        <div className="project-content">
          <h3>Blood Bank Donation</h3>
          <p>Blood donation management system designed to connect donors with recipients and manage donation inventory efficiently.</p>
          <p className="project-tech">React • HTML • CSS</p>
        </div>
      </article>
      <article className="project-card">
        <div className="project-image">
          <div className="project-placeholder">
            <span>SRR</span>
          </div>
        </div>
        <div className="project-content">
          <h3>Smart Resume Ranker</h3>
          <p>Resume ranking system using skill gap analysis to match candidate qualifications with job requirements accurately.</p>
          <p className="project-tech">React • Python • JavaScript</p>
        </div>
      </article>
    </div>
  </section>
);

export default Projects;
