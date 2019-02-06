import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div`
    display: block; 
    height: auto;
    width: 100%;
    
    margin: 2rem 0 0.5rem 0;
    font-size: 1.4rem;
    padding: 0rem 1rem 0rem 1rem;
    
    @media(min-width: 768px){
        font-size: 2rem;
        line-height: 2rem;
    }
    p {
        display: block;
        margin: 0 auto;
        width: 80%;
        text-align: left;
        color: #707070;
        text-justify: left;
        text-indent: 2rem;

    }

`
const MainText = () => (
  <Wrapper>
        <p>
            Hier finden Sie alle Informationen über unsere Dienstleistungen, die Sie
            {" "} 
            <Link to='/leistungen'>
                hier 
            </Link>
            {" "}
            überprüfen können.
        </p>
        <p style={{marginTop: '3rem'}}>
            Für weitere Informationen kontaktieren Sie uns bitte. Die Kontaktdaten finden Sie 
            auf unserer {' '}
            <Link to='/kontakt'>
                Kontaktseite
            </Link>
            .
        </p>
  </Wrapper>
)

export default MainText
