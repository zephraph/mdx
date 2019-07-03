const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [require('remark-slug'), require('remark-emoji')]
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto mono']
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: 'docs'
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src/pages')
      }
    }
  ]
}
