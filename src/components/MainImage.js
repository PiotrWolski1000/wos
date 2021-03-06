import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import {StaticQuery, graphql} from 'gatsby'

const Wrapper = styled.div`
    display: block;
    height: auto;
    width: 100%;
    color: #707070;
    box-shadow: 0px 1px 13px grey;
    position: relative;
    font-size: 2em;

`

const Text = styled.div`
    position: absolute;
    bottom: 0.1em;
    color: white;
    margin-left: 0.5em;
    h2 {
        background-color: rgba(255,0,0, 0.7);
        
        font-size: 2rem;
    }

     @media (max-width: 425px) {
        h2{
            font-size: 1.5rem;
        }
    }

    @media (min-width: 1024px) {
        h2{
            font-size: 3rem;
        }
    }

    @media (min-width: 1440px) {
        h2{
            font-size: 4rem;
        }
    }
    

`
const MainImage = () => (
  <StaticQuery
    query = {graphql`
    query MainImageQuery {
        file(relativePath: {eq: "fohr-haus.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `
    }
    render = { data => (
            <Wrapper className = "mainImage">
                <Img fluid={data.file.childImageSharp.fluid}  />
                <Text>
                    <h2>
                        Brauchen Sie hilfe?

                    </h2>

                    <h2>
                        Wir sind hier um zu helfen.
                    </h2>
                </Text>
            </Wrapper>
        )
    }
    />
)

export default MainImage
