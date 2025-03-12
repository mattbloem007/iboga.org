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
  query PolicyQuery($template: String!) {

    markdownRemark(frontmatter: {template: {eq: $template}}) {
      frontmatter {
        policy_banner {
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
    <Layout className="page" page="policy" footer={footer}>
      <Header data={frontmatter.policy_banner} />
      <div class="article-headline" style={{paddingTop: "80px"}}>
        <div class="max-width">
          <div class="info-container" style={{marginBottom: "0px"}}>
            <a href="/"><img class="icon arrow-icon" src={ButtonArrow} style={{marginRight: "10px"}}></img>Back To Home</a>
            <p style={{paddingTop: "80px"}}>
                Welcome to iboga.org's Privacy Policy. We deeply value the trust our community places in us and are committed to protecting your privacy while fostering open dialogue about healing and traditional wisdom.
            </p>
          </div>
        </div>
    </div>

    <section class="general-content">
        <div class="max-width">

            <div class="info-container">
                <h3>Introduction</h3>
                <p>
                    This Privacy Policy explains how we collect, use, and protect your information when you visit iboga.org. We've written this policy in clear language because we believe in transparency and want you to feel confident about how we handle your data.
                </p>
            </div>

            <div class="info-container">
                <h3>Information We Collect:</h3>

                <h5>Information You Provide</h5>
                <p>We may collect:</p>
                <ul>
                    <li>Basic account information (if you create an account)</li>
                    <li>Your name, email address, and phone number (if you contact us and provide those details) </li>
                    <li>Comments and contributions to our community forums</li>
                    <li>Messages sent through our contact forms</li>
                    <li>Newsletter subscriptions</li>
                    <li>Directory listings (for practitioners)</li>
                    <li>Scholarship applications</li>
                </ul>

                <h5>Information Automatically Collected</h5>
                <p>Our website automatically collects:</p>
                <ul>
                    <li>IP addresses (anonymized)</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring websites</li>
                    <li>Geographic region (country level only)</li>
                </ul>

            </div>

            <div class="info-container">
                <h3>How We Use Your Information</h3>
                <p>
                    We use your information to:
                </p>
                <ul>
                    <li>Maintain and improve our platform</li>
                    <li>Facilitate community discussions</li>
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Respond to your inquiries</li>
                    <li>Manage our Directory listings</li>
                    <li>Process scholarship applications</li>
                    <li>Analyze website performance</li>
                    <li>Ensure platform security</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Data Protection and Security</h3>
                <p>
                    We implement robust security measures to protect your information:
                </p>
                <ul>
                    <li>Encryption of sensitive data</li>
                    <li>Regular security audits</li>
                    <li>Secure data storage</li>
                    <li>Limited staff access to personal information</li>
                    <li>Regular security updates</li>
                    <li>Anonymous data collection where possible</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Information Sharing</h3>
                <p>
                    We never sell your personal information. We may share information:
                </p>
                <ul>
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>With service providers who help operate our website</li>
                    <li>In anonymized, aggregated form for analytics</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Community Forums and Public Content</h3>
                <p>
                    Please note:
                </p>
                <ul>
                    <li>Public forum posts are visible to all visitors</li>
                    <li>Directory listings are public information</li>
                    <li>Exercise discretion when sharing personal experiences</li>
                    <li>We moderate content to protect privacy</li>
                    <li>You can request removal of your public content</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Your Privacy Rights</h3>
                <p>
                    You have the right to:
                </p>
                <ul>
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of communications</li>
                    <li>Download your data</li>
                    <li>Withdraw consent</li>
                    <li>Lodge privacy complaints</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>International Data Transfers</h3>
                <p>
                    If we transfer data internationally, we ensure:
                </p>
                <ul>
                    <li>Compliance with applicable laws</li>
                    <li>Appropriate data protection measures</li>
                    <li>Transparency about data locations</li>
                    <li>Protection of your privacy rights</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Cookie Policy</h3>
                <p>
                    We use essential cookies to:
                </p>
                <ul>
                    <li>Maintain basic website functionality</li>
                    <li>Remember your privacy preferences</li>
                    <li>Ensure platform security</li>
                </ul>
                <p>
                    Optional cookies (with your consent) for:
                </p>
                <ul>
                    <li>Analytics</li>
                    <li>Performance improvement</li>
                    <li>User experience enhancement</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Children's Privacy</h3>
                <p>
                    We do not knowingly collect information from individuals under 18. If you believe we have inadvertently collected such information, please contact us for immediate removal.
                </p>
            </div>

            <div class="info-container">
                <h3>Changes to Privacy Policy</h3>
                <p>
                    We may update this policy to reflect:
                </p>
                <ul>
                    <li>New features or services</li>
                    <li>Legal requirements</li>
                    <li>Privacy best practices</li>
                    <li>Community needs</li>
                </ul>
                <p>
                    We'll notify you of significant changes through:
                </p>
                <ul>
                    <li>Website and newsletter announcements</li>
                    <li>Email notifications (if subscribed)</li>
                    <li>Platform updates</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Directory Privacy</h3>
                <p>
                    For practitioners listed in our Directory:
                </p>
                <ul>
                    <li>Basic professional information is public</li>
                    <li>Contact details are protected</li>
                    <li>Verification status is displayed</li>
                    <li>Updates can be requested</li>
                    <li>Listings can be removed upon request</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Research and Education</h3>
                <p>
                    When handling information related to research and educational content:
                </p>
                <ul>
                    <li>Personal experiences are anonymized</li>
                    <li>Sources are protected</li>
                    <li>Traditional knowledge is respectfully handled</li>
                    <li>Academic citations are properly attributed</li>
                </ul>
            </div>

            <div class="info-container">
                <h3>Contact Us</h3>
                <p>
                    For privacy-related matters:
                </p>
                <ul>
                    <li>Email: we@iboga.org</li>
                    <li>Form: iboga.org/contact</li>
                    <li>Mail: [Physical Address - TBC]</li>
                </ul>

                <p>We aim to respond to privacy inquiries within 48 hours.</p>
            </div>

            <div class="info-container">
                <h3>Additional Rights</h3>
                <p>
                    Depending on your location, you may have additional privacy rights under local laws (GDPR, CCPA, etc.) which iboga.org will honour.
                </p>
                <br/>
                <p>
                    Thank you for trusting iboga.org with your information. We're committed to maintaining this trust through transparent and respectful privacy practices.
                </p>
            </div>



        </div>
    </section>
    </Layout>
  )
}

export default JournalPage
