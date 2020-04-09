/**
 *
 * Method 3: Generate the current page URL with the pathname property from location data
 * https://css-tricks.com/how-to-the-get-current-page-url-in-gatsby/
 *
 * */

import * as React from 'react';
import Helmet from 'react-helmet';

import useSiteMetadata from '../../helpers/hooks/useSiteMetadata';
import useOrganization from '../../helpers/hooks/useOrganization';
import SchemaOrg from './SchemaOrg';

interface SEOProps {
  readonly title?: string;
  readonly description?: string;
  readonly pathname: string;
  readonly image?: string;
  readonly type?: string;
  readonly date?: any;
  readonly locale?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, pathname, image, type, date, locale }) => {
  const meta = useSiteMetadata();
  const org = useOrganization();

  const url = `${meta.siteUrl}${pathname}`;

  const title_ = title || meta.title;
  const description_ = description || meta.description;
  const image_ = image ? new URL(image, meta.siteUrl) : false;
  // TODO: switch content content: `website`
  const type_ = type || 'website';
  // TODO:
  const isBlogPost = type_ === 'article';
  const datePublished = isBlogPost ? date : false;

  return (
    <>
      <Helmet>
        <html lang={locale} />
        {/* General tags */}
        <title>{title_}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description_} />
        {image && <meta name="image" content={image_} />}

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type_} />
        <meta property="og:locale" content={locale} />
        <meta property="og:title" content={title_} />
        <meta property="og:description" content={description_} />
        {image && <meta property="og:image" content={image_} />}
        {meta.social.fbAppID && <meta property="fb:app_id" content={meta.social.fbAppID} />}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image_" />
        {/* TODO: AUTHOR */}
        {meta.author && <meta name="twitter:creator" content={meta.author} />}
        <meta name="twitter:title" content={title_} />
        <meta name="twitter:description" content={description_} />
        {image && <meta name="twitter:image" content={image_} />}
      </Helmet>

      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title_}
        image={image_}
        description={description_}
        datePublished={datePublished}
        siteUrl={meta.siteUrl}
        author={meta.author}
        organization={org}
        defaultTitle={title_}
      />
    </>
  );
};

export default SEO;
