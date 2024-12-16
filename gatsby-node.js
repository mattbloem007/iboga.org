const path = require("path")
const slugify = require('slugify')
const {fmImagesToRelative} = require('gatsby-remark-relative-images-v2')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions


  const result = await graphql(`
    {
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
      libraryPages: allMarkdownRemark(
        filter: {frontmatter: {template: {eq: "media-page"}}}
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              excerpt
              template
            }
          }
        }
      }
      postPages: allMarkdownRemark(
        filter: {frontmatter: {template: {eq: "blog-post"}}}
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              template
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  const posts = result.data.allMarkdownRemark.edges
  const { libraryPages, postPages } = result.data

  let blogPostsCount = 0

  posts.forEach((post, index) => {

    const id = post.node.id
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const template = post.node.frontmatter.template

    if (post.node.frontmatter.slug && post.node.frontmatter.template !== "blog-post" && post.node.frontmatter.slug && post.node.frontmatter.template !== "media-page"){
      createPage({
        path: post.node.frontmatter.slug,
        component: path.resolve(
          `src/templates/${String(post.node.frontmatter.template)}.js`
        ),
        // additional data can be passed via context

        context: {
          id,
          template,
          previous,
          next,
        },
      })
    }


    // Count blog posts.
    if (post.node.frontmatter.template === "blog-post") {
      blogPostsCount++
    }
  })

  libraryPages.edges.forEach((libraryPage, index) => {
    console.log("Library page", libraryPage)
    const id = libraryPage.node.id
    const template = libraryPage.node.frontmatter.template
    const title = libraryPage.node.frontmatter.title
    const slug = libraryPage.node.frontmatter.slug

    console.log("TITLE", title)

    createPage({
      path: `/library/${slug}`,
      component: path.resolve(
        `src/templates/media-detailed-page.js`
      ),
      // additional data can be passed via context

      context: {
        id,
        template,
        title,
      },
    })
  })

  postPages.edges.forEach((postPage, index) => {

    const id = postPage.node.id
    const template = postPage.node.frontmatter.template
    const title = postPage.node.frontmatter.title
    const slug = postPage.node.frontmatter.slug

    createPage({
      path: `/library${slug}`,
      component: path.resolve(
        `src/templates/media-article-page.js`
      ),
      // additional data can be passed via context

      context: {
        id,
        template,
        title,
      },
    })
  })


  // Create blog-list pages
  // const postsPerPage = 9
  // const numPages = Math.ceil(blogPostsCount / postsPerPage)
  //
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
  //     component: blogList,
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
