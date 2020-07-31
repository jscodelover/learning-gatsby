import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function Product({ data }) {
  return (
    <Layout>
      {/* <h2 style={{ fontSize: 20, fontWeight: "bold" }}>{product.title}</h2>
      <Img fixed={product.image.fixed} /> */}
      <p></p>
    </Layout>
  )
}

export default Product

// export const query = graphql`
//   query MyQuery {
//     products: allContentfulProduct {
//       nodes {
//         slug
//         title
//         image {
//           fixed {
//             ...GatsbyContentfulFixed
//           }
//         }
//       }
//     }
//   }
// `
