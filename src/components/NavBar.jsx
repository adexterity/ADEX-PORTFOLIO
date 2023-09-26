import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkedinLogo from "../assets/img/linkedin.svg";
import GithubLogo from "../assets/img/github.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Track Navbar open state

  

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  // Function to toggle Navbar open state
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const onUpdateActiveLink = (link) => {
    console.log(`${link} clicked`);
    setActiveLink(link);
  };
  const scrollToSection = () => {
    // Find the target section by its ID
    const targetSection = document.getElementById("connect");
  
    // Scroll to the target section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };  
  
  return (
    <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${isNavbarOpen ? "dark" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={Logo} alt="logo" /> */}
          <a href="/#" style={{color: 'white', fontSize: '28px', fontWeight: '700', textDecoration: 'none', marginBottom: '25px', display: 'inline-block'}}>Adex S.</a>

        </Navbar.Brand>

        <Navbar.Toggle  onClick={toggleNavbar} aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/joseph-suberu-a57528229/">
                <img src={LinkedinLogo} alt="linkedin logo" />
              </a>
              <a href="https://github.com/adexterity">
                <img src={GithubLogo} alt="github logo" />
              </a>
            </div>
            <button className="vvd" onClick={scrollToSection}>
              <span>let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
