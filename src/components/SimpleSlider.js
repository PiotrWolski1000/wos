import React, { Component } from "react";

import Slider from "react-slick";
import styled from 'styled-components'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  font-size:100%; 
  display: flex;
  justify-content: center;
  align-items: center;



`
const H2 = styled.h2`
  font-family: Perpetua Titling MT;
  font-size:2.4em;
  position: relative;

  bottom: 0.25em;
`

const B = styled.span`
  font-size:2em;
`

const P = styled.p`
  font-family: Segoe UI;
  font-size: 1.4rem;
  font-weight: regular;
  color: #707070;
`

const AddWrap = styled.div`
  width: 90%;
  font-size:100%;
  display: flex;
  justify-content: center;
  margin: 5em 0 5em 0;
`

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Wrapper>

        <AddWrap>
          <H2> " </H2>
          <P>Mit reinem Herzen kann ich diese Firma weiterempfehlen, vielen Dank. </P>
          <H2> " </H2>

          {/* <P>znacznik p 1.4em </P>
          <B>znacznik span 2em</B> */}
        </AddWrap>

           {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> } */}
      </Wrapper>
    )
  }
}