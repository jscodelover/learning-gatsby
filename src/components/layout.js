import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../style/index.scss"

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
