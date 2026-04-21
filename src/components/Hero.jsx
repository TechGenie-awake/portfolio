import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className={`hero-section ${visible ? 'visible' : ''}`}>
      <div className="hero-content">
        <div className="hero-line">
          <span className="hero-label">
            <span className="hero-label-role">Full-Stack Developer</span>
            <span className="hero-label-sep" aria-hidden="true">/</span>
            <span className="hero-label-role">Frontend Developer</span>
            <span className="hero-label-sep" aria-hidden="true">/</span>
            <span className="hero-label-role">Mobile App Developer</span>
          </span>
        </div>
        <h1 className="hero-name">
          <span className="line"><span className="word">Gayatri Jaiswal</span></span>
        </h1>
        <p className="hero-description">
          <span className="line"><span className="word">I design and build impactful, user-focused applications —</span></span>
          <span className="line"><span className="word">React, React Native, Node.js, and everything in between.</span></span>
        </p>
        <div className="hero-footer">
          <a href="#projects" className="hero-cta">
            <span>Selected Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <span className="hero-available">Available for work</span>
        </div>
      </div>
    </section>
  )
}
