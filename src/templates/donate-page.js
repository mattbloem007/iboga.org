import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import TextBlockWhite from '../components/sections/donatepage/textBlockWhite'
import TextBlockDark from '../components/sections/donatepage/textBlockDark'
import DisclaimerCard from '../components/sections/donatepage/disclaimerCard'
import ContactDonateSection from '../components/sections/donatepage/contactDonateSection'


export const pageQuery = graphql`
  query DonateQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        donate_banner {
          title
          excerpt
        }

        donate_section1 {
          title
          subtitle
          list_title
          list {
            list_item
          }
          disclaimer
        }

        donate_section2 {
          title
          list {
            list_item
          }
          how_you_can_help_title
          how_you_can_help {
            list_item
          }
          title_and_paragraphs {
              title
              paragraph
          }
        }

        donate_section3 {
          title
          paragraph
        }

        donate_contact_section {
          title
          reasons_form {
            reason
          }
        }

        donate_section {
          donate_title
          donate_info
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
const DonatePage = ({ data }) => {
  const { markdownRemark, posts,  footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="donate" footer={footer}>
      <Header data={frontmatter.donate_banner} sizing={false} page="donate"/>
      <TextBlockWhite data={frontmatter.donate_section1} />
      <TextBlockDark data={frontmatter.donate_section2} />
      <ContactDonateSection disclaimer={frontmatter.donate_section3} contact={frontmatter.donate_contact_section} reasons={frontmatter.donate_contact_section.reasons_form} donate={frontmatter.donate_section}/>
    </Layout>
  )
}

export default DonatePage
