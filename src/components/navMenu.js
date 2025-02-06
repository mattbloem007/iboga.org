import React from "react"
import { Link } from "gatsby"

const NavMenu = ({scroll, page}) => (
  <div className="nav-bottom-row">
    <div className="max-width">
      {!scroll ? <ul className="nav-links">
        <li>
          <Link to="/" class={page == "home" ? "active-page" : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" class={page == "about" ? "active-page" : ''}>About</Link>
        </li>
        <li>
          <Link to="/directory" class={page == "directory" ? "active-page" : ''}>Directory</Link>
        </li>
        <li>
          <Link to="/library" class={page == "library" ? "active-page" : ''}>Library</Link>
        </li>
        <li>
          <Link to="/discussion" class={page == "discussion" ? "active-page" : ''}>Discussion</Link>
        </li>
        <li>
          <Link to="/contact" class={page == "contact" ? "active-page" : ''}>Contact</Link>
        </li>
      </ul>
      :
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/directory">Directory</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/discussion">Discussion</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    }
    </div>
  </div>

)

export default NavMenu
