import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* background-color: lightblue; */ 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 50px 0;
    @media (max-width: 1024px) {
        flex-direction:column;
    }

`

const InselImg = styled(Img)`
    /* margin-right: 5%; */
    width: 50%;
   
    @media (max-width: 768px) {
        margin-right: 0;
        width: 80%;
    }
`
const Content = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    p {
        text-align: justify;
        /* color: white !important; */
        /* margin: 2em 0 2em 0; */
        color: #707070;
        font-family: Segoe UI;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-indent: 1em;

    }
    @media (max-width: 768px) {
        /* text-indent: 1rem; */
        width: 80%;
        p {
            margin: 2.5em 0 2.5em 0;
        }
    }

    @media (max-width: 1024px) {
        /* text-indent: 1rem; */
        width: 100%;
        p {
            margin: 2.5em 0 2.5em 0;
        }
    }



`
const Button1 = styled.button`
    all: initial;
    height: 55px;
    background-color: #E52321;
    border-radius: 25px;
    color: white;   
    
    text-align: center;
    font-size: 1.5rem;
    span {
        margin-left: -35px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
    @media(min-width: 769px){
        width: 50%;
        min-width: 400px;

    }
    @media(min-width: 1280px){
        min-width: 400px;
    }

`
const Button2 = styled.button`
    all: initial;
    min-width: 400px;
    
    height: 55px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #E52321;
    border-radius: 25px;

    text-align: center;
    
    color: white; 
    font-size: 1.5rem;

    

    @media (max-width: 500px) {
        font-size: 1.3rem;
        min-width: 200px;
    }


    @media (max-width: 768px) {
        width: 100%;
    }

    @media(min-width: 769px){
        width: 50%;
    }

     @media(min-width: 1280px){
        min-width: 400px;
    }

`
const WhiteCircle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background-color: white;
    margin-left: 1rem;

    float: left;

`
const Oder = styled.div`
    height: 100px;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
`


const Insel = () => (
  <StaticQuery
        query={graphql`
        query InselQuery {
            file(relativePath: { eq: "insel.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                        ...GatsbyImageSharpFluid_noBase64
                      }
                }
            }
        }`
        }

    render = {data => (
        <Wrapper>
            <InselImg  fluid={data.file.childImageSharp.fluid} />
            <Content>
                <p>
                    Unsere Dienstleistungen 
                    decken die gesamte Insel
                    Föhr ab.
                </p>
                <Button1>
                    <WhiteCircle> </WhiteCircle>
                    <span>
                        Kontakt uns
                    </span>
                </Button1>

                <Oder>
                    oder
                </Oder>

                <Button2>Prüfen Sie unser Angebot</Button2>
            </Content>
        </Wrapper>
    )}
  />
)
export default Insel
