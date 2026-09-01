const Experience = () => {
  const experiences = [
    {
      date: '2025',
      icon: 'fa-chart-pie',
      title: 'Deloitte Cohort (Data Analytics)',
      org: 'Deloitte Virtual Experience',
      desc: 'Completed professional simulation focusing on data analytics, business intelligence dashboards, and statistical decision-making.',
    },
    {
      date: '2024',
      icon: 'fa-shield-halved',
      title: 'Cybersecurity Virtual Internship',
      org: 'Zscaler Academy',
      desc: 'Hands-on training in enterprise cybersecurity protocols, network threat analysis, access control, and vulnerability remediation.',
    },
    {
      date: '2024',
      icon: 'fa-laptop-code',
      title: 'Java Full Stack Virtual Internship',
      org: 'Eduskills / AICTE',
      desc: 'Completed intensive full-stack development curriculum encompassing Java, OOP principles, backend APIs, and modern frontend integration.',
    },
    {
      date: '2023 - Present',
      icon: 'fa-people-roof',
      title: 'Student Council Leadership',
      org: 'Balaji Institute of Technology & Science',
      desc: 'Organized and coordinated technical workshops, coding events, and campus activities with strong teamwork and communication.',
    },
  ];

  const educations = [
    {
      date: '2023 - 2027',
      icon: 'fa-graduation-cap',
      title: 'B.Tech in Data Science',
      org: 'Balaji Institute of Technology and Science',
      desc: 'Pursuing Bachelor of Technology with specialization in Data Science, Machine Learning, Statistical Analysis, and Web Development.',
    },
    {
      date: '2021 - 2023',
      icon: 'fa-school',
      title: 'Intermediate (MPC)',
      org: 'TS Model College',
      desc: 'Completed higher secondary education in Mathematics, Physics, and Chemistry stream, graduating with 85%.',
    },
    {
      date: 'SSC',
      icon: 'fa-award',
      title: 'Secondary School Certificate',
      org: 'Chanakya Vidyaniketan High School',
      desc: 'Completed secondary school certificate with an outstanding academic achievement of 98%.',
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and academic background</p>
        </div>

        <div className="exp-edu-grid">
          {/* Experience Column */}
          <div className="exp-edu-column">
            <div className="exp-edu-column-header">
              <div className="exp-edu-column-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Experience</h3>
              <span className="exp-edu-column-count">{experiences.length}</span>
            </div>
            <div className="career-timeline">
              {experiences.map((item, idx) => (
                <div key={idx} className="career-item">
                  <div className="career-marker">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="career-card">
                    <span className="career-date">{item.date}</span>
                    <h4 className="career-title">{item.title}</h4>
                    <span className="career-org">
                      <i className="fas fa-building"></i> {item.org}
                    </span>
                    <p className="career-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="exp-edu-column">
            <div className="exp-edu-column-header">
              <div className="exp-edu-column-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>Education</h3>
              <span className="exp-edu-column-count">{educations.length}</span>
            </div>
            <div className="career-timeline">
              {educations.map((item, idx) => (
                <div key={idx} className="career-item">
                  <div className="career-marker">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="career-card">
                    <span className="career-date">{item.date}</span>
                    <h4 className="career-title">{item.title}</h4>
                    <span className="career-org">
                      <i className="fas fa-school"></i> {item.org}
                    </span>
                    <p className="career-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
