import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import MainImage from '../components/MainImage'
import MainText from '../components/MainText'
import {graphql} from 'gatsby'
import Insel from '../components/Insel'
import SimpleSlider from '../components/SimpleSlider'
import Helmet from 'react-helmet'
import Reinigungsdienst from '../components/Reinigungsdienst/'
import Hausmeisterdienst from '../components/Hausmeisterdienst/'

const IndexPage = ({data}) => (
  <Layout>
    <Helmet>
      <title>WoS Hausmeister & Reinigung Service auf Föhr</title>
      <meta name="description" content="WoS Hausmeister & Reinigung Service auf Föhr. Wir bieten Dienstleistungen wie Reinigungsdienst, Gartenpflege, Hausarbeit und mehr." />
    </Helmet>

    <MainImage></MainImage>
    

    <MainText></MainText>
    
    <Hausmeisterdienst/>
    <Reinigungsdienst/>

    <Insel/>
     <div style={{width: '100%'}}>
      <SimpleSlider/>
    </div>
  </Layout>
)

export default IndexPage
