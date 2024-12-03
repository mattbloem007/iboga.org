import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DirectoryHeader from '../components/sections/directorypage/directoryHeader'


export const pageQuery = graphql`
  query DirectoryQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        directory_banner {
          title
          excerpt
          header_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }

    footer: markdownRemark(frontmatter: {template: {eq: "footer"}}) {
        frontmatter {
          title
          description
        }
    }
  }
`
const DirectoryPage = ({ data }) => {
  const { markdownRemark, footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="directory" footer={footer}>
      <DirectoryHeader data={frontmatter.directory_banner} />
    </Layout>
  )
}

export default DirectoryPage
