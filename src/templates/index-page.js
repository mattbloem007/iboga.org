import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaTiktok, FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Header from '../components/header'
import Icons from "../util/socialmedia.json"
import TitleAndInfo from '../components/sections/titleAndInfo'
import SliderSection from '../components/sections/homepage/sliderSection'
import ImageBreak from '../components/sections/imageBreak'
import TextCards from '../components/sections/textCards'
import InfoAndImage from '../components/sections/homepage/infoAndImage'
import Donate from '../components/sections/homepage/donateSection'
import ContactSection from '../components/sections/contactSection'

export const pageQuery = graphql`
  query HomeQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      id
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

        section1 {
          section1_title
          section1_paragraph
          cta {
            btn
            btn_text
            btn_type
            btn_link
          }
        }

        slider1 {
          slider1_title
          slider1_info
          home_slider_cards1
        }

        section2 {
					image_break {
						childImageSharp{
              gatsbyImageData
						}
          }
        }

        section3 {
          about_title
          about_paragraph
          cta {
            btn
            btn_text
            btn_type
            btn_link
          }
        }

        section4 {
          title
          excerpt
          cta {
            btn
            btn_text
            btn_type
            btn_link
          }
        }

        section5 {
          title
          paragraph
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          cta {
            btn
            btn_link
            btn_type
            btn_text
          }
        }

        slider2 {
          slider2_title
          slider2_info
          home_slider_cards2
        }

        section6 {
          donate_title
          donate_info
          cta {
            btn
            btn_link
            btn_text
            btn_type
          }
        }

        section7 {
          title
          excerpt
          cta {
            btn
            btn_text
            btn_type
            btn_link
          }
        }

        section8 {
          title
          newsletter_title
          reasons_form {
            reason
          }
        }
      }
    }
  posts:  allMarkdownRemark(
     filter: {frontmatter: {template: {eq: "blog-post"}}},
     limit: 6,
     sort: {frontmatter: {date: DESC}}
   ) {
     edges {
       node {
         rawMarkdownBody
         html
         frontmatter {
           title
           slug
           postType
           video
           description
           tags
           featuredImage {
             childImageSharp {
               gatsbyImageData
             }
           }
         }
       }
     }
   }



     footer: markdownRemark(frontmatter: {template: {eq: "footer"}}) {
         frontmatter {
           title
           description
           useful_links {
             title
             slug
           }
           about_links {
             title
             slug
           }
           media_links {
             title
             slug
           }
           legal_links {
             title
             slug
           }
           contact_links {
             title
             slug
           }
         }
     }

  }
`

// researchPosts:  allMarkdownRemark(
//    filter: {frontmatter: {tags: {eq: "Research And Media"}, template: {eq: "blog-post"}}}
//  ) {
//    edges {
//      node {
//        rawMarkdownBody
//        html
//        frontmatter {
//          title
//          description
//          tags
//          featuredImage {
//            childImageSharp {
//              gatsbyImageData
//            }
//          }
//        }
//      }
//    }
//  }

const HomePage = ({ data }) => {
  const { markdownRemark, posts, footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout page="home" footer={footer}>
      <Seo />
      <Header data={frontmatter.header_slides} />
      <TitleAndInfo title={frontmatter.section1.section1_title} info={frontmatter.section1.section1_paragraph} cta={frontmatter.section1.cta}/>
      <SliderSection title={frontmatter.slider1.slider1_title} info={frontmatter.slider1.slider1_info} posts={posts} />
      <ImageBreak image={frontmatter.section2.image_break.childImageSharp.gatsbyImageData}/>
      <TitleAndInfo title={frontmatter.section3.about_title} info={frontmatter.section3.about_paragraph} cta={frontmatter.section3.cta}/>
      <TextCards data={frontmatter.section4}/>
      <InfoAndImage data={frontmatter.section5} />
      {/**<SliderSection title={frontmatter.slider2.slider2_title} info={frontmatter.slider2.slider2_info} posts={researchPosts} link='/library'/>*/}
      <TextCards data={frontmatter.section7} />
      <Donate data={frontmatter.section6}/>
      <ContactSection title={frontmatter.section8.title} newsletter_title={frontmatter.section8.newsletter_title} reasons={frontmatter.section8.reasons_form}/>
    </Layout>
  )
}

export default HomePage

// researchCards: allMarkdownRemark(
//   filter: {frontmatter: {tags: {eq: "Research And Media"}, template: {eq: "slider-card"}}}
//   ) {
//     edges {
//       node {
//         frontmatter {
//           title
//           description
//           tags
//           resources {
//             link
//             label
//           }
//           video
//           audio
//         }
//       }
//     }
//   }
// cards: allMarkdownRemark(
//  filter: {frontmatter: {tags: {eq: "Home"}, template: {eq: "slider-card"}}}
// ) {
//  edges {
//    node {
//      frontmatter {
//        title
//        description
//        tags
//        resources {
//          link
//          label
//        }
//        video
//        audio
//      }
//    }
//  }
// }
