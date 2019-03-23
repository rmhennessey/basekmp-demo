import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground } from '@fortawesome/free-solid-svg-icons';

export default function Definition() {
  return (
    <div className='def-div'>
        <FontAwesomeIcon className='def-icon' icon={faCampground} size='8x' color='#00A388'/>
        <h2>
          bās
          <span>•</span>
          kamp
        </h2>
        <h5>
          noun
        </h5>
        <p>
        "a main encampment providing supplies, shelter, and communications for persons engaged in wide-ranging activities, as exploring, reconnaissance, hunting, or mountain climbing."
        </p>
    </div>
  )
}