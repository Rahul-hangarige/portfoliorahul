import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Your email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: 'error', text: 'Please correct the highlighted fields before submitting.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const mailtoLink = `mailto:skrrahul77@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    try {
      // Direct mailto / fallback
      window.location.href = mailtoLink;
      setStatus({
        type: 'success',
        text: 'Thank you! Your email client has been opened to send this message to skrrahul77@gmail.com.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        text: 'Unable to open email client. Please reach out directly to skrrahul77@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project or opportunity in mind? Let's connect</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label className="form-label" htmlFor="cfName">
                Your Name
              </label>
              <input
                type="text"
                id="cfName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.name ? 'invalid' : ''}
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="cfEmail">
                Your Email
              </label>
              <input
                type="email"
                id="cfEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={errors.email ? 'invalid' : ''}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="cfSubject">
                Subject
              </label>
              <input
                type="text"
                id="cfSubject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className={errors.subject ? 'invalid' : ''}
              />
              {errors.subject && <div className="form-error">{errors.subject}</div>}
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="cfMessage">
                Your Message
              </label>
              <textarea
                id="cfMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                className={errors.message ? 'invalid' : ''}
              ></textarea>
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            {status && (
              <div className={`form-status ${status.type}`}>
                <i
                  className={`fas ${
                    status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
                  }`}
                ></i>
                <span>{status.text}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Preparing...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </button>
          </form>

          {/* Right side Photo Gallery & Visual Cards */}
          <div className="contact-gallery">
            <div className="contact-gallery-grid">
              <div className="contact-gallery-item contact-gallery-item-wide">
                <img src="/rahul.img.jpeg" alt="Rahul at tech workspace" />
                <div className="contact-gallery-overlay">
                  <i className="fas fa-code"></i>
                </div>
              </div>
              <div className="contact-gallery-item">
                <img src="/rahul.img.jpeg" alt="Rahul tech collaboration" />
                <div className="contact-gallery-overlay">
                  <i className="fas fa-laptop-code"></i>
                </div>
              </div>
              <div className="contact-gallery-item">
                <img src="/rahul.img.jpeg" alt="Rahul presentation" />
                <div className="contact-gallery-overlay">
                  <i className="fas fa-chalkboard"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
