import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CardWrapper = styled.div`
    width: 100%;
    text-align: left;
    height: auto;
    margin: 0.5rem 0 0.5rem 0;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.3rem;

    @media(max-width: 600px){
        display: flex;
        flex-direction: column;

    }
    @media(min-width: 769px){
        flex-direction: column;
    }
`

const Left = styled.div`
    width: 50%;
    transform: scale(0.95);
    @media(max-width: 600px){
        width: 100%;
    }
    @media(min-width: 769px){
        width:80%;

    }
    

    ${this}:hover{
        transform: scale(1);
    }
    ${this}:focus{
        transform: scale(1);
    }

    transition: all .5s;
`

const H2 = styled.h2`
    margin-top: 1rem;
`

const Right = styled.div`
    
    @media(max-width: 600px){
        width: 100%;
        float: left;
    }
    @media(max-width: 768px){
        padding-left: 1rem;
    }
    @media(min-width: 769px) {
        width: 80%;
    }
`

export default class LeistungeCard extends React.Component {
    render(){
        return(
            <CardWrapper>
                <Left>
                    <Img fluid={this.props.image} alt={this.props.alt}/>
                </Left>
                <Right>
                    <H2>
                        {this.props.title}
                    </H2>
                    <ul>
                        {
                            this.props.jobs.map((item, i) => (
                                    <li key={`${item}_li_jobs${i}`}>
                                        {item}
                                    </li>
                                    ) 
                                )
                            }
                    </ul>
                </Right>
            </CardWrapper>
        )
    }
}
