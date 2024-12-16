import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderLibrary from '../components/sections/librarypages/headerLibrary'
import NewsletterSection from '../components/sections/newsletterSection'
import SliderSection from '../components/sections/homepage/sliderSection'
import MediaGrouping from '../components/sections/librarypages/mediaGrouping'
import CardGrouping from '../components/sections/librarypages/cardGrouping'
import ArticleGrouping from '../components/sections/librarypages/articleGrouping'
import Donate from '../components/sections/homepage/donateSection'


export const pageQuery = graphql`
  query MediaDetailQuery($template: String!, $title: String!) {
    markdownRemark(frontmatter: {title: {eq: $title}, template: {eq: $template}}) {
      frontmatter {
        title
        excerpt
        donate_title
        donate_info
        newsletter_title
        newsletter_info
      }
    }

    posts:  allMarkdownRemark(
       filter: {frontmatter: {tags: {eq: $title}, template: {eq: "blog-post"}}}
     ) {
       edges {
         node {
           rawMarkdownBody
           html
           frontmatter {
             title
             postType
             video
             audio
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
const MediaDetailPage = ({ data }) => {
  const { markdownRemark, posts, footer } = data
  const { frontmatter } = markdownRemark
  console.log("DATA", frontmatter)

  return (
    <Layout className="page" page="library" footer={footer}>
      <HeaderLibrary data={frontmatter} />
      <MediaGrouping posts={posts} />
      <CardGrouping cards={posts} />
      <ArticleGrouping />
      <Donate data={frontmatter}/>
      <NewsletterSection title={frontmatter.newsletter_title} newsletter_title={frontmatter.newsletter_info} />
    </Layout>
  )
}

export default MediaDetailPage

// cards: allMarkdownRemark(
//  filter: {frontmatter: {tags: {eq: $title}, template: {eq: "slider-card"}}}
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
