 import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";

export const Projects = () => {
  const projects = [
    {
      title: "Quizzy",
      description: "quizzy app is an application build with react. it is a question and answer application to test your mastery of any category in programming ",
      imgUrl: projImg1,
      url: 'https://quizzy-app-liard.vercel.app/'
    },
    {
      title: "Movie App",
      description: "This app is built with React, React-Router. it uses the TMDB api to generate movies. you can also search for your desired movies. it also has a favourite functionality where you can add movies to favourite",
      imgUrl: projImg2,
      url: 'https://adexterity-movieapp.vercel.app/'
    },
    {
      title: "Farm Fresh",
      description: "this app is built with Vue. it is an application that showcases farm produce to increase the sales of farmers.",
      imgUrl:projImg3,
      url: 'https://farm-fresh-six.vercel.app/'
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
            Explore my portfolio of diverse projects. As a frontend developer, I've had the privilege of working on a range of exciting ventures. These projects showcase my skills in web development, design, and creating exceptional user experiences. Take a closer look at what I've crafted, and feel free to reach out for more details or inquiries.
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
               {/*  <Tab.Pane eventKey="second">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum!</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, labore.</Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
     {/*  <img
        className="background-img-right"
        src={colorSharp2}
        alt="project background"
      /> */}
    </section>
  );
};
