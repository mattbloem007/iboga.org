import React from "react"
import blackArrow from "../../assets/vectors/arrow-icon-black.svg"


const WhiteButton = ({ link }) => {

  return (
        <a href={link} class="button-secondary">Visit Directory <img src="icon arrow-icon" src={blackArrow}></img></a>
  )
}

export default WhiteButton
