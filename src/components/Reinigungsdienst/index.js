import React, { Component } from 'react';
import * as El from './style'
import reinigungsImage from './../../images/cleaning.jpg'

class index extends Component {
    render() {
        return (
            <El.Wrapper>
                <El.LeftTop>
                    <h2>Reinigungsdienst</h2>
                    <div>
                        <ul>
                            <li>Büro-, Haus-, Ferienobjektenreinigung</li>
                            <li>Ferienobjektenreinigung</li>
                            <li>Bauschlussreinigung</li>
                            <li>Grundreinigung</li>
                        </ul>
                    </div>
                </El.LeftTop>
                <El.RightBottom 
                    src={reinigungsImage}
                >    
                </El.RightBottom>
            </El.Wrapper>
        )
    }
}

export default index;