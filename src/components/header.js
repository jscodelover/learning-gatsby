import React from "react"
import { Link } from "gatsby"
// import "./header.scss"
import StyleClass from "./header.module.css"

function Header() {
  return (
    <header className={StyleClass.header}>
      <nav>
        <ul className={StyleClass.ul}>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/about"
            >
              About Me
            </Link>
          </li>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/example"
            >
              GraphQl Example
            </Link>
          </li>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/product"
            >
              Products
            </Link>
          </li>
          <li className={StyleClass.li}>
            <Link
              className={StyleClass.link}
              activeClassName={StyleClass.active}
              to="/md"
            >
              MD
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
