import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function Contact() {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>You can reach me via @jscodelover on twitter</p>
      <Link to="/">Back</Link>
    </Layout>
  )
}

export default Contact
