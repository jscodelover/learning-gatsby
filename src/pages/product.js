import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Product({ data }) {
  return (
    <Layout>
      <h2>Products</h2>
      {data.products.nodes.map(product => (
        <Link to={`/product/${product.slug}`} key={product.slug}>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>{product.title}</p>
          <Img fixed={product.image.fixed} />
        </Link>
      ))}
    </Layout>
  )
}

export default Product

export const query = graphql`
  query {
    products: allContentfulProduct {
      nodes {
        slug
        title
        image {
          fixed {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
