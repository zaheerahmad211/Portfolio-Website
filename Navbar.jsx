import { Nav } from 'react-bootstrap'
import ThemeToggle from './ThemeToggle'; 
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
export default function Navbar() {
  return (
    <Nav className="floating-nav px-3 py-2">
      <Nav.Link href="#home" className="px-3 py-2 rounded-circle">
        <FaHome size={20} />
      </Nav.Link>
      <Nav.Link href="#about" className="px-3 py-2 rounded-circle">
        <FaUser size={20} />
      </Nav.Link>
      <Nav.Link href="#skills" className="px-3 py-2 rounded-circle">
        <FaCode size={20} />
      </Nav.Link>
      <Nav.Link href="#projects" className="px-3 py-2 rounded-circle">
        <FaProjectDiagram size={20} />
      </Nav.Link>
      <Nav.Link href="#contact" className="px-3 py-2 rounded-circle">
        <FaEnvelope size={20} />
      </Nav.Link>
     
    </Nav>
  )
}