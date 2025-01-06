
import React, { useState } from "react"
import bgImage from '../../assets/vectors/section-images/donate-section-img.png'
import send from '../../assets/vectors/send.svg'
import sendWhite from '../../assets/vectors/send-white.svg'
import chev from '../../assets/vectors/chevron.svg'

const ContactSection = ({ title, newsletter_title }) => {
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
    <section className="contact-section">
        <div className="max-width">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <div className="flex contact-section-flex">
                <form action="" className="contact-us-form">
                    <div className="form-row">
                        <div className="flex">
                            <div className="form-element">
                                <label for="">First Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-element">
                                <label for="">Last Name</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-element">
                            <label for="">Email Address</label>
                            <input type="email" placeholder="Your email address..." />
                        </div>
                    </div>

                    <div className="form-row custom-dropdown-row">
                        <div className="custom-dropdown">
                            <label for="">Reasons For Contacting</label>
                            <div className="dropdown-chosen-text" onClick={() => configureDropDown()}>
                                {option} <img className="icon chevron-icon" src={chev}></img>
                            </div>
                            <ul className={dropdown ? "active" : ""}>
                                {myValues.map(
                                  (value, i) => (<li onClick={ () => setReasonToContact(value) } key={i} >{value.display}</li>)
                                )}
                            </ul>
                            <input type="text" className="dropdown-input" hidden="" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-element">
                            <label for="">Subject</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-element">
                            <label for="">Your Message</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>

                    <div className="form-row">
                        <button className="button-secondary">Send Message <img className="icon send-icon" src={send}></img></button>
                    </div>

                </form>
                <form action="" className="news-letter-form">
                    <h4>{newsletter_title}</h4>
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
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
