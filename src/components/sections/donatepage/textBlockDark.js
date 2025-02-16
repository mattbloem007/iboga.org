import React from "react"
import { Link } from 'gatsby'
import dollar from '../../../assets/vectors/MoneyIcon_x2.svg'
import facebook from '../../../assets/vectors/facebook-icon.svg'
import instagram from '../../../assets/vectors/instagram-icon.svg'
import x from '../../../assets/vectors/x-icon.svg'
import whatsapp from '../../../assets/vectors/whatsapp-icon.svg'
import bitcoin from '../../../assets/vectors/bitcoin.svg'
import arrow from '../../../assets/vectors/arrow-icon.svg'



const TextBlockDark= ({ data }) => {

  let content = "Donate to "

  return (
    <section class="text-block dark-text-block">
        <div class="max-width">

            <div class="flex support-rows">
                <div class="fund-allocation">
                    <h2>{data.title}</h2>
                    <ul>
                    {
                      data.list.map(item => {
                        return (
                          <li><h3>{item.list_item}</h3></li>

                        )
                      })
                    }
                    </ul>
                </div>

                <div class="support-us-block">
                    <h2>{data.how_you_can_help_title}</h2>
                    <div class="support-w-donation">
                        <h3 class="ol-title">{data.how_you_can_help[0].list_item}</h3>
                        <div class="support-us-block-action">
                            <div class="donate-buttons-container">
                                <div>
                                    <form action="">
                                        <div class="form-row">
                                            <div class="flex">
                                                {/**<input type="text" placeholder="R 100" />*/}
                                                <button className="button-primary" style={{width: "100%"}} onClick={() => {
                                                  navigator.clipboard.writeText("3NhdewdQaWdXyRcfgqfBw7SsxhPjKbrQAS")
                                                  alert("Legal Fund Bitcoin address copied to clipboard")
                                                }}>Donate to legal aid fund <img className="icon bitcoin-icon" src={bitcoin}></img></button>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="flex">
                                                {/**<input type="text" placeholder="R 100" />*/}
                                                <button className="button-primary" style={{width: "100%"}} onClick={() => {
                                                  navigator.clipboard.writeText("3LYGbxJYF9LJPvsdQe6N7z8GYrgfmviLJv")
                                                  alert("Our platform Bitcoin address copied to clipboard")
                                                }}>Donate to our platform <img className="icon bitcoin-icon" src={bitcoin}></img></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="support-w-socials">
                        <h3 class="ol-title">{data.how_you_can_help[1].list_item}</h3>
                        <div class="support-us-block-action">
                            <div class="flex">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=#https://iboga.org/donate" target="_blank"><img class="icon facebook-icon" src={facebook}></img></a>
                                <a href={`https://twitter.com/intent/tweet/?text=${
                                  content
                                }&url=https://iboga.org/donate`} target="_blank"><img class="icon x-icon" src={x}></img></a>
                                {/**<a href=><img class="icon whatsapp-icon" src={whatsapp}></img></a>
                                <a href=""><img class="icon instagram-icon" src={instagram}></img></a>*/}
                            </div>
                        </div>
                    </div>
                    <div class="support-w-contributing">
                        <h3 class="ol-title">{data.how_you_can_help[2].list_item}</h3>
                        <div class="support-us-block-action">
                          <div class="donate-buttons-container">
                              <div>
                                  <form action="">
                                      <div class="form-row">
                                          <div class="flex">
                                            <Link className="button-primary" to="/contact">Contact Us <img className="icon arrow-icon" src={arrow}></img></Link>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>

                {
                  data.title_and_paragraphs.map(item => {
                    console.log("ITEM", item)
                    return (
                      <div>
                          <h2>{item.title}</h2>
                          <p>{item.paragraph}</p>
                      </div>
                    )
                  })

                }
            </div>
        </div>
    </section>
  )
}

export default TextBlockDark
