/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaTiktok, FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"
import TitleAndInfo from '../components/sections/titleAndInfo'
import SliderSection from '../components/sections/sliderSection'
import ImageBreak from '../components/sections/imageBreak'
import TextCards from '../components/sections/textCards'
import InfoAndImage from '../components/sections/infoAndImage'
import Donate from '../components/sections/donateSection'
import ContactSection from '../components/sections/contactSection'

export const pageQuery = graphql`
  query HomeQuery($template: String!) {
    markdownRemark(frontmatter: {template: {eq: $template}}) {
      id
      frontmatter {
        header_slides{
          title
          excerpt

        }
        section1 {
          section1_title
          section1_paragraph
          btn
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  console.log("frontmatter", frontmatter)
  const aboutIboga = "<strong class=\"heading-bold\">About</strong> <br> Iboga.org"
  const aboutInfo = "At Iboga.org, we are dedicated to the responsible and respectful integration of iboga into the world. Founded by Simon Anderson, our mission is to empower individuals with balanced and accessible information, fostering a global community rooted in wisdom sharing and holistic healing. We honor traditional knowledge and scientific research, promoting safety and transparency in all we do. Join us in exploring the profound potential of iboga."
  const directoryTitle = ""
  const directoryInfo = ""
  const mediaTitle = "<strong class=\"heading-bold\">Research</strong> and Media"
  const mediaInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
  const textCards1 =
  [
    {title: "Our Vision", info: "A world where fundamental wisdom about how to meet and integrate the gift of iboga - through traditional practices, scientific research, and graceful blessings - is fully accessible and impeccably integrated by all, fostering personal transformation, community healing, and a respectful relationship with this sacred plant."},
    {title: "Our Mission", info: "We individuals with the knowledge and resources they need to navigate their iboga journey safely and respectfully. We curate and share balanced information from traditional wisdom, scientific research, and personal experiences.&nbsp; We foster a global community dedicated to responsible integration practices and advocate for the sustainable future of iboga."}
  ]
  const textCards2 =
  [
    {title: "Share Your Insights with Iboga.org's Journal", info: "Are you passionate about Iboga and its transformative potential? We invite researchers, practitioners, and enthusiasts to submit their articles, studies, and personal stories to Iboga.org's Journal. Your contributions can help expand the knowledge and understanding of this powerful plant medicine."},
    {title: "Speak at the Summit Conference", info: "Join the conversation and become a speaker at our upcoming Summit Conference. Share your expertise, experiences, and insights with a global audience. Whether you are a seasoned practitioner, researcher, or advocate, your voice can inspire and educate others in the Iboga community."}
  ]

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <Layout page="home">
      <Seo />
        <TitleAndInfo title={frontmatter.section1.section1_title} info={frontmatter.section1.section1_paragraph} btn={false}/>
        <SliderSection title={directoryTitle} info={directoryInfo}/>
        <ImageBreak />
        <TitleAndInfo title={aboutIboga} info={aboutInfo} btn={true}/>
        <TextCards data={textCards1} btn={false}/>
        <InfoAndImage />
        <SliderSection title={mediaTitle} info={mediaInfo} />
        <Donate />
        <TextCards data={textCards2} btn={true} />
        <ContactSection />
    </Layout>
  )
}

export default HomePage
