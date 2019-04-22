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
          title
          tagline
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
