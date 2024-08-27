/** @jsx jsx */
import { jsx } from "theme-ui"
import {useStaticQuery, graphql} from 'gatsby';
import Slider from "react-slick";
import ButtonArrow from '../assets/vectors/arrow-icon.svg'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const Header = ({ children, page, data }) => {

  var settings = {
    draggable: true,
    arrows: false,
    infinite: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // const headerQuery = useStaticQuery(graphql`
  //   query headerQuery {
  //       markdownRemark(frontmatter: {template: {eq: "index-page"}}) {
  //         frontmatter {
  //           header_slides {
  //             title
  //             excerpt
  //             header_image {
  //               childImageSharp {
  //                 gatsbyImageData
  //               }
  //               publicURL
  //             }
  //             cta {
  //               ctaType
  //               ctaText
  //               ctaLink
  //             }
  //           }
  //         }
  //       }
  //     }
  // `);

  const HeaderData = data
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
    </Slider>
  )
}

export default Header
