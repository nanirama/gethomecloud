/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, location }) {
  const { site, SiteLogo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        SiteLogo: file(relativePath: {eq: "logos/logo-1.png"}) {
         publicURL
       }
      }
    `
  )
  
  
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = title ? title : site.siteMetadata.title

  const siteURL = site.siteMetadata.siteUrl 
  const siteLogo = siteURL+SiteLogo.publicURL;
  const metaImage = siteLogo
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
       <title>{defaultTitle}</title>
       <meta name="description" content={metaDescription} />
       {metaImage && <meta name="image" content={metaImage} />}
       {location && <link rel="canonical" href={`${location}`} />}
       <link rel="preconnect" href="https://www.googletagmanager.com" />
       <link rel="preconnect" href="https://js.intercomcdn.com" />
       <link rel="preconnect" href="https://js.intercomcdn.com" />
      </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
