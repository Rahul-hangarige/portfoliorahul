import { useRef } from 'react';

const Certificates = () => {
  const certTrackRef = useRef(null);
  const achTrackRef = useRef(null);

  const scrollTrack = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
    }
  };

  const certifications = [
    {
      title: 'Data Science Master',
      category: 'Certified',
      catClass: 'ach-cat-win',
      icon: 'fa-brain',
      desc: 'Mastery in Data Science covering machine learning algorithms, statistical data analysis, and predictive modeling.',
      link: '/photos/alter-data-science-master.pdf',
    },
    {
      title: 'Google Android Developer',
      category: 'Certified',
      catClass: 'ach-cat-win',
      icon: 'fa-mobile-screen',
      desc: 'Certified in Android application development, modern Kotlin architecture, and responsive UI design.',
      link: '/photos/google-android-developer.pdf',
    },
    {
      title: 'Java Full Stack Internship',
      category: 'Virtual Internship',
      catClass: 'ach-cat-hosted',
      icon: 'fa-layer-group',
      desc: 'Hands-on certification in full-stack Java architecture, Spring Boot, REST APIs, and database connectivity.',
      link: '/photos/java-full-stack-virtual-internship.pdf',
    },
    {
      title: 'Deloitte Data Analytics',
      category: 'Job Simulation',
      catClass: 'ach-cat-hosted',
      icon: 'fa-chart-pie',
      desc: 'Completed Deloitte data analytics job simulation covering data visualization, dashboarding, and business metrics.',
      link: '/photos/deloitte-data-analytics-1.pdf',
    },
    {
      title: 'Cybersecurity Simulation',
      category: 'Job Simulation',
      catClass: 'ach-cat-attended',
      icon: 'fa-shield-halved',
      desc: 'Practical training on enterprise network defense, access management, and threat response procedures.',
      link: '/photos/cyber-job-simulation.pdf',
    },
  ];

  const events = [
    {
      title: 'Departmental Hackathon',
      category: 'Hosted / Lead',
      catClass: 'ach-cat-hosted',
      icon: 'fa-trophy',
      desc: 'Coordinated and led student teams in building full-stack software solutions under tight deadlines.',
    },
    {
      title: 'Technical Web Dev Workshop',
      category: 'Organized',
      catClass: 'ach-cat-hosted',
      icon: 'fa-chalkboard-user',
      desc: 'Conducted interactive sessions on modern HTML, CSS, JavaScript, and React component architectures.',
    },
    {
      title: 'College Project Expo',
      category: 'Demonstration',
      catClass: 'ach-cat-win',
      icon: 'fa-award',
      desc: 'Showcased real-time web application prototypes and received commendation for UI excellence.',
    },
    {
      title: 'National Coding Challenge',
      category: 'Participant',
      catClass: 'ach-cat-attended',
      icon: 'fa-laptop-code',
      desc: 'Participated in competitive programming challenges tackling complex data structures and algorithms.',
    },
  ];

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">Verified professional credentials and leadership milestones</p>
        </div>

        {/* Row 1: Professional Certifications */}
        <div className="ach-row">
          <div className="ach-row-header">
            <div className="ach-row-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Professional Certifications</h3>
            <span className="ach-row-count">{certifications.length}</span>
          </div>
          <div className="ach-nav-wrapper">
            <button
              className="ach-nav-btn"
              onClick={() => scrollTrack(certTrackRef, -1)}
              aria-label="Previous certificates"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="ach-track" ref={certTrackRef}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="ach-card ach-card-winner">
                  <div className="ach-card-top">
                    <div className="ach-card-icon">
                      <i className={`fas ${cert.icon}`}></i>
                    </div>
                    <span className={`ach-category ${cert.catClass}`}>{cert.category}</span>
                  </div>
                  <h4 className="ach-card-title">{cert.title}</h4>
                  <p className="ach-card-desc">{cert.desc}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ach-card-link"
                  >
                    <i className="fas fa-file-pdf"></i> View Certificate &rarr;
                  </a>
                </div>
              ))}
            </div>
            <button
              className="ach-nav-btn"
              onClick={() => scrollTrack(certTrackRef, 1)}
              aria-label="Next certificates"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Row 2: Events & Milestones */}
        <div className="ach-row">
          <div className="ach-row-header">
            <div className="ach-row-icon">
              <i className="fas fa-medal"></i>
            </div>
            <h3>Events & Milestones</h3>
            <span className="ach-row-count">{events.length}</span>
          </div>
          <div className="ach-nav-wrapper">
            <button
              className="ach-nav-btn"
              onClick={() => scrollTrack(achTrackRef, -1)}
              aria-label="Previous events"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="ach-track" ref={achTrackRef}>
              {events.map((evt, idx) => (
                <div key={idx} className="ach-card">
                  <div className="ach-card-top">
                    <div className="ach-card-icon">
                      <i className={`fas ${evt.icon}`}></i>
                    </div>
                    <span className={`ach-category ${evt.catClass}`}>{evt.category}</span>
                  </div>
                  <h4 className="ach-card-title">{evt.title}</h4>
                  <p className="ach-card-desc">{evt.desc}</p>
                </div>
              ))}
            </div>
            <button
              className="ach-nav-btn"
              onClick={() => scrollTrack(achTrackRef, 1)}
              aria-label="Next events"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
