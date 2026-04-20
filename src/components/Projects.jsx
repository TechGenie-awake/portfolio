import useReveal from '../hooks/useReveal'
import { featuredProjects } from '../data/projects'

export default function Projects() {
  const ref = useReveal(0.05)

  return (
    <section id="projects" className="projects-section reveal-section" ref={ref}>
      <div className="projects-container">
        <span className="section-label">Selected Work</span>
        <div className="projects-list">
          {featuredProjects.map((project, i) => (
            <a
              key={project.slug}
              href="#/work"
              className="project-row"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="project-row-left">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-desc">{project.summary}</p>
              <div className="project-row-right">
                <span className="project-year">{project.year}</span>
                <svg
                  className="project-arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-cta-row">
          <a href="#/work" className="projects-see-more">
            <span>See all work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
