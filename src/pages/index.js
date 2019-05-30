import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

function IndexPage() {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Manisha, front end developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
