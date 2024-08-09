import React, { useState, useRef } from "react"
import Slider from "react-slick";

import arrow from '../../assets/vectors/arrow-next-black.svg'
import arrowWhite from '../../assets/vectors/arrow-next-white.svg'
import PlayBtn from '../../assets/vectors/play-btn.svg'
import SkipBack from '../../assets/vectors/skip-prev.svg'
import PrevRepeat from '../../assets/vectors/prev-15sec.svg'
import NextRepeat from '../../assets/vectors/next-15sec.svg'
import SkipForward from '../../assets/vectors/skip-forward.svg'

import articleImage1 from "../../assets/vectors/article-placeholder-images/article-1.png"
import articleImage2 from "../../assets/vectors/article-placeholder-images/article-video.png"

import PrevSliderButton from '../buttons/prevSliderButton'
import NextSliderButton from '../buttons/nextSliderButton'
import WhiteButton from '../buttons/whiteButton'

const SliderSection = ({ title, info }) => {
  const [progress, setProgress] = useState(0);

  let sliderRef = useRef(null);

  var settings = {
    swipe: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    afterChange: current => {
      setProgress((current / 4) * 100)
    }
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };


  return (
    <section className="research-media-slider">
      <div className="max-width">
        <div className="flex">
            <div className="slider-headline">
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                <p>
                    {info}
                </p>
            </div>
            <WhiteButton />
        </div>
      </div>
        <div className="margin-left-width">
        <Slider classNameName="article-slider" {...settings} ref={slider => { sliderRef = slider; }}>
          <a href="" className="card-holder article-card" tabindex="0">
              <img src={articleImage1} alt="" />
              <div className="article-card-inner">
                  <h4>Success Stories</h4>
                  <p className="p-small">
                      “Meeting with the Sacred, Ancient and Wise African medicine of Iboga has been a journey that has taken me deeper into profound and...
                  </p>
              </div>
              <div className="article-button-container">
                  <div className="article-button">Read More Stories</div>
                  <div className="article-icon">
                      <img className="icon arrow-icon" src={arrow}></img>
                  </div>
              </div>
          </a>
          <a href="" className="card-holder article-card-v2" tabindex="-1">
              <div className="article-card-inner">
                  <h4>Featuring a key statistic or finding from recent iboga research</h4>
                  <p className="p-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
              <div className="article-button-container">
                  <div className="article-button">Read More Stories</div>
                  <div className="article-icon">
                      <img className="icon arrow-icon" src={arrowWhite}></img>
                  </div>
              </div>
          </a>
          <div className="card-holder article-card-v3">
              <div className="article-card-inner">
                  <h4>How Iboga Can Help</h4>
                  <p className="p-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="multi-link-box">
                      <ul>
                          <li><a href="" tabindex="-1">This is a link to a resource <img className="icon arrow-icon" src={arrow}></img></a></li>
                          <li><a href="" tabindex="-1">This is a link to a resource <img className="icon arrow-icon" src={arrow}></img></a></li>
                          <li><a href="" tabindex="-1">This is a link to a resource <img className="icon arrow-icon" src={arrow}></img></a></li>
                          <li><a href="" tabindex="-1">This is a link to a resource <img className="icon arrow-icon" src={arrow}></img></a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <a href="" className="card-holder article-video-card" tabindex="-1">
              <div className="thumbnail">
                  <img src={articleImage2} alt="" />
                  <div className="thumb-icon">
                      <img className="icon play-icon" src={PlayBtn}></img>
                  </div>
              </div>
              <div className="article-card-inner">
                  <h5>This is just  a placeholder  title for a Media Video</h5>
                  <p className="p-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
                  </p>
              </div>
          </a>
          <div className="card-holder article-audio-card">
              <div className="article-audio">
                  <div className="playtime">
                      <p className="current-time">20:45</p>
                      <div className="audio-progress-tracker">
                          <div className="audio-progress"></div>
                      </div>
                      <p className="end-time">54:39</p>
                  </div>
                  <div className="audio-controls">
                      <button className="previous-song-btn" tabindex="-1"><img className="icon skip-icon" src={SkipBack}></img></button>
                      <button className="skip-15sec-back-btn" tabindex="-1"><img className="icon repeat-icon" src={PrevRepeat}></img></button>
                      <button className="play-audio-btn" tabindex="-1">
                          <div className="play-audio-btn">
                              <img className="icon play-icon" src={PlayBtn}></img>
                          </div>
                      </button>
                      <button className="skip-15sec-forward-btn" tabindex="-1"><img className="icon repeat-forward-icon" src={NextRepeat}></img></button>
                      <button className="next-song-btn" tabindex="-1"><img className="icon skip-forward-icon" src={SkipForward}></img></button>
                  </div>
              <h5>This is a title for a recent
                  podcast episode </h5>
              <a href="" className="podcast-link" tabindex="-1">View Podcast</a>
          </div>
      </div>
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
