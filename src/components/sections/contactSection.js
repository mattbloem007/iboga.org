
import React, { useState, useEffect } from "react"
import bgImage from '../../assets/vectors/section-images/donate-section-img.png'
import Send from '../../assets/vectors/send.svg'
import sendWhite from '../../assets/vectors/send-white.svg'
import chev from '../../assets/vectors/chevron.svg'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import newsletterImage from '../../assets/vectors/newsletter-img.webp'
import { Link } from 'gatsby'

const ContactSection = ({ title, newsletter_title, reasons }) => {
  const [dropdown, setDropDown] = useState(false)
  const [hover, setHover] = useState(false)
  const [option, setOption] = useState('Reason for contacting us...')
  const [success, setSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"
  })


  useEffect(() => {
    const updateValue = async () => {
      let r = document.getElementById('reason').value
      const data = await setValue({...value, reason: r });
    }
     updateValue()
  }, [option])


  const [value, setValue] = useState({
		first_name: '',
    last_name: '',
		email: '',
    reason: '',
		subject: '',
		message: '',
    success: '',
    });

    const onSubmit = (data, e) => {
      const form = e.target;

      let finalData = {...value}
      console.log("Final Data", finalData)

      var template_params = {
                 "reply_to": finalData.email,
                 "from_name": finalData.first_name + " " + finalData.last_name,
                 "reason": finalData.reason,
                 "to_name": "Iboga.org",
                 "message": finalData.message
              }

      var service_id = "iboga.org";
      var template_id = "template_hqpw4qn";
      var user_id = "user_E7hnIvNfEqvZm2avmHiqG";
      try {
        emailjs.send(service_id, template_id, template_params, user_id)
      }
      catch(e) {
        console.log("ERROR", e)
      }

      form.reset();
      setSuccess(true)
  }

  const isErrors = Object.keys(errors).length !== 0 && true;

  const onChangeHandler = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const configureDropDown = () => {
      setDropDown(!dropdown)
  }

  const setReasonToContact = (e) => {
    setOption(e.reason)
    setValue({...value, reason: e.reason})
    document.getElementById('reason').value = e.reason;
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
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <div className="flex contact-section-flex">
                <form className="contact-us-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="flex">
                            <div className="form-element">
                              <div className={`form-group ${(isErrors && errors.first_name) ? 'has-error' : ''} ${value.first_name ? 'has-value' : ''}`}>
                                <label htmlFor="first_name">First Name</label>
                                  <input
                                      type="text"
                                      name="first_name"
                                      id="first_name"
                                      {...register('first_name', {
                                        onChange: (e) => {onChangeHandler(e)},
                                        required: 'First Name Required'
                                      })}
                                  />
                                  {errors.first_name && <span className="error">{errors.first_name.message}</span>}
                              </div>
                            </div>
                            <div className="form-element">
                              <div className={`form-group ${(isErrors && errors.last_name) ? 'has-error' : ''} ${value.last_name ? 'has-value' : ''}`}>
                                  <label htmlFor="last_name">Last Name</label>
                                  <input
                                      type="text"
                                      name="last_name"
                                      id="last_name"
                                      {...register('last_name', {
                                        onChange: (e) => {onChangeHandler(e)},
                                        required: 'Last Name Required'
                                      })}
                                  />
                                  {errors.last_name && <span className="error">{errors.last_name.message}</span>}
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-element">
                          <div className={`form-group ${(isErrors && errors.email) ? 'has-error' : ''} ${value.email ? 'has-value' : ''}`}>
                            <label htmlFor="email">Enter Your Email</label>
                              <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  {...register('email', {
                                    onChange: (e) => {onChangeHandler(e)},
                                    required: 'Email Required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                   })}
                              />
                              {errors.email && <span className="error">{errors.email.message}</span>}
                          </div>
                        </div>
                    </div>

                    <div className="form-row custom-dropdown-row">
                        <div className="custom-dropdown">
                          <div className={`form-group ${(isErrors && errors.reason) ? 'has-error' : ''} ${value.reason ? 'has-value' : ''}`}>
                            <label for="">Reasons For Contacting</label>
                            <div className="dropdown-chosen-text" name="reason" id="reason" defaultValue="Click to select a reason..." onClick={() => configureDropDown()} {...register('reason', {onChange: (e) => {onChangeHandler(e)}})}>
                              {option} <img className="icon chevron-icon" src={chev}></img>
                            </div>
                            <ul className={dropdown ? "active" : ""}>
                                {reasons.map(
                                  (value, i) => (<li onClick={ () => setReasonToContact(value) } key={i}>{value.reason}</li>)
                                )}
                            </ul>
                            {errors.reason && <span className="error">{errors.reason.message}</span>}
                          </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-element">
                          <div className={`form-group ${(isErrors && errors.subject) ? 'has-error' : ''} ${value.subject ? 'has-value' : ''}`}>
                            <label htmlFor="subject">Subject</label>
                              <input
                                  type="text"
                                  name="subject"
                                  id="subject"
                                  {...register('subject', {
                                    onChange: (e) => {onChangeHandler(e)},
                                    required: 'Subject Required'
                                  })}
                              />
                              {errors.subject && <span className="error">{errors.subject.message}</span>}
                          </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-element">
                          <div className={`form-group ${(isErrors && errors.message) ? 'has-error' : ''} ${value.message ? 'has-value' : ''}`}>
                            <label htmlFor="message">Write your message here.</label>
                              <textarea
                                  name="message"
                                  id="message"
                                  {...register('message', {
                                    onChange: (e) => {onChangeHandler(e)},
                                    required: 'Message Required',
                                    minLength: { value: 10, message: "Minimum length is 10" }
                                  })}
                              >
                              </textarea>
                              {errors.message && <span className="error">{errors.message.message}</span>}
                          </div>
                        </div>
                    </div>

                    <div className="form-row">
                      <button className="button-secondary" type="submit" onMouseEnter={() => handleHover()} onMouseLeave={() => handleHoverLeave()}>Send Message {hover ? <img className="icon send-icon" src={sendWhite}></img> : <img className="icon send-icon" src={Send}></img>}</button>
                      {success && <p style={{color: "green", marginTop: "10px"}}>Message sent! We will be in touch soon</p>}
                    </div>

                </form>
                <div class="aside-news-letter-container">
                    <div class="aside-img-container">
                        <img src={newsletterImage} alt="" />
                    </div>
                <form action="" class="news-letter-form">
                        <h4>Join our Newsletter
                            to receive important updates</h4>
                        <p>
                            Sign up to our newsletter to receive regular updates about the latest iboga research, news from the community, and more.
                        </p>
                        <Link target="_blank" to="https://ibogadao.substack.com/" className="button-primary substack-link">Subscribe to Newsletter <img className="icon send-icon" src={sendWhite}></img></Link>
                </form>
              </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
