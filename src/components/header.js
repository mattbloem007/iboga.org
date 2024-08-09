/** @jsx jsx */
import { jsx } from "theme-ui"
import {useStaticQuery, graphql} from 'gatsby';
import Slider from "react-slick";
import ButtonArrow from '../assets/vectors/arrow-icon.svg'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const Header = ({ children, page }) => {

  var settings = {
    draggable: true,
    arrows: false,
    infinite: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const headerQuery = useStaticQuery(graphql`
    query headerQuery {
        markdownRemark(frontmatter: {template: {eq: "index-page"}}) {
          frontmatter {
            header_slides {
              title
              excerpt
              header_image {
                childImageSharp {
                  gatsbyImageData
                }
                publicURL
              }
              cta {
                ctaType
                ctaText
                ctaLink
              }
            }
          }
        }
      }
  `);

  const HeaderData = headerQuery.markdownRemark.frontmatter.header_slides
  const headerImage = HeaderData.header_image
  let image, backgroundImage;

  return (
    <Slider className="hero-slider-container" {...settings}>
    {
      HeaderData && HeaderData.map(headerSlide => {
        image = getImage(headerSlide.header_image)
        backgroundImage= convertToBgImage(image)
        return (
          <BackgroundImage
             Tag="section"
             {...backgroundImage}
             preserveStackingContext
           >
          <section class="hero-holder hero-section hero-content-slide">
              <div class="hero-content">
                <div class="hero-slide">
                  <div class="max-width">
                    <div class="hero-text">
                      <h1 dangerouslySetInnerHTML={{ __html: headerSlide.title }}></h1>
                      <p>
                          {headerSlide.excerpt}
                      </p>
                      <a href="" class="hero-button" tabindex="-1">{headerSlide.cta.ctaText} <img className="icon arrow-icon" src={ButtonArrow}></img></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </BackgroundImage>
        )
      })
    }
      {/**<section class="hero-holder hero-section hero-content-slide-1">
          <div class="hero-content">
            <div class="hero-slide">
              <div class="max-width">
                <div class="hero-text">
                  <h1><strong class="heading-bold">Find</strong> resources</h1>
                  <p>
                      Learn about the Holy Wood from Traditional Animist, Biomedical and Scientific viewpoints
                  </p>
                  <a href="" class="hero-button" tabindex="-1">Read Essays by Practitioners <img className="icon arrow-icon" src={ButtonArrow}></img></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="hero-holder hero-section hero-content-slide-2">
          <div class="hero-content">
            <div class="hero-slide">
              <div class="max-width">
                <div class="hero-text">
                  <h1><strong class="heading-bold">Learn about</strong> using Iboga</h1>
                  <p>
                      Gain insights from experienced modern and traditional practitioners
                  </p>
                  <a href="" class="hero-button hero-slide-2-btn" tabindex="-1">Read Accounts of Iboga use Guides <img className="icon arrow-icon" src={ButtonArrow}></img></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="hero-holder hero-section hero-content-slide-3">
          <div class="hero-content">
            <div class="hero-slide">
              <div class="max-width">
                <div class="hero-text">
                  <h1><strong class="heading-bold">Find</strong> resources</h1>
                  <p>
                      Learn about the Holy Wood from Traditional Animist, Biomedical and Scientific viewpoints
                  </p>
                  <a href="" class="hero-button" tabindex="-1">Read Essays by Practitioners <img className="icon arrow-icon" src={ButtonArrow}></img></a>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
    </Slider>
  )
  // return (
  //   headerImage ?
  //     <header
  //     className="site-header"
  //     sx={{
  //         backgroundImage: `url(${headerImage.publicURL})`
  //     }}
  //   >
  //     {children}
  //     <div className="header-text-container">
  //       <div className="header-title">
  //         {HeaderData.title}
  //       </div>
  //       <div className="header-excerpt">
  //         {HeaderData.excerpt}
  //       </div>
  //       <button className="orange-btn btn-text">
  //         {HeaderData.cta.ctaText}
  //       </button>
  //     </div>
  //   </header>
  //   :
  //   <header
  //   className="site-header"
  //   sx={{
  //       bg: "siteColor"
  //   }}
  // >
  //   {children}
  //   <div className="header-text-container">
  //     <div className="header-title">
  //       {HeaderData.title}
  //     </div>
  //     <div className="header-excerpt">
  //       {HeaderData.excerpt}
  //     </div>
  //     <button className="orange-btn btn-text">
  //       {HeaderData.cta.ctaText}
  //     </button>
  //   </div>
  // </header>
  // )
}

export default Header
