import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import BackArrow from '../assets/vectors/black-back-arrow.svg'

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
  query ArticleQuery($template: String!, $title: String!) {
    markdownRemark(frontmatter: {title: {eq: $title}, template: {eq: $template}}) {
      rawMarkdownBody
      frontmatter {
        title
        description
        slug
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
const ArticlePage = ({ data }) => {

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="Article">
      <div class="article-headline">
          <div class="max-width">
              <a href="/library"><img class="icon arrow-icon" src={BackArrow}></img>Back To Library</a>
              <h1>{frontmatter.title}</h1>
              <p>
                  {frontmatter.description}
              </p>
          </div>
          <div class="margin-left-width">
          {frontmatter.featuredImage &&
            <GatsbyImage
            style={{width: "100%", height: "100%"}}
              image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              alt={frontmatter.title + " - Featured image"}
            />
          }
          </div>
      </div>
      <div class="article-content">
          <div class="max-width" dangerouslySetInnerHTML={{__html: data.rawMarkdownBody}}>
          </div>
      </div>
      <NewsletterSection title="Join our Newsletter to receive important updates" newsletter_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."/>
    </Layout>
  )
}

export default ArticlePage
