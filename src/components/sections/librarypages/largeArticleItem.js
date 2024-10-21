import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'

const LargeArticleItem = ({post}) => {
  if (post) {
    const {postType} = post.node.frontmatter
    if (postType == "Blog Post") {
      return (
        <div class="main-media">
            <a href="" class="large-article">
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
        </div>
      )
    }
    else if (postType == "Audio") {
      return (
        <div class="main-media">
            <a href="" class="large-article">
              <iframe style={{borderRadius: "12px"}} src={post.node.frontmatter.audio} width="100%" height="250px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
        </div>
      )
    }
    else if (postType == "Video") {
      return (
        <div class="main-media">
            <a href="" class="large-article">
              <iframe style={{maxWidth: "100%", width: "100%", height: "250px"}} src={post.node.frontmatter.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        </div>
      )
    }
  }
  else {
    return(<div></div>)
  }
}

export default LargeArticleItem
