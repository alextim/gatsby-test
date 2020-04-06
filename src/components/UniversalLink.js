
// src/components/UniversalLink.js
// https://dev.to/nevernull/setup-menu-navigation-guide-to-gatsby-wordpress-starter-advanced-with-previews-i18n-and-more-3bfl#create-components-in-gatsby-computer
// https://dev.to/spences10/build-a-coding-blog-from-scratch-with-gatsby-and-mdx-2h31

import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const UniversalLink = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
export default UniversalLink;