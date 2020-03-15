/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// https://github.com/marisamorby/marisamorby.com/blob/master/packages/gatsby-theme-blog-sanity/src/components/seo.js
// https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/master/src/components/SEO/SEO.js

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import SchemaOrg from './SchemaOrg'

function SEO({ title, description, url, image, isBlogPost, locale }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            baseUrl
            image
            author
            organization {
              name
              url
              logo
            }
            social {
              twitter
              fbAppID
            }
          }
        }
      }`
  )

  const defaults = data.site.siteMetadata;
  const seo = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!')
    return null;
  }

  title = title || defaults.title
  description = description || defaults.description;
  url = url || defaults.baseUrl + window.location.pathname
  image = image ? new URL(image, defaults.baseUrl) : false
  //TODO:
  const datePublished = isBlogPost ? false : false

  return (
    <>
      <Helmet>
        <html lang={locale} />
        {/* General tags */}
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        {image && <meta name="image" content={image} />}

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        { /* TODO: switch content content: `website`,  */ }
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={locale} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {seo.social.fbAppID && <meta property="fb:app_id" content={seo.social.fbAppID} />}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        { /* TODO: AUTHOR*/ }
        {seo.author && <meta name="twitter:creator" content={seo.author} />}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>

      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        siteUrl={seo.siteUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={title}
      />
    </>
  )
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  locale: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  locale: "ru",
};


export default SEO
