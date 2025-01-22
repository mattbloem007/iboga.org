
import React, { useState } from "react"
import bgImage from '../../../assets/vectors/section-images/donate-section-img.png'
import Send from '../../../assets/vectors/send.svg'
import SendWhite from '../../../assets/vectors/send-white.svg'
import chev from '../../../assets/vectors/chevron.svg'
import dollar from '../../../assets/vectors/MoneyIcon_x2.svg'


const ContactDonateSection = ({ disclaimer, contact, reasons, donate }) => {
  const [dropdown, setDropDown] = useState(false)
  const [hover, setHover] = useState(false)
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
    setOption(e.reason)
    configureDropDown()
  }

  const handleHover = () => {
    setHover(true)
  }

  const handleHoverLeave = () => {
    setHover(false)
  }

  return (
    <section className="contact-section">
        <div className="max-width">
            <h2 dangerouslySetInnerHTML={{ __html: contact.title }}></h2>
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
                                {reasons.map(
                                  (value, i) => (<li onClick={ () => setReasonToContact(value) } key={i} >{value.reason}</li>)
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
                      <button className="button-secondary" onMouseEnter={() => handleHover()} onMouseLeave={() => handleHoverLeave()}>Send Message {hover ? <img className="icon send-icon" src={SendWhite}></img> : <img className="icon send-icon" src={Send}></img>}</button>
                    </div>

                </form>

                <div class="donate-page-cta-form">
                    <h4>{donate.donate_title}</h4>
                    <p style={{textAlign: "left"}}>
                        {donate.donate_info}
                    </p>
                    <div class="donate-buttons-container">
                        <div>
                            <form action="">
                                <div class="form-row">
                                    <div class="flex">
                                        <a href="" class="button-secondary">Contact Us</a>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="flex">
                                        <input type="text" placeholder="R 100" />
                                        <button className="button-primary">Donate <img className="icon money-icon" src={dollar}></img></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ContactDonateSection
