import React from "react"
import MoneyIcon from "../assets/vectors/MoneyIcon_x2.svg"
import bitcoin from "../assets/vectors/bitcoin.svg"
import DirectoryIcon from "../assets/vectors/ApplyToDirectoryIcon_x2.svg"
import LanguagePicker from './LanguagePicker'
import SearchNavBar from './SearchNavBar'
import { Link } from "gatsby"


const MenuButtons = ({scroll}) => {

  return (
    <div className="nav-top-right-col">
        <div className="flex">
            {/**<SearchNavBar />*/}
            <Link to="/donate" className="button-secondary">Donate <img className="icon money-icon" src={bitcoin} /></Link>
            <Link to="/directory" className="button-primary directory-btn">Apply to Directory <img className="icon apply-to-directory-icon" src={DirectoryIcon} /></Link>
            {/**<LanguagePicker />*/}
        </div>
    </div>
  )
}

export default MenuButtons
