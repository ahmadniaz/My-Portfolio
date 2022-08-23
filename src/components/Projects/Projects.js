import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EZclothing from "../../Assets/Projects/EZclothing.PNG";
import GithubFinder from "../../Assets/Projects/GithubFinder.PNG";
import Strapi from "../../Assets/Projects/Strapi.PNG";
import OnlineContacts from "../../Assets/Projects/OnlineContacts.PNG";

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
              imgPath={OnlineContacts}
              isBlog={false}
              title="Online Contact Keeper"
              description="One of my first MERN stack application. Used Context-API for state management. Notable packages like, mongoose, JWT, bcrypt, express validator, axios were used."
              ghLink="https://github.com/ahmadniaz/Contact-Keeper"
              demoLink="https://savecontactsonline.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GithubFinder}
              isBlog={false}
              title="Github Finder"
              description="One of my first React.js app. It used github API to fetch the data of the searched user. Learned about folder structure and axios."
              ghLink="https://github.com/ahmadniaz/GithubFiner"
              demoLink="https://githubfindereactapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EZclothing}
              isBlog={false}
              title="EZclothing"
              description="It is a JAM stack application that I completely built from scratch on my own. Strapi(headless CMS) was used on backend. React.js, material UI was used on front-end. Some notable packages used were, react-spiners, react-toastify, dotenv, formik. Stripe was used for payment integration."
              ghLink="https://github.com/ahmadniaz/organic-frontend-react"
              demoLink="https://ezclothing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Strapi}
              isBlog={false}
              title="EZclothing-Backend"
              description="It is the backend of the JAM stack website. It is based on Node.js based headless CMS strapi. "
              ghLink="https://github.com/ahmadniaz/ezclothing-backend"
              demoLink="https://enigmatic-island-20911.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
