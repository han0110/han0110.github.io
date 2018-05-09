/* eslint-disable no-multi-assign */

const { createFilePath } = require('gatsby-source-filesystem');
const { readFileSync } = require('fs');

module.exports = exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'content',
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug.replace(/\/$/, ''),
    });

    if (slug.match(/^\/projects\//) !== null) {
      const base64 = readFileSync(`./content${slug}icon.svg`).toString('base64');

      createNodeField({
        node,
        name: 'icon',
        value: `data:image/svg+xml;base64,${base64}`,
      });
    }
  }
};
