const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kmckelvey/github/business/themes/gatsby-theme-ggt-material-ui-blog-workspaces/gatsby-theme-ggt-material-ui-blog/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/kmckelvey/github/business/themes/gatsby-theme-ggt-material-ui-blog-workspaces/gatsby-theme-ggt-material-ui-blog/src/pages/index.jsx"))),
  "component---src-pages-legal-jsx": hot(preferDefault(require("/Users/kmckelvey/github/business/themes/gatsby-theme-ggt-material-ui-blog-workspaces/gatsby-theme-ggt-material-ui-blog/src/pages/legal.jsx")))
}

