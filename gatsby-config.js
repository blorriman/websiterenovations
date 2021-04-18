module.exports = {
  siteMetadata: {
    title: `Mackenzie Kyle
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
        name: `Mackenzie Kyle`,
        short_name: `Mackenzie Kyle`,
        start_url: `/`,
        background_color: `#3F51B5`,
        theme_color: `#3F51B5`,
        display: `minimal-ui`,
        icon: `src/images/Mac-left-square.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
