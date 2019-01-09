import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SimpleSlider from '../components/SimpleSlider'
import KontaktForm from '../components/Kontakt/'

const Kontakt = (data) => (
  <Layout>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2 style={{fontSize: '2.25rem'}}>
        Kontakt
      </h2>
      <div style={{padding: '0 1rem 0 1rem', margin: '1rem 0 2rem 0', textIndent: '50px', maxWidth: '500px'}}>
        <i>
          Hier finden Sie wichtige Informationen, mit denen Sie uns kontaktieren können.
        </i>
      </div>
    <div>

      <div>
          <p>
            <b>
              Name: 
            </b>
            WoS Hausmeister Service auf Föhr
          </p>
          <p>
           
          </p>
          <p>
            <b>
              Adresse: 
            </b>
            Buurnstrat 51,  25938 Oevenum auf Föhr
          </p>
        </div>
        
        
        <p>
          <b>
            Telefonnumer: 
          </b>
          <span>
            +0151 7131 7746
          </span>
        </p>

        <p>
          <b>
            E-mail:
          </b> 

          <span>
            Hausmeister.sikorski@web.de
          </span>
        </p>   
      </div>
    </div>

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
