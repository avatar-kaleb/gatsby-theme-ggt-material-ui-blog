import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          avatarImgSrc
          bioLineOne
          bioLineTwo
          copyright
          legalUrl
          postCardReadBtnText
          postDateFormat
          postDefaultCategoryID
          rssUrl
          seoKeywords
          siteUrl
          tagline
          theme {
            primary
            secondary
          }
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
