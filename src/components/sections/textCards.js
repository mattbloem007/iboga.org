import React from "react"
import WhiteButton from '../buttons/whiteButton'

const TextCards = ({data, btn}) => {

  return (
    <section className="vision-mission-cards">
      <div className="max-width">
        <div className="flex">
          {
            data && data.map(info => {
              return (
                  <div className="vision-mission-card">
                      <h4>{info.title}</h4>
                      <p className="card-paragraphs">
                        {info.info}
                      </p>
                      {btn && <WhiteButton />}
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
