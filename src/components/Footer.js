import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import {StaticQuery, graphql} from 'gatsby'

const Wrapper = styled.div`
    display: block;
    height: 300px;
    width: 100%;
    color: #707070;
    /* background-color: #E52321; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const DarkBottom = styled.div`
    background-color: #CE1715;
    display: block;    
    height: 91px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

`
const LightUp = styled.div`
  min-height: 209px;
  height: auto;
  background-color: #E52321;
  display: flex;
  flex-direction: column;

`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  width: 70%;
  height: 100%;
  color: white;
`

const Top = styled.div`
  /* background-color: purple; */
  height: 50%;
  width: 100%;  
  display: flex;


`
const Left = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: pink; */
`
const Right = styled.div`
  height: 100%;
  width:50%;
  /* background-color: yellow; */
`
const Bottom = styled.div`
  /* background-color: brown; */
  height: 50%;
  width: 100%;  
`




const Footer = (data) => (
  <Wrapper className="footer">
    <LightUp>
      <ContentWrapper>
        <Top>
          <Left>
              <p>
                WoS Hausmeister Service auf Föhr
              </p>
              <p>
                Buurnstrat 51
              </p>
              <p>
                25938 Oevenum auf Föhr
              </p>

          </Left>
          <Right>
            <p> Telefon </p>
            <p> +0151 7131 7746 </p>
            <p> E-mail </p>
            <p> Hausmeister.sikorski@web.de</p>
          </Right>
        </Top>
        <Bottom>

        </Bottom>
      </ContentWrapper>
    </LightUp>
    <DarkBottom>
      {console.log(window.location.href)}
    © {new Date().getFullYear()} WoS Hausmeister Service auf Föhr
    </DarkBottom>
  </Wrapper>
)

export default Footer