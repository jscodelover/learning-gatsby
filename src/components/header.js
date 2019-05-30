import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
