import React from "react"
import ibogaSectionImg from '../../assets/vectors/section-images/iboga-applications-section-image.png'
import arrow from '../../assets/vectors/arrow-icon.svg'

const InfoAndImage = ({title, info, btn}) => {

  return (
    <section className="application-of-iboga">
        <div className="margin-left-width">
            <div className="section-container">
                <div className="flex">
                    <img src={ibogaSectionImg} alt="" />
                    <div className="section-inner">
                            <h2><strong className="heading-bold">Application</strong> of <br/>
                            Iboga and Ibogaine</h2>
                            <p>
                                Iboga, a rainforest shrub native to Africa, holds transformative and healing potential within its rootbark. Used for centuries by the indigenous forest peoples of Africa, and revered as the primary sacrament in the Bwiti tradition, iboga is gaining wider recognition for its diverse applications. Let's explore this unique medicine...
                            </p>
                            <a href="" className="button-primary">
                              Explore Iboga Treatments &amp; Application 
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
