import { GatsbyNode } from 'gatsby';
import { parse as pathParse } from 'path';
import moment from 'moment';

import siteConfig from '../../data/site-config';
import { sanitizeKeys } from '../taxonomy-helpers';
/**
 * // import { parseISO, formatISO } from 'date-fns';

 *
 * TODO: moment
 * https://github.com/you-dont-need/You-Dont-Need-Momentjs
 * https://github.com/you-dont-need/You-Dont-Need-Momentjs#string--date-format
 * https://github.com/date-fns/date-fns
 *
 */

import translit from '../../lib/translit';
import slugify from '../../lib/slugify';

interface ITripNode {
  slug: string;
}

interface ITaxNode {
  key: string;
}

interface IMdNode {
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    category?: string[];
    tag?: string[];
  };
}

const safeSlug = (s: string): string => slugify(translit(s, 1));

export const createFields: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    /*
    if (node.fileAbsolutePath != null) {
      const matcher = /posts\/\d{4}-\d{2}-\d{2}-(.+?)\/index.md$/;
      const [, slug] = node.fileAbsolutePath.match(matcher) || [];
      if (slug) {
        createNodeField({
          node,
          name: 'slug',
          value: slug
        });
      }
    }
    */
    let slug;
    const fileNode = getNode(node.parent);
    const parsedFilePath = pathParse(fileNode.relativePath);

    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = safeSlug((node as IMdNode).frontmatter.title);
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `${safeSlug(parsedFilePath.dir)}/${safeSlug(parsedFilePath.name)}`;
    } else if (parsedFilePath.dir === '') {
      slug = safeSlug(parsedFilePath.name);
    } else {
      slug = safeSlug(parsedFilePath.dir);
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
        slug = safeSlug((node as IMdNode).frontmatter.slug);
      }

      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        // const date = parseISO((node as IMdNode).frontmatter.date);
        // if (String(date) === 'Invalid Date') {
        const date = moment((node as IMdNode).frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid) {
          console.warn('WARNING: Invalid date.', node.frontmatter);
        }

        const isoDate = date.toISOString();
        // const isoDate = formatISO(date);
        createNodeField({
          node,
          name: 'date',
          value: isoDate,
        });

        const yyyymm = isoDate.toString().substr(0, 7).replace('-', '');
        createNodeField({
          node,
          name: 'yyyymm',
          value: yyyymm,
        });
      }
    }

    let type;
    let sanitizedCategory = new Array<string>();
    let sanitizedTag = new Array<string>();

    if (fileNode.sourceInstanceName === 'pages') {
      type = 'page';
      slug = `/${slug}`;
    } else if (fileNode.sourceInstanceName === 'blog') {
      type = 'post';
      slug = `${siteConfig.blogUrlBase}/${slug}`;
      const { category, tag } = (node as IMdNode).frontmatter;

      if (category) {
        sanitizedCategory = sanitizeKeys('category', category);
      }

      if (tag) {
        sanitizedTag = sanitizeKeys('tag', tag);
      }
    } else {
      type = '';
      throw new Error('Unkonwn type: ' + fileNode.sourceInstanceName);
    }
    createNodeField({
      node,
      name: 'type',
      value: type,
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'category',
      value: sanitizedCategory,
    });

    createNodeField({
      node,
      name: 'tag',
      value: sanitizedTag,
    });
  } else if (node.internal.type === 'Yaml') {
    const fileNode = getNode(node.parent);
    if (fileNode.sourceInstanceName === 'trips') {
      const slug = safeSlug((node as ITripNode).slug);
      createNodeField({
        node,
        name: 'type',
        value: 'trip',
      });
      createNodeField({
        node,
        name: 'slug',
        value: `${siteConfig.tripsUrlBase}/${slug}`,
      });
    } else if (fileNode.sourceInstanceName === 'taxonomy') {
      createNodeField({
        node,
        name: 'type',
        value: 'taxonomy',
      });
      const parsedFilePath = pathParse(fileNode.relativePath);
      const slug = `/${parsedFilePath.name}/${(node as ITaxNode).key}`;
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
      createNodeField({
        node,
        name: 'taxonomy',
        value: parsedFilePath.name,
      });
    }
  }
};
