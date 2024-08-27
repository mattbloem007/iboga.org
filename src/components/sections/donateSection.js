/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import bgImage from '../../assets/vectors/section-images/donate-section-img.png'
import arrow from '../../assets/vectors/arrow-icon.svg'
import dollar from '../../assets/vectors/MoneyIcon_x2.svg'

const Donate = ({ data }) => {

  return (
    <section className="donate-section">
        <div className="margin-left-width">
            <div
            className="donate-container"
            sx={{
                backgroundImage: `url(${bgImage})`
               }}
            >
                <div className="donate-details">
                    <h2 dangerouslySetInnerHTML={{ __html: data.donate_title }}></h2>
                    <p>
                        {data.donate_info}
                    </p>
                    <div className="donate-buttons-container">
                        <a href={data.cta.btn_link} className="button-secondary">{data.cta.btn_text} <img className="icon send-icon" src={arrow}></img></a>
                        <div>
                            <form action="">
                                <input type="text" placeholder="R 100" />
                                <button className="button-primary">Donate <img className="icon money-icon" src={dollar}></img></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Donate
