import React from 'react'
import CabinCarousel from './CabinCarousel';
import CabinEssentials from './CabinEssentials';
import CabinProfileCard from './CabinProfileCard';
import Reviews from './Reviews';
import DateSelect from './DateSelect';


export default function CabinDemo() {
  return (
    <div>
        <CabinCarousel/>
        <div class="card-body">
            <CabinEssentials />
        </div>
        <br/>
        <div className='please-flex'>
        <CabinProfileCard className='profile-card'/>
        <DateSelect  />
        </div>
        <br/>
        <br/>
       <div>
           <Reviews />
       </div>
      
    </div>
  )
}
