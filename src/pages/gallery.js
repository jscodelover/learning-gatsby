import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Gallery({ data }) {
  console.log(data)
  return (
    <Layout>
      <h2>Gallery</h2>
      <Img fixed={data.fixed.childImageSharp.fixed} />
      <Img fluid={data.fluid.childImageSharp.fluid} />
    </Layout>
  )
}

export default Gallery

export const query = graphql`
  query imageQuery {
    fixed: file(relativePath: { eq: "image_3.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
