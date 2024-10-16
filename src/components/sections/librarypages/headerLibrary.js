import React from "react"
import {useStaticQuery, graphql} from 'gatsby';
import BackArrow from '../../../assets/vectors/back-arrow.svg'
import SearchIcon from "../../../assets/vectors/SearchIcon_x2.svg"

const HeaderLibrary = ({ children, page, data }) => {

  const HeaderData = data
    return (
      <section class="page-banner media-grid-banner">
          <div class="max-width">
            <a href=""><img src={BackArrow} class="icon arrow-icon"></img>Back To Library</a>
              <h1 dangerouslySetInnerHTML={{ __html: HeaderData.title }}></h1>
              <p>{HeaderData.excerpt}</p>
              <form action="" class="content-search">
                  <input type="text" placeholder="Search Media..." />
                  <button>
                      <img className="icon search-icon" src={SearchIcon} />
                  </button>
              </form>
          </div>
      </section>
    )


}

export default HeaderLibrary
