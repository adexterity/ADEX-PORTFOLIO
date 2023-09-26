import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a
              href="/#"
              style={{
                color: "#6070ff",
                fontSize: "28px",
                fontWeight: "700",
                textDecoration: "none",
                marginBottom: "25px",
                display: "inline-block",
              }}
            >
              Adex S.
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/joseph-suberu-a57528229/">
                <img src={navIcon1} alt="linkedIn" />
              </a>
              <a href="https://github.com/adexterity">
                <img src={navIcon2} alt="Github" />
              </a>
            </div>
            <p>
              Copyright {new Date().getFullYear()}. All Rights Reserved
              Adexterity
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
