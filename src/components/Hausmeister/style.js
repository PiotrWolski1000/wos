import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 600px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 500px;

    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

    @media(min-width: 768px){
        border-top: 2px solid rgba(0,0,0,0.2);
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