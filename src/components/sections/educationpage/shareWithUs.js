import React from "react"
import arrow from '../../../assets/vectors/arrow-icon.svg'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const ShareWithUs = ({ data }) => {

  let image = getImage(data.image)
  let backgroundImage= convertToBgImage(image)

  console.log("DATA shareWithUs", data)

  return (
    <section class="share-with-us-2">
        <div class="max-width">
            <div class="flex">
              <BackgroundImage
                 Tag="section"
                 {...backgroundImage}
                 preserveStackingContext
               >
                <h2 class="left-col">
                    {data.title}
                </h2>
              </BackgroundImage>
                <div class="right-col">
                    <p>
                        {data.paragraph}
                    </p>
                    <div class="share-with-us-buttons">
                    {data.cta && data.cta.map(btn => {
                      return (
                        <a href={btn.btn_link} class={btn.btn_type}>{btn.btn_text} <img src={arrow} class="icon arrow-icon"></img></a>
                      )
                    })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShareWithUs
