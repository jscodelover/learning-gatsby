import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

function About() {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>
        I'm frontend developer with skills reactjs, redux, sass, html, css,
        styled component, firebase
      </p>
      <p>
        Need a help? <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default About
