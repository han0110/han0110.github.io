const postCssPlugins = require('./postcss.config.js')

module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins,
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
}
