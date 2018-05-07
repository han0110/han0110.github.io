const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
  ],
};
