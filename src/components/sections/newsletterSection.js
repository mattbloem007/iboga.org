
import React, { useState } from "react"
import bgImage from '../../assets/vectors/section-images/donate-section-img.png'
import send from '../../assets/vectors/send.svg'
import sendWhite from '../../assets/vectors/send-white.svg'
import chev from '../../assets/vectors/chevron.svg'
import { Link } from 'gatsby'

const NewsletterSection = ({ title, newsletter_title, newsletter_img }) => {
  const [dropdown, setDropDown] = useState(false)
  const [option, setOption] = useState('Reason for contacting us...')
  let imageElement = <div></div>;

  const myValues = [
      {display: "This is a placeholder reason for contacting...", value: "This is a placeholder reason for contacting..."},
      {display: "This is a reason for contacting...", value: "This is a reason for contacting..."},
      {display: "This is a placeholder reason for contacting...", value: "This is a placeholder reason for contacting..."},

    ];

  const configureDropDown = () => {
      setDropDown(!dropdown)
  }

  const setReasonToContact = (e) => {
    setOption(e.value)
    configureDropDown()
  }


  if(newsletter_img) {
    if(newsletter_img.publicURL) {
      imageElement = <img src={newsletter_img.publicURL} alt="newsletter_title" />
    }
    else {
      imageElement = <img src={newsletter_img} alt="newsletter_title" />
    }
  }

  return (
    <div class="horizontal-newsletter">
        <div class="max-width">
                <form action="" className="news-letter-form">
                <div class="newsletter-left-col">
                  <h4>{title}</h4>
                  <p dangerouslySetInnerHTML={{__html: newsletter_title}} />
                  <Link target="_blank" to="https://ibogadao.substack.com/" class="button-primary substack-link">Subscribe to Newsletter <img className="icon send-icon" src={sendWhite}></img></Link>
                </div>
                <div class="newsletter-right-col">
                  {imageElement}
                </div>
                </form>
        </div>
    </div>
  )
}

export default NewsletterSection
