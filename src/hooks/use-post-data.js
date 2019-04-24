import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(limit: 100, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              tags
              date
              category
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `);

  return data;
};
