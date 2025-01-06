
import React, { useState } from "react"
import bgImage from '../../assets/vectors/section-images/donate-section-img.png'
import send from '../../assets/vectors/send.svg'
import sendWhite from '../../assets/vectors/send-white.svg'
import chev from '../../assets/vectors/chevron.svg'

const NewsletterSection = ({ title, newsletter_title }) => {
  const [dropdown, setDropDown] = useState(false)
  const [option, setOption] = useState('Reason for contacting us...')
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

  return (
    <div class="horizontal-newsletter">
        <div class="max-width">
                <form action="" className="news-letter-form">
                <div class="newsletter-left-col">
                  <h4>{title}</h4>
                  <p dangerouslySetInnerHTML={{__html: newsletter_title}} />
                </div>
                <div class="newsletter-right-col">
                  <div className="form-row">
                      <label for="">Full Name</label>
                      <input type="text" />
                  </div>
                  <div className="form-row">
                      <label for="">Email Address</label>
                      <input type="text" />
                  </div>
                  <div className="form-row-check">
                      <div className="custom-checkbox">
                          <label className="custom-checkbox" for="newsletter-agreement">
                          <input type="checkbox" name="newsletter-agreement" id="newsletter-agreement"/>
                          I agree to receive the newsletter and updates.</label>
                      </div>
                  </div>
                  <div className="form-row">
                      <button className="button-primary">Subscribe <img className="icon send-icon" src={sendWhite}></img></button>
                  </div>
                </div>
                </form>
        </div>
    </div>
  )
}

export default NewsletterSection
