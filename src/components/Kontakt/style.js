import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    align-items: center;
    height: auto;
    min-height: 300px;
    width: 100%;
    z-index: 0;
    color: #707070;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    @media(min-width: 320px){
        width: 250px;
    }
    @media(min-width: 425px){
        width: 350px;
    }
    @media(min-width: 768px){
        width: 500px;
    }
    @media(min-width: 1024px){
        width: 768px;
    }

    textarea[type='text'], input[type='tel'], input[type='text'],input[type='password'],input[type='email'] {
        all: initial;
        background-color: white;
        padding: 0.3rem 0.2rem;
        border-radius: 3px;
        z-index: 2;
        outline: none;
        border-bottom: 2px solid #E52321;;
        &::-webkit-input-placeholder {
            color: grey;
        }
    }
    label {
        z-index: 1;
        display: inline-block;
        display: block;
        position:relative;
        left: 2px;
        bottom: -29px;
        transition: all 150ms ease-in;
        /* color: #ffffff; */
        color: black;
        cursor: default;
    }
    label.field-active {
        transform: translateY(-30px);
        font-size: .8rem;
    }
    .floating-label {
        -webkit-appearance: none !important;
    }
    textarea:focus::-webkit-input-placeholder,input:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s ease; 
    }
    textarea:not(:focus)::-webkit-input-placeholder,input:not(:focus)::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.5s ease; 
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

    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    outline: none;

    &:hover{
        text-decoration: underline;
    }

    ${this}:active{
        background-color: #CE1715;
        color: white;
        text-decoration: none !important;
        transition: all 0.25s ease;
    }
`