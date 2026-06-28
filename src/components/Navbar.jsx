const Navbar = () => (
  <header className="site-header">
    <nav className="nav-container">
      <a className="brand" href="#home">Rahul</a>
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <div className="nav-links" role="navigation" aria-label="Primary">
          <a className="btn btn-primary" href="#about">About</a>
          <a className="btn btn-primary" href="#projects">Projects</a>
          <a className="btn btn-primary" href="#certificates">Certificates</a>
          <a className="btn btn-primary" href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a className="btn btn-primary" href="/resume/Rahul Resume.docx" download>Resume</a>
          <a className="btn btn-primary" href="#contact">Hire Me</a>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
