import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"
//import { isMobile, isTablet } from 'react-device-detect'
import Logo from "./logo"
import NavMenu from './navMenu'
import MenuButtons from './menuButtons'
import Scrollspy from 'react-scrollspy';
import LanguagePicker from './LanguagePicker'
import SearchNavBar from './SearchNavBar'
import MobileNavMenu from './mobileNavMenu'


const query = graphql`
  query NavBarQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const NavBar = ({page}) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  console.log("PAGE", page)
  const [isMobile, setIsMobile] = useState(false)

  let greenNav = false
  if (page == "Article") {
    greenNav = true
  }
  console.log("greenNav", greenNav)
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
      handleResize();
      window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
      })
      window.addEventListener("resize", handleResize)
  }, [])

  // useEffect(() => {
  //   handleResize();
  // }, [])

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else if (window.innerWidth >= 720 && window.innerWidth <= 1192){
        setIsMobile(true)
    }
    else {
      setIsMobile(false)
    }
  }

  if (isMobile) {
    console.log("IN MOBILE")
    return (
      <MobileNavMenu scroll={scroll}/>
    )
  }
  else {
    return (
      !scroll ?
        <nav className={greenNav ? 'navigation navigation-bg-color' : 'navigation'}>
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
          <NavMenu scroll={scroll} page={page}/>
          <div class="margin-left-width">
              <div class="line"></div>
          </div>
        </nav>
        :
        <div className="scrolling-navigation active">
          <div className="max-width-scroll">
            <div className="flex">
              <Logo title={siteTitle} />
              <div className="scroll-nav-content">
                <NavMenu scroll={scroll} page={page}/>
              </div>
              {/**<LanguagePicker />*/}
            </div>
          </div>
        </div>
    );
  }
};


export default NavBar;
