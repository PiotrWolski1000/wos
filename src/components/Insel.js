import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* background-color: lightblue; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin: 50px 0 50px 0;
    /* margin:  */
`

const InselImg = styled(Img)`
    width: 60%;
    margin-right: 5%;
`
const Content = styled.div`
    width: 40%;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button1 = styled.button`
    all: initial;
    width: 412px;
    height: 77px;
    background-color: #E52321;
    margin: 50px;
    border-radius: 45px;
    text-align: center;
    color: white;    


`
const Button2 = styled.button`
    all: initial;
    width: 412px;
    height: 77px;
    background-color: #E52321;
    margin: 50px;
    border-radius: 45px;
    text-align: center;
    color: white;    
    /* display: flex;
    justify-content: center;
    align-items: center; */
`
const WhiteCircle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background-color: white;

`

const Insel = () => (
  <StaticQuery
    query={graphql`
        query InselQuery {
            file(relativePath: { eq: "insel.png" }) {
                childImageSharp {
                    fixed(width: 907, height: 603) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }`
    }

    render = {data => (
        <Wrapper>
            <InselImg fixed={data.file.childImageSharp.fixed} />
            <Content>
                <p>
                    Unsere Dienstleistungen 
                    decken die gesamte Insel
                    Föhr ab.
                </p>
                <Button1>
                    <WhiteCircle>

                    </WhiteCircle>
                    <div>
                        Kontakt uns
                    </div>
                </Button1>

                <Button2>Prüfen Sie unser Angebot</Button2>
            </Content>
        </Wrapper>
    )}
  />
)
export default Insel
