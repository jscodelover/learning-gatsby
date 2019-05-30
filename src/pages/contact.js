import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

function Contact() {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>You can reach me via @jscodelover on twitter</p>
      <Link to="/">Back</Link>
      <Footer />
    </div>
  )
}

export default Contact
