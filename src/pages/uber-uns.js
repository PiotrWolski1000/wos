import React from 'react'
import Hausmeister from '../components/Hausmeister/'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SimpleSlider from '../components/SimpleSlider'
import Helmet from 'react-helmet'
const UberUns = (data) => (
  <Layout>
    <Helmet>
      <title>Über uns</title>
      <meta name="description" content="WoS Hausmeister & Reinigung Service auf Föhr. Wir sind neu auf Föhr Insel. Wir bieten Dienstleistungen wie Reinigungsdienst, Gartenpflege, Hausarbeit und mehr. Kontakt uns für weitere Informationen." />
    </Helmet>
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
