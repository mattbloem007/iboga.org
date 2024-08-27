import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import TitleAndInfo from '../components/sections/titleAndInfo'

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        about_header_slides {
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
            btn_link
            btn_text
            btn_type
          }
        }

        about_section2 {
          title
          excerpt
          team_image {
            childImageSharp {
              gatsbyImageData
            }
          }
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
    <Layout className="page">
      <Seo title={frontmatter.about_section1.title} description={frontmatter.about_section1.paragraph} />
      <Header data={frontmatter.about_header_slides}/>
      <TitleAndInfo title={frontmatter.about_section1.title} info={frontmatter.about_section1.paragraph} cta={frontmatter.about_section1.cta} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default AboutPage
