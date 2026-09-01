const Footer = () => {
  return (
    <footer className="bento-footer">
      <div className="bento-grid">
        {/* About Card (50%) */}
        <div className="bento-card bento-card-about">
          <div className="bento-card-icon">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="bento-card-title">About Me</h3>
          <p className="bento-card-desc">
            Every project in this portfolio reflects my dedication to building clean, responsive, and impactful digital experiences.
          </p>
          <p className="bento-card-desc">
            I enjoy transforming complex ideas into intuitive web applications and data-driven solutions through continuous learning, curiosity, and attention to detail.
          </p>
          <p className="bento-card-desc">
            Let's build something remarkable together.
          </p>
        </div>

        {/* Contact Card (25%) */}
        <div className="bento-card bento-card-contact">
          <h3 className="bento-card-title">Contact</h3>
          <div className="bento-contact-items">
            <div className="bento-contact-item">
              <div className="bento-contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span className="bento-contact-label">Email</span>
                <a href="mailto:skrrahul77@gmail.com" className="bento-contact-value">
                  skrrahul77@gmail.com
                </a>
              </div>
            </div>
            <div className="bento-contact-item">
              <div className="bento-contact-icon">
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <span className="bento-contact-label">Location</span>
                <span className="bento-contact-value">Telangana, India</span>
              </div>
            </div>
            <div className="bento-contact-item">
              <div className="bento-contact-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <span className="bento-contact-label">College</span>
                <span className="bento-contact-value">Balaji Institute of Tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Me Card (25%) */}
        <div className="bento-card bento-card-follow">
          <h3 className="bento-card-title">Follow Me</h3>
          <div className="bento-follow-buttons">
            <a
              href="https://github.com/Rahul-Hangarige"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-follow-btn"
            >
              <div className="bento-follow-icon">
                <i className="fab fa-github"></i>
              </div>
              <span className="bento-follow-label">GitHub</span>
              <i className="fas fa-chevron-right bento-follow-arrow"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/Rahul-ai-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-follow-btn"
            >
              <div className="bento-follow-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <span className="bento-follow-label">LinkedIn</span>
              <i className="fas fa-chevron-right bento-follow-arrow"></i>
            </a>

            <a
              href="mailto:skrrahul77@gmail.com"
              className="bento-follow-btn"
            >
              <div className="bento-follow-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <span className="bento-follow-label">Email Me</span>
              <i className="fas fa-chevron-right bento-follow-arrow"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bento-bottom">
        <div className="bento-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Hangarige Rahul. All Rights Reserved.</p>
          <p className="bento-credit">
            Designed & Developed by{' '}
            <a
              href="https://www.linkedin.com/in/Rahul-ai-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-credit-name"
            >
              Rahul
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
