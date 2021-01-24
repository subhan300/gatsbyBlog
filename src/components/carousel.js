import React from 'react'
import {Carousel} from "react-bootstrap"
function carousel() {
    return (
        <div >
            <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/mini-burger-picture-id1254873193?b=1&k=6&m=1254873193&s=170667a&w=0&h=cgHQY6h96BBw5a0RjH0ItohUcfVW2WpEbVXpqC2xcYI="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/mini-burger-picture-id1254873193?b=1&k=6&m=1254873193&s=170667a&w=0&h=cgHQY6h96BBw5a0RjH0ItohUcfVW2WpEbVXpqC2xcYI="
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/mini-hamburger-mini-burger-slider-picture-id1185525782?b=1&k=6&m=1185525782&s=170667a&w=0&h=-dgKRFDY4qgRVRZ3JMSdZlNHxCopMVOwso7sar0GZl8="
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default carousel
