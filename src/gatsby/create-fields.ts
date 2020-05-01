import { GatsbyNode } from 'gatsby';
import { parse as pathParse } from 'path';
import moment from 'moment';

import siteConfig from '../data/site-config';
/**
 * // import { parseISO, formatISO } from 'date-fns';

 *
 * TODO: moment
 * https://github.com/you-dont-need/You-Dont-Need-Momentjs
 * https://github.com/you-dont-need/You-Dont-Need-Momentjs#string--date-format
 * https://github.com/date-fns/date-fns
 *
 */

import translit from '../lib/translit';
import slugify from '../lib/slugify';

interface ITripNode {
  slug: string;
  date: string;
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

const slugFromPath = (name: string, dir: string): string => {
  if (name !== 'index' && dir !== '') {
    return `${safeSlug(dir)}/${safeSlug(name)}`;
  }
  if (dir === '') {
    return safeSlug(name);
  }
  return safeSlug(dir);
};

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
    } else {
      slug = slugFromPath(parsedFilePath.name, parsedFilePath.dir);
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
        slug = safeSlug((node as IMdNode).frontmatter.slug);
      }

      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        // const date = parseISO((node as IMdNode).frontmatter.date);
        // if (String(date) === 'Invalid Date') {

        const date = moment.utc((node as IMdNode).frontmatter.date, siteConfig.dateFormat.frontmatter);
        if (!date.isValid) {
          throw new Error(`Invalid date. ${(node as IMdNode).frontmatter.date}`);
        }

        const isoDate = date.toISOString();
        // const isoDate = formatISO(date);
        createNodeField({
          node,
          name: 'date',
          value: isoDate,
        });

        // const yyyymm = isoDate.toString().substr(0, 7).replace('-', '');
        const yyyymm = isoDate.substr(0, 7).replace('-', '');
        createNodeField({
          node,
          name: 'yyyymm',
          value: yyyymm,
        });
      }
    }

    let type;

    if (fileNode.sourceInstanceName === 'pages') {
      type = 'page';
      slug = `/${slug}`;
    } else if (fileNode.sourceInstanceName === 'blog') {
      type = 'post';
      slug = `${siteConfig.blogUrlBase}/${slug}`;
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

      const date = moment.utc((node as ITripNode).date, siteConfig.dateFormat.frontmatter);
      if (!date.isValid) {
        throw new Error(`Invalid date. ${(node as ITripNode).date}`);
      }
      const isoDate = date.toISOString();
      createNodeField({
        node,
        name: 'date',
        value: isoDate,
      });
    } else if (fileNode.sourceInstanceName === 'taxonomy') {
      const parsedFilePath = pathParse(fileNode.relativePath);
      const taxName = parsedFilePath.name === 'index' ? parsedFilePath.dir : parsedFilePath.name;
      const slug = `/${taxName}/${(node as ITaxNode).key}`;
      createNodeField({
        node,
        name: 'type',
        value: 'taxonomy',
      });
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
      createNodeField({
        node,
        name: 'taxonomy',
        value: taxName,
      });
    } else if (fileNode.sourceInstanceName === 'gear') {
      createNodeField({
        node,
        name: 'type',
        value: 'gear',
      });
    }
  }
};
