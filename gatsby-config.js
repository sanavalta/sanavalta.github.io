module.exports = {
  siteMetadata: {
    title: 'valta programming notes',
    description: `valta`,
    author: 'Nico Hämäläinen',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
