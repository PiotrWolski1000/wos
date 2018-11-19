import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: block;
    height: auto;
    width: 100%;
    color: #707070;
    margin: 0 auto;
    p {
        font-family: Segoe UI;
        text-align: justify;
        text-justify: inter-word;
        width: 80%;
        margin: 0 auto;
        /* text-decoration: justify; */
        text-indent: 1em;
        /* word-wrap: break-word; */
        margin-top: 1em;
        margin-bottom: 1em;
        /* font-size: 2.7rem;
        line-height: 2.9rem; */
        font-size: 2rem;
        line-height: 1.5em;
    }
`
const MainText = () => (
  <Wrapper>
    <p>   
        Hier finden Sie alle Informationen über unsere Dienstleistungen. 
        Sollten Sie detaillierte Fragen zu unserem Unternehmen, unseren
        Dienstleistungen haben, stehen wir Ihnen gerne per E-Mail oder telefonisch
        zur Verfügung.
    </p>
  </Wrapper>
)

export default MainText
