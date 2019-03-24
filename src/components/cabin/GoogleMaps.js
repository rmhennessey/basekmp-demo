import React from 'react'

export default function GoogleMaps() {
  return (
    <div>
        <div className='g-maps'>
            <iframe width="500" height="350" frameborder="0" styles="border:0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJD8lAQm30s0wRrMglIp3Govw&key=AIzaSyC9cUVU_draAGGSPJ3YzI_fj1G_9MQbfeI" allowfullscreen>
            </iframe>
        </div>
    </div>
  )
}
