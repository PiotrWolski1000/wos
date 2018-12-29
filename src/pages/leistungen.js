import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SimpleSlider from '../components/SimpleSlider'
import UnsereLeistungen from '../components/Leistungen/'
import styled from 'styled-components'


const Text = styled.div`
  display: block;
  height: auto;
  margin: 2rem 0 2rem 0;
  width: 100%;
  
  padding: 0 0.5rem 0 0.5rem;
  
  font-size: 1.2rem;
  text-indent: 2rem;

`
const H1 = styled.h1`
  margin-top: 1rem;
  text-align: center;
`

const Leistungen = (data) => (
  <Layout>
    <H1> Leistungen </H1>
    <Text>
      <p>
      Hier finden Sie alle Dienstleistungen, die wir anbieten. Für weitere Informationen kontaktieren Sie uns bitte. 
      </p>
    </Text>
    <UnsereLeistungen data={data}/>
    <SimpleSlider></SimpleSlider>
  </Layout>
)

export const indexQuery = graphql`
query LeistungenQuery {
  
  image0: file(relativePath: { eq: "builder.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  image1: file(relativePath: { eq: "painting.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  
  image2: file(relativePath: { eq: "cleaning.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  
  image3: file(relativePath: { eq: "gartenpflege.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  } 
    
}
`

export default Leistungen
