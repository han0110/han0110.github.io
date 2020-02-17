/* eslint-disable no-multi-assign */
const { rootResolve } = require('./util')

module.exports = exports.createPages = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          totalCount
          edges {
            node {
              fields {
                slug
                page
              }
            }
          }
        }
      }
    `,
  )
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      fields: { page, slug },
    } = node
    createPage({
      path: `/${page}/${slug}`,
      component: rootResolve(`frontend/pages/${page}.tsx`),
      context: {
        slug,
      },
    })
  })
}
