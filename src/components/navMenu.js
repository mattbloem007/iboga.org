import React from "react"

const NavMenu = ({scroll}) => (
  <div className="nav-bottom-row">
    <div className="max-width">
      {!scroll ? <ul className="nav-links">
        <li>
          <a href="" class="active-page">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Directory</a>
        </li>
        <li>
          <a href="">Library</a>
        </li>
        <li>
          <a href="">Education</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      :
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Directory</a></li>
        <li><a href="">Library</a></li>
        <li><a href="">Education</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
    }
    </div>
  </div>

)

export default NavMenu
