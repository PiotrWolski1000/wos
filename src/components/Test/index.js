import React, { Component } from 'react';
import * as El from './style'
import images1 from './../../images/cleaning.jpg'
import images2 from './../../images/wrench.jpg'

class index extends Component {
    render() {
        return (
            <El.Wrapper img1 = {images1} img2 = {images2}>
                <div class="box sunrise">
                    <h2>
                        Reinigungsdienst
                    </h2>
                    {/* <p>
                        trolololo
                    </p> */}
                </div>
                
                <div class="slider">
                    <div class="box sunset">
                        <h2>
                            Hausmeisterservice
                        </h2>
                    </div>
                </div>
            </El.Wrapper>
        );
    }
}

export default index;