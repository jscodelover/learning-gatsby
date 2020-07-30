import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Example = ({ data }) => {
  // const {
  //   site: { info },
  // } = useStaticQuery(graphql`
  //   {
  //     site {
  //       info: siteMetadata {
  //         title
  //         description
  //         author
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      {/* <h2>{info.author}</h2>
      <div>{info.title}</div>
      <div>{info.description}</div>
      <pre>{JSON.stringify(info, null, 4)}</pre> */}
      <h2>{data.site.siteMetadata.author}</h2>
      <div>{data.site.siteMetadata.title}</div>
      <div>{data.site.siteMetadata.description}</div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export default Example

export const query = graphql`
  query a {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
