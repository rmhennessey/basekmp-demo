import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

export default class LandingWhy extends Component {
  render() {
    return (
      <div>
            <div className="intro-div-two">
            <div className="intro-two-img">
            <img src='./cabinAssets/why.png' />
            </div>
            <div className="intro-icon-two">
                <FontAwesomeIcon icon={faTree} size='4x' color='#00A388'/>
                <div className="intro-icon-two-copy">
                <h3>Our Why</h3>
                <h6>
                We believe in the power of adventures. From a weekend getaway around a campfire to a week-long retreat off the grid, these trips are good for the soul.
                </h6>
                <h6>
                Which is why we are making it easier for you to connect with the perfect Basekmp to fit your adventure needs - no matter how big or small.
                </h6>
              </div>
            </div>
      </div>
      </div>
    )
  }
}