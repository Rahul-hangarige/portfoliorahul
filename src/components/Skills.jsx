const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: 'fa-code',
      techs: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React.js', icon: 'fab fa-react' },
      ],
    },
    {
      name: 'Backend & Data',
      icon: 'fa-server',
      techs: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
      ],
    },
    {
      name: 'Tools & Platforms',
      icon: 'fa-tools',
      techs: [
        { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'Vite', icon: 'fas fa-bolt' },
        { name: 'Vercel', icon: 'fas fa-cloud' },
      ],
    },
    {
      name: 'Competencies',
      icon: 'fa-brain',
      techs: [
        { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
        { name: 'Communication', icon: 'fas fa-comments' },
        { name: 'Leadership', icon: 'fas fa-users' },
        { name: 'Adaptability', icon: 'fas fa-sync' },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Hover over a category to explore my skills</p>
        </div>
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3 className="category-name">{category.name}</h3>
                <i className="fas fa-chevron-down category-arrow"></i>
              </div>
              <div className="category-techs">
                {category.techs.map((tech) => (
                  <span key={tech.name} className="tech-badge">
                    <i className={tech.icon}></i> {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
