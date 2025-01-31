import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'
import LargeArticleItem from './largeArticleItem'
import SideArticleItem from './sideArticleItem'

const MediaGrouping = ({posts}) => {
  return (
    <section class="media-grouping">
        <div class="max-width">
          <div class="flex">
            <LargeArticleItem post={posts.edges[0]} />
            <div class="side-media">
            {posts && posts.edges.map((post, index) => {
              if (index >= 1 && index <= 2) {
                console.log("POSTS", post)
                return (

                    <SideArticleItem post={post} />
                )
              }
            })}
            </div>
          </div>
        </div>
    </section>
  )
}

export default MediaGrouping
