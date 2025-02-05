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
          cta {
            btn_text
            btn_type
            btn_link
          }
        }

        contact_section3 {
          title
          excerpt
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
const ContactPage = ({ data }) => {
  const { markdownRemark, footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="contact" footer={footer}>
      <Header data={frontmatter.contact_banner} />
      <ContactForm data={frontmatter.reasons_form} />
      <TextCards data={frontmatter.contact_section2} cta={frontmatter.contact_section2.cta}/>
      <NewsletterSection title={frontmatter.contact_section3.title} newsletter_title={frontmatter.contact_section3.excerpt}/>
    </Layout>
  )
}

export default ContactPage
