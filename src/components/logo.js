import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <Link to="/">
    <div className="logo">
      <span className="site-title">
        {props.title}
      </span>
    </div>
  </Link>
)

export default Logo
