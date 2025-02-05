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
          header_image {
            childImageSharp {
              gatsbyImageData
            }
            publicURL
          }
        }

        education_section1 {
          title
          paragraph
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          cta {
            btn_text
            btn_type
            btn_link
          }
        }

        education_section2 {
          slider1_title
          slider1_info
        }

        education_section3 {
          title
          excerpt
          cta {
            btn_text
            btn_type
            btn_link
          }
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
               publicURL
               childImageSharp {
                 gatsbyImageData
               }
             }
           }
         }
       }
     }

     otherMediaPosts: allMarkdownRemark(
       filter: {frontmatter: {tags: {eq: "Discussion Stories and Conversations"}, postType: {regex: "/(Video|Audio)/"}, template: {eq: "blog-post"}}},
       limit: 2,
       sort: {frontmatter: {date: DESC}}
     ) {
       edges {
         node {
           rawMarkdownBody
           html
           frontmatter {
             title
             description
             tags
             slug
             postType
             video
             audio
             featuredImage {
               publicURL
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
  const { markdownRemark, posts, otherMediaPosts, footer } = data
  const { frontmatter } = markdownRemark

  const latestPost = posts.edges[0];
  const shuffledPosts = posts.edges.sort(() => 0.5 - Math.random());
  let selectedPosts = shuffledPosts.slice(0, 6);

  selectedPosts.unshift(latestPost)

  selectedPosts = selectedPosts.filter((value, index, self) =>
    index === self.findIndex((t) => {
      return (
        t.node.frontmatter.title === value.node.frontmatter.title
      )
    }
    )
  )

  return (
    <Layout className="page" page="discussion" footer={footer}>
      <Header data={frontmatter.education_banner} sizing={false} />
      <ShareWithUs data={frontmatter.education_section1} buttonLinks={frontmatter.education}/>
      <MediaGrouping posts={posts} otherMediaPosts={otherMediaPosts}/>
      <SliderSection
                  title={frontmatter.education_section2.slider1_title}
                  info={frontmatter.education_section2.slider1_info}
                  posts={selectedPosts}
                  />
      <TextCards data={frontmatter.education_section3} cta={frontmatter.education_section3.cta}/>
      <NewsletterSection title={frontmatter.education_section4.title} newsletter_title={frontmatter.education_section4.excerpt}/>
    </Layout>
  )
}

export default EducationPage
