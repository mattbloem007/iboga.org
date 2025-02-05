import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = ({footer}) =>
(
  <footer>
        <div class="margin-left-width">
            <div></div>
        </div>
        <div class="max-width">
            <div class="flex">
                <div class="footer-left-col">
                <a href="/">
                    <div class="footer-logo">
                      {footer ?  <h5> {footer.frontmatter.title}</h5> : <h5>Iboga.org..</h5>}
                    </div>
                </a>
                    {footer ? <p class="p-small" dangerouslySetInnerHTML={{__html: footer.frontmatter.description}} />: <p></p>}
                </div>
                <div class="footer-right-col">

                    <div class="footer-link-col">
                        <h6>Useful Links</h6>
                        <ul>
                        {
                          footer.frontmatter.useful_links.map(link => {
                            return(
                            <li><a href={link.slug}>{link.title}</a></li>
                          )
                          })
                        }
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>About</h6>
                        <ul>
                            {
                              footer.frontmatter.about_links.map(link => {
                                return(
                                <li><a href={link.slug}>{link.title}</a></li>
                              )
                              })
                            }
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>Media</h6>
                        <ul>
                            {
                              footer.frontmatter.media_links.map(link => {
                                return(
                                <li><a href={link.slug}>{link.title}</a></li>
                              )
                              })
                            }
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>Legal</h6>
                        <ul>
                            {
                              footer.frontmatter.legal_links.map(link => {
                                return(
                                <li><a href={link.slug}>{link.title}</a></li>
                              )
                              })
                            }
                        </ul>
                    </div>

                    <div class="footer-link-col">
                        <h6>Contact</h6>
                        <ul>
                            {
                              footer.frontmatter.contact_links.map(link => {
                                return(
                                <li><a href={link.slug}>{link.title}</a></li>
                              )
                              })
                            }
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
