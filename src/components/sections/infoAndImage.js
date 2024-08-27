import React from "react"
import arrow from '../../assets/vectors/arrow-icon.svg'
import { GatsbyImage } from "gatsby-plugin-image"

const InfoAndImage = ({ data }) => {

  return (
    <section className="application-of-iboga">
        <div className="margin-left-width">
            <div className="section-container">
                <div className="flex">
                    <GatsbyImage image={data.image.childImageSharp.gatsbyImageData} alt="" />
                    <div className="section-inner">
                            <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                            <p>
                                {data.paragraph}
                            </p>
                            <a href={data.cta.btn_link} className={data.cta.btn_type}>
                              {data.cta.btn_text}
                              <img className="icon arrow-icon" src={arrow}></img>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoAndImage
