import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';



export default class LandingHeroTwo extends Component {
    render() {
        return (
          <div>
            <>
            <Jumbotron style={{backgroundImage: "url('./cabinAssets/casey-horner-778575-unsplash.jpg')", backgroundSize: '100%', height: '400px', backgroundRepeat: 'no-repeat'}} >
                <div className='jumbo-2'>
                <h2>The Perfect Basekmp is Out There</h2>
                <h5>Let's Find It</h5>
                <>
                </>
                </div>
                </Jumbotron>
            </>
          </div>
        )
      }
    }