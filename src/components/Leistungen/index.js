import React from 'react'
import * as El from './style'
import LeistungeCard from './LeistungeCard'
const UnsereLeistungen = (data) => {

    const Description = [
        {title: 'Haus hilfe',
        jobs: ['Entrümpelung','Hausbetreuung','Entleerung von Häusern und Kellern','Kleine Reparatur und Montagearbeiten'],
        image: data.data.data.image0.childImageSharp.fluid,
        id: 0,
      },
        {title: 'Hausarbeit',
        jobs: ['Malen', 'Tapezieren', 'Trockenbau'],
        image: data.data.data.image1.childImageSharp.fluid,
        id: 1,
        },
        {title: 'Reinigungsdienst',
        jobs: ['Büro-, Haus-, Ferienobjektenreinigung', 'Bauschlussreinigung', 'Grundreinigung'],
        image: data.data.data.image2.childImageSharp.fluid,
        id: 2,},
        {title: 'Gartenpflege',
        jobs: ['Mülltonendienst', 'Hauswirtschaft', 'Gartenpflege'],
        image: data.data.data.image3.childImageSharp.fluid,
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
                />
                )
            )
        }
    </El.Wrapper>
    )
}
  
  
  export default UnsereLeistungen 