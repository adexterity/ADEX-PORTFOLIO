import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
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
              {/* <a href="/#"><img src={navIcon3} alt="Icon" /></a> */}
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
