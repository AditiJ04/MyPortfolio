import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PneumoDetect"
              description="Developed a CNN-based model to detect pneumonia from chest X-ray images with 98.16% training accuracy and 100% validation accuracy. The model enables fast and reliable diagnosis, assisting doctors in providing timely treatment.This project significantly enhances diagnostic efficiency by enabling fast and accurate detection of pneumonia."
              ghLink="https://github.com/AditiJ04/PneumoDetect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AditiVerse"
              description="My personal portfolio which features some of my github projects as well as my resume and technical skills. This project was built using these technologies-React.js ,Node.js, Express.js, CSS3, VsCode, Vercel. This portfolio website features a clean, multi-page layout to showcase my GitHub projects, resume, and technical skills. It is fully responsive, ensuring a seamless experience across all devices."
              ghLink="https://github.com/AditiJ04/MyPortfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Talkify"
              description="Talkify is a modern real-time chat application built using React, Node.js, Express.js, and Socket.IO. Designed for seamless and interactive conversations, Talkify allows users to exchange messages instantly without page reloads. The project highlights efficient client-server communication using Socket.IO, delivering a smooth and responsive chatting experience."
              ghLink="https://github.com/AditiJ04/Talkify"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
