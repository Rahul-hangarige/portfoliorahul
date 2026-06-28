const Contact = () => (
  <section className="section contact-section" id="contact">
    <div className="section-header">
      <p className="section-label">Connect</p>
      <h2>Get in Touch</h2>
    </div>
    <div className="contact-grid">
      <article className="contact-card">
        <p><strong>Email</strong></p>
        <p>Ready to discuss opportunities</p>
        <a href="mailto:skrrahul77@gmail.com?subject=Portfolio Inquiry" target="_blank" rel="noreferrer">skrrahul77@gmail.com</a>
      </article>
      <article className="contact-card">
        <p><strong>LinkedIn</strong></p>
        <p>Professional network & updates</p>
        <a href="https://www.linkedin.com/in/Rahul-ai-dev" target="_blank" rel="noreferrer">
          Connect on LinkedIn →
        </a>
      </article>
      <article className="contact-card">
        <p><strong>GitHub</strong></p>
        <p>View my projects & contributions</p>
        <a href="https://github.com/Rahul-Hangarige" target="_blank" rel="noreferrer">
          View GitHub →
        </a>
      </article>
    </div>
  </section>
);

export default Contact;
