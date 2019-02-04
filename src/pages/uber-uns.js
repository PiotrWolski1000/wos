import React from 'react'
// import { Link } from 'gatsby'
import Hausmeister from '../components/Hausmeister/'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SimpleSlider from '../components/SimpleSlider'

const UberUns = (data) => (
  <Layout>
    <Hausmeister/>
    <SimpleSlider></SimpleSlider>
  </Layout>
)

export const indexQuery = graphql`
  query UberUnsQuery {
    file(relativePath: { eq: "headerImage.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default UberUns
