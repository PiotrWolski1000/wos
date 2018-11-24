import React from 'react'
import * as El from './style'
const KontaktForm = () => (
  <El.Wrapper>
    <El.ContactForm>
        <form 
            name="contact"
            method="post"
            // data-netlify="true"
            // data-netlify-honeypot="bot-field"
        >

            <input name="name" type='text' placeholder="Name, Company name"/>

            <input name="email" type="email" placeholder="Email address" />
            <input name="phone" type="tel" placeholder="Phone number"/>
            <input name="mail_subject" type="text" placeholder="Subject/Title"/>
            <textarea name="message" type="text" rows="4" cols="50" placeholder="Message" />
            <El.Button>
                Nachricht senden
            </El.Button>
        </form>
    </El.ContactForm>
  </El.Wrapper>
)

export default KontaktForm
