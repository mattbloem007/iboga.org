import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import JournalForm from '../components/sections/submissionforms/journalSubmissionForm'


export const pageQuery = graphql`
  query JournalQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        journal_banner {
          subtitle
          title
          excerpt
        }

        submission_categories {
          category
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
const JournalPage = ({ data }) => {
  const { markdownRemark, footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="directory" footer={footer}>
      <Header data={frontmatter.journal_banner} />
      <JournalForm categories={frontmatter.submission_categories} />
    </Layout>
  )
}

export default JournalPage
