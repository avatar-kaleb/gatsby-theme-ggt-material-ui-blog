const path = require('path');
const config = require(`${__dirname}/src/constants/site-config.js`);
const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;
const { siteMetadata, siteThemeColors } = config;
const pathPrefix = siteMetadata.pathPrefix === '/' ? '' : siteMetadata.pathPrefix;
const rssMetadata = {
  site_url: siteMetadata.siteUrl + pathPrefix,
  feed_url: siteMetadata.siteUrl + pathPrefix + siteMetadata.rssUrl,
  title: siteMetadata.title,
  description: siteMetadata.description,
  image_url: `${siteMetadata.siteUrl + pathPrefix}/${siteMetadata.icon}`,
  author: siteMetadata.author,
  copyright: siteMetadata.copyright
};
siteMetadata.rssMetadata = rssMetadata;

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['ggt-material-ui-mdx-blog-theme']
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `content/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `content/blog`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.manifestShortName,
        description: siteMetadata.description,
        start_url: pathPrefix,
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
                allMarkdownRemark
              }
            }) => {
              return allMarkdownRemark.edges.map(edge => ({
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
              allMarkdownRemark(
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
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: { main: siteThemeColors.primary },
            secondary: { main: siteThemeColors.secondary }
          },
          typography: {
            useNextVariants: true
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: siteThemeColors.secondary,
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
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`
  ]
};
