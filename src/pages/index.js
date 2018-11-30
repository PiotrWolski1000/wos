import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import MainImage from '../components/MainImage'
import MainText from '../components/MainText'
import {graphql} from 'gatsby'
import Insel from '../components/Insel'
import SimpleSlider from '../components/SimpleSlider'

const IndexPage = (data) => (
  <Layout>
    <MainImage></MainImage>
    <MainText></MainText>
    <Insel></Insel>
     <div style={{width: '100%'}}>
      <SimpleSlider/>

    </div>
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
