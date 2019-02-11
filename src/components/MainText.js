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
        /* text-align: left; */
        color: #707070;
        text-indent: 2rem;

    }
`
const StyledGatsbyLink = styled(Link)`
    text-decoration: none;
    ${this}:visited{
        color: #E52321;
    }
    ${this}:link{
        color: #E52321;
    }
    ${this}:active{
        color: #E52321;
    }
    ${this}:hover{
        text-decoration: underline;
    }
`


const MainText = () => (
  <Wrapper>
        <p>
            Hier finden Sie alle Informationen über unsere Dienstleistungen, die Sie
            {" "} 
            <StyledGatsbyLink to='/leistungen' >
                hier 
            </StyledGatsbyLink>
            {" "}
            überprüfen können.
        </p>
  </Wrapper>
)

export default MainText
