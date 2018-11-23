import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Description = [
  {
    text: 'Mit reinem Herzen kann ich diese Firma weiterempfehlen, vielen Dank.',
  },
  {
    text: 'Service sehr schnell und richtig gemacht.',
  },
]

const Wrapper = styled.div`
  font-size:100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const P = styled.p`
  font-family: Segoe UI;
  font-size: 1.4rem;
  line-height: 2.5rem;
        font-weight: regular;
  color: #707070;
  text-justify: inter-word;
  
  ${this}::before{
    content: '"';
    font-family: Perpetua Titling MT;
    font-size:2.4em;
    color: black;
    position: relative;
    top: 0.5rem;
  }
  ${this}::after {
    content: '"';
    font-family: Perpetua Titling MT;
    font-size:2.4em;
    color: black;    
    position: relative;
    top: 2.8rem;
    left: 0.3rem;
  }
  
  @media (max-width: 1024px) {
    width: 80%;
  }
`

const AddWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align:center;
  margin: 0 auto;
  padding: 5rem 0 5rem 0;
`

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      arrows: false,
      autoplay: true,
    };
    return (
          <Slider {...settings}>
          { 
            
            Description.map((item, i) => (
              <div key={`div_slider_${i}`}>
                <Wrapper>
                    <AddWrap key={`add_wrap${i}`}>
                      <P key={`add_wrap_p${i}`}>{item.text}</P>
                    </AddWrap>
                </Wrapper>
              </div>
              )
            )
          }
          </Slider>
    )
  }
}