import React from "react"
import arrow from '../../assets/vectors/arrow-next-black.svg'


const PrevSliderButton = ({onClick}) => {

  return (
      <button onClick={onClick}><img class="icon arrow-icon slider-back" src={arrow}></img></button>
  )
}

export default PrevSliderButton
