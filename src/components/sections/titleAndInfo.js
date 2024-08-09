import React from "react"
import WhiteButton from '../buttons/whiteButton'

const TitleAndInfo = ({title, info, btn}) => {

  return (
    <section class="title-and-info">
      <div class="max-width">
      {btn &&
        <div class="about-iboga-btn">
            <WhiteButton />
        </div>
      }
        <div class="flex">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p>
                {info}
            </p>
        </div>
      </div>
    </section>
  )
}

export default TitleAndInfo
