import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { withLayout, LayoutProps } from 'components/Layout'
import { Query } from 'types/graphql'

interface Props extends LayoutProps {
  data: Query
  pageContext: {
    slug: string
  }
}

const Projects = ({
  data: { allMarkdownRemark },
  pageContext: { slug: currentSlug },
}: Props) => {
  const nodes = allMarkdownRemark.edges.map(edge => ({ ...edge.node }))

  return (
    <div className="projects__wrapper">
      <div>
        {nodes.map(
          ({
            html,
            frontmatter: { title, theme, status, demo, source },
            fields: { slug },
          }) => (
            <div
              className="projects__content"
              data-active={slug === currentSlug}
              key={title}
            >
              <h2 data-status={status} style={{ color: theme }}>
                {title}
              </h2>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <a href={demo} rel="noopener noreferrer" target="_blank">
                <p>demo</p>
              </a>
              <a href={source} rel="noopener noreferrer" target="_blank">
                <p>source</p>
              </a>
            </div>
          ),
        )}
      </div>
      <div className="projects__cards">
        {nodes.map(
          ({ frontmatter: { title, theme }, fields: { slug, icon } }) => (
            <Link
              style={{ backgroundColor: theme }}
              to={`/projects/${slug}`}
              key={slug}
            >
              <img src={icon} alt={title} />
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

export default withLayout(Projects)

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { fields: { page: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            title
            theme
            date
            status
            demo
            source
          }
          fields {
            slug
            icon
          }
        }
      }
    }
  }
`
