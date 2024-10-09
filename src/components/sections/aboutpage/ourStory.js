import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"


const OurStory = ({data}) => {
  console.log("DATA", data)
  return (
    <section class="our-story">
        <div class="margin-left-width">
            <div class="story-content">
                <h2>{data.title}</h2>
                <h3>{data.subtitle}</h3>
                <p dangerouslySetInnerHTML={{__html: data.paragraph}} />
            </div>
            <div class="our-story-image">
            <GatsbyImage
              style={{display: "unset", overflow: "unset"}}
              image={data.image.childImageSharp.gatsbyImageData}
              alt={data.title}
            />
            </div>

        </div>
    </section>
  )
}

export default OurStory