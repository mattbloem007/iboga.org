import React from "react"
import WhiteButton from '../../buttons/whiteButton'
import arrow from '../../../assets/vectors/arrow-next-black.svg'
import articleImage2 from "../../../assets/vectors/article-placeholder-images/article-video.png"
import PlayBtn from '../../../assets/vectors/play-btn.svg'



const SliderCardVideo = ({data, btn}) => {

  return (
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
  )
}

export default SliderCardVideo
