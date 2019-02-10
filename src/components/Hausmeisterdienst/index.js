import React, { Component } from 'react';
import imageHausmeister from './../../images/hausmeister.jpg'
import * as El from './style'

class index extends Component {
    render() {
        console.log(this.props.data)
        return (
            <El.Wrapper>
                <El.LeftTop>
                    <h2>Hausmeisterdienst</h2>
                    <div>
                        <ul>
                            <li>Kleine Reparatur und Montagearbeiten</li>
                            <li>Entrümpelung</li>
                            <li>Hausbetreuung</li>
                            <li>Entleerung von Häusern und Kellern</li>
                        </ul>
                    </div>
                </El.LeftTop>
                <El.RightBottom
                    src={imageHausmeister}
                >
                </El.RightBottom>
            </El.Wrapper>
        )
    }
}

export default index;