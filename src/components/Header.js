import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import {StaticQuery, graphql} from 'gatsby'

if (typeof window !== `undefined`) {
  // const Snap =  require('snapsvg-cjs');
  const windowGlobal = typeof window !== 'undefined && ' && window
}

const navigation = [
  {
    name: 'Stertseite',
    path: '/'
  },
  {
    name: 'Über uns',
    path: '/uber-uns'
  },
  {
    name: 'Leistungen',
    path: '/leistungen'
  },
  {
    name: 'Preise',
    path: '/preise'
  },
  {
    name: 'Jobs',
    path: '/jobs'
  },
  {
    name: 'Kontakt',
    path: '/kontakt'
  }
]

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  min-height: 175px ;
  height: auto;
  width: 100%;
  color: #707070;
  background-color: #FFFFFF;
  /* box-shadow: 0px 1px 1px grey; */
`

const LogoImg = styled(Img)`
  margin: 25px;
  cursor: pointer;
`

const StyledLink = styled(Link)`
text-decoration: none;
  color: #000;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }  
`


const Menu = styled.div`
  ul {
    list-style: none;
  }

  width: 100%;
  display: flex;
  opacity: ${props => props.isVisible ? '1'  : '0'};
  flex-direction: column;
  visibility: ${props => props.isVisible ? 'visible'  : 'hidden'};
  height: ${props => props.isVisible ? '200px'  : '0px'};
  transition: height 0.5s ease, visibility 0s;

`
const HamburgerMenu = styled.div`
    position: absolute;
    top: 70px;
    right: 50px;
  & > div {
    width: 30px;
    height: 5px;
    border-radius: 5px;
    transition: 0.4s;
    background-color: #000;

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

const StyledLi = styled.li`
  font-size: 23px;
  width: 50%;
  padding: 10px;
  color: #707070;
  text-decoration: none;
  &:before {
    content: '';
  }
  
`

const MainWrapper = styled.div`
  height: auto;
`

class Header extends React.Component {
  state = {
    collapsed: false,
    path: '/'
  }

  UNSAFE_componentWillMount(){
    if (typeof window !== `undefined`) {
      const path = windowGlobal ? windowGlobal.location.pathname : false
      this.setState(prevState => ({path: path}))
      console.log(path)
  }
  }

  handleCollapseMenu = () => this.setState(prevState => ({collapsed: !prevState.collapsed}))

  render() {
    
    const { collapsed } = this.state

    return(
      <StaticQuery
        query = {graphql`
        query HeaderQuery {
          file(relativePath: { eq: "headerImage.png" }) {
            childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        `}
        render = { data => (
            <MainWrapper>
              <Wrapper className="header">
                <Link to = '/'>
                  <LogoImg fixed={data.file.childImageSharp.fixed} />
                </Link>

                <HamburgerMenu
                  className={collapsed ? 'isOpen' : ''}
                  onClick={this.handleCollapseMenu}
                  >
                  <div />
                  <div />
                  <div />
                </HamburgerMenu>
              </Wrapper>
              <Menu  isVisible={collapsed}>
                    {
                      navigation.map((item, i) => (
                          <StyledLink key = {`menu_link${i}`} to={item.path}>
                            {item.name}
                            </StyledLink>
                        )
                        )
                    }
                </Menu>
            </MainWrapper>
          ) 
        }
      />
    )
  }
}

export default Header
