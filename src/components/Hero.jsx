import { useState, useEffect } from 'react';

const Hero = () => {
  const roles = [
    'Frontend Developer',
    'React.js Developer',
    'Data Science Enthusiast',
    'Python Developer',
    'Problem Solver',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timeout = setTimeout(() => {}, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Hangarige Rahul</h1>
            <div className="hero-role">
              <span className="typewriter">{roles[roleIndex].substring(0, charIndex)}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              B.Tech Data Science student at Balaji Institute of Technology and Science.
              I build scalable web applications, interactive user interfaces, and data-driven systems that solve real-world challenges.
            </p>
            <div className="hero-actions">
              <a href="#featured-projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="/resume.pdf" className="btn btn-outline" download="Rahul_Resume.pdf">
                <i className="fas fa-download"></i> Resume
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Rahul-Hangarige" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/Rahul-ai-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:skrrahul77@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img src="/rahul.img.jpeg" alt="Hangarige Rahul" className="profile-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
