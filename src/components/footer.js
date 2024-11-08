import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer>
        <div class="margin-left-width">
            <div></div>
        </div>
        <div class="max-width">
            <div class="flex">
                <div class="footer-left-col">
                    <div class="footer-logo">
                        <h5>Iboga.org</h5>
                    </div>
                </div>
                <div class="footer-right-col">

                    <div class="footer-link-col">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href="/">Directory</a></li>
                            <li><a href="/library">Library</a></li>
                            <li><a href="/education">Education</a></li>
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>About</h6>
                        <ul>
                            <li><a href="/about">About Iboga.org</a></li>
                            <li><a href="">What is iboga</a></li>
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>Media</h6>
                        <ul>
                            <li><a href="">Research</a></li>
                            <li><a href="">Podcast</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>Legal</h6>
                        <ul>
                            <li><a href="">Terms &amp; Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>Contact</h6>
                        <ul>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="">Newsletter</a></li>
                            <li><a href="">Donate</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="rights-reserved">
            Iboga.org | All Rights Reserved
        </div>
    </footer>
)

export default Footer
