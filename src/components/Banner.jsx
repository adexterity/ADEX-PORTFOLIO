import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  const scrollToSection = () => {
    // Find the target section by its ID
    const targetSection = document.getElementById("connect");

    // Scroll to the target section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hello, I'm Adex "} <br /> {"I'm a "}
              <span className="wrap">
                <Typewriter
                  words={["web developer", "illustrator", "web designer"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p>
              This is some dummy placehoder text. it is used as a dummy to fill
              some part of my portfolio website and it is meant to look good.
            </p>
            <button onClick={scrollToSection}>
              Let's Connect <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={headerImg}
              alt="an illustration of a man in front of a computer"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
