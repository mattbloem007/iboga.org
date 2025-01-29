
import React from "react"
import bgImage from '../../../assets/vectors/section-images/donate-section-img.png'
import arrow from '../../../assets/vectors/arrow-icon.svg'
import bitcoin from '../../../assets/vectors/bitcoin.svg'

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
                                      <button className="button-primary" style={{width: "100%"}} onClick={() => {
                                        navigator.clipboard.writeText("3NhdewdQaWdXyRcfgqfBw7SsxhPjKbrQAS")
                                        alert("Legal Fund Bitcoin address copied to clipboard")
                                      }}>Donate to legal aid fund <img className="icon bitcoin-icon" src={bitcoin}></img></button>                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="flex">
                                        {/**<input type="text" placeholder="R 100" />*/}
                                        <button className="button-primary" style={{width: "100%"}} onClick={() => {
                                          navigator.clipboard.writeText("3LYGbxJYF9LJPvsdQe6N7z8GYrgfmviLJv")
                                          alert("Our platform Bitcoin address copied to clipboard")
                                        }}>Donate to our platform <img className="icon bitcoin-icon" src={bitcoin}></img></button>                                     </div>
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
