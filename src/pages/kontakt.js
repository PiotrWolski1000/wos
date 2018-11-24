import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SimpleSlider from '../components/SimpleSlider'
import KontaktForm from '../components/Kontakt/'

const Kontakt = (data) => (
  <Layout>
    <KontaktForm>
      form
    </KontaktForm>
  <SimpleSlider/>
  </Layout>
)

export const indexQuery = graphql`
  query KontaktQuery {
    file(relativePath: { eq: "headerImage.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Kontakt
