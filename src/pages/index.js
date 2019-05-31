import React from 'react'
import Layout from '../components/layout'
import MainImage from '../components/MainImage'
import MainText from '../components/MainText'
import Insel from '../components/Insel'
import SimpleSlider from '../components/SimpleSlider'
import Helmet from 'react-helmet'
import Reinigungsdienst from '../components/Reinigungsdienst/'
import Hausmeisterdienst from '../components/Hausmeisterdienst/'
import Friends from '../components/Friends'
const IndexPage = ({data}) => (
  <Layout>
    <Helmet>
      <title>WoS Hausmeister & Reinigung Service auf Föhr</title>
      <meta name="description" content="WoS Hausmeister & Reinigung Service auf Föhr. Wir bieten Dienstleistungen wie Reinigungsdienst, Gartenpflege, Hausarbeit und mehr." />
    </Helmet>

    <MainImage></MainImage>
    


    <MainText></MainText>
    

    <Reinigungsdienst/>
    {/* <Hausmeisterdienst/> */}

    <Insel/>
     <div style={{width: '100%'}}>
      <Friends/>
      <SimpleSlider/>
    </div>
  </Layout>
)

export default IndexPage
