import React from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
 
const map  = () => (
  <Map center={[54.736557, 8.498252]} zoom={12} width={400} height={236}>
    <Marker anchor={[54.736557, 8.498252]} payload={1} onClick={({ event, anchor, payload }) => {}} />

    {/* <Overlay anchor={[54.736557, 8.498252]} offset={[120, 79]}>
    </Overlay> */}
  </Map>
)

export default map