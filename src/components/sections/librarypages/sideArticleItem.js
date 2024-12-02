import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'

const SideArticleItem = ({post}) => {
  const {postType} = post.node.frontmatter

  const slugify = str =>
  str
    .trim()
    .replace("|", 'or')
    .replace(/[,]+/g, '')
    .replace(/\s+/g, '-');

  if (postType == "Blog Post") {
    return (
      <a href={`/library${post.node.frontmatter.slug}`} class="article-video-card">
      {
      post.node.frontmatter.featuredImage &&
        <GatsbyImage
        style={{width: "100%"}}
        image={post.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
        alt={post.node.frontmatter.title + " - Featured image"}/>
      }
          <h3>{post.node.frontmatter.title}</h3>
          <p className="p-small">
              {post.node.frontmatter.description}
          </p>
          <div class="article-button-container">
              <div class="article-button">Read More Stories</div>
              <div class="article-icon">
                  <img className="icon arrow-icon" src={arrow}></img>
              </div>
          </div>
      </a>
    )
  }
  else if (postType == "Audio") {
    return (
      <div class="article-audio-card">
          <div class="article-audio">
            <iframe style={{borderRadius: "12px"}} src={post.node.frontmatter.audio} width="100%" height="250px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <h5>{post.node.frontmatter.title}</h5>
            <a href={`/library${post.node.frontmatter.slug}`} className="podcast-link" tabindex="-1">View Podcast</a>
          </div>
      </div>
    )
  }
  else if (postType == "Video") {
    return (
      <a href={`/library${post.node.frontmatter.slug}`} class="article-video-card">
          <div class="thumbnail">
            <iframe style={{maxWidth: "100%", width: "100%", height: "250px"}} src={post.node.frontmatter.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div class="article-card-inner">
              <h5>{post.node.frontmatter.title}</h5>
              <p class="p-small">
                  {post.node.frontmatter.description}
              </p>
          </div>
      </a>
    )
  }
}

export default SideArticleItem
