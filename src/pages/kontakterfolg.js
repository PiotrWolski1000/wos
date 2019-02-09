import React, { Component } from 'react';
import Layout from '../components/layout'
import SimpleSlider from '../components/SimpleSlider'
class kontakterfolg extends Component {
    render() {
        return (
            <Layout>
                <div style={{height: '768px' ,display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <p style={{display: 'block', width: '80%', fontSize: '1.3rem', margin: '0 auto', textAlign: 'center'}}>
                        Vielen Dank für Ihre Kontaktaufnahme, wir werden uns in Kürze mit Ihnen in Verbindung setzen.
                    </p>
                    <SimpleSlider/>
                </div>
            </Layout>
        );
    }
}

export default kontakterfolg;