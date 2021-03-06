import React from 'react'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'  
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const Animations = () => {
  return (
    <MDBCarousel showIndicators showControls fade className='Animate'>
    <MDBCarouselInner >
      <MDBCarouselItem className='active'>
        <MDBCarouselElement className=" rounded "src='https://www.thespruce.com/thmb/3GBU6V_TWHB6IS_HEYOvBGibIRs=/4543x3029/filters:fill(auto,1)/how-to-sell-used-books-for-the-most-cash-1388970-01-7815a93d4c95431999e1b5192ece1699.jpg' alt='...'  />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <MDBCarouselElement className=" rounded "src='https://media.istockphoto.com/photos/open-book-on-wooden-desk-background-picture-id1216379658?b=1&k=20&m=1216379658&s=170667a&w=0&h=DdkvumWGntiSjGytKr76xPTOQOvP2hmLsTsFh7XXrLs=' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem>
        <MDBCarouselElement className=" rounded " src='https://thumbs.dreamstime.com/b/ancient-books-paper-art-abstract-brown-dark-ancient-books-dark-background-108463908.jpg' alt='...' />
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>

  )
}
export default Animations;
