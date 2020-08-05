import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Product({ data: { product } }) {
  return (
    <Layout>
      <h2 style={{ fontSize: 20, fontWeight: "bold" }}>{product.title}</h2>
      <h4>{product.price}</h4>
      <Img fixed={product.image.fixed} />
      <p>{product.description.description}</p>
    </Layout>
  )
}

export default Product

export const query = graphql`
  query product($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      description {
        description
      }
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
