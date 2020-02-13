/* eslint-disable no-multi-assign */

module.exports = exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.match(/^\/projects\//)) {
    // Delete `/projects/`
    deletePage(page)
    // Create `/projects`
    createPage({ ...page, path: page.path.replace(/\/$/, '') })
    // Create `/projects/:title`
    createPage({
      ...page,
      path: '/projects/:title',
      matchPath: '/projects/:title',
    })
  }
}
