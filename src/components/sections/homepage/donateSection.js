
import React from "react"
import bgImage from '../../../assets/vectors/section-images/donate-section-img.png'
import arrow from '../../../assets/vectors/arrow-icon.svg'
import dollar from '../../../assets/vectors/MoneyIcon_x2.svg'

const Donate = ({ data }) => {

  return (
    <section className="donate-section">
        <div className="margin-left-width">
            <div
            className="donate-container"
            style={{
                backgroundImage: `url(${bgImage})`
               }}
            >
                <div className="donate-details">
                    <h2 dangerouslySetInnerHTML={{ __html: data.donate_title }}></h2>
                    <p>
                        {data.donate_info}
                    </p>
                    <div class="donate-buttons-container">
                        <div>
                            <form action="">
                                <div class="form-row">
                                    <div class="flex">
                                        <a href="" class="button-secondary">Contact Us</a>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="flex">
                                        <input type="text" placeholder="R 100" />
                                        <button className="button-primary">Donate <i className="icon money-icon" style={{marginLeft: "10px"}}>BTC</i></button>
                                    </div>
                                </div>
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
