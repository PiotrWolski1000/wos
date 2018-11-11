import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import {StaticQuery, graphql} from 'gatsby'

const Wrapper = styled.div`
  display: block;
  height: 175px;
  width: 100%;
  color: #707070;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 1px grey;
`

const LogoImg = styled(Img)`
  margin: 25px;
`

const Header = () => (
  <StaticQuery
    query = {graphql`
    query HeaderQuery {
      file(relativePath: { eq: "headerImage.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `}
    render = { data => (
      <Wrapper className="header">
        <LogoImg fixed={data.file.childImageSharp.fixed} />
      </Wrapper>
      ) 
    }
    
  />
)

export default Header
