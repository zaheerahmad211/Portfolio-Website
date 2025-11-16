import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3 fixed-top shadow">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            {/* Small profile image next to brand */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGb0KXZff72_aNYCOMxSo3wBXLUugcSQItw&s"   // <-- replace with your image URL
              alt="MyPortfolio"
              style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
            />
            MyPortfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section
        id="home"
        className="home-section text-white d-flex align-items-center"
        style={{ backgroundColor: '#0b1d3a', minHeight: '100vh', paddingTop: '100px' }}
      >
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              {/* Larger profile image in home section */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGb0KXZff72_aNYCOMxSo3wBXLUugcSQItw&s"  // <-- replace with your image URL
                alt="Profile"
                className="profile-img rounded-circle mb-4 border border-light"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-info">Zaheer Ahmed</span>
              </h1>
              <h2 className="h4 text-light mb-4">MERN STACK DEVELOPER</h2>
              <p className="lead text-light mb-5">
                I build exceptional digital experiences using modern web technologies. Passionate about accessible and user-friendly design.
              </p>
              <div className="d-flex gap-3 justify-content-center mb-5">
                <Button href="#contact" variant="info" size="lg">
                  Contact Me
                </Button>
                <Button href="#projects" variant="outline-light" size="lg">
                  View Work
                </Button>
              </div>
              <div className="d-flex gap-4 justify-content-center">
                <a
                  href="https://github.com/zaheerahmad211"
                  className="text-light text-decoration-none"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="www.linkedin.com/in/zaheer-ahmed-44b5a72a4"
                  className="text-light text-decoration-none"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href=""
                  className="text-light text-decoration-none"
                  aria-label="Twitter"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  aria-label="Email"
                >
                  <HiOutlineMail size={28} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
