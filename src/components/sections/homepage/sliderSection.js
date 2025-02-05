import React, { useState, useRef } from "react"
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image"


import arrow from '../../../assets/vectors/arrow-next-black.svg'
import arrowWhite from '../../../assets/vectors/arrow-next-white.svg'
import blackArrow from "../../../assets/vectors/arrow-icon-black.svg"

import PlayBtn from '../../../assets/vectors/play-btn.svg'
import SkipBack from '../../../assets/vectors/skip-prev.svg'
import PrevRepeat from '../../../assets/vectors/prev-15sec.svg'
import NextRepeat from '../../../assets/vectors/next-15sec.svg'
import SkipForward from '../../../assets/vectors/skip-forward.svg'

import articleImage1 from "../../../assets/vectors/article-placeholder-images/article-1.png"
import articleImage2 from "../../../assets/vectors/article-placeholder-images/article-video.png"

import PrevSliderButton from '../../buttons/prevSliderButton'
import NextSliderButton from '../../buttons/nextSliderButton'
import WhiteButton from '../../buttons/whiteButton'

const SliderSection = ({ title, info, posts, cards, link }) => {
  const [progress, setProgress] = useState(0);

  let sliderRef = useRef(null);
  let numSlides = posts.length
  numSlides = numSlides - 1


  var settings = {
    swipe: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    afterChange: current => {
      setProgress((current / numSlides) * 100)
    }
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const slugify = str => {
  console.log("String", str)
  str
    .trim()
    .replace("|", 'or')
    .replace(/[?]+/g, '')
    .replace(/[,]+/g, '')
    .replace(/\s+/g, '-');
    console.log("String Convert", str)
  }



  return (
    <section className="media-slider">
      <div className="max-width">
        <div className="flex">
            <div className="slider-headline">
                <h5 dangerouslySetInnerHTML={{ __html: title }}></h5>
                <p>
                    {info}
                </p>
            </div>
            {
              link ?
              <a href={link} class="button-secondary">Visit Directory <img src="icon arrow-icon" src={blackArrow}></img></a>
              :
              <div></div>
              /**<WhiteButton link={`${slugify(title)}`}/>*/


            }
        </div>
      </div>
        <div className="margin-left-width">
        <Slider classNameName="published-articles-slider" {...settings} ref={slider => { sliderRef = slider; }}>
        {posts && posts.map((slider) => {
          console.log("SLider data", slider)
          if (slider.node.frontmatter.postType == "Video") {
            return (
              <a href={`/library${slider.node.frontmatter.slug}`} className="card-holder article-video-card" tabindex="-1">
                  <div className="thumbnail">
                      <iframe style={{maxWidth: "100%", width: "100%", height: "250px"}} src={slider.node.frontmatter.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="article-card-inner">
                      <h5>{slider.node.frontmatter.title}</h5>
                      <p className="p-small">
                          {slider.node.frontmatter.description}
                      </p>
                  </div>
              </a>
            )
          }

          if (slider.node.frontmatter.postType == "Audio") {
            return (
              <div className="card-holder article-audio-card">
                  <div className="article-audio">
                      <iframe style={{borderRadius: "12px"}} src={slider.node.frontmatter.audio} width="100%" height="250px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  <h5>{slider.node.frontmatter.title}</h5>
                  <a href="" className="podcast-link" tabindex="-1">View Podcast</a>
                  </div>
              </div>
            )
          }
          if (slider.node.frontmatter.featuredImage) {
            return (
              <a href={`/library${slider.node.frontmatter.slug}`} className="card-holder article-card" tabindex="0">
                  <img
                    src={slider.node.frontmatter.featuredImage.publicURL}
                    alt={slider.node.frontmatter.title + " - Featured image"}
                  />
                  <div className="article-card-inner">
                      <h5>{slider.node.frontmatter.title}</h5>
                      <p className="p-small">{slider.node.frontmatter.description}</p>
                  </div>
                  {/**<div className="article-button-container">
                      <div className="article-button">Read More Stories</div>
                      <div className="article-icon">
                          <img className="icon arrow-icon" src={arrow}></img>
                      </div>
                  </div>*/}
              </a>
            )
          }
          else {
            return (
              <a href={`/library${slider.node.frontmatter.slug}`} className="card-holder article-card-v2" tabindex="-1">
                  <div className="article-card-inner">
                      <h5>{slider.node.frontmatter.title}</h5>
                      <p className="p-small">{slider.node.frontmatter.description}</p>
                  </div>
                  {/**<div className="article-button-container">
                      <div className="article-button">Read More Stories</div>
                      <div className="article-icon">
                          <img className="icon arrow-icon" src={arrowWhite}></img>
                      </div>
                  </div>*/}
              </a>
            )
          }


          // return (
          //   slider.node.frontmatter.featuredImage ?
          //
          //   :
          //
          // )
        })}
        {cards && cards.edges.map((card) => {
          console.log("CARDS", card.node.frontmatter.audio)
          if (card.node.frontmatter.card_type == "Article List") {
            return (
              <div className="card-holder article-card-v3">
                  <div className="article-card-inner">
                      <h5>{card.node.frontmatter.title}</h5>
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

    </Slider>
        </div>
          <div className="max-width">
              <div className="slider-progress-tracker-container directory-progress-tracker-container">
                  <div className="slider-controls">
                      <PrevSliderButton onClick={previous} />
                      <NextSliderButton onClick={next} />
                  </div>
                  <div className="slider-progress-tracker directory-progress-tracker">
                      <div className="slider-progress-thumb" style={{left: `${progress}%`}}></div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default SliderSection
