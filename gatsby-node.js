const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onPreBootstrap = ({ store, reporter }) => {
//   const { program } = store.getState();

//   const dirs = [
//     path.join(program.directory, 'content/blog'),
//     path.join(program.directory, 'src/pages'),
//     path.join(program.directory, 'src/constants')
//   ];

//   dirs.forEach(dir => {
//     if (!fs.existsSync(dir)) {
//       reporter.log(`creating the ${dir} directory`);
//       mkdirp.sync(dir);
//     }
//   });
// };

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`${__dirname}/src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug
        }
      });
    });
  });
};
