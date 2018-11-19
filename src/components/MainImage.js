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
        font-size: 2rem;
    }
`
const MainImage = () => (
  <StaticQuery
    query = {graphql`
    query MainImageQuery {
        file(relativePath: {eq: "garden.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1920) {
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
