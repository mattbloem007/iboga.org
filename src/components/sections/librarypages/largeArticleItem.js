import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'

const LargeArticleItem = ({post}) => {

  const slugify = str =>
  str
    .trim()
    .replace("|", 'or')
    .replace(/[,]+/g, '')
    .replace(/\s+/g, '-');


  if (post) {
    const {postType} = post.node.frontmatter
    if (postType == "Blog Post") {
      return (
        <div class="main-media">
            <a href={`/library${post.node.frontmatter.slug}`} class="large-article">
            {
            post.node.frontmatter.featuredImage &&
            <div class="large-article-img-holder">
              <img
              style={{width: "100%", maxHeight: "100%"}}
              src={post.node.frontmatter.featuredImage.publicURL}
              alt={post.node.frontmatter.title + " - Featured image"}/>
            </div>
            }
                <h3>{post.node.frontmatter.title}</h3>
                <p className="p-small">
                    {post.node.frontmatter.description}
                </p>
                {/**<div class="article-button-container">
                    <div class="article-button">Read More Stories</div>
                    <div class="article-icon">
                        <img className="icon arrow-icon" src={arrow}></img>
                    </div>
                </div>*/}
            </a>
        </div>
      )
    }
    else if (postType == "Audio") {
      return (
        <div class="main-media">
            <a href={`/library${post.node.frontmatter.slug}`} class="large-article">
              <div class="large-article-img-holder">
                <iframe style={{borderRadius: "12px"}} src={post.node.frontmatter.audio} width="100%" height="250px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
                <h3>{post.node.frontmatter.title}</h3>
                <p className="p-small">
                    {post.node.frontmatter.description}
                </p>
                {/**<div class="article-button-container">
                    <div class="article-button">Read More Stories</div>
                    <div class="article-icon">
                        <img className="icon arrow-icon" src={arrow}></img>
                    </div>
                </div>*/}
            </a>
        </div>
      )
    }
    else if (postType == "Video") {
      return (
        <div class="main-media">
            <a href={`/library${post.node.frontmatter.slug}`} class="large-article">
              <div class="large-article-img-holder">
                <iframe style={{maxWidth: "100%", width: "100%", height: "100%"}} src={post.node.frontmatter.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
                <h3>{post.node.frontmatter.title}</h3>
                <p className="p-small">
                    {post.node.frontmatter.description}
                </p>
                {/**<div class="article-button-container">
                    <div class="article-button">Read More Stories</div>
                    <div class="article-icon">
                        <img className="icon arrow-icon" src={arrow}></img>
                    </div>
                </div>*/}
            </a>
        </div>
      )
    }
  }
  else {
    return(<div></div>)
  }
}

export default LargeArticleItem
