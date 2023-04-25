import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ project: { title, description, imgUrl } }) => {
  
  console.log(imgUrl.projImg1);

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx ">
        <img src={imgUrl.projImg2} alt="projects card" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
