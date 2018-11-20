import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import mailImage from "./../images/mail.png"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 0 50px 0;
    @media (max-width: 1024px) {
        flex-direction:column;
    }

`

const InselImg = styled(Img)`
    width: 50%;
   
    ${this}::after {
        content: "Föhr";
        font-size: 13rem;
        color: #707070;
        position: relative;
        bottom: 0px;
        font-weight: 430;
        font-family: Segoe UI;

        @media(max-width: 600px) {
            font-size: 7rem;
        }

    }

    @media (max-width: 1024px) {
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
        color: #707070;
        font-family: Segoe UI;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-indent: 1em;
        margin-bottom: 75px;

    }
    @media (max-width: 768px) {
        p {
            margin: 2.5em 0 2.5em 0;
        }
    }

    @media (max-width: 1024px) {
        width: 80%;
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
    font-size: 1.3rem;
    cursor: pointer;

     @media (max-width: 500px) {
        font-size: 1.3rem;
        min-width: 200px;
    }


    @media (max-width: 768px) {
        min-width:250px;
    }

    @media(min-width: 769px){
        min-width: 300px;
    }

     @media(min-width: 1280px){
        min-width: 400px;
    }

`
const Button2 = styled.button`
    all: initial;
    cursor: pointer;
    height: 55px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #E52321;
    border-radius: 25px;

    text-align: center;
    
    color: white; 
    font-size: 1.3rem;

    

    
    @media (max-width: 500px) {
        font-size: 1.3rem;
        min-width: 200px;
    }


    @media (max-width: 768px) {
        min-width:250px;
    }

    @media(min-width: 769px){
        min-width: 300px;
    }

     @media(min-width: 1280px){
        min-width: 400px;
    }

`
const RelativeDiv = styled.div`
    position: relative;
    max-width: 35px;
    max-height: 35px;
`
const WhiteCircle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background-color: white;
    margin-left: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    position: relative;
    top:-4px;
    img {
        background-color: pink;
    }


`
const Oder = styled.div`
    height: 100px;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
`
const ImgIcon = styled.img`
    position: absolute;
    top: 2px;
    left:23px;
    width: 25px;
    height: 25px;
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
            {/* <h3 style={{position:'relative',color: 'black', backgroundColor:'red'}}>Föhr</h3> */}
            <InselImg  fluid={data.file.childImageSharp.fluid} />
            <Content>
                <p>
                    Unsere Dienstleistungen 
                    decken die gesamte Insel
                    Föhr ab!
                </p>
                <Button1>
                    <RelativeDiv>
                        <WhiteCircle style={{position:"absolute"}} />   
                        <ImgIcon src={mailImage}alt='mail' style={{position:"absolute"}} ></ImgIcon>    
                    </RelativeDiv>
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
