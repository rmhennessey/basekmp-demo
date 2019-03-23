import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapSigns, faCompass, faCampground, faMapMarkerAlt, faUsers, faCalendarAlt, faEdit, faFire } from '@fortawesome/free-solid-svg-icons';


export default function Benefits() {
  return (
    <div className='benefits-container'>
        <div className='benefits-one-outer-container'>
        <FontAwesomeIcon className='benefits-icon-one' icon={faCompass} size='7x' color='#00A388'/>
        <div className="benefits-container-one">
        <div className='benefits-indy-top'>
            <h3> Benefits for Travelers </h3>
        </div>
        <div className='benefits-indy'>
            <div className='benefits-icon'>
            <FontAwesomeIcon icon={faEdit} size='2x' color='#00A388'/>
            <h6>Easier to Plan</h6>
            </div>
           <div className='benefits-p'>
            <p>Basekmp provides access to all of the essential information in a single platform.</p>
            </div>
        </div>
        <div className='benefits-indy'>
            <div className='benefits-icon'>
            <FontAwesomeIcon icon={faMapSigns} size='2x' color='#00A388'/>
            <h6>Adventure First</h6>
            </div>
           <div className='benefits-p'>
            <p>Know WHAT you want to do? Basekmp helps you find WHERE to do it. Our adventure-driven tools help you find and plan your epic adventure.</p>
            </div>
        </div>
        <div className='benefits-indy-last'>
            <div className='benefits-icon'>
            <FontAwesomeIcon icon={faFire} size='2x' color='#00A388'/>
            <h6>Optimize Your Experience</h6>
            </div>
           <div className='benefits-p'>
            <p>From planning your trip, to finding where to stay, to the adventure itself, Basekmp helps you create the perfect experience.</p>
            </div>
        </div>
        </div>
        </div>
        <div className='benefits-two-outer-container'>
        <FontAwesomeIcon className='benefits-icon-one' icon={faCampground} size='7x' color='#00A388'/>
        <div className="benefits-container-two">
        <div className='benefits-indy-top'>
        <h3> Benefits for Property Owners </h3>
        </div>
        <div className='benefits-indy'>
            <div className='benefits-icon'>
            <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' color='#00A388'/>
            <h6>Easier to be Found</h6>
            </div>
           <div className='benefits-p'>
            <p>Stand out and stop getting lost amongst unrelated listings. </p>
            </div>
        </div>
        <div className='benefits-indy'>
            <div className='benefits-icon'>
            <FontAwesomeIcon icon={faUsers} size='2x' color='#00A388'/>
            <h6>Connect with a Community</h6>
            </div>
           <div className='benefits-p'>
            <p>Access to the community that will most appreciate and value your home for what it is.</p>
            </div>
        </div>
        <div className='benefits-indy-last'>
            <div className='benefits-icon'>
            <FontAwesomeIcon icon={faCalendarAlt} size='2x' color='#00A388'/>
            <h6>More Bookings</h6>
            </div>
           <div className='benefits-p'>
            <p>When your home is easy to find and you are connected to the perfect community, watch your bookings fill up. </p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
