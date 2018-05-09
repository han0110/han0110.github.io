/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

module.exports = exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  if (page.path.match(/^\/projects/)) {
    page.matchPath = '/projects/:title';

    createPage(page);
  }
};
