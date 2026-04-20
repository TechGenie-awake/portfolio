import { useEffect, useState } from 'react'
import './App.css'
import WaveBackground from './components/WaveBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectsPage from './components/ProjectsPage'

const WORK_HASH = '#/work'

function getView() {
  return window.location.hash === WORK_HASH ? 'work' : 'home'
}

function App() {
  const [view, setView] = useState(getView)

  useEffect(() => {
    const onHash = () => setView(getView())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (view === 'work') {
    return (
      <>
        <Navbar />
        <ProjectsPage />
        <footer className="footer">
          <span>&copy; 2024 G. Jaiswal</span>
          <span>Built with React & Three.js</span>
        </footer>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="hero-wrapper">
        <WaveBackground />
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <span>&copy; 2024 G. Jaiswal</span>
        <span>Built with React & Three.js</span>
      </footer>
    </>
  )
}

export default App
