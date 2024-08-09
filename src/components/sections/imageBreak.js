import React from "react"
import image from '../../assets/vectors/section-images/homepage-spacing-image.png'

const ImageBreak = () => {

  return (
    <section className="image-break">
        <div className="margin-left-width">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
        </div>
    </section>
  )
}

export default ImageBreak
