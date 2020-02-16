/* eslint-disable no-multi-assign */
const { rootResolve } = require('./util')

module.exports = exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [rootResolve('frontend'), 'node_modules'],
    },
  })
}
