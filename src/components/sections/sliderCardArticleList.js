import React from "react"
import WhiteButton from '../buttons/whiteButton'
import arrow from '../../assets/vectors/arrow-next-black.svg'


const SliderCardArticleList = ({data, btn}) => {

  return (
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
  )
}

export default SliderCardArticleList
