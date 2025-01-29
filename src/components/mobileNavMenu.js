import React, { useState, useEffect } from "react";
import Burger from '../assets/vectors/burger-menu.svg'
import Close from '../assets/vectors/close-burger.svg'
import Search from '../assets/vectors/SearchIcon_x2.svg'
import MoneyIcon from "../assets/vectors/bitcoin.svg"
import DirectoryIcon from "../assets/vectors/ApplyToDirectoryIcon_x2.svg"
import ChevronIcon from "../assets/vectors/Vector6_x2.svg"


const MobileNavMenu = ({scroll}) => {

  useEffect(() => {
      window.addEventListener("scroll", () => {
        const mobileNav = document.querySelector('.mobile-navigation');
        //const nav = document.querySelector('.scrolling-navigation');
        const mainNav = document.querySelector('.navigation');
          if (window.scrollY > 50) {
              mobileNav.classList.add('scrolling');
          } else {
              mobileNav.classList.remove('scrolling');
          }

          // if (window.scrollY > 1) {
          //     nav.classList.add('active');
          //     mainNav.classList.add('hidden');
          // } else {
          //     nav.classList.remove('active');
          //     mainNav.classList.remove('hidden');
          // }
      })
  }, [])

  const toggleMenu = () => {
    const navLinks = document.querySelector('.mobile-nav-links');
    const burgerIcon = document.querySelector('.burger-menu img');
    navLinks.classList.toggle('opened');
    if (navLinks.classList.contains('opened')) {
        burgerIcon.src = Close;
    } else {
        burgerIcon.src = Burger;
    }
  }

  const toggleLinks = () => {
    const navLinks = document.querySelector('.mobile-nav-links');
    const burgerIcon = document.querySelector('.burger-menu img');
    navLinks.classList.remove('opened');
    burgerIcon.src = Burger;
  }

return (
    <nav class="mobile-navigation">
        <div class="max-width">
            <div class="flex nav-bg">
                <div class="logo"><h5>Iboga.org</h5></div>
                <div class="mobile-nav-right-col">
                    {/**<button>
                        <img class="icon search-icon" src={Search}></img>
                    </button>*/}
                    <div class="burger-menu" onClick={() => toggleMenu()}>
                        <img src={Burger} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <hr/>

        <div class="max-width">
            <div class="mobile-nav-links">
                <ul>
                    <li><a href="/" onClick={() => toggleLinks()}>Home</a></li>
                    <li><a href="/about" onClick={() => toggleLinks()}>About</a></li>
                    <li><a href="/directory" onClick={() => toggleLinks()}>Directory</a></li>
                    <li><a href="/library" onClick={() => toggleLinks()}>Library</a></li>
                    <li><a href="/discussion" onClick={() => toggleLinks()}>Discussion</a></li>
                    <li><a href="/contact" onClick={() => toggleLinks()}>Contact Us</a></li>
                </ul>
                <div class="important-links">
                    <a href="/donate" class="button-secondary">Donate <img class="icon money-icon" src={MoneyIcon}></img></a>
                    <div class="flex">
                        <a href="/directory" class="button-primary">Apply to Directory <img class="icon apply-icon" style={{height: "18px"}} src={DirectoryIcon}></img></a>
                        {/**<div class="language-picker">
                            <div class="visible-choice" data-language-code="EN">
                                EN <img class="icon chevron-icon" src={ChevronIcon}></img>
                            </div>
                            <ul>
                                <li>English <span class="language-code">(EN)</span></li>
                                <li>French<span class="language-code">(FR)</span></li>
                            </ul>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MobileNavMenu
