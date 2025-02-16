import React from "react"

const DisclaimerCard = ({ data }) => {

  console.log("Disclaimer", data)

  return (
    <section class="disclaimer-card">
        <div class="max-width">
            <div class="d-card-contents">
                <h2>{data.title}</h2>
                <p>
                  {data.paragraph}
                </p>
            </div>
        </div>
    </section>
  )
}

export default DisclaimerCard
