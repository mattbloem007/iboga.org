import React from "react"
import arrow from '../../assets/vectors/arrow-next-black.svg'


const NextSliderButton = ({onClick}) => {

  return (
      <button onClick={onClick}><img class="icon arrow-icon slider-forward" src={arrow}></img></button>
  )
}

export default NextSliderButton
