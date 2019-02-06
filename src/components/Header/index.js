import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import * as El from './style.js'
import { Link } from 'gatsby'


const windowGlobal = typeof window !== 'undefined' && window

const navigation = [
  {
    name: 'Startseite',
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
    name: 'Kontakt',
    path: '/kontakt'
  }
]

class Header extends React.Component {
  state = {
    collapsed: false,
    path: '/'
  }

  UNSAFE_componentWillMount(){
    const path = windowGlobal ? windowGlobal.location.pathname : false
    this.setState(prevState => ({path: path}))
    
  }

  handleCollapseMenu = () => this.setState(prevState => ({collapsed: !prevState.collapsed}))

  render() {
    
    const { collapsed } = this.state

    return(
      <StaticQuery
        query = {graphql`
        query HeaderQuery {
          file(relativePath: {eq: "headerImage.png"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        }
        `}
        render = { data => (
            <El.MainWrapper>
              <El.Wrapper className="header">
                <Link to = '/'>
                  <El.LogoImg fluid={data.file.childImageSharp.fluid} />
                </Link>

                <El.HamburgerMenu
                  className={collapsed ? 'isOpen' : ''}
                  onClick={this.handleCollapseMenu}
                  >
                  <div />
                  <div />
                  <div />
                </El.HamburgerMenu>
               
                <El.HorizontalMenu>
                  {
                    navigation.map((item, i) => {
                        return (
                          <El.StyledLink activeStyle={{color: 'black', paddingLeft: '5px', borderBottom: 'red solid 4px'}} key = {`menu_desktop_link${i}`} to={item.path}> 
                            
                            {item.name}
                          
                          </El.StyledLink>)
                      }
                  )
                  }
                </El.HorizontalMenu>
              </El.Wrapper>
              <El.Menu  isVisible={collapsed}>
                  {
                    navigation.map((item, i) => {  
                      return (
                        <El.StyledLink  activeStyle = {{color: 'black', paddingLeft: '5px', borderLeft: 'red solid 4px'}} key = {`menu_link${i}`} to={item.path}> 
                          
                          {item.name}
                        
                        </El.StyledLink>)
                    }
                )
                  }
              </El.Menu>
            </El.MainWrapper>
          ) 
        }
      />
    )
  }
}

export default Header
