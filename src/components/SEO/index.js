/**
 * 
 * Method 3: Generate the current page URL with the pathname property from location data
 * 
 * * https://css-tricks.com/how-to-the-get-current-page-url-in-gatsby/
 * 
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import useSiteMetadata from './../../helpers/hooks/useSiteMetadata';
import useOrganization from './../../helpers/hooks/useOrganization';
import SchemaOrg from './SchemaOrg';

function SEO({ title, description, pathname, image, type, date, locale = 'ru' }) {
  const meta = useSiteMetadata();
  const org = useOrganization();

  const url = `${meta.siteUrl}${pathname}`;

  title = title || meta.title;
  description = description || meta.description;
  image = image ? new URL(image, meta.siteUrl) : false;
  // TODO: switch content content: `website`, 
  type = type || 'website';
  //TODO:
  const isBlogPost = type === 'article';
  const datePublished = isBlogPost ? date : false;

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
        <meta property="og:type" content={type} />
        <meta property="og:locale" content={locale} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {meta.social.fbAppID && <meta property="fb:app_id" content={meta.social.fbAppID} />}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        { /* TODO: AUTHOR*/ }
        {meta.author && <meta name="twitter:creator" content={meta.author} />}
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
        siteUrl={meta.siteUrl}
        author={meta.author}
        organization={org}
        defaultTitle={title}
      />
    </>
  );
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  locale: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  locale: "ru",
};


export default SEO;