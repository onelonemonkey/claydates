module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `745a8c7277de25170bb4e44640c62b`,
      },
    },
  ],
};
