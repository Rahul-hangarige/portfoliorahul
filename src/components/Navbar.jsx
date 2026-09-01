import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#featured-projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <img src="/rahul.img.jpeg" alt="Hangarige Rahul" className="nav-logo-img" />
        </a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            id="mobileMenuBtn"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
