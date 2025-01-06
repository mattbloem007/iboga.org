import React, { useState } from "react"
import ChevronIcon from "../assets/vectors/Vector6_x2.svg"


const LanguagePicker = () => {

  const [ clicked, setClicked ] = useState(false);

  const handlePicker = () => {
    setClicked(!clicked)
  }

  return (
    <div class={`language-picker ${clicked ? "active" : ""}`} onClick={() => handlePicker()}>
        <div class="visible-choice" data-language-code="EN">
            EN <img className="icon down-arrow" src={ChevronIcon} />
        </div>
        <ul>
            <li>English <span class="language-code">(EN)</span></li>
            <li>French<span class="language-code">(FR)</span></li>
        </ul>
    </div>
  )
}

export default LanguagePicker
