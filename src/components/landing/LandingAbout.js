import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default class LandingAbout extends Component {
  render() {
    return (
      <div>
            <div className="intro-div">
            <div className="intro-icon">
                <FontAwesomeIcon icon={faMapMarkedAlt} size='4x' color='#00A388'/>
                <h3>About Basekmp</h3>
                <h6>
                Basekmp is home-sharing platform, connecting a network of 'adventure-ready' homes to the outdoors community.
                </h6>
            </div>
            <div className="intro-img">
                <img src='./cabinAssets/about.png' />
            </div>
            </div>
      </div>
    )
  }
}