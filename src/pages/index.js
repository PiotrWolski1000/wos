import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import MainImage from '../components/MainImage'
import MainText from '../components/MainText'
import {graphql} from 'gatsby'
import Insel from '../components/Insel'
import SimpleSlider from '../components/SimpleSlider'
import Hausmeister from '../components/Hausmeister/'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
const IndexPage = ({data}) => (
  <Layout>
    <Helmet>
      <title>WoS Hausmeister & Reinigung Service auf Föhr</title>
      <meta name="description" content="WoS Hausmeister & Reinigung Service auf Föhr. Wir bieten Dienstleistungen wie Reinigungsdienst, Gartenpflege, Hausarbeit und mehr." />
    </Helmet>
    <MainImage></MainImage>
    <MainText></MainText>

    <Insel/>
     <div style={{width: '100%'}}>
      <SimpleSlider/>
    </div>
  </Layout>
)

export const indexQuery = graphql`
query IndexQuery {
  imageHausmeister: file(relativePath: { eq: "hausmeister.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }  
}
`
export default IndexPage
