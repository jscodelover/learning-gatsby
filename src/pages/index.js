import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function IndexPage() {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Manisha, front end developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
