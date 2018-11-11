import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: lightblue;
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
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button1 = styled.button`
    all: initial;
    width: 300px;
    height: 100px;
    background-color: red;
    margin: 50px;

`
const Button2 = styled.button`
    all: initial;
    width: 300px;
    height: 100px;
    background-color: red;
    margin: 50px;
    
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
                <Button1/>
                <Button2/>
            </Content>
        </Wrapper>
    )}
  />
)
export default Insel
