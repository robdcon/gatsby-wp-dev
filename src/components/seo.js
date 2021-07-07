/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';

const SEO = ({children}) => {
  const { wp: { seo } } = useStaticQuery(
    graphql`
    query SiteInfoQuery {
      wp {
          seo {
              contentTypes {
                  post {
                      title
                      schemaType
                      metaRobotsNoindex
                      metaDesc
                  }
                  page {
                      metaDesc
                      metaRobotsNoindex
                      schemaType
                      title
                  }
              }
              webmaster {
                  googleVerify
                  yandexVerify
                  msVerify
                  baiduVerify
              }
              schema {
                  companyName
                  personName
                  companyOrPerson
                  wordpressSiteName
                  siteUrl
                  siteName
                  inLanguage
                  logo {
                      sourceUrl
                      mediaItemUrl
                      altText
                  }
              }
              social {
                  facebook {
                      url
                      defaultImage {
                          sourceUrl
                          mediaItemUrl
                      }
                  }
                  instagram {
                      url
                  }
                  linkedIn {
                      url
                  }
                  mySpace {
                      url
                  }
                  pinterest {
                      url
                      metaTag
                  }
                  twitter {
                      username
                  }
                  wikipedia {
                      url
                  }
                  youTube {
                      url
                  }
              }
          }
      }
    }
    `
  );

  return (
    <SEOContext.Provider value={{ global: seo }}>
        {children}
    </SEOContext.Provider>
  );
}

export default SEO
