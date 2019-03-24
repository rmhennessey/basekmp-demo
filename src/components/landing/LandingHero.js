import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';




export default class LandingHero extends Component {
  render() {
    return (
      <div>
        <>
        <Jumbotron style={{backgroundImage: "url('./cabinAssets/mathilda-khoo-1326562-unsplash.jpg')", backgroundSize: '100%', height: '600px', backgroundRepeat: 'no-repeat'}} >
            <div className='jumbo'>
            <h1>Your Home for Adventure</h1>
            <>
            <p>
                <style type="text/css">
                    {`
                    .btn-hero {
                    background-color: white;
                    color: #00A388;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
                <Button href="/listings" variant="hero">Start Exploring</Button>
            </p>
            </>
            </div>
            </Jumbotron>
        </>
      </div>
    )
  }
}

