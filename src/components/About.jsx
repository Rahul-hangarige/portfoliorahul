const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief introduction about who I am and what I do</p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <p>
              I'm <strong>Hangarige Rahul</strong>, a B.Tech student in <strong>Data Science</strong> at Balaji Institute of Technology and Science (2023–2027), with a passion for <strong>Frontend Engineering, Full-Stack Web Development, and Data Analytics</strong>.
            </p>
            <p>
              I enjoy building responsive, accessible, and high-performance applications that solve real-world problems. My technical toolkit includes <strong>HTML5, CSS3, JavaScript, React.js, Python, SQL, MongoDB, and Git</strong>.
            </p>
            <p>
              Beyond web development, I have completed professional simulations and virtual internships with <strong>Deloitte (Data Analytics)</strong>, <strong>Zscaler (Cybersecurity)</strong>, and <strong>Google Android Development</strong>. I strive to bridge the gap between data-driven insights and delightful user interfaces.
            </p>
            <p>
              I believe in writing clean, maintainable code, actively collaborating on team projects, and continuously learning emerging web and AI technologies.
            </p>
          </div>
          <div className="about-right">
            <div className="about-photo-card">
              <div className="about-photo-wrapper">
                <img src="/rahul.img.jpeg" alt="Hangarige Rahul" />
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2023</span>
                <span className="stat-label">Started Journey</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Core Domains</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
