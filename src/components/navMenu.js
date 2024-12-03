import React from "react"

const NavMenu = ({scroll, page}) => (
  <div className="nav-bottom-row">
    <div className="max-width">
      {!scroll ? <ul className="nav-links">
        <li>
          <a href="/" class={page == "home" ? "active-page" : ''}>Home</a>
        </li>
        <li>
          <a href="/about" class={page == "about" ? "active-page" : ''}>About</a>
        </li>
        <li>
          <a href="/directory" class={page == "directory" ? "active-page" : ''}>Directory</a>
        </li>
        <li>
          <a href="/library" class={page == "library" ? "active-page" : ''}>Library</a>
        </li>
        <li>
          <a href="/discussion" class={page == "discussion" ? "active-page" : ''}>Discussion</a>
        </li>
        <li>
          <a href="/contact" class={page == "contact" ? "active-page" : ''}>Contact Us</a>
        </li>
      </ul>
      :
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/directory">Directory</a></li>
        <li><a href="/library">Library</a></li>
        <li><a href="/discussion">Discussion</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    }
    </div>
  </div>

)

export default NavMenu
