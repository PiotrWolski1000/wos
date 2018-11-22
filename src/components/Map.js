import React from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

import styled from 'styled-components'


const Wrapper = styled.div`
  /* width: 400px; */
  /* width: 100%; */
  height: 236px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 320px) {
    width: 200px;
    /* width: 50%; */
  } 
  @media (min-width: 321px) {
    width: 250px;
    /* width: 50%; */
  } 

  @media (min-width: 500px) {
    width: 300px;
  }
  

  @media (min-width: 768px) {
    width: 400px;
  }
   

`


const map  = () => (
  <Wrapper>
    <Map center={[54.711860, 8.530739]} zoom={12} >
      <Marker anchor={[54.736557, 8.498252]} payload={1} onClick={({ event, anchor, payload }) => {}} />

      {/* <Overlay anchor={[54.736557, 8.498252]} offset={[120, 79]}>
      </Overlay> */}
    </Map>
  </Wrapper>
)

export default map