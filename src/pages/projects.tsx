import * as React from 'react';
import GatsbyLink from 'gatsby-link';

interface Props {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: Array<{
        node: {
          html: string;
          frontmatter: {
            title: string;
            theme: string;
            date: string;
            status: string;
            demo: string;
            source: string;
          };
          fields: {
            slug: string;
            icon: string;
          };
        };
      }>
    };
  };
  location: {
    pathname: string;
  };
}

const Projects = ({ data: { allMarkdownRemark }, location: { pathname } }: Props) => {
  const nodes = allMarkdownRemark.edges.map((edge) => ({ ...edge.node }));

  return (
    <div className="projects__wrapper">
      <div>
        {
          // eslint-disable-next-line
          nodes.map(({ html, frontmatter: { title, theme, status, demo, source }, fields: { slug } }) => (
            <div className="projects__content" data-active={slug === pathname} key={title} >
              <h2 data-status={status} style={{ color: theme }}>{title}</h2>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <a href={demo} rel="noopener noreferrer" target="_blank"><p>demo</p></a>
              <a href={source} rel="noopener noreferrer" target="_blank"><p>source</p></a>
            </div>
          ))
        }
      </div>
      <div className="projects__cards">
        {
          nodes.map(({ frontmatter: { title, theme }, fields: { slug, icon } }) => (
            <GatsbyLink
              style={{ backgroundColor: theme }}
              to={slug}
              key={slug}
            >
              <img src={icon} alt={title} />
            </GatsbyLink>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/\/projects\//" } } }
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
`;
