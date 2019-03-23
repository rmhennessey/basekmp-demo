import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

export default class LandingProcess extends Component {
  render() {
    return (
      <div>
            <div className="intro-div">
            <div className="intro-icon">
                <FontAwesomeIcon icon={faMountain} size='4x' color='#00A388'/>
                <h3>Our Process</h3>
                <h6>
                The tools and information you need when planning an active trip are completely different than what you need when planning a weekend in the big city.
                </h6>
                <h6>
                We understand this. Which is why we are making it easier for you to find, plan and book your next getaway - no matter if you are looking to stay local or travel cross-country.
                </h6>
            </div>
            <div className="intro-img">
                <img src='./cabinAssets/how.png' />
            </div>
            </div>
      </div>
    )
  }
}