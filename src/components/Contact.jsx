import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch </h2>
            <form >
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone No."
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <textarea
                    row="6"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">
                    <span>Submit</span>
                  </button>
                </Col>
                
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
