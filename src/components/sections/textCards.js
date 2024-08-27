import React from "react"
import blackArrow from "../../assets/vectors/arrow-icon-black.svg"

const TextCards = ({data, cta}) => {

  return (
    <section className="vision-mission-cards">
      <div className="max-width">
        <div className="flex">
          {
            data && data.map(info => {
              console.log("INFO", info);
              return (
                  <div className="vision-mission-card">
                      <h4>{info.title}</h4>
                      <p className="card-paragraphs">
                        {info.excerpt}
                      </p>
                      {info.cta.btn && <a href={info.cta.btn_link} class={info.cta.btn_type}>{info.cta.btn_text} <img src="icon arrow-icon" src={blackArrow}></img></a>}
                  </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TextCards
