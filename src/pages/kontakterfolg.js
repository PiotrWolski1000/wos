import React, { Component } from 'react';
import Layout from '../components/layout'

class kontakterfolg extends Component {
    render() {
        return (
            <Layout>
                <div style={{height: '768px'}}>
                    <p style={{fontSize: '1.3rem', textAlign: 'center'}}>
                        Vielen Dank für Ihre Kontaktaufnahme, wir werden uns in Kürze mit Ihnen in Verbindung setzen.
                    </p>
                </div>
            </Layout>
        );
    }
}

export default kontakterfolg;