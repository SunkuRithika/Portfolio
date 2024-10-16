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
              title="Bus Booking Database Management"
              description="Designed an ER diagram with related entities and a relational schema, ensuring comprehensive data representation. Implemented triggers to automate tasks and enforce business rules, applied normalization techniques to optimize database efficiency, and developed SQL queries for robust data manipulation and retrieval"
              ghLink="https://github.com/soumyajit4419/Chatify"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI-Generated Art Gallery"
              description="Developed a web application for an AI-Generated Art Gallery using HTML, CSS and JavaScript. Created a user-friendly platform to showcase the AI-generated art including reviews, descriptions and artist
              details. Conducted research on AI’s impact on traditional art, exploring trends. Analyzed the potential for collaboration between traditional artists and AI."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Recommendation system"
              description="Developed a Movie Recommender System using machine learning techniques, including cosine similarity, collaborative filtering and hybrid methods to generate personalized movie recommendations. Analyzed user profiles, viewing histories, and demographic data to tailor suggestions to individual preferences. "
              ghLink="https://github.com/soumyajit4419/Editor.io"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Real-Time Object Measurement"
              description="Developed a real-time object measurement system using OpenCV, employing techniques like edge detection,
contour analysis, and perspective transformation. Calibrated the system with an A4 paper reference to convert pixel measurements into real-world dimensions.
Achieved high accuracy and real-time performance under dynamic conditions."
              ghLink="https://github.com/soumyajit4419/Plant_AI"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
