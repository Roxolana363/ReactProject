import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg';


export default class CarouselBox extends Component {
  render(){
    return(
       <Carousel>
        <Carousel.Item>
         <img
           className="d-block w-100"
           src={Slide1}
           alt="forest"
         />
             <Carousel.Caption>
              <h3>Forest</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img
           className="d-block w-100"
           src={Slide2}
           alt="forest"
         />
             <Carousel.Caption>
              <h3>dark Forest</h3>
            </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }

}
