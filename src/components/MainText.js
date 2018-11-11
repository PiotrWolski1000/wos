import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: block;
    height: auto;
    width: 100%;
    color: #707070;
    margin: 0 auto;
    p {
        width: 80%;
        /* text-align: center; */
        margin: 0 auto;
        text-indent: 50px;
        word-wrap: break-word;
        margin-top: 50px;
        margin-bottom: 50px;
        
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
