import React from 'react'

 import Carousel from "react-multi-carousel";
 import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from 'react-bootstrap';
import prog1 from '../Images/meter1.svg';
import prog2 from '../Images/meter2.svg';
import colorsharp from '../Images/color-sharp.png'
const Skill=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
return(
     <section className='skill' id='skill'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>skills</h2>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos id alias omnis, odio facere at possimus, voluptatum architecto libero repellendus quos nisi ut amet reprehenderit sequi animi error corporis nam.</p>
                    <Carousel responsive={responsive}infinite={true} className='skill-slider'>
                        <div className='item'>
<img src ={prog1} alt=''/>
<h5>web development</h5>
                        </div>
                        <div className='item'>
<img src ={prog2} alt=''/>
<h5>web development</h5>
                        </div>
                        <div className='item'>
<img src ={prog1} alt=''/>
<h5>web development</h5>
                        </div>
                        <div className='item'>
<img src ={prog2} alt=''/>
<h5>web development</h5>
                        </div>
                        </Carousel>
                    </div>
                </Col>
                </Row>
        </Container>
        <img  className='bg-left' src={colorsharp}/>
     </section>
)

}
export default Skill;