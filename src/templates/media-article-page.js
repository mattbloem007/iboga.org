import React from "react"
import { graphql, Link } from "gatsby"
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
      html
      frontmatter {
        title
        description
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
`
const ArticlePage = ({ data }) => {

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  let feature;

  console.log ("DAATA", data)

  if (frontmatter.postType == "Video") {
    feature = (<div class="margin-left-width" style={{marginRight: "20%"}}>
                <iframe style={{width: "100%", height: "100%"}} src={frontmatter.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>)
  }
  else if (frontmatter.postType == "Audio") {
    feature = (<div class="margin-left-width" style={{marginRight: "20%"}}>
                <iframe style={{borderRadius: "12px"}} src={frontmatter.audio} width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>)
  }
  else if (frontmatter.postType == "Blog Post" && frontmatter.featuredImage){
    feature = ( <div class="margin-left-width" style={{marginRight: "20%"}}>
                  <GatsbyImage
                  style={{width: "100%", height: "100%"}}
                  image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                  alt={frontmatter.title + " - Featured image"}
                  />
                </div>
              )
  }
  else if (frontmatter.postType == "Blog Post" && !frontmatter.featuredImage){
    feature = (<div></div>)
  }

  return (
    <Layout className="page" page="Article">
      <div class="article-headline">
          <div class="max-width">
              <Link to={'..'}><img class="icon arrow-icon" src={BackArrow}></img>Back To Library</Link>
              <h1>{frontmatter.title}</h1>
              <p>
                  {frontmatter.description}
              </p>
          </div>
            {feature}
      </div>
      <div class="article-content">
          <div class="max-width" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
          </div>
      </div>
      <NewsletterSection title="Join our Newsletter to receive important updates" newsletter_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."/>
    </Layout>
  )
}

export default ArticlePage
