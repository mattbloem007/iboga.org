import React, { useState } from "react"
import Send from '../../../assets/vectors/send.svg'
import SendWhite from '../../../assets/vectors/send-white.svg'
import Chevron from '../../../assets/vectors/chevron.svg'

const ContactForm = ({ data }) => {

  const [dropdown, setDropDown] = useState(false)
  const [hover, setHover] = useState(false)
  const [option, setOption] = useState('Reason for contacting us...')

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
    <section class="contact-section contact-page-form-container">
        <div class="max-width">
            <div class="flex contact-section-flex contact-page-flex">
                <h2 class="contact-page-h2">Send Us a <br/>
                     Message</h2>
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
                                     {option} <img className="icon chevron-icon" src={Chevron}></img>
                                 </div>
                                 <ul className={dropdown ? "active" : ""}>
                                     {data.map(
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
            </div>
        </div>
    </section>
  )
}

export default ContactForm
