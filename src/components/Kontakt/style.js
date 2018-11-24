import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
    height: auto;
    min-height: 300px;
    width: 100%;

    color: #707070;
    /* text-align: center; */
    /* margin: 0 auto; */
    /* background-color: green; */

`

export const ContactForm = styled.form`
    input, textarea {
        padding:0.5rem;
        display: block;
        width: 500px;
        margin: 1rem 0 1rem 0;
        border-radius: 10px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* @media(max-width: 768px) {
        input, textarea {

            width: 80%;
            margin: auto;
        }
    } */
`

export const Button = styled.button`
    all: initial;
    cursor: pointer;
    height: 55px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #E52321;
    border-radius: 25px;

    text-align: center;
    
    color: white; 
    font-size: 1.3rem;

    
    margin: 0 auto;
    
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