import React from "react"
import WhiteButton from '../../buttons/whiteButton'
import articleImage1 from "../../../assets/vectors/article-placeholder-images/article-1.png"
import arrow from '../../../assets/vectors/arrow-next-black.svg'


const SliderCardArticle = ({data, btn}) => {

  return (
    <a href="" className="card-holder article-card" tabindex="0">
        <img src={articleImage1} alt="" />
        <div className="article-card-inner">
            <h4>Success Stories</h4>
            <p className="p-small">
                “Meeting with the Sacred, Ancient and Wise African medicine of Iboga has been a journey that has taken me deeper into profound and...
            </p>
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

export default SliderCardArticle
