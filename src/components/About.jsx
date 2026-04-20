import useReveal from '../hooks/useReveal'

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Building responsive, component-based interfaces with React, Next.js, and Tailwind CSS. Thoughtful implementation with focus on clarity and usability.',
  },
  {
    number: '02',
    title: 'Backend Development',
    description:
      'Designing RESTful APIs and reliable data flows with Node.js, Express, Prisma ORM, and MySQL. Secure authentication and scalable persistence.',
  },
  {
    number: '03',
    title: 'Mobile App Development',
    description:
      'Crafting cross-platform mobile experiences with React Native and Expo. Performance-focused UIs backed by robust APIs and data layers.',
  },
]

export default function About() {
  const ref = useReveal(0.1)

  return (
    <section id="about" className="about-section reveal-section" ref={ref}>
      <div className="about-container">
        <div className="about-header">
          <span className="section-label">About</span>
          <h2 className="about-heading">
            I build impactful, user-focused applications. With a focus on clean
            code, thoughtful architecture, and interfaces that feel right.
          </h2>
        </div>
        <div className="services-list">
          {services.map((s) => (
            <div key={s.number} className="service-item">
              <span className="service-number">{s.number}</span>
              <div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
