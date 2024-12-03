import React, { useState } from "react"
import Send from '../../../assets/vectors/send.svg'
import Chevron from '../../../assets/vectors/chevron.svg'
import Plus from '../../../assets/vectors/plus.svg'

const ConferenceForm = ({ participation, slots }) => {

  const [dropdown, setDropDown] = useState(false)
  const [type, setType] = useState('Choose a Type...')
  const [times, setTimeSlot] = useState('Pick a Timeslot...')

  const configureDropDown = () => {
      setDropDown(!dropdown)
  }

  const setTypes = (e) => {
    setType(e.type)
    configureDropDown()
  }

  const setTimes = (e) => {
    setTimeSlot(e.time_slot)
    configureDropDown()
  }

  return (
    <section class="contact-section contact-page-form-container">
        <div class="max-width">
            <div class="flex contact-section-flex contact-page-flex">
                <form action="" class="contact-us-form">
                    <div class="form-row">
                        <div class="flex">
                            <div class="form-element">
                                <label for="">First Name</label>
                                <input type="text" />
                            </div>
                            <div class="form-element">
                                <label for="">Last Name</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="flex">
                            <div class="form-element">
                                <label for="">Email Address</label>
                                <input type="email" />
                            </div>
                            <div class="form-element">
                                <label for="">Phone Number</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Affiliation/Organization <span class="optional-text">(Optional)</span></label>
                            <input type="text" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Title of Presentation/Workshop</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div class="form-row custom-dropdown-row">
                        <div class="custom-dropdown">
                            <label for="">Type of Participation</label>
                            <div className="dropdown-chosen-text" onClick={() => configureDropDown()}>
                                {type} <img className="icon chevron-icon" src={Chevron}></img>
                            </div>
                            <ul className={dropdown ? "active" : ""}>
                                {participation.map(
                                  (value, i) => (<li onClick={ () => setTypes(value) } key={i} >{value.type}</li>)
                                )}
                            </ul>
                            <input type="text" class="dropdown-input" hidden />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Abstract/Summary Of Topic</label>
                            <textarea name="" id="" placeholder="Provide a brief overview of your submission."></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Detailed Description</label>
                            <textarea name="" id="" placeholder="Provide a brief overview of your submission."></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Include relevant keywords for your submission.</label>
                        <div class="keywords-input-container">
                            <input type="text" class="keywords-list-input" />
                            <div class="add-keyword">Add <img className="icon plus-icon" src={Plus}></img></div>
                        </div>
                            <ul class="keywords-list">
                                <li></li>
                            </ul>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Brief Bio Of Presenter(s) </label>
                            <textarea name="" id="" placeholder="Share a brief bio of the Presenter(s)"></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Preferred Presentation Date</label>
                            <input class="date-picker" type="date" />
                        </div>
                    </div>


                    <div class="form-row custom-dropdown-row">
                        <div class="custom-dropdown">
                            <label for="">Presentation Time</label>
                            <div className="dropdown-chosen-text" onClick={() => configureDropDown()}>
                                {times} <img className="icon chevron-icon" src={Chevron}></img>
                            </div>
                            <ul className={dropdown ? "active" : ""}>
                                {slots.map(
                                  (value, i) => (<li onClick={ () => setTimes(value) } key={i} >{value.time_slot}</li>)
                                )}
                            </ul>
                            <input type="text" class="dropdown-input" hidden />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Technical Requirements </label>
                            <textarea name="" id="" placeholder="(e.g., projector, audio equipment, etc.)"></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Additional Information <span class="optional-text">(Optional)</span></label>
                            <textarea name="" id="" placeholder=""></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <button class="button-secondary">Submit Submission <img className="icon send-icon" src={Send}></img></button>
                    </div>

                </form>

            </div>
        </div>
    </section>
  )
}

export default ConferenceForm
