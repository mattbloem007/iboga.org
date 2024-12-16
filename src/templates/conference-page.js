import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import ConferenceForm from '../components/sections/submissionforms/conferenceSubmissionForm'


export const pageQuery = graphql`
  query ConferenceQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        conference_banner {
          subtitle
          title
          excerpt
        }

        types_of_participation {
          type
        }

        time_slots {
          time_slot
        }
      }
    }

    footer: markdownRemark(frontmatter: {template: {eq: "footer"}}) {
        frontmatter {
          title
          description
          useful_links {
            title
            slug
          }
          about_links {
            title
            slug
          }
          media_links {
            title
            slug
          }
          legal_links {
            title
            slug
          }
          contact_links {
            title
            slug
          }
        }
    }
  }
`
const ConferencePage = ({ data }) => {
  const { markdownRemark, footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="directory" footer={footer}>
      <Header data={frontmatter.conference_banner} />
      <ConferenceForm participation={frontmatter.types_of_participation} slots={frontmatter.time_slots} />
    </Layout>
  )
}

export default ConferencePage
