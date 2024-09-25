import React from "react"
import PlayBtn from '../../../assets/vectors/play-btn.svg'
import SkipBack from '../../../assets/vectors/skip-prev.svg'
import PrevRepeat from '../../../assets/vectors/prev-15sec.svg'
import NextRepeat from '../../../assets/vectors/next-15sec.svg'
import SkipForward from '../../../assets/vectors/skip-forward.svg'



const SliderCardVideo = ({data, btn}) => {

  return (
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
  )
}

export default SliderCardVideo
