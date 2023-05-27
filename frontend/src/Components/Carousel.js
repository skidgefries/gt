import Carousel from 'react-bootstrap/Carousel';
import Card1 from "./cards";

function Carousel1() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <Card1 />
        <Carousel.Caption>
          <p>Slide 1 description=Place description .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card1 />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card1 />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    
  );
}

export default Carousel1;
