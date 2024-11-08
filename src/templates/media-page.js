import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import MediaGrouping from '../components/sections/librarypages/mediaGrouping'
import NewsletterSection from '../components/sections/newsletterSection'
import SliderSection from '../components/sections/homepage/sliderSection'


export const pageQuery = graphql`
  query MediaQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        media_banner {
          title
          excerpt
        }

        media_section2 {
          slider1_title
          slider1_info
        }

        media_section3 {
          slider2_title
          slider2_info
        }

        media_section4 {
          title
          excerpt
        }
      }
    }

    posts:  allMarkdownRemark(
       filter: {frontmatter: {tags: {eq: "Library Books, Films, and More"}, template: {eq: "blog-post"}}}
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
               childImageSharp {
                 gatsbyImageData
               }
             }
           }
         }
       }
     }



    journalPosts:  allMarkdownRemark(
       filter: {frontmatter: {tags: {eq: "Library Journal Articles"}, template: {eq: "blog-post"}}}
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
         }
     }

  }
`
const MediaPage = ({ data }) => {
  const { markdownRemark, posts, journalPosts, footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="library" footer={footer}>
      <Header data={frontmatter.media_banner} />
      <MediaGrouping posts={posts} />
      <SliderSection title={frontmatter.media_section2.slider1_title} info={frontmatter.media_section2.slider1_info} posts={journalPosts} />
      <SliderSection title={frontmatter.media_section3.slider2_title} info={frontmatter.media_section3.slider2_info} posts={posts} />
      <NewsletterSection title={frontmatter.media_section4.title} newsletter_title={frontmatter.media_section4.excerpt}/>
    </Layout>
  )
}

export default MediaPage

// journalCards: allMarkdownRemark(
//  filter: {frontmatter: {tags: {eq: "Journal Articles"}, template: {eq: "slider-card"}}}
// ) {
//  edges {
//    node {
//      frontmatter {
//        title
//        description
//        tags
//        slug
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

// cards: allMarkdownRemark(
//  filter: {frontmatter: {tags: {eq: "Books, Films, and More"}, template: {eq: "slider-card"}}}
// ) {
//  edges {
//    node {
//      frontmatter {
//        title
//        description
//        tags
//        slug
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
