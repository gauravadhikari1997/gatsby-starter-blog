/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ReactJS Developer",
    author: "Gaurav Adhikari",
  },
  plugins: [
    "gatsby-plugin-sharp",
    /* This is a low-level helper plugin generally used by other Gatsby plugins
    It aims to provide excellent out-of-the box settings for processing common web image formats.      
    */
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      /* A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem */

      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://debitsreport.com/graphql`,
        includedRoutes: ["**/posts", "**/tags", "**/categories"],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      /* Parses Markdown files using Remark https://remark.js.org/ 
      now we can query markdownRemark and allMarkdownRemark using graphql
      */

      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
