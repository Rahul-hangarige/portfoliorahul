const certificates = [
  {
    title: 'Data Science Master',
    description: 'Comprehensive certification in data science covering machine learning, data analysis, and statistical modeling.',
    link: '/photos/alter-data-science-master.pdf',
    thumbnail: '/certificate-python.svg',
  },
  {
    title: 'Google Android Developer',
    description: 'Certified in Android application development, Kotlin programming, and mobile UI/UX best practices.',
    link: '/photos/google-android-developer.pdf',
    thumbnail: '/certificate-frontend.svg',
  },
  {
    title: 'Java Full Stack Virtual Internship',
    description: 'Virtual internship certification covering full-stack Java development, Spring Boot, and enterprise application architecture.',
    link: '/photos/java-full-stack-virtual-internship.pdf',
    thumbnail: '/certificate-frontend.svg',
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    description: 'Job simulation certification in data analytics, covering data visualization, statistical analysis, and business intelligence tools.',
    link: '/photos/deloitte-data-analytics-1.pdf',
    thumbnail: '/certificate-python.svg',
  },
  {
    title: 'Cyber Job Simulation',
    description: 'Job simulation certification in cybersecurity, covering threat analysis, security protocols, and incident response procedures.',
    link: '/photos/cyber-job-simulation.pdf',
    thumbnail: '/certificate-cybersecurity.svg',
  },
];

const Certificates = () => (
  <section className="section certificates-section" id="certificates">
    <div className="section-header">
      <p className="section-label">Certifications</p>
      <h2>Professional Certifications</h2>
    </div>
    <div className="certificate-grid">
      {certificates.map((certificate) => (
        <article key={certificate.title} className="certificate-card">
          <a href={certificate.link} target="_blank" rel="noreferrer" className="certificate-thumb-link">
            <div className="certificate-thumb-wrapper">
              <img src={certificate.thumbnail} alt={`${certificate.title} thumbnail`} className="certificate-thumb" />
              <div className="certificate-name-overlay">{certificate.title}</div>
            </div>
          </a>
          <h5>{certificate.title}</h5>
          <p>{certificate.description}</p>
          <a href={certificate.link} target="_blank" rel="noreferrer">
            View Certificate →
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Certificates;
