import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import TitleAndInfo from '../components/sections/titleAndInfo'
import SliderTeam from '../components/sections/aboutpage/sliderTeam'
import OurApproach from '../components/sections/aboutpage/ourApproachCards'
import OurStory from '../components/sections/aboutpage/ourStory'
import TextCards from '../components/sections/textCards'
import NewsletterSection from '../components/sections/newsletterSection'


export const pageQuery = graphql`
  query AboutQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        about_banner {
          title
          excerpt
          header_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }

        about_section1 {
          title
          paragraph
          cta {
            btn
          }
        }

        about_section2 {
          title
          excerpt
        }

        about_section3 {
          title
          excerpt
        }

        about_section4 {
          title
          subtitle
          paragraph
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }

        about_section5 {
          title
          excerpt
        }

        about_section6 {
          title
          excerpt
        }
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="about">
      {/**<Seo title={frontmatter.about_section1.title} description={frontmatter.about_section1.paragraph} />
      <Header data={frontmatter.about_header_slides}/>
      <TitleAndInfo title={frontmatter.about_section1.title} info={frontmatter.about_section1.paragraph} cta={frontmatter.about_section1.cta} />*/}
      <Header data={frontmatter.about_banner} />
      <TitleAndInfo title={frontmatter.about_section1.title} info={frontmatter.about_section1.paragraph} cta={frontmatter.about_section1.cta} />
      <SliderTeam data={frontmatter.about_section2} />
      <OurApproach data={frontmatter.about_section3} />
      <OurStory data={frontmatter.about_section4} />
      <TextCards data={frontmatter.about_section5} />
      <NewsletterSection title={frontmatter.about_section6.title} newsletter_title={frontmatter.about_section6.excerpt}/>
    </Layout>
  )
}

export default AboutPage
