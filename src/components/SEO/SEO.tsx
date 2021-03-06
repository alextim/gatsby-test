/**
 *
 * Method 3: Generate the current page URL with the pathname property from location data
 * https://css-tricks.com/how-to-the-get-current-page-url-in-gatsby/
 *
 * */

import React from 'react';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../../helpers/hooks/useSiteMetadata';
import useOrganization from '../../helpers/hooks/useOrganization';
import SchemaOrg from './SchemaOrg';

type Props = {
  title?: string;
  description?: string;
  pathname: string;
  image?: string;
  type?: string;
  date?: string;
  locale?: string;
  noindex?: boolean;
}

const SEO = ({ title, description, pathname, image, type, date, locale, noindex = false }: Props) => {
  const meta = useSiteMetadata();
  const org = useOrganization();

  const url = `${meta.siteUrl}${pathname}`;

  const metaTitle = title || meta.title;
  const metaDescription = description || meta.description;
  const metaImage = image ? new URL(image, meta.siteUrl).href : '';
  // TODO: switch content content: `website`
  const metaType = type || 'website';
  // TODO:
  const isBlogPost = metaType === 'article';
  const datePublished = isBlogPost ? date : false;

  return (
    <>
      <Helmet>
        <html lang={locale} />
        {/* General */}
        <title>{metaTitle}</title>
        <link rel="canonical" href={url} />
        {noindex && <meta name="robots" content="noindex" />}
        <meta name="description" content={metaDescription} />
        {metaImage && <meta name="image" content={metaImage} />}

        {/* OpenGraph */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content={metaType} />
        <meta property="og:locale" content={locale} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {metaImage && <meta property="og:image" content={metaImage} />}
        {meta.social.fbAppID && <meta property="fb:app_id" content={meta.social.fbAppID} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_metaImage" />
        {/* TODO: AUTHOR */}
        {meta.author && <meta name="twitter:creator" content={meta.author} />}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {metaImage && <meta name="twitter:image" content={metaImage} />}
      </Helmet>

      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={metaTitle}
        image={metaImage}
        description={metaDescription}
        datePublished={datePublished}
        siteUrl={meta.siteUrl}
        author={meta.author}
        organization={org}
        defaultTitle={metaTitle}
      />
    </>
  );
};

export default SEO;
