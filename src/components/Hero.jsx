const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Frontend Developer • React Developer</p>
        <h1>Hangarige Rahul</h1>
        <p className="hero-text">
          B.Tech Data Science Student at Balaji Institute of Technology and
          Science. I craft responsive web experiences using HTML, CSS,
          JavaScript, and React.js with a focus on modern design.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Certificates</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">React</span>
            <span className="stat-label">Specialist</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="profile-card">
          <div className="profile-ring">
            <img
              src="/rahul.img.jpeg"
              alt="Rahul profile"
              className="profile-photo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/profile.svg';
              }}
            />
          </div>
          <div className="profile-badge">
            <span>Rahul</span>
            <small>Frontend Developer</small>
          </div>
        </div>
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
