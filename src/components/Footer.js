import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import {StaticQuery, graphql} from 'gatsby'
import Map from '../components/Map'

const navigation = [
  {
    name: 'Stertseite',
    path: '/'
  },
  {
    name: 'Über uns',
    path: '/uber-uns'
  },
  {
    name: 'Leistungen',
    path: '/leistungen'
  },
  {
    name: 'Preise',
    path: '/preise'
  },
  {
    name: 'Jobs',
    path: '/jobs'
  },
  {
    name: 'Kontakt',
    path: '/kontakt'
  }
]

const Wrapper = styled.div`
    display: block;
    /* height: 300px;*/ 
    height: auto;
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
  margin: 50px 0 0 50px;
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
  height: 50%;
  width: 100%;
  display: flex;
  ul {
    list-style: none;
  }

`
const Li = styled.li`
  margin: 0 10px 0 0px;
`

const StyledLink = styled(Link)`
  color: #707070;
  text-decoration: none;
  padding: 0 5px 5px 5px;


  ${this}:visited{
    color: #707070;
  }

  ${this}:hover {
    border-bottom: 5px solid #E52321;
  }
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
              <Map/>
          </Left>
          <Right>
            <p> Telefon </p>
            <p> +0151 7131 7746 </p>
            <p> E-mail </p>
            <p> Hausmeister.sikorski@web.de</p>
          </Right>
        </Top>
        <Bottom>
          {/* <ul> */}
            {
              navigation.map((item, i) => (
                // <Li key = {`footer_li${i}`}>
                  <StyledLink key = {`footer_link${i}`} to={item.path}>
                    {item.name} 
                    {(navigation[i+1]) ? ' | ' : ''}
                  </StyledLink>
                // </Li>
                )
              )
            }
          {/* </ul> */}

        </Bottom>
      </ContentWrapper>
    </LightUp>
    <DarkBottom>
      {/* {console.log(window.location.href)} */}
    © {(typeof window)? new Date().getFullYear():''} WoS Hausmeister Service auf Föhr
    </DarkBottom>
  </Wrapper>
)

export default Footer