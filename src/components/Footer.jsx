const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <p>Hangarige Rahul • Frontend Developer & Data Science Enthusiast</p>
      <div style={{display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap'}}>
        <a className="btn btn-secondary" href="/resume/Rahul Resume.docx" download>Download Resume</a>
        <a className="btn btn-secondary" href="#contact">Get in Touch</a>
        <span style={{fontSize: '0.9rem', color: '#64748b'}}>© 2026 All rights reserved</span>
      </div>
    </div>
  </footer>
);

export default Footer;
