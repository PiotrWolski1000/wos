import styled from 'styled-components'
// import {Link} from 'gatsby'

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    /* background-color: purple; */
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
     /* justify-content: center; */
    /* align-items: center;  */
    margin: auto;

    @media(max-width: 768px) {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
`
