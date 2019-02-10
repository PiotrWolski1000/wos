import React from 'react'
import * as El from './style'
import LeistungeCard from './LeistungeCard'
const UnsereLeistungen = (data) => {

    const Description = [
      {
        title: 'Reinigungsdienst',
        jobs: ['Büro-, Haus-, Ferienobjektenreinigung', 'Bauschlussreinigung', 'Grundreinigung'],
        image: data.data.data.image2.childImageSharp.fluid,
        alt: 'Reinigungsdienst Image',
        id: 2,
      },
      {
        title: 'Haus-Hilfe',
        jobs: ['Kleine Reparatur und Montagearbeiten', 'Entrümpelung','Hausbetreuung','Entleerung von Häusern und Kellern',],
        image: data.data.data.image0.childImageSharp.fluid,
        alt: 'Haus-Hilfe Image',
        id: 0,
      },
      {
        title: 'Hausarbeit',
        jobs: ['Malen', 'Tapezieren', 'Trockenbau'],
        image: data.data.data.image1.childImageSharp.fluid,
        alt: 'Hausarbeit Image',
        id: 1,
      },
      {
        title: 'Gartenpflege',
        jobs: ['Gartenpflege', 'Mülltonendienst', 'Hauswirtschaft', ],
        image: data.data.data.image3.childImageSharp.fluid,
        alt: 'Gartenpflege Image',
        id: 3,

      },
    ]
    return(
    <El.Wrapper>
        {Description.map((item, i) => (
                <LeistungeCard 
                    key={`leistunge_card_${i}`} 
                    title={item.title}
                    jobs={item.jobs}
                    image={item.image}
                    alt={item.alt}
                />
                )
            )
        }
    </El.Wrapper>
    )
}
  
  
  export default UnsereLeistungen 