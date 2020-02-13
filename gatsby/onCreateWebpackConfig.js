/* eslint-disable no-multi-assign */
const { resolve } = require('path')

module.exports = exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, '../frontend'), 'node_modules'],
    },
  })
}
