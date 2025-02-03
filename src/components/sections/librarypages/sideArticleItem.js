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
      <a href={`/library${post.node.frontmatter.slug}`} class="article-card">
      {
      post.node.frontmatter.featuredImage &&
        <div class="media-img-container">
          <img
          style={{width: "100%"}}
          image={post.node.frontmatter.featuredImage.publicURL}
          alt={post.node.frontmatter.title + " - Featured image"}/>
        </div>
      }
          <div class="article-card-inner">
            <h4>{post.node.frontmatter.title}</h4>
          </div>
          {/**<p className="p-small">
              {post.node.frontmatter.description}
          </p>
          <div class="article-button-container">
              <div class="article-button">Read More Stories</div>
              <div class="article-icon">
                  <img className="icon arrow-icon" src={arrow}></img>
              </div>
          </div>*/}
      </a>
    )
  }
  else if (postType == "Audio") {
    return (
      <div class="article-card">
          <div class="article-audio">
            <div class="media-img-container">
              <iframe style={{borderRadius: "12px"}} src={post.node.frontmatter.audio} width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div class="article-card-inner">
              <h5>{post.node.frontmatter.title}</h5>
            </div>
            <a href={`/library${post.node.frontmatter.slug}`} className="podcast-link" tabindex="-1">View Podcast</a>
          </div>
      </div>
    )
  }
  else if (postType == "Video") {
    return (
      <a href={`/library${post.node.frontmatter.slug}`} class="article-card">
          <div class="media-img-container">
            <iframe style={{maxWidth: "100%", width: "100%", height: "100%"}} src={post.node.frontmatter.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div class="article-card-inner">
              <h5>{post.node.frontmatter.title}</h5>
              {/**<p class="p-small">
                  {post.node.frontmatter.description}
              </p>*/}
          </div>
      </a>
    )
  }
}

export default SideArticleItem
