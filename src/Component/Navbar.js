import React, { useEffect, useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {FaFacebook, FaLinkedin,  FaTwitter,FaBars, FaTiktok, FaTimes} from 'react-icons/fa'
 
const Navbar=()=>{
  const[click, setclick]=useState(false);
  const[color,setcolor]=useState(false);
  const changecolor=()=>{
    if(window.scrollY >= 50){
      setcolor(true);

    }else{
      setcolor(false);
    }
  }
  window.addEventListener('scroll',changecolor);
  const handleclick=()=>{
setclick(!click);
  }
  return(
    <div className={color?'navbar navbar-bg':'navbar'}>
 <div className="container">
 <div className="nav"> 
 <a className="logo">portif<span>olio.</span></a>
 <div className={click?'nav-content active':'nav-content'}>
 <ul className="links">
<li><a href="/">home</a></li>
<li><a href="/">Skills</a></li>
<li><a href="/">project</a></li>
</ul>
<div className="soical">
       <FaFacebook  size={30} style={{color:'fff',marginRight:'1rem'}}/>

       <FaTwitter  size={30} style={{color:'fff',marginRight:'1rem'}}/>

         <FaLinkedin  size={30} style={{color:'fff',marginRight:'1rem'}}/>
</div>

<a href="/" className="contact-btn">let's contact</a>
 </div>
<div className="icons" onClick={handleclick}>
  {click?(<FaTimes/>):(<FaBars/>)}
 
 
</div>
 </div>
 </div>



 
    </div>
  )
  
}
 export default Navbar;







// const Navbars=()=>{
//     const[active,setactive]=useState('home');
//     const [scrolled,setscrooled]=useState(false);
//     useEffect(()=>{
 
// const onscroled=()=>{
//     if(window.scrollY >50){
//         setscrooled(true)
//     }else{
//         setscrooled(false);
//     }
// }
// window.addEventListener('scroll',onscroled);
// return() => window.addEventListener('scroll',onscroled);
//     },{})
//     const updateactive=(value)=>{
//       setactive(value);
//     }
//     return(
//     <Navbar expand="lg" className={scrolled?'scrolled':''}>
//       <Container className="nav">
//         <Navbar.Brand href="#home">portifolio</Navbar.Brand>
      
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home"  className={active==='home'? 'active navbar-link':'navbar-link'} onClick={()=>updateactive('home')}>Home</Nav.Link>
//             <Nav.Link href="#skills"  className={active==='skills'? 'active navbar-link':'navbar-link'} onClick={()=>updateactive('skills')}>Skills</Nav.Link>
//             <Nav.Link href="#skills"  className={active==='project'? 'active navbar-link':'navbar-link'} onClick={()=>updateactive('project')}>Projects</Nav.Link>
//           </Nav>
//           <span className="nav-bar">
//             <div className="social-text">
//         <FaFacebook  size={30} style={{color:'fff',marginRight:'1rem'}}/>

//         <FaTwitter  size={30} style={{color:'fff',marginRight:'1rem'}}/>

//         <FaLinkedin  size={30} style={{color:'fff',marginRight:'1rem'}}/>
//             </div>
//           </span>
//           <button className="lets-contact"><span>Let's Contact</span></button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

 
//export default Navbars;
