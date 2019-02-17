import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Description = [
  {
    text: 'www.strzecha.eu',
  },
]

const Wrapper = styled.div`

  font-size: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus{
    outline: none !important;
  }
`


const AddWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align:center;
  margin: 0 auto;
  padding: 5rem 0 5rem 0;
  p{
    color: grey;
  }
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
      <>
        <h3 style={{textAlign: 'center'}}>
          Freundliche Unternehmen
        </h3>
        <Slider {...settings}>
        { 
          
          Description.map((item, i) => (
            <div key={`div_slider_${i}`}>
              <Wrapper>
                  <AddWrap key={`add_wrap_friends${i}`}>
                    
                      <p key={`add_wrap_p${i}`}>{item.text}</p>
                  </AddWrap>
              </Wrapper>
            </div>
            )
          )
        }
        </Slider>
      </>

    )
  }
}