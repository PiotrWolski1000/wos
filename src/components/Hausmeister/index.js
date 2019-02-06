import React, { Component } from 'react';
import * as El from './style'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import hausmeisterImage from './../../images/wrench.jpg'


class index extends Component {
    constructor(props){
        super(props)    
    }

    render() {
        return (
            <El.Wrapper>
                <El.ContentWrapper>
                    <El.Left>
                        <h2>
                            Wer sind wir?
                        </h2>
                        <p>
                        Die Firma "WoS Hausmeister Service auf Föhr" 
                        wird von leidenschaftlichen Menschen gegründet.
                        </p>
                    </El.Left>
                    <El.Right src={hausmeisterImage}>
                    
                    </El.Right>
                </El.ContentWrapper>       
            </El.Wrapper>
        )
    }
}

export default index;
