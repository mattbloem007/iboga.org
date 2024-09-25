import React, { useState, useRef } from "react"
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image"


import arrow from '../../../assets/vectors/arrow-next-black.svg'
import arrowWhite from '../../../assets/vectors/arrow-next-white.svg'
import closeBurger from '../../../assets/vectors/close-burger.svg'

import PrevSliderButton from '../../buttons/prevSliderButton'
import NextSliderButton from '../../buttons/nextSliderButton'

const SliderTeam = ({ data }) => {
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
      setProgress((current / 1) * 100)
    }
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const handleReadMore = (e) => {
    const teamMemberPopup = document.getElementById(`${e.target.id}-teampopup`);
    console.log("E", teamMemberPopup)
    teamMemberPopup.classList.add('open');
  }

  const handleClose = (e) => {
    const teamMemberPopup = document.getElementById(`${e.target.id}-teampopup`);
    teamMemberPopup.classList.remove('open');
  }

  return (
    <div>
    <section className="team-slider">
      <div className="max-width">
        <div className="flex">
            <div className="slider-headline">
                <h2> Our Team </h2>
            </div>
        </div>
      </div>
        <div className="margin-left-width">
        <Slider classNameName="our-team-slider" {...settings} ref={slider => { sliderRef = slider; }}>
        {data && data.map((team, i) => {
          return (
            <div class="team-card-holder">
              <div class="team-member-box" id={i}>
                  <h3>{team.title}</h3>
                  <p className="p-small">{team.excerpt}</p>
                  <div class="read-more-display" id={i} onClick={(e) => handleReadMore(e)}>
                      <p id={i}>Read More</p>
                      <div class="arrow-container" id={i}>
                          <img className="icon arrow-icon" id={i} src={arrow}></img>
                      </div>
                  </div>
              </div>
            </div>
          )
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
    {data && data.map((team, i) => {
      return (
        <section class="team-member-popup" id={`${i}-teampopup`}>
            <div class="max-width">
                <div class="team-member-content">
                    <div class="member-image-container">
                        <h4 class="member-name">{team.title}</h4>
                        <div class="close-popup" id={i}><img src={closeBurger} alt="" id={i} onClick={(e) => handleClose(e)}></img></div>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: team.excerpt }} />
                </div>
            </div>
        </section>
      )

    })}
    </div>
  )
}

export default SliderTeam
