import React, { useState } from "react"
import Send from '../../../assets/vectors/send.svg'
import Chevron from '../../../assets/vectors/chevron.svg'
import Plus from '../../../assets/vectors/plus.svg'
import Upload from '../../../assets/vectors/upload.svg'

const ConferenceForm = ({ categories }) => {

  const [dropdown, setDropDown] = useState(false)
  const [category, setCategories] = useState('Choose a Type...')

  const configureDropDown = () => {
      setDropDown(!dropdown)
  }

  const setCategory = (e) => {
    setCategories(e.type)
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
                            <label for="">Title of Submission</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div class="form-row custom-dropdown-row">
                        <div class="custom-dropdown">
                            <label for="">Submission Categories</label>
                            <div className="dropdown-chosen-text" onClick={() => configureDropDown()}>
                                {category} <img className="icon chevron-icon" src={Chevron}></img>
                            </div>
                            <ul className={dropdown ? "active" : ""}>
                                {categories.map(
                                  (value, i) => (<li onClick={ () => setCategory(value) } key={i} >{value.category}</li>)
                                )}
                            </ul>
                            <input type="text" class="dropdown-input" hidden />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Abstract/Summary</label>
                            <textarea name="" id="" placeholder="Provide a brief overview of your submission."></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label class="button-secondary upload-input-label" for="upload-input">Upload Media <img className="icon upload-icon" src={Upload}></img></label>
                            <input type="file" id="upload-input" accept=".pdf, .docx" />
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
                            <label for="">Brief Bio</label>
                            <textarea name="" id="" placeholder="Share a brief bio of the author(s)."></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Indicate any affiliations <span class="optional-text">(Optional)</span></label>
                            <textarea name="" id="" placeholder=""></textarea>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-element">
                            <label for="">Additional Information <span class="optional-text">(Optional)</span></label>
                            <textarea name="" id="" placeholder="Share a brief bio of the author(s)."></textarea>
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
