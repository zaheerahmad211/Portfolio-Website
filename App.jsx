import { useState, useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Navbar />
      <main>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
    
      
    
    </div>
  )
}

export default App