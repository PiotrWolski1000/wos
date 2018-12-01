import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SimpleSlider from '../components/SimpleSlider'
import KontaktForm from '../components/Kontakt/'

const Kontakt = (data) => (
  <Layout>
    <h2>
      Kontakt
    </h2>
    <div>
      <div>
        <p>
          WoS Hausmeister Service auf Föhr
        </p>
        <p>
          Buurnstrat 51
        </p>
        <p>
          25938 Oevenum auf Föhr
        </p>
      </div>
      <p>
        Hier können Sie uns kontaktieren via: 
      </p>
      
      <p>
        Telefonnumer: 
        <span>
          +0151 7131 7746
        </span>
      </p>

    

      <p>
        E-mail:
        <span>
          Hausmeister.sikorski@web.de
        </span>
      </p>

      
    </div>

    <h3>
      Kontaktform
    </h3>

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
