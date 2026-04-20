import { useEffect, useMemo, useState } from 'react'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filters = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)))
    return ['All', ...cats]
  }, [])

  const visible = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter)

  const goHome = (e) => {
    e.preventDefault()
    window.location.hash = ''
  }

  return (
    <section className="projects-page">
      <div className="projects-page-container">
        <a href="#" onClick={goHome} className="projects-page-back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
          <span>Back</span>
        </a>

        <header className="projects-page-header">
          <span className="section-label">All Work</span>
          <h1 className="projects-page-heading">Projects.</h1>
        </header>

        <div className="projects-filter" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`projects-filter-chip ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-detail-list">
          {visible.map((p, i) => (
            <article key={p.slug} className="project-detail">
              <div className="project-detail-meta">
                <span className="project-detail-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="project-detail-year">{p.year}</span>
              </div>

              <div className="project-detail-body">
                <div className="project-detail-head">
                  <span className="project-category">{p.category}</span>
                  <h2 className="project-detail-title">{p.title}</h2>
                </div>

                <div className="project-detail-main">
                  <div className="project-detail-copy">
                    {p.description.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  {p.image && (
                    <a
                      href={p.links.demo || p.links.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-detail-media"
                      aria-label={`Open ${p.title}`}
                    >
                      <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
                    </a>
                  )}
                </div>

                <dl className="project-detail-info">
                  <div>
                    <dt>Role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd className="project-detail-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="project-detail-links">
                  {p.links.github && (
                    <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                      <span>GitHub</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                      <span>Live Demo</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {visible.length === 0 && (
            <p className="projects-empty">Nothing here yet — more coming soon.</p>
          )}
        </div>

        <div className="projects-page-footer">
          <a href="#" onClick={goHome} className="projects-page-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
            <span>Back to home</span>
          </a>
        </div>
      </div>
    </section>
  )
}
