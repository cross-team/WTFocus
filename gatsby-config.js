/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/WTFocus',
  siteMetadata: {
    title: 'WTFocus',
    titleTemplate: '%s - WTFocus',
    description: 'A focus indicator demo for the ICT Accessibility Symposium',
    url: 'wtfoc.us',
    image: "Your site's social media card image",
    twitterUsername: '@yourTwitterUser',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        // Integrate react-axe in production. This defaults to false.
        showInProduction: false,

        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options. 
        },
        // Context to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
        axeContext: {
          // Your axe-core context.
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-axe',
    `gatsby-plugin-offline`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-emotion`,
  ],
}
