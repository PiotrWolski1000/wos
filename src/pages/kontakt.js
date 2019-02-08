import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SimpleSlider from '../components/SimpleSlider'
import KontaktForm from '../components/Kontakt/'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  /* padding-left: 1rem; */
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 320px){
        width: 250px;
  }
  @media(min-width: 425px){
      width: 350px;
  }
  @media(min-width: 768px){
      width: 500px;
  }
  @media(min-width: 1024px){
      width: 768px;
  }
`

const Kontakt = (data) => (
  <Layout>
    <Div>
      <h2 style={{fontSize: '2.25rem'}}>
        Kontakt
      </h2>

      <div>
        <div style={{textIndent: '2rem', marginBottom: '3rem'}}>
          <i>
            Hier finden Sie alle wichtige Informationen, mit denen Sie uns kontaktieren können.
          </i>
        </div>
        <p>
            <b>
              Name:{' '} 
            </b>
            WoS Hausmeister Service auf Föhr
          </p>
          <p>
           
          </p>
          <p>
            <b>
              Adresse:{' '}
            </b>
            Buurnstrat 51,  25938 Oevenum auf Föhr
          </p>
        
        
        <p>
          <b>
            Telefonnumer:{' '} 
          </b>
          <span>
            +0151 7131 7746
          </span>
        </p>

        <p>
          <b>
            E-mail:{' '}
          </b> 

          <span>
            HausmeisterService.Sikorski@web.de
          </span>
        </p>   

      </div>
    </Div>


    <KontaktForm/>  
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
