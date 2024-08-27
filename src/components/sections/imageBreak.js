import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"


const ImageBreak = ({ image }) => {

  return (
    <section className="image-break">
        <div className="margin-left-width">
            <div className="image-container">
                <GatsbyImage image={image} alt="" style={{width: "100%"}}/>
            </div>
        </div>
    </section>
  )
}

export default ImageBreak
