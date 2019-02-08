import * as El from './style'

import React, { Component } from 'react';

class KontaktForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameFieldActive: false,
            name: '',
            emailFieldActive: false,
            email: '',
            phoneFieldActive: false,
            phone: '',
            subjectFieldActive: false,
            subject: '',
            messageFieldActive: false,
            message: ''

        }
    }

    onChangeInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))
    
        this.activateField(e);
        e.preventDefault();
      }
    
      activateField = (e) => {
        if(e.target.name === 'name'){
          this.setState({
            nameFieldActive: true
          })
        }else if(e.target.name === 'email'){
          this.setState({
              emailFieldActive: true
          })
        }else if(e.target.name === 'phone'){
            this.setState({
                phoneFieldActive: true
            })
        }else if(e.target.name === 'subject'){
            this.setState({
                subjectFieldActive: true
            })
        }else if(e.target.name === 'message'){
            this.setState({
                messageFieldActive: true
            })
        }
      }
    
      disableFocus = e => {
        if(e.target.name === 'name'){
          if (e.target.value === '') {
            this.setState({
                nameFieldActive: false
            })
          }
        }else if(e.target.name === 'email'){
          if (e.target.value === '') {
            this.setState({
                emailFieldActive: false
            })
          }
        } 
        else if(e.target.name === 'phone'){
            if (e.target.value === '') {
              this.setState({
                  phoneFieldActive: false
              })
            }
        }else if(e.target.name === 'subject'){
            if (e.target.value === '') {
              this.setState({
                  subjectFieldActive: false
              })
            }
        }else if(e.target.name === 'message'){
            if (e.target.value === '') {
              this.setState({
                  messageFieldActive: false
              })
            }
        } 

      }

    handleSubmit = e => {
        
    }

    render() {
        return (
            <El.Wrapper>
                    
                    <h3 style={{color: '#363636'}}>
                        Kontaktformular
                    </h3>
{/*                     
 
                    <form name="contacttest" method="POST" data-netlify="true">
                        <p>
                            <label>Name <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Email <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form> */}
                    <form
                        action='/kontakterfolg'
                        name="contact"
                        onSubmit={this.handleSubmit}
                        method="post"
                        netlify
                        data-netlify-honeypot="bot-field"

                    >
                        
                        <input type="hidden" name="bot-field" />
                        
                        <label htmlFor='name' className={this.state.nameFieldActive ? "field-active" : ""}>Name</label>
                        <input 
                            name='name'
                            type='text' 
                            value={this.state.name}
                            placeholder="Name, Firma Name"
                            onFocus={this.activateField}
                            onBlur={this.disableFocus}   
                            onChange={this.onChangeInput}
                            required
                        />
            
                        <label htmlFor='email' className={this.state.emailFieldActive ? "field-active" : ""}>E-mail</label>
                        <input 
                            name='email' 
                            type="email" 
                            value={this.state.email}
                            placeholder="E-mail addresse" 
                            onFocus={this.activateField}
                            onBlur={this.disableFocus}   
                            onChange={this.onChangeInput}
                            required
                        />
                        
                        <label htmlFor='phone' className={this.state.phoneFieldActive ? "field-active" : ""}>Telefonnummer</label>
                        <input 
                            name="phone" 
                            type="tel" 
                            value={this.state.phone}
                            placeholder="Telefonnnummer"
                            onFocus={this.activateField}
                            onBlur={this.disableFocus}   
                            onChange={this.onChangeInput}
                            required
                        />

                        <label htmlFor='subject' className={this.state.subjectFieldActive ? "field-active" : ""}>Thema</label>            
                        <input 
                            name="subject" 
                            type="text"
                            value={this.state.subject}
                            placeholder="Thema"
                            onFocus={this.activateField}
                            onBlur={this.disableFocus}   
                            onChange={this.onChangeInput}
                            required
                        />

                        <label htmlFor='message' className={this.state.messageFieldActive ? "field-active" : ""}>Nachricht</label>
                        <textarea
                            value={this.state.message}
                            name="message" 
                            type="text" 
                            rows="4" 
                            cols="50" 
                            placeholder="Message" 
                            onFocus={this.activateField}
                            onBlur={this.disableFocus}   
                            onChange={this.onChangeInput}
                            required
                        />
                        <button
                            type="submit"
                        >
                            Nachricht senden
                        </button>
                    </form>
            </El.Wrapper>
        );
    }
}
export default KontaktForm
