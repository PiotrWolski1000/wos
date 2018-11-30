import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Header from './Header/'
import Footer from './Footer'
import {createGlobalStyle} from 'styled-components'
import regular from './../Assets/Fonts/segoeui.ttf'
import quotFont from './../Assets/Fonts/pertibd.ttf'

import './layout.css'



createGlobalStyle`
  @font-face {
    font-family: 'SegoeUI';
    src: url(${regular}) format('truetype');
  };
  @font-face {
    font-family: 'Perpetua Titling MT';
    src: url(${quotFont}) format('truetype');
  };
` 


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        //   link={[
        //     { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        // ]}
        >
          <html lang="en" />
        </Helmet>
        <Header/>
        {/* <Header HeaderImage={data.HeaderImage} siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          {children}
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
