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

  console.log('data', data.site.siteMetadata);
  return data.site.siteMetadata;
};
