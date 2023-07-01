import { Container, Row, Col } from "react-bootstrap";
import {FaFacebook, FaLinkedin,  FaTwitter,FaBars, FaTiktok, FaTimes} from 'react-icons/fa'
 
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
       
         <Container>
           <Row className="align-items-center">
             <Col size={12} sm={6} className="text-center ">
             <div className="navbar-icons d-flex justify-content-center"> 
               <a href="https://www.facebook.com" className="navIcon align-content-center"> <FaFacebook  size={30} style={{color:'fff',marginRight:'1rem'}}/></a>
               <a href="https://www.facebook.com" className="navIcon align-content-center"> <FaTwitter  size={30} style={{color:'fff',marginRight:'1rem'}}/></a>  
               <a href="https://www.facebook.com" className="navIcon align-content-center">   <FaLinkedin  size={30} style={{color:'fff',marginRight:'1rem'}}/></a> 
              </div>
               <p> --Copyrights 2023--  All Rights Reserved here By nourhan adel sayed </p>
             </Col>
           </Row>
         </Container> 
      
      </footer>
  )
}
export default Footer;