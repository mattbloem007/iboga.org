/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// const netlifyCmsPaths = {
//   resolve: `gatsby-plugin-netlify-cms-paths`,
//   options: {
//     cmsConfig: `/static/admin/config.yml`,
//   },
// }

const settings = require("./src/util/site.json")

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-W561DVDK2S", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
     resolve: "gatsby-plugin-google-tagmanager",
     options: {
       id: "GTM-PX7T2SB8",
       includeInDevelopment: false,
     },
   },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-1*******0-2',
    //     head: true,
    //     defer: true,
    //   },
    // },
    `gatsby-plugin-decap-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  //  "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          // netlifyCmsPaths,
          {
           resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: "lazy",
            },
          },
          {
            resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
            options: {
              // Fields to index
              fields: [`title`, `template`, `slug`],
              // How to resolve each field`s value for a supported node type
              resolvers: {
                // For any node of type MarkdownRemark, list how to resolve the fields` values
                MarkdownRemark: {
                  template: node => node.frontmatter.template,
                  title: node => node.frontmatter.title,
                  slug: node => node.frontmatter.slug,
                },
              },
              // Optional filter to limit indexed nodes
              filter: (node, getNode) => node.frontmatter.tags !== "exempt",
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: settings.ga,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Foundation`,
        short_name: `Foundation`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "static" + settings.meta.iconimage,
      },
    },
  //  "gatsby-plugin-offline",
    // `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-plugin-netlify`,
    //   options: {
    //     headers: {},
    //     allPageHeaders: [],
    //     mergeSecurityHeaders: true,
    //     mergeLinkHeaders: true,
    //     mergeCachingHeaders: true,
    //     transformHeaders: (headers, path) => headers,
    //     generateMatchPathRewrites: true,
    //   },
    // },
  ],
}
