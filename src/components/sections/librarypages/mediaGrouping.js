import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import arrow from '../../../assets/vectors/arrow-next-black.svg'
import LargeArticleItem from './largeArticleItem'
import SideArticleItem from './sideArticleItem'

const MediaGrouping = ({posts, journalPosts, otherMediaPosts}) => {

  let featuredPost;

  if (journalPosts) {
    featuredPost = journalPosts.edges.filter(e => {
      if (e.node.frontmatter.featuredImage) {
        return e
      }
    });
  }

  // const filteredMedia = otherMediaPosts.edges.filter((item) => item !== posts.edges[0]);
  //
  // console.log("filteredMedia", filteredMedia)

  return (
    <section class="media-grouping">
        <div class="max-width">
          <div class="flex">
            {journalPosts ? <LargeArticleItem post={featuredPost[0]} /> : <LargeArticleItem post={posts.edges[0]} />}
            <div class="side-media">
            {otherMediaPosts && otherMediaPosts.edges.map((post, index) => {
                console.log("POSTS", post)
                return (

                    <SideArticleItem post={post} />
                )
            })}
            </div>
          </div>
        </div>
    </section>
  )
}

export default MediaGrouping
