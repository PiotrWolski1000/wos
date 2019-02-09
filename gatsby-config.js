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
        name: 'WoS Hausmeister & Reinigung Service auf Föhr',
        short_name: 'WoS',
        start_url: '/',
        background_color: '#E52321',
        theme_color: '#E52321',
        display: 'standalone',
        icon: 'src/images/headerImage.png', // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
