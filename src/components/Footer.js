import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import {StaticQuery, graphql} from 'gatsby'

const Wrapper = styled.div`
    display: block;
    height: 300px;
    width: 100%;
    color: #707070;
    /* background-color: #E52321; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const DarkBottom = styled.div`
    background-color: #CE1715;
    display: block;    
    height: 91px;

`
const LightUp = styled.div`
  height: 209px;
  background-color: #E52321;
  

`

const Footer = (data) => (
  <Wrapper className="footer">
    <LightUp/>
    <DarkBottom/>
  </Wrapper>
)

export default Footer