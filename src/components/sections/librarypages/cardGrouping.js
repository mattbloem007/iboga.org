import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'
import arrowWhite from '../../../assets/vectors/arrow-next-white.svg'


const CardGrouping = ({cards}) => {

  const slugify = str =>
  str
    .trim()
    .replace(/["]+/g, '')
    .replace(/\s+/g, '-');

  return (
    <section class="media-grid" style={{height: "990px"}}>  {/** temporary height */}
        <div class="max-width">
            <div class="grid-container">
            {cards && cards.edges.map((card) => {
              if (card.node.frontmatter.postType == "Blog Post") {
                if (card.node.frontmatter.featuredImage) {
                  return (
                    <a href={`/library${card.node.frontmatter.slug}`} className="card-holder article-card" tabindex="0">
                      <div className="thumbnail">
                        <GatsbyImage
                          style={{width: "100%", height: "100%"}}
                          image={card.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                          alt={card.node.frontmatter.title + " - Featured image"}
                        />
                      </div>
                        <div className="article-card-inner">
                            <h4>{card.node.frontmatter.title}</h4>
                            <p className="p-small">{card.node.frontmatter.description}</p>
                        </div>
                        <div className="article-button-container">
                            <div className="article-button">Read More Stories</div>
                            <div className="article-icon">
                                <img className="icon arrow-icon" src={arrow}></img>
                            </div>
                        </div>
                    </a>
                  )
                }
                else {
                  return (
                    <a href={`/library${card.node.frontmatter.slug}`} className="card-holder article-card-v2" tabindex="-1">
                        <div className="article-card-inner">
                            <h4>{card.node.frontmatter.title}</h4>
                            <p className="p-small">{card.node.frontmatter.description}</p>
                        </div>
                        <div className="article-button-container">
                            <div className="article-button">Read More Stories</div>
                            <div className="article-icon">
                                <img className="icon arrow-icon" src={arrowWhite}></img>
                            </div>
                        </div>
                    </a>
                  )
                }
              }
              else if (card.node.frontmatter.postType == "Audio") {
                return (
                  <div className="card-holder article-audio-card">
                      <div className="article-audio">
                          <iframe style={{borderRadius: "12px"}} src={card.node.frontmatter.audio} width="100%" height="250px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <h5>{card.node.frontmatter.title}</h5>
                      <a href={`/library${card.node.frontmatter.slug}`} className="podcast-link" tabindex="-1">View Podcast</a>
                      </div>
                  </div>
                )
              }
              else if (card.node.frontmatter.postType == "Video") {
                return(
                  <a href={`/library${card.node.frontmatter.slug}`} className="card-holder article-video-card" tabindex="-1">
                      <div className="thumbnail">
                          <iframe style={{maxWidth: "100%", width: "100%", height: "250px"}} src={card.node.frontmatter.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <div className="article-card-inner">
                          <h5>{card.node.frontmatter.title}</h5>
                          <p className="p-small">
                              {card.node.frontmatter.description}
                          </p>
                      </div>
                  </a>
                )
              }
            })}
            </div>
        </div>
    </section>
  )
}

export default CardGrouping
