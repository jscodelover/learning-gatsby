import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../style/index.scss"
import StyleClass from "./layout.module.css"

function Layout(props) {
  return (
    <div className={StyleClass.container}>
      <div className={StyleClass.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
