import React from "react"
import { Link } from "gatsby"

function IndexPage() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Manisha, front end developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <p>
        Blog <Link to="/blog">Blog</Link>
      </p>
      <p>
        About me <Link to="/about">About Me</Link>
      </p>
    </div>
  )
}

export default IndexPage
