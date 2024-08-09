import React from "react"
import SearchIcon from "../assets/vectors/SearchIcon_x2.svg"

const SearchNavBar = () => {

  return (
      <form action="" class="site-search">
          <input type="text" placeholder="Search" />
              <div class="search-icon-holder">
                <img className="icon search-icon" src={SearchIcon} />
              </div>
      </form>
  )
}

export default SearchNavBar
