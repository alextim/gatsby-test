/**
 * https://assortment.io/posts/gatsby-site-search-lunr-js
 * https://www.gatsbyjs.org/starters/goblindegook/gatsby-starter-typescript/
 *
 */
import fs from 'fs';
import path from 'path';
import { GatsbyNode } from 'gatsby';
import { ITrip } from '../components/trip/trip';
import { buildTaxonomyLookup, sanitizeKeys } from '../helpers/taxonomy-helpers';
import siteConfig from '../data/site-config';
import Utils from '../lib/utils';

interface INode extends ITrip {
  parent: any;
  internal: {
    type: string;
  };
  fields: {
    slug: string;
    type: string;
  };
}

export const createSearchIndex: GatsbyNode['onPostBootstrap'] = ({ getNodes, getNode }) => {
  console.log('========================');
  console.log(`createSearchIndex: ${siteConfig.searchIndexFileName}`);
  const tripsIndex = new Array<any>();

  /************  TAXONOMY  ************/
  // const taxEdges = result.data.allTaxonomyYaml.edges;
  // console.log('========================');
  // console.log('TAXONOMY');
  const taxEdges = getNodes()
    .filter((n: INode) => n.internal.type === 'Yaml' && n.fields.type === 'taxonomy')
    .map((n: any) => ({ node: n }));

  const taxonomy = buildTaxonomyLookup(taxEdges);

  getNodes()
    .filter((n: INode) => n.internal.type === 'Yaml' && n.fields.type === 'trip' && n.published === true)
    .forEach((n: INode) => {
      const {
        title,
        description,
        // metaTitle,
        // metaDescription,
        excerpt,
        featuredImage,

        groupSize,
        season,
        destination,
        activity,
        difficultyLevel,

        priceMode,
        currency,
        enableSale,
        priceList,

        isDatesOnRequest,
        isShowNights,
        dates,
        itinerary,
      } = n;
      let img;
      if (featuredImage) {
        const fileNode = getNode(n.parent);
        // const parsedFilePath = path.parse(fileNode.absolutePath);
        img = path.relative(path.dirname(fileNode.absolutePath), path.join(__dirname, '/static/', featuredImage));
      }
      tripsIndex.push({
        slug: n.fields.slug,
        title,
        description: description && Utils.stripHtmlTags(description),
        // metaTitle,
        // metaDescription,
        excerpt,
        featuredImage: img,

        groupSize,
        season: season && sanitizeKeys(taxonomy.season, season),
        destination: destination && sanitizeKeys(taxonomy.destination, destination),
        activity: activity && sanitizeKeys(taxonomy.activity, activity),
        difficultyLevel,

        priceMode,
        currency,
        enableSale,
        priceList,

        isDatesOnRequest,
        isShowNights,
        dates: dates,
        itinerary: itinerary && itinerary.dayItems ? { dayItems: { length: itinerary.dayItems.length } } : undefined,
      });
    });

  fs.writeFileSync(`public/${siteConfig.searchIndexFileName}`, JSON.stringify(tripsIndex));
  console.log('OK');
};
