import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import ContactForm from '../components/sections/contactpage/contactForm'
import TextCards from '../components/sections/textCards'
import NewsletterSection from '../components/sections/newsletterSection'


export const pageQuery = graphql`
  query ContactQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        contact_banner {
          title
          excerpt
          header_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }

        reasons_form {
          reason
        }

        contact_section2 {
          title
          excerpt
        }

        contact_section3 {
          title
          excerpt
        }
      }
    }
  }
`
const ContactPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="contact">
      <Header data={frontmatter.contact_banner} />
      <ContactForm data={frontmatter.reasons_form} />
      <TextCards data={frontmatter.contact_section2} />
      <NewsletterSection title={frontmatter.contact_section3.title} newsletter_title={frontmatter.contact_section3.excerpt}/>
    </Layout>
  )
}

export default ContactPage
