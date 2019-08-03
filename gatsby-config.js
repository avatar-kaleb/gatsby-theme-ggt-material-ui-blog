const pkg = require('./package.json');
const path = require('path');
const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;

const config = require(`${__dirname}/src/constants/default-site-config.js`);
const defaultSiteMetadata = config.defaultSiteMetadata;
const defaultSiteThemeColors = config.defaultSiteThemeColors;

module.exports = themeOptions => {
  const siteMetadata = { ...defaultSiteMetadata, ...themeOptions.siteMetadata };

  const pathPrefix = siteMetadata.pathPrefix === '/' ? '' : siteMetadata.pathPrefix;
  siteMetadata.rssMetadata = {
    site_url: siteMetadata.siteUrl + pathPrefix,
    feed_url: siteMetadata.siteUrl + pathPrefix + siteMetadata.rssUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    image_url: `${siteMetadata.siteUrl + pathPrefix}/${siteMetadata.icon}`,
    author: siteMetadata.author,
    copyright: siteMetadata.copyright
  };

  return {
    siteMetadata: siteMetadata,
    plugins: [
      // required for gatsby themes for now
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [pkg.name]
        }
      },
      // for users using the theme, we need their content available :D
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'blog',
          path: `content/blog`
        }
      },
      // create new pages automatically for users
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`
        }
      },
      {
        resolve: `gatsby-mdx`,
        options: {
          extensions: ['.mdx', '.md', '.markdown']
        }
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: siteMetadata.title,
          short_name: siteMetadata.manifestShortName,
          description: siteMetadata.description,
          start_url: siteMetadata.pathPrefix,
          background_color: '#e0e0e0',
          theme_color: '#0D47A1',
          display: 'minimal-ui',
          icon: `${__dirname}${siteMetadata.icon}`
        }
      },
      {
        resolve: 'gatsby-plugin-feed',
        options: {
          query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
          feeds: [
            {
              serialize: ({
                query: {
                  site: {
                    siteMetadata: { rssMetadata }
                  },
                  allMdx
                }
              }) => {
                return allMdx.edges.map(edge => ({
                  categories: edge.node.frontmatter.tags,
                  date: edge.node.frontmatter.date,
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  author: rssMetadata.author,
                  url: rssMetadata.site_url + edge.node.fields.slug,
                  guid: rssMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                }));
              },
              query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields { slug }
                    frontmatter {
                      title
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
              output: siteMetadata.rssUrl,
              title: 'Blog RSS Feed'
            }
          ]
        }
      },
      {
        resolve: 'gatsby-plugin-sitemap',
        options: {
          output: siteMetadata.sitemapUrl,
          query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`
        }
      },
      {
        resolve: `gatsby-plugin-material-ui`
      },
      {
        resolve: 'gatsby-plugin-nprogress',
        options: {
          color: defaultSiteThemeColors.secondary,
          showSpinner: false
        }
      },
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: config.gaTrackingId,
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true
        }
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: require.resolve('./src/utils/typography.js')
        }
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-offline',
      `gatsby-plugin-catch-links`
    ]
  };
};
