import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
    height: auto;
    min-height: 300px;
    width: 100%;

    color: #707070;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    input, textarea {
        padding:0.5rem;
        display: block;
        width: 500px;
       
        border-radius: 10px;

        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    @media(max-width: 768px) {
        input, textarea{
            width: 300px;
        }
    }
`

export const Button = styled.button`
    all: initial;
    cursor: pointer;
    height: 55px;

    display: block;
    margin: 0 auto;

    margin-top: 4rem;

    background-color: #E52321;
    border-radius: 25px;

    text-align: center;
    
    color: white; 
    font-size: 1.5rem;
    
    @media (max-width: 500px) {
        font-size: 1.3rem;
        min-width: 200px;
    }


    @media (max-width: 768px) {
        min-width:250px;
    }

    @media(min-width: 769px){
        min-width: 300px;
    }

     @media(min-width: 1280px){
        min-width: 400px;
    }

`