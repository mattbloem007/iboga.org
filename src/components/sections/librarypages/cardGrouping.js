import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'


const CardGrouping = ({cards}) => {

  return (
    <section class="media-grid">
        <div class="max-width">
            <div class="grid-container">
            {cards && cards.edges.map((card) => {
              if (card.node.frontmatter.card_type == "Article List") {
                return (
                  <div className="card-holder article-card-v3">
                      <div className="article-card-inner">
                          <h4>{card.node.frontmatter.title}</h4>
                          <p className="p-small">{card.node.frontmatter.description}</p>
                          <div className="multi-link-box">
                              <ul>
                              {card.node.frontmatter.resources && card.node.frontmatter.resources.map((resource) => {
                                return (
                                  <li><a href={resource.link} tabindex="-1">{resource.label} <img className="icon arrow-icon" src={arrow}></img></a></li>
                                )
                              })}
                              </ul>
                          </div>
                      </div>
                  </div>
                )
              }
              else if (card.node.frontmatter.card_type == "Audio Card") {
                return (
                  <div className="card-holder article-audio-card">
                      <div className="article-audio">
                          <iframe style={{borderRadius: "12px"}} src={card.node.frontmatter.audio} width="100%" height="250px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <h5>{card.node.frontmatter.title}</h5>
                      <a href="" className="podcast-link" tabindex="-1">View Podcast</a>
                      </div>
                  </div>
                )
              }
              else if (card.node.frontmatter.card_type == "Video Card") {
                return(
                  <a href="" className="card-holder article-video-card" tabindex="-1">
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
