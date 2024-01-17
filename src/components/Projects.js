import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Arduino from "../assets/img/Arduino.jpeg";
import ComputerVision from "../assets/img/ComputerVision.jpeg";
import DeepLearningComputerVision from "../assets/img/DeepLearningComputerVision.jpeg";
import Django from "../assets/img/Django.jpeg";
import Flask from "../assets/img/Flask.jpeg";
import Esp32 from "../assets/img/Esp32.jpeg";
import FlutterOLX from "../assets/img/Flutter OLX Clone.jpeg";
import MachineLearningND from "../assets/img/machine-learning-nanodegree.svg";
import NLP from "../assets/img/NLP.jpeg";
import PythonND from "../assets/img/python-nanodegree.svg";
import tensorflow from "../assets/img/tensorflow.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "App Development",
      description: "OLX CLONE",
      imgUrl: FlutterOLX,
    },
    {
      title: "Web Development",
      description: "Django Web Dev Fullstack",
      imgUrl: Django,
    },
    {
      title: "Web Development",
      description: "Flask Bootcamp",
      imgUrl: Flask,
    },
    {
      title: "Programming",
      description: "Udacity - Python Nanodegree",
      imgUrl: PythonND,
    },
    {
      title: "Machine Learning",
      description: "Udacity - Machine Learning Nanodegree",
      imgUrl: MachineLearningND,
    },
    {
      title: "Computer Vision",
      description: "Master Computer Vision - OpenCV3",
      imgUrl: ComputerVision,
    },
    {
      title: "Natural Language Processing",
      description: "NLP using spacy and NLTK",
      imgUrl: NLP,
    },
    {
      title: "Deep Learning",
      description: "Deep Learning using Tensorflow and Machine Learning",
      imgUrl: tensorflow,
    },
    {
      title: "Computer Vision",
      description: "Autonomous Car",
      imgUrl: DeepLearningComputerVision,
    },    {
      title: "IoT",
      description: "Esp32 for Arduino Makers",
      imgUrl: Esp32,
    },
    {
      title: "IoT",
      description: "Introduction to Arduino",
      imgUrl: Arduino,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Certifications</h2>
           <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Certifications</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Miscellaneous</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                 </Tab.Container> 
                 <a href="https://github.com/mananrg" id="github-repo">ALL PROJECTS</a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
