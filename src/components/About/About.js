import React from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImg from '../../assets/images/landing.jpg';
import contactImg from '../../assets/images/contact.jpg';
import './About.css';

function ResponsiveContent() {
  return (
    <Container className="noPadding noMargin">
      <Row >
        <Col  sm={8}>
          <h2>Welcome back! </h2>
          <p>

            We're passionate about helping you turn your travel dreams into reality. Whether you're planning a quick getaway or a grand adventure, we're here
            to provide you with all the tools, resources, and inspiration you need to plan the perfect trip.
          </p>
          <div>
            <img src={homeImg} alt="nature" className="img-exp" />
          </div></Col>
        <Col sm={4}>
          <div className="row justify-content-end ">
            <img src={contactImg} alt="Contact Us" className="img-fluid" />
            <br/>
              Have a question, feedback, or need assistance? We're here to help!
               You can reach us through the following channels:
              <br/>
                <br/>
                  Email: contacttravelplanPN.com<br/>
                    Phone: +1 (123) 456-7890<br/>
                      Address: 123 Main Street, Cityville, USA<br/>

                        <br/>
                          Feel free to drop us a message or give us a call anytime.
                        </div></Col>
                    </Row>

                  </Container>
                  );
}

const About = () => {
  return (
                  <div className='wrapper'>
                    <ResponsiveContent />

                  </div>
                  )
}

                  export default About