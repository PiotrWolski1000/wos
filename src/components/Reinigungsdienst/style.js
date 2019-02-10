import styled from 'styled-components'


export const Wrapper = styled.section`
    width: 100%;
    height: 400px;
    display: flex;
    z-index: 10;
    flex-direction: column;
    margin: 50px 0 0 0;
    /* padding-top: 100px;  */
    -moz-box-shadow:0 3px 3px rgba(182, 182, 182, 0.4);
    -webkit-box-shadow: 0 3px 3px rgba(182, 182, 182, 0.4);
    box-shadow: 0 3px 3px rgba(182, 182, 182, 0.4);
    @media(min-width: 768px){
        flex-direction: row;
    }
`

export const LeftTop = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    div{
        margin-left: 2rem;
    }
    h2 {
        margin-top: 2rem;
        text-align: center;
    }
    ul{
        list-style: square;    
    }
    @media(min-width: 1024px){
        width: 50%;
    }
`

export const RightBottom = styled.div`
    width: 100%;
    height: 100%;

    
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center; 
    background-position-y:  10%; 

    @media(min-width: 1024px){
        width: 50%;
        background-position-y:  50%; 
    }

    @media(min-width: 375px){
        background-position-y:  bottom; 
    }

    @media(min-width: 1440px){
        background-position-y:  center; 
    }
`

