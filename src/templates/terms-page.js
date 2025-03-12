import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import ButtonArrow from '../assets/vectors/arrow-prev-black.svg'


// markdownRemark(frontmatter: {template: {eq: $template}}) {
//   frontmatter {
//     journal_banner {
//       subtitle
//       title
//       excerpt
//     }
//
//     submission_categories {
//       category
//     }
//
//   }
// }


export const pageQuery = graphql`
  query TermsQuery($template: String!) {

    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        terms_banner {
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
const JournalPage = ({ data }) => {
  const { markdownRemark, footer } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page" page="terms" footer={footer}>
      <Header data={frontmatter.terms_banner} />
      <div class="article-headline" style={{paddingTop: "80px"}}>
        <div class="max-width">
          <div class="info-container" style={{marginBottom: "0px"}}>
            <a href=""><img class="icon arrow-icon" src={ButtonArrow} style={{marginRight: "10px"}}></img>Back To Home</a>
            <p style={{paddingTop: "80px"}}>
                Welcome to iboga.org. We're committed to fostering meaningful dialogue about healing and scientific research while ensuring a safe, respectful environment for our community.
            </p>
          </div>
        </div>
    </div>

    <section class="general-content">
        <div class="max-width">

            <div class="info-container">
                <h3>Acceptance of Terms</h3>
                <p>
                    By accessing and using iboga.org, you're agreeing to these terms and conditions. We encourage you to read them carefully as they form the foundation of our relationship with you, our valued community members.
                </p>
            </div>

            <div class="info-container">
                <h3>Purpose and Scope</h3>
                <p>
                    iboga.org is a platform dedicated to honoring and sharing knowledge about iboga as a spiritual teacher while providing balanced, accessible information. Our mission encompasses:
                </p>
                <ul>
                    <li>Fostering connection with the spirit and wisdom of iboga</li>
                    <li>Sharing both traditional knowledge and scientific research</li>
                    <li>Creating dialogue between traditional wisdom keepers and modern practitioners</li>
                    <li>Supporting sustainable and respectful engagement with iboga</li>
                    <li>Empowering individuals seeking wisdom through educational resources</li>
                    <li>Building community through shared knowledge and experience</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Educational Content and Traditional Wisdom</h3>
                <p>
                    Our content reflects a holistic approach that honors both traditional wisdom and modern research. While we provide educational resources and information about iboga, we do not directly offer iboga treatments. Our content:
                </p>
                <ul>
                    <li>Respects and preserves traditional knowledge and spiritual wisdom</li>
                    <li>Includes scientific research and academic perspectives</li>
                    <li>Features diverse voices and approaches through our podcast, blog, and community generated content</li>
                    <li>Maintains transparency about different approaches and safety protocols</li>
                    <li>Supports sustainable practices and equitable access</li>
                    <li>Emphasizes the importance of proper preparation and integration for work with iboga</li>
                </ul>
                <p>
                    All information is shared with deep respect for iboga as a teacher and the communities where it originates.
                </p>
            </div>

            <div class="info-container">
                <h3>User Responsibilities</h3>
                <p>
                    As a member of our community, you agree to:
                </p>
                <ul>
                    <li>Engage in respectful, constructive dialogue</li>
                    <li>Share only factual, scientifically-backed information</li>
                    <li>Respect intellectual property rights</li>
                    <li>Maintain the educational nature of all discussions</li>
                    <li>Avoid promoting or soliciting any illegal activities</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Content and Community Contributions</h3>
                <p>
                    We welcome contributions from practitioners, researchers, and individuals with diverse experiences. When sharing on our platform, we expect contributors to:
                </p>
                <ul>
                    <li>Honor both traditional wisdom and scientific knowledge</li>
                    <li>Share experiences and insights respectfully</li>
                    <li>Maintain transparency about your approach and background</li>
                    <li>Respect the sacred nature of iboga and its traditional contexts</li>
                    <li>Support sustainable and ethical practices</li>
                    <li>Contribute to constructive dialogue that bridges different perspectives</li>
                    <li>Avoid making unsubstantiated claims while honoring experiential wisdom</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Intellectual Property</h3>
                <p>
                    All content on iboga.org, including, but not limited to, text, graphics, logos, and research summaries, is protected by intellectual property laws. Users may share and quote our content with proper attribution for educational purposes. The use of our content for any commercial purposes or ventures is strictly prohibited without prior written authorization.
                </p>
            </div>

            <div class="info-container">
                <h3>Privacy and Data Protection</h3>
                <p>
                    We value your privacy and handle all personal information in accordance with applicable data protection laws. Please review our separate Privacy Policy for detailed information about how we collect, use, and protect your data.
                </p>
            </div>

            <div class="info-container">
                <h3>Disclaimer</h3>
                <p>
                    The information provided on iboga.org is:
                </p>
                <ul>
                    <li>For educational and informational purposes only</li>
                    <li>Not intended as medical advice or treatment recommendations</li>
                    <li>Not a substitute for professional medical guidance</li>
                    <li>Based on current research and subject to updates as new studies emerge</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Third-Party Links</h3>
                <p>
                    We may link to third-party content, including academic research and scientific studies. While we strive to share reliable sources, we're not responsible for external content and encourage users to verify information independently.
                </p>
            </div>

            <div class="info-container">
                <h3>Community Guidelines and Ethical Commitments</h3>
                <p>
                    Our community is founded on:
                </p>
                <ul>
                    <li>Deep respect for iboga as a spiritual teacher</li>
                    <li>Honor for traditional wisdom and its keepers</li>
                    <li>Support for sustainable practices and ethical sourcing</li>
                    <li>Commitment to accessibility and equitable access</li>
                    <li>Transparent sharing of knowledge and experiences</li>
                    <li>Bridging traditional wisdom with modern understanding</li>
                    <li>Supporting initiatives for integral growing and preservation</li>
                    <li>Contributing to legal defense and treatment scholarship funds</li>
                    <li>Fostering inclusive dialogue across diverse perspectives</li>
                    <li>Maintaining the highest standards of safety and integrity</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Modifications to Terms</h3>
                <p>
                    We may update these terms to reflect new developments in research or legal requirements. We'll notify our community of significant changes and encourage regular review of these terms.
                </p>
            </div>

            <div class="info-container">
                <h3>Contact Information</h3>
                <p>
                    Questions about these terms? We're here to help. Contact us at iboga.org/contact
                </p>
            </div>

            <div class="info-container">
                <h3>Governing Law</h3>
                <p>
                    These terms are governed by Wisconsin law, with consideration for the educational and research-focused nature of our platform.
                </p>
            </div>

            <div class="info-container">
                <p>
                    <strong>Last Updated: 25th February 2025</strong>
                </p>
                <br/>
                <p>Thank you for being part of our community dedicated to understanding and advancing scientific research in the field of healing and mental health.</p>
            </div>

        </div>
    </section>
    </Layout>
  )
}

export default JournalPage
