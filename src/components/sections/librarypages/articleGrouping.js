import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'


const ArticleGrouping = ({cards}) => {

  return (
    <section class="media-grouping-col">
        <div class="max-width">
            <div class="flex">
                <a href="" class="media-grid-col-article">
                    <img src="./assets/images/article-placeholder-images/media-grid-col-article-1.png" alt="" />
                    <h4>This is just  a placeholder  title for a Media article card </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore. consectetur.
                    </p>
                    <div class="article-button-container">
                        <div class="article-button">Read More Stories</div>
                        <div class="article-icon">
                            <i class="icon arrow-icon"></i>
                        </div>
                    </div>
                </a>
                <a href="" class="media-grid-col-article">
                    <img src="./assets/images/article-placeholder-images/media-grid-col-2.png
                    " alt="" />
                    <h4>This is just  a placeholder  title for a Media article card </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore. consectetur.
                    </p>
                    <div class="article-button-container">
                        <div class="article-button">Read More Stories</div>
                        <div class="article-icon">
                            <i class="icon arrow-icon"></i>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ArticleGrouping
