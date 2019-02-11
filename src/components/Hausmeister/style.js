import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 600px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 500px;

    -moz-box-shadow:0 3px 3px rgba(182, 182, 182, 0.4);
    -webkit-box-shadow: 0 3px 3px rgba(182, 182, 182, 0.4);
    box-shadow: 0 3px 3px rgba(182, 182, 182, 0.4);

    @media(min-width: 768px){
        flex-direction: row;
    }
`

export const Left = styled.div`
    height: 50%;
    width: 100%;
    /* background-color: red; */
    padding: 2rem 1.5rem 2rem 1.5rem;
    @media(min-width: 768px){
        width: 100%;
        height: auto;
    }

    p{
        font-size: 1.4rem;
        text-indent: 2rem;
        color: #707070;
    }

    h2{
        font-size: 2rem;
        padding-top: 2rem;
        text-align: center;
    }

`

export const Right = styled.div`
    display: block;
    height: 50%;
    width: 100%;

    border: none;
    outline: none;
    padding: 10rem;
    

    
    background-color: green;
    
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center; 
    background-position-y: center; 

    @media(min-width: 768px){
        width: 100%;
        height: auto;      
        /* padding: 2rem !important; */

        background-image: url(${props => props.src});
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center; 
        background-position-y: bottom; 


    }
`