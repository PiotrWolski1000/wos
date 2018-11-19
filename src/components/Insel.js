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
    @media (max-width: 768px) {
        flex-direction:column;
    }

`

const InselImg = styled(Img)`
    margin-right: 5%;
    width: 50%;
   
    @media (max-width: 768px) {
        margin-right: 0;
        width: 80%;
    }
`
const Content = styled.div`
    width: 40%;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    @media (max-width: 768px) {
        width: 80%;
    }

`
const Button1 = styled.button`
    all: initial;
    max-width: 412px;
    height: 50px;
    background-color: #E52321;
    margin: 50px;
    border-radius: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;   
    text-align: center;
    
    @media (max-width: 768px) {
        width: 100%;
        
    }


`
const Button2 = styled.button`
    all: initial;
    max-width: 412px;
    height: 50px;
    background-color: #E52321;
    margin: 50px;
    border-radius: 45px;
    text-align: center;
    color: white;    
    @media (max-width: 768px) {
        width: 100%;
    }
`
const WhiteCircle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background-color: white;
    position: relative;
    left: -50px;

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
                

                    <WhiteCircle>

                    </WhiteCircle>
                    <p>
                        Kontakt uns
                    </p>
                </Button1>

                <Button2>Prüfen Sie unser Angebot</Button2>
            </Content>
        </Wrapper>
    )}
  />
)
export default Insel
