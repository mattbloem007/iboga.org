import React from "react"
import blackArrow from "../../assets/vectors/arrow-icon-black.svg"

const TitleAndInfo = ({title, info, cta}) => {

  return (
    <section class="title-and-info">
      <div class="max-width">
      {cta.btn &&
        <div class="about-iboga-btn">
            <a href={cta.btn_link} class={cta.btn_type}>{cta.btn_text} <img src="icon arrow-icon" src={blackArrow}></img></a>
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
