import React from "react"
import MoneyIcon from "../assets/vectors/MoneyIcon_x2.svg"
import bitcoin from "../assets/vectors/bitcoin.svg"
import DirectoryIcon from "../assets/vectors/ApplyToDirectoryIcon_x2.svg"
import LanguagePicker from './LanguagePicker'
import SearchNavBar from './SearchNavBar'

const MenuButtons = ({scroll}) => {

  return (
    <div class="nav-top-right-col">
        <div class="flex">
            {/**<SearchNavBar />*/}
            <a href="/donate" class="button-secondary">Donate <img className="icon money-icon" src={bitcoin} /></a>
            <a href="/directory" class="button-primary directory-btn">Apply to Directory <img className="icon apply-to-directory-icon" src={DirectoryIcon} /></a>
            {/**<LanguagePicker />*/}
        </div>
    </div>
  )
}

export default MenuButtons
