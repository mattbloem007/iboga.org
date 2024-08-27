import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./logo"
import NavMenu from './navMenu'
import MenuButtons from './menuButtons'
import Scrollspy from 'react-scrollspy';
import LanguagePicker from './LanguagePicker'
import SearchNavBar from './SearchNavBar'


const query = graphql`
  query NavBarQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const NavBar = () => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
      window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
      })
  }, [])

  return (
    !scroll ?
      <div className="navigation">
        <div className="nav-top-row">
          <div className="max-width">
            <div className="flex nav-top-row-flex">
              <Logo title={siteTitle} />
              <MenuButtons scroll={scroll} />
            </div>
          </div>
        </div>
        <div class="margin-left-width">
            <div class="line"></div>
        </div>
        <NavMenu scroll={scroll} />
        <div class="margin-left-width">
            <div class="line"></div>
        </div>
      </div>
      :
      <div className="scrolling-navigation active">
        <div className="max-width-scroll">
          <div className="flex">
            <Logo title={siteTitle} />
            <div className="scroll-nav-content">
              <NavMenu scroll={scroll} />
              <SearchNavBar />
            </div>
            <LanguagePicker />
          </div>
        </div>
      </div>
  );
};


export default NavBar;
