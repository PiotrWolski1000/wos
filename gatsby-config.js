module.exports = {
  siteMetadata: {
    title: 'WoS Hausmeister Service auf Föhr',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#E52321',
        theme_color: '#E52321',
        display: 'minimal-ui',
        icon: 'src/images/headerImage.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
