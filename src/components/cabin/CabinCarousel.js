import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

export default class CabinCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./cabinAssets/derek-sears-1364406-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Peace & Quiet</h3>
      <p>Get off the grid and relax.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./cabinAssets/drew-farwell-556564-unsplash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Fire Pit Included :)</h3>
      <p>Hot dogs, s'mores and happiness.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./cabinAssets/holly-mandarich-326680-unsplash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>20 mins to Hiking</h3>
      <p>You will be on the trails in 20 mins.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./cabinAssets/hammock.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hammock Comes Standard</h3>
      <p>Relax after your hike up Franconia Notch</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./cabinAssets/beer.jpg"
      alt="Third slide"
    />

<Carousel.Caption>
      <h3>Fill Up at Woodstock Brewery</h3>
      <p>Woodstock Brewery is right down the road. Take some Growlers to go!</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
      </div>
    )
  }
}