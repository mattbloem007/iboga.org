import React from "react"
import {useStaticQuery, graphql} from 'gatsby';
import Send from '../../../assets/vectors/send-white.svg'

import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const DirectoryHeader = ({ children, page, data }) => {

  const HeaderData = data
  const headerImage = HeaderData.header_image
  let image, backgroundImage;
  image = getImage(HeaderData.header_image)
  backgroundImage= convertToBgImage(image)
    return (
            <BackgroundImage
               Tag="section"
               {...backgroundImage}
               preserveStackingContext
             >
             <section class="page-banner directory-banner coming-soon" style={{background: "none"}}>
                 <div class="max-width">
                     <div class="flex">
                         <h1>{HeaderData.title}</h1>
                         <h3>{HeaderData.excerpt}</h3>
                         <div class="directory-actions">
                             <div class="flex">
                             <form action="" class="content-search">
                                 <input type="text" placeholder="Email Address..." />
                                 <button>
                                     <img src={Send} alt="" />
                                 </button>
                             </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
            </BackgroundImage>
    )

}

export default DirectoryHeader
