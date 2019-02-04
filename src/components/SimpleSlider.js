import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Description = [
  {
    text: 'Mit reinem Herzen kann ich diese Firma weiterempfehlen, vielen Dank.',
  },
  {
    text: 'Service sehr schnell und richtig gemacht.',
  },
  {
    text: 'Sehr professionelle Arbeit, ich bin beeindruckt.'
  },
  {
    text: 'Vielen Dank für Ihre Hilfe, ich weiß nicht, wie ich ohne Sie auskommen könnte.'
  }
]

const Wrapper = styled.div`
  font-size:100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus{
    outline: none !important;
  }
`

const Q = styled.blockquote`
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: #707070;
  quotes: "\201C""\201D""\2018""\2019" !important;

  ${this}::before{
    content: open-quote !important;
    font-size:2.4em;
    color: black;
    position: relative;
    top: 0.5rem;
  }
  ${this}::after {
    content: close-quote !important;
    font-size:2.4em;
    color: black;    
    position: relative;
    top: 2.0rem;
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
                      
                        <Q key={`add_wrap_p${i}`}>{item.text}</Q>
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