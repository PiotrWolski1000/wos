import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  min-height: 120px ;
  height: auto;
  width: 100%;
  color: #707070;
  background-color: #FFFFFF;
  @media(min-height: 768px) {
    min-height: 150px;
  }
`

export const LogoImg = styled(Img)`
  margin-left: 2rem;
  width:75px;
  height:75px;
  cursor: pointer;
  @media(min-width: 768px){
    width: 100px;
    height: 100px;
  }
`

export const StyledLink = styled(Link)`
text-decoration: none;
  color: #707070;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }  
`


export const Menu = styled.div`

  width: 100%;
  display: flex;
  opacity: ${props => props.isVisible ? '1'  : '0'};
  flex-direction: column;
  visibility: ${props => props.isVisible ? 'visible'  : 'hidden'};
  height: ${props => props.isVisible ? '275px'  : '0px'};
  transition: height 0.5s ease, visibility 0s;

  ul {
    list-style: none;
  }
`
export const HorizontalMenu = styled.div`

  @media(max-width: 768px){
    display:none;
  }
  @media(min-width: 769px){
    display: flex;
    justify-content: center;
    margin-right: 50px;
    color: #707070;
  }

`

export const HamburgerMenu = styled.div`
    position: absolute;
    top: 4rem;
    right: 2rem;
  & > div {
    width: 30px;
    height: 5px;
    border-radius: 5px;
    transition: 0.4s;
    background-color: #707070;

    &:first-child,
    &:last-child {
      margin: 4px 0;
    }
  }

  &.isOpen {
    div:nth-child(2) {
      margin-top: -9px;
      transform: rotate(135deg);
    }
    div:first-child {
      transform: rotate(45deg);
    }
    div:last-child {
      display: none;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledLi = styled.li`
  font-size: 23px;
  width: 50%;
  padding: 10px;
  color: #707070;
  text-decoration: none;
  &:before {
    content: '';
  }
  
`

export const MainWrapper = styled.div`
  height: auto;
`