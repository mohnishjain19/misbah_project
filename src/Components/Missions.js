import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
const Missions = () => {
  return (

    <div>
    <Container>
    <p className="display-2 cent">Missions</p>
    <Row className="rowstyle">

      <Col sm={6} md={6}>
      <p className="display-7 centt ">
      India is stream rolling her way into development but illiteracy continues to plague a large section of the people in India.
    However in the recent times many children have shown the urge to learn, to be educated and started attending schools. Despite being 
      able to attend school these children are unable to afford academic books due to high prices of the books.
      Often the libraries of our educational institutions lack quality educational and informative books. This deters students 
      from reading and acquiring adequate knowledge on different subjects. In order to provide access to quality educational books 
      to students in India, Ratna Nidhi came up with the Mission Million Books Project. The project seeks to distribute 1 million educational books Free of Cost to 10,000 educational institutions in India.
      The project aims at educating young India by cultivating reading habits among children and provides access to quality 
      reading material from the book bank in India. </p>
       </Col>
       <Col sm={6} md={6}>
       <div className="sizeimg1">
       <img src="https://ratnanidhi.org/project_image/1764790006_Homeproject%20MMB.jpg"/>
       </div>
         
       </Col>
       </Row>
    </Container>
     
    </div>
  )
}
export default Missions;
