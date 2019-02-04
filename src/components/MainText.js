import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div`
    display: block; 
    height: auto;
    width: 100%;
    /* color: #707070; */
    margin: 2rem 0 0.5rem 0;
    font-size: 1.4rem;
    padding: 0rem 1rem 0rem 1rem;
    font-style: italic;
    /* color: rgba(0,0,0,0.8); */
    p {
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
  </Wrapper>
)

export default MainText
