import React from "react"

const OurApproach = ({data}) => {

  return (
    <section className="approach">
      <div className="max-width">
        <h2>Our Approach</h2>
        <div className="flex">
          {
            data && data.map(info => {
              console.log("INFO", info);
              return (
                  <div class="approach-box">
                      <h3>{info.title}</h3>
                      <p>
                        {info.excerpt}
                      </p>
                  </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default OurApproach
