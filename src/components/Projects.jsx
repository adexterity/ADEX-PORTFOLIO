 import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";

export const Projects = () => {
  const projects = [
    {
      title: "Contact App",
      description: "this app is build to master CRUD implementation in React",
      imgUrl: projImg1,
    },
    {
      title: "Contact App",
      description: "this app is build to master CRUD implementation in React",
      imgUrl: projImg2,
    },
    {
      title: "Contact App",
      description: "this app is build to master CRUD implementation in React",
      imgUrl:projImg3,
    }
  ];
  console.log(projects.num);
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2> Projects </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum!</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, labore.</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-img-right"
        src={colorSharp2}
        alt="project background"
      />
    </section>
  );
};
