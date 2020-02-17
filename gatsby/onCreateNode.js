/* eslint-disable no-multi-assign */

const { createFilePath } = require('gatsby-source-filesystem')
const { readFileSync } = require('fs')

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const path = createFilePath({
      node,
      getNode,
      basePath: 'content',
      trailingSlash: false,
    })

    const [page, slug] = path
      .replace(new RegExp('/(.+)/(.+)'), '$1 $2')
      .split(' ')
    createNodeField({
      node,
      name: 'page',
      value: page,
    })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    switch (page) {
      case 'projects': {
        const iconPath = `./content/projects/${slug}/icon.svg`
        const iconBase64 = readFileSync(iconPath).toString('base64')
        createNodeField({
          node,
          name: 'icon',
          value: `data:image/svg+xml;base64,${iconBase64}`,
        })
        break
      }
      case 'blog': {
        // Do nothing but using `gatsby-plugin-sharp` to get thumbnail directly
        // Issue referenced: https://github.com/gatsbyjs/gatsby/issues/2054
        break
      }
      default:
    }
  }
}
