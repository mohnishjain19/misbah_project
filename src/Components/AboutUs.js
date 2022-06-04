import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
const AboutUs = () => {
  return (
    <div>
    <Container>
    <p className="display-2 cent">About Us</p>
    <Row className="rowstyle">

      <Col sm={6} md={6}>
      <p className="display-7 centt ">
      Ratna Nidhi Charitable Trust, is a registered charity that was established over 
      24 years ago by Mr Mahendra Mehta. It was set up in order to tackle the problems of poverty in Mumbai, 
      especially amongst young children. From its humble origins as a family institution it has grown rapidly, and now its 
      projects cover a wide range of activities located in both India and other developing countries, including Afghanistan, 
      Sudan, Kenya and Burundi.   Ratna Nidhi Charitable Trust is committed to the welfare of people from the most underprivileged 
      strata of society without distinction of caste, creed or color. Its emphasis is on assisting the children and youth who are the 
      citizens of tomorrow and the disabled who need a support to help them join mainstream society.   . Our logo symbolises our '
      vision for the future a future in which each and every child can look forward to a new day, a day free of hunger, suffering,
       abuse and poverty. We want to reach out to children across the world, to give them new opportunities, and help them rise out of 
       poverty.  </p>
       </Col>
       <Col sm={6} md={6}>
       <div className="sizeimg">
       <img src="https://danamojo.org/dm/backend/web/uploads/images/674_1619427050.jpg"/>
       </div>
         
       </Col>
       </Row>
    </Container>
     
    </div>
  )
}
export default AboutUs;