import { useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
 
import image1 from '../Images/girl.png';

export const Contact = () => {
  const intialInputs = [
    { fName: "", lName: "", email: "", phone: "", msg: "" },
  ];
  const [formStatus, setFormStatus] = useState(intialInputs);
  const [buttonTitle, setButtonTitle] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormChange = (category, value) => {
    setFormStatus({
      ...formStatus,
      [category]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setButtonTitle("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formStatus),
    });
    setButtonTitle("Send");
    let result = await response.json();
    setFormStatus(intialInputs);
  };
  return (
    <section>
      <div className="contact-section  mt-5" id="connect">
        <Container>
          <h2 className="my-5 text-center animate__animated  animate__pulse animate__infinite animate__delay-2s animate__slow">React Contact Form</h2>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img
                className="animate__animated animate__zoomIn animate__delay-1s"
                src={image1}
                alt="Contact Us"
              />
            </Col>
            <Col size={12} md={6}>
              <form onSubmit={onSubmit}>
                <div className="m-3 d-flex justify-content-between" >
                  <input
                    className="form-control mx-2"
                    type="text"
                    id="fname"
                    value={formStatus.fName}
                    placeholder="First Name"
                    onChange={(e) => onFormChange("fName", e.target.value)}
                    required
                  />
                  <input
                    className="form-control mx-2"
                    type="text"
                    id="lname"
                    value={formStatus.lName}
                    placeholder="Last Name"
                    onChange={(e) => onFormChange("lName", e.target.value)}
                    required
                  />
                </div>
                <div className="m-3 d-flex">
                  <input
                    className="form-control mx-2"
                    type="email"
                    id="email"
                    value={formStatus.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormChange("email", e.target.value)}
                    required
                  />
                  <input
                    className="form-control mx-2"
                    type="text"
                    id="phone"
                    value={formStatus.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="m-3 d-flex">
                  <textarea
                    className="form-control mx-2 justify-content-center"
                    value={formStatus.msg}
                    id="message"
                    placeholder="Massage"
                    onChange={(e) => onFormChange("msg", e.target.value)}
                    required
                  />
                </div>

                <div className="m-3 d-flex justify-content-center">
                  <Button
                    variant="info"
                    className=" rounded-5"
                    type="submit"
                  >
                    {buttonTitle}
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default Contact;