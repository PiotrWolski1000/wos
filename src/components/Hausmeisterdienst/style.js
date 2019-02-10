import styled from 'styled-components'


export const Wrapper = styled.section`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    z-index:111;

    -moz-box-shadow:0 3px 3px rgba(182, 182, 182, 0.4);
    -webkit-box-shadow: 0 3px 3px rgba(182, 182, 182, 0.4);
    box-shadow: 0 3px 3px rgba(182, 182, 182, 0.4);

    margin: 2rem 0 0 0;
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
    background-color: red;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center; 
    background-position-y: center; 

    /* box-shadow: 0px 1px 13px grey; */

    @media(min-width: 1024px){
        width: 50%;
    }

`

