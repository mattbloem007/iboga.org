import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import ShareWithUs from '../components/sections/educationpage/shareWithUs'
import MediaGrouping from '../components/sections/librarypages/mediaGrouping'
import TextCards from '../components/sections/textCards'
import NewsletterSection from '../components/sections/newsletterSection'
import SliderSection from '../components/sections/homepage/sliderSection'


export const pageQuery = graphql`
  query EducationQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        education_banner {
          title
          excerpt
        }

        education_section1 {
          title
          paragraph
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }

        education_section2 {
          slider1_title
          slider1_info
        }

        education_section3 {
          title
          excerpt
        }

        education_section4 {
          title
          excerpt
        }
      }
    }

    posts:  allMarkdownRemark(
       filter: {frontmatter: {tags: {eq: "Discussion Stories and Conversations"}, template: {eq: "blog-post"}}}
     ) {
       edges {
         node {
           rawMarkdownBody
           html
           frontmatter {
             title
             postType
             video
             description
             tags
             slug
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
const EducationPage = ({ data }) => {
  const { markdownRemark, posts,  footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="discussion" footer={footer}>
      <Header data={frontmatter.education_banner} />
      <ShareWithUs data={frontmatter.education_section1} />
      <MediaGrouping posts={posts} />
      <SliderSection title={frontmatter.education_section2.slider1_title} info={frontmatter.education_section2.slider1_info} posts={posts} />
      <TextCards data={frontmatter.education_section3} />
      <NewsletterSection title={frontmatter.education_section4.title} newsletter_title={frontmatter.education_section4.excerpt}/>
    </Layout>
  )
}

export default EducationPage
