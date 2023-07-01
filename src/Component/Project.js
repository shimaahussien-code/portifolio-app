import React from 'react';
import { Container ,Row,Col,Nav} from 'react-bootstrap';
import projectimag1 from '../Images/meter1.svg';
// import projectimag2 from '../Images/meter1.svg';
import { Tab } from 'bootstrap';
import { ProjectCard } from './ProjectCard';
export const Project = () => {

    const projects = [
      {
        title: "Business Startup",
        description: "Design & Development",
        source: projectimag1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        source: projectimag1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        source: projectimag1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        source: projectimag1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        source: projectimag1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        source:projectimag1,
      },
    ];
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              
                <div className= "animate__animated animate__fadeIn" >
                  <h2 className="proj-title animate__animated  animate__pulse animate__infinite animate__delay-2s animate__slow">Projects</h2>
                  <p className="proj-txt ">My name is Shimaa , I live in Cairo , this is the 1st project in react Dev.</p>
                  <Tab.Container id="projects-tabs"  defaultActiveKey="first" >
                    <Nav variant="pills" className="nav-pills  justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="firstTab">1st Section</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="secondTab">2nd Section </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="thirdTab">3rd Section </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" expand="sm" className= "animate__animated animate__slideInUp__faster" >
                      <Tab.Pane eventKey="first"  className="firstContent mt-5">
                        <Row>
                          {
                            projects.map((ele, index) => {
                              return (
                                <ProjectCard key={index}  {...ele}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" className="thirdContent mt-5" >
                      <p className=" mt-5 text-center text-light " >My name is Shimaa , I live in Cairo , this is the first project in react Dev.</p>                    </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
             
            </Col>
          </Row>
        </Container>
        
      </section>
    )
  }
  