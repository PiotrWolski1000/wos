import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import {StaticQuery, graphql} from 'gatsby'

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
  height: 175px;
  width: 100%;
  color: #707070;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 1px grey;
`

const LogoImg = styled(Img)`
  margin: 25px;
`
const Li = styled.li`
  margin: 0 10px 0 0px;
`
const StyledLink = styled(Link)`
  color: #707070;
  text-decoration: none;
  padding: 0 5px 5px 5px;


  ${this}:visited{
    color: #707070;
  }

  ${this}:hover {
    border-bottom: 5px solid #E52321;
  }
`


const Menu = styled.div`
  ul {
    list-style: none;
    display: flex;
    li {
      width: 100px;
    }
  }
`

class Header extends React.Component {
  render() {
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
          <Wrapper className="header">
            <Link to = '/'>
              <LogoImg fixed={data.file.childImageSharp.fixed} />
            </Link>
            <Menu>
              <ul>
                {
                  // navigation.map((item, i) => (
                  //   <Li key = {`menu_li${i}`}>
                  //     <StyledLink key = {`menu_link${i}`} to={item.path}>
                  //       {item.name}
                  //     </StyledLink>
                  //   </Li>
                  //   )
                  // )
                }
              </ul>
            </Menu>
          </Wrapper>
          ) 
        }
      />
    )
  }
}

export default Header
