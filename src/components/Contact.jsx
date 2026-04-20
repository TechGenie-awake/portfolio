import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal(0.1)

  return (
    <section id="contact" className="contact-section reveal-section" ref={ref}>
      <div className="contact-container">
        <span className="section-label">Contact</span>
        <h2 className="contact-heading">
          Let's work<br />together
        </h2>
        <p className="contact-text">
          Have a project in mind? I'm currently open to internships, freelance
          work, and collaborations in full-stack and mobile app development.
        </p>
        <a href="mailto:gayatri.jaiswal@adypu.edu.in" className="contact-email">
          gayatri.jaiswal@adypu.edu.in
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
        <div className="contact-links">
          <a
            href="https://github.com/TechGenie-awake"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gayatrijaiswal2006/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
