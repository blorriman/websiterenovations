module.exports = {
  siteMetadata: {
    title: `Website Renovations
    `,
    description: `I fix old, broken and boring websites and make them mobile friendly, SEO friendly and user friendly. Either static sites or Wordpress sites`,
    author: `Bob Lorriman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website Renovations`,
        short_name: `Web Renos`,
        start_url: `/`,
        background_color: `#FFC107`,
        theme_color: `#FFC107`,
        display: `minimal-ui`,
        icon: `src/images/websiteRenos.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
