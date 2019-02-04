import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import MainImage from '../components/MainImage'
import MainText from '../components/MainText'
import {graphql} from 'gatsby'
import Insel from '../components/Insel'
import SimpleSlider from '../components/SimpleSlider'
import Hausmeister from '../components/Hausmeister/'
import Link from 'gatsby-link'
import Test from './../components/Test/'

const IndexPage = ({data}) => (
  <Layout>
    <MainImage></MainImage>
    <MainText></MainText>
    <Test></Test>
    {/* {console.log('my data: ',{data})}
    {console.log(data.imageHausmeister.childImageSharp.fluid)} */}
    {/* <Hausmeister image={data}/> */}
    <Insel/>
     <div style={{width: '100%'}}>
      <SimpleSlider/>
    </div>
  </Layout>
)

export const indexQuery = graphql`
query IndexQuery {
  imageHausmeister: file(relativePath: { eq: "hausmeister.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }  
}
`
export default IndexPage
