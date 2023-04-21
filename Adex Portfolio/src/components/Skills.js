import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlIcon from "../assets/img/html-icon.svg";
import cssIcon from "../assets/img/css.svg";
import javascriptIcon from "../assets/img/javascript.svg";
import bootstrapIcon from "../assets/img/bootstrap.svg";
import figmaIcon from "../assets/img/figma.svg";
import illustratorIcon from "../assets/img/illustratorIcon.svg";
import npmIcon from "../assets/img/npm.svg";
import reduxIcon from "../assets/img/reduxIcon.svg";
import reactIcon from "../assets/img/react.png";
import sassIcon from "../assets/img/sass.svg";
import tailwindIcon from "../assets/img/tailwind.svg";
import vueIcon from "../assets/img/vueIcon.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={htmlIcon} alt="carousel of skills" />
                  <h5>HTML-5</h5>
                </div>
                <div className="item">
                  <img src={cssIcon} alt="carousel of skills" />
                  <h5>CSS-3</h5>
                </div>
                <div className="item">
                  <img src={javascriptIcon} alt="carousel of skills" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={bootstrapIcon} alt="carousel of skills" />
                  <h5>BOOTSTRAP</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="carousel of skills" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={reduxIcon} alt="carousel of skills" />
                  <h5>REDUX</h5>
                </div>
                <div className="item">
                  <img src={figmaIcon} alt="carousel of skills" />
                  <h5>FIGMA</h5>
                </div>
                <div className="item">
                  <img src={sassIcon} alt="carousel of skills" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={htmlIcon} alt="carousel of skills" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={npmIcon} alt="carousel of skills" />
                  <h5>NPM</h5>
                </div>
                <div className="item">
                  <img src={vueIcon} alt="carousel of skills" />
                  <h5>VUE</h5>
                </div>
                <div className="item">
                  <img src={illustratorIcon} alt="carousel of skills" />
                  <h5>ILLUSTRATOR</h5>
                </div>
                <div className="item">
                  <img src={tailwindIcon} alt="carousel of skills" />
                  <h5>TAILWIND</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background for this section"
      />
    </section>
  );
};
