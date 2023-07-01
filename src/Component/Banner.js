import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Col, Container, Row } from "react-bootstrap";
import image1 from '../Images/girl.png';
import { FaArrowCircleRight} from "react-icons/fa";

const Banner=()=>{
 

return(
 <section className="banner" id="home">
    <Container>
        <Row className="align-items-center con">
            <Col xs={12} md={6} xl={7} className="right">
            <span className="tageline">
wellcome to my portifolio
            </span>
            <h1>{`Hi! I'm Nourhan Adel , `} 
                <span>
                <Typewriter
                  options={{
                    strings: [ "FrontEnd Developer","UI/UX Designer" ],
                    autoStart: true,
                    loop: true,
                    
                  }}
                  
                  />
                </span>
                </h1>
         <p>hello every one, i have 3 years of experiense in front end development  </p>
            <button>let's connect <FaArrowCircleRight style={{color:'fff',marginLeft:'1rem'}}></FaArrowCircleRight></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
<img src={image1} alt=""/>
            </Col>
        </Row>
    </Container>

 </section>
)
}

export default Banner; 