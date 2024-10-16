import React from "react"
import arrow from '../../../assets/vectors/arrow-icon.svg'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const ShareWithUs = ({ data }) => {

  let image = getImage(data.image)
  let backgroundImage= convertToBgImage(image)

  return (
    <section class="share-with-us-2">
        <div class="max-width">
            <div class="flex">
              <BackgroundImage
                 Tag="section"
                 {...backgroundImage}
                 preserveStackingContext
               >
                <div class="left-col">
                    {data.title}
                </div>
              </BackgroundImage>
                <div class="right-col">
                    <p>
                        {data.paragraph}
                    </p>
                    <div class="share-with-us-buttons">
                        <a href="" class="button-secondary">Submit a Journal Entry <img src={arrow} class="icon arrow-icon"></img></a>
                        <a href="" class="button-secondary">Apply to Speak <img src={arrow} class="icon arrow-icon"></img></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShareWithUs
