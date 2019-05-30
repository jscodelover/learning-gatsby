import React from "react"
import { Link } from "gatsby"

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        I'm frontend developer with skills reactjs, redux, sass, html, css,
        styled component, firebase
      </p>
      <p>
        Need a help? <Link to="/contact">Contact Me</Link>
      </p>
    </div>
  )
}

export default About
