import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Map from '../components/Map'

const navigation = [
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
    height: auto;
    width: 100%;
    color: #707070;
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
    text-align: center;
    font-size: 1rem;
    
    @media (max-width: 375px) {
      font-size: 1rem;
    }

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
  margin: 1rem 0 0 1rem;
  color: white;
`

const Top = styled.div`
  height: 50%;
  width: 100%;  
  display: flex;
  
   @media (max-width: 768px) {
    flex-direction: column;
  }

`
const Left = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 50px;
  
  @media (max-width: 768px) {
      width: 100%;
    }

  p {
    font-size: 1.3rem;
  }
`
const Right = styled.div`
  height: 100%;
  width:50%;
  margin-right: 50px;
  
  p {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`


const Bottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  list-style: none;
  @media(min-width: 769px){

    margin-top: 2rem;
  }


  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    span {
      display: none;
    }
  }

`
const Li =styled.li`
  width: auto;
  margin: 0.5rem 0px 0.5rem 0px;
    @media(max-width: 768px) {
  }
`

const FooterLink = styled(Link)`
  ${this}:hover {
    text-decoration: underline !important;
  }
`


const Footer = () => (
  <Wrapper className="footer">
    <LightUp>
      <ContentWrapper>
        <Top>
          <Left>
              <p style={{color: '#491818', fontSize: '1.5rem'}}>
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
            <p style={{color: '#491818', fontSize: '1.5rem'}}> Telefon </p>
            <p> +0151 7131 7746 </p>
            <p style={{color: '#491818', fontSize: '1.5rem'}}> E-mail </p>
            <p> HausmeisterService.Sikorski@web.de</p>
          </Right>
        </Top>
        <Bottom>
            {
              navigation.map((item, i) => (
                <Li key={`footer_li${i}`}>
                  <FooterLink style={{color: 'white', fontSize: '1rem', textDecoration: 'none'}} key = {`footer_link${i}`} to={item.path}>
                    {item.name} 
                  </FooterLink>
                    {(navigation[i+1]) ? <span style={{color: '#CE1715', padding: '0 0.3rem 0 0.3rem'}}> | </span> : ''}
                </Li>
                )
              )
            }
        </Bottom>
      </ContentWrapper>
    </LightUp>
    <DarkBottom>
    © {(typeof window)? new Date().getFullYear():''}
    </DarkBottom>
  </Wrapper>
)

export default Footer
