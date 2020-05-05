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

import { ISrcTrip } from '../components/trip/trip.d';
import { getLowestPrice, getDays, getStartFinishDates } from '../components/trip/helpers';

interface ITaxNode {
  key: string;
}

interface IMdNode {
  frontmatter: {
    slug: string;
    title: string;
    date?: string;
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

export const createFields: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createNodeField, createParentChildLink } = actions;
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

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
        slug = safeSlug((node as IMdNode).frontmatter.slug);
      } else if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
        slug = safeSlug((node as IMdNode).frontmatter.title);
      }
    }

    if (!slug) {
      const parsedFilePath = pathParse(fileNode.relativePath);
      slug = slugFromPath(parsedFilePath.name, parsedFilePath.dir);
    }

    let type;
    let path;
    if (fileNode.sourceInstanceName === 'pages') {
      type = 'page';
      path = `/${slug}`;
    } else if (fileNode.sourceInstanceName === 'blog') {
      type = 'post';
      path = `${siteConfig.blogUrlBase}/${slug}`;
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
    } else {
      throw new Error('Unkonwn type: ' + fileNode.sourceInstanceName);
    }
    createNodeField({
      node,
      name: 'type',
      value: type,
    });

    createNodeField({
      node,
      name: 'path',
      value: path,
    });
  } else if (node.internal.type === 'Yaml') {
    const fileNode = getNode(node.parent);
    if (fileNode.sourceInstanceName === 'trips') {
      const trip = node as ISrcTrip;
      const { date, slug, published, priceMode, priceList } = trip;

      if (!published) {
        return;
      }

      const mdate = moment.utc(date, siteConfig.dateFormat.frontmatter);
      if (!mdate.isValid) {
        throw new Error(`Invalid date. ${date}`);
      }
      const isoDate = mdate.toISOString();

      const sslug = safeSlug(slug);
      const path = `${siteConfig.tripsUrlBase}/${sslug}`;
      const tripNode = {
        ...node,
        path,
        date: new Date(isoDate),

        showPrice: ((priceMode as unknown) as number) !== 0 && priceList ? true : false,
        showPriceList: ((priceMode as unknown) as number) === 2 && priceList ? true : false,
        lowestPrice: priceList ? getLowestPrice(priceList) : undefined,

        days: getDays(trip),
        startFinishDates: getStartFinishDates(trip, getDays(trip)),

        id: createNodeId(`${node.id}-trip`),
        children: [],
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(node),
          type: 'trip',
        },
      };
      delete tripNode.duration;
      delete tripNode.dates;
      delete tripNode.priceMode;

      createNode(tripNode);
      createParentChildLink({ parent: node, child: tripNode });
    } else if (fileNode.sourceInstanceName === 'taxonomy') {
      const parsedFilePath = pathParse(fileNode.relativePath);
      const taxName = parsedFilePath.name === 'index' ? parsedFilePath.dir : parsedFilePath.name;
      const path = `/${taxName}/${(node as ITaxNode).key}`;
      createNodeField({
        node,
        name: 'type',
        value: 'taxonomy',
      });
      createNodeField({
        node,
        name: 'path',
        value: path,
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
    } else if (fileNode.sourceInstanceName === 'home') {
      createNodeField({
        node,
        name: 'type',
        value: 'home',
      });
    }
  }
};
