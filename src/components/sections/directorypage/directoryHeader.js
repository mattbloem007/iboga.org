import React, { useState, useEffect } from "react"
import {useStaticQuery, graphql} from 'gatsby';
import Send from '../../../assets/vectors/send-white.svg'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const DirectoryHeader = ({ children, page, data }) => {

  const [success, setSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"
  })

  const [value, setValue] = useState({
		email: '',
    success: '',
    });

    const onSubmit = (data, e) => {
      const form = e.target;

      let finalData = {...value}
      console.log("Final Data", finalData)

      var template_params = {
                 "reply_to": finalData.email,
                 "from_name": " ",
                 "to_name": "Iboga.org",
                 "message": "Directory Applicant Email"
              }

      var service_id = "iboga.org";
      var template_id = "iboga_directory";
      var user_id = "-HIMULEjyajJJCcIL";
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

  const HeaderData = data
  const headerImage = HeaderData.header_image
  let image, backgroundImage;
  image = getImage(HeaderData.header_image)
  backgroundImage= convertToBgImage(image)
    return (
            <BackgroundImage
               Tag="section"
               {...backgroundImage}
               preserveStackingContext
             >
             <section class="page-banner directory-banner coming-soon" style={{background: "none"}}>
                 <div class="max-width">
                     <div class="flex">
                         <h1>{HeaderData.title}</h1>
                         <h3>{HeaderData.excerpt}</h3>
                         {success && <p style={{color: "#80de9a", marginTop: "10px"}}>You have been added to the waiting list! We will make contact soon</p>}
                         <div class="directory-actions">
                             <div class="flex">
                             <form onSubmit={handleSubmit(onSubmit)} class="content-search">
                                   <input
                                       type="email"
                                       name="email"
                                       id="email"
                                       placeholder="Email Address"
                                       {...register('email', {
                                         onChange: (e) => {onChangeHandler(e)},
                                         required: 'Email Required',
                                         pattern: {
                                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                             message: "invalid email address"
                                         }
                                        })}
                                   />
                                 <button>
                                     <img src={Send} alt="" />
                                 </button>
                             </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
            </BackgroundImage>
    )

}

export default DirectoryHeader
