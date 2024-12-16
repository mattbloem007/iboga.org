import React from "react"
import WhiteButton from '../../buttons/whiteButton'
import arrowWhite from '../../../assets/vectors/arrow-next-white.svg'


const SliderCardArticle2 = ({data, btn}) => {

  return (
    <a href="" className="card-holder article-card-v2" tabindex="-1">
        <div className="article-card-inner">
            <h4>Featuring a key statistic or finding from recent iboga research</h4>
            <p className="p-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
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

export default SliderCardArticle2
