import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Img from "gatsby-image"
import Header from '../components/header'
import {graphql} from 'gatsby'

const IndexPage = (data) => (
  <Layout>
    {/* {console.log(data.data.file.childImageSharp.fixed)} */}
    {/* <Img fixed={data.data.file.childImageSharp.fixed} /> */}
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {/* {console.log(data.data.file.childImageSharp.fixed)} */}
 
  </Layout>
)

export const indexQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "headerImage.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
