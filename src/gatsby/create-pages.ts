/* eslint-disable  @typescript-eslint/no-explicit-any */
/* 
https://github.com/g00glen00b/gatsby-blog/tree/fbfc7040582384ace09738fff0cee34fc228c0a1
https://gatsby-starter-typescript-power-blog.majidhajian.com/blog/coding-is-fun-isnt-it
https://github.com/diogorodrigues/iceberg-gatsby-multilang
*/
import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

import siteConfig from '../data/site-config';
import postArchiveHelper from '../helpers/postArchiveHelper';
import { buildTaxonomyLookup } from '../helpers/taxonomy-helpers';
import { ITaxNode, IGroup } from '../types/types';
import CreateHelper from './CreateHelper';
import { IEscTrip } from '../components/trip/trip.d';

interface INodeTrip extends IEscTrip {
  id: string;
}

interface ITripEdge {
  node: INodeTrip;
}

interface ITaxonomyEdge {
  node: ITaxNode;
}

interface IMdEdge {
  node: {
    id: string;
    fields: {
      path: string;
      type: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

interface IQueryResult {
  allYYYYMM: {
    group: IGroup[];
  };
  allTags: {
    group: IGroup[];
  };
  allCategories: {
    group: IGroup[];
  };
  allSeasons: {
    group: IGroup[];
  };
  allDestinations: {
    group: IGroup[];
  };
  allActivities: {
    group: IGroup[];
  };
  allMarkdown: {
    edges: IMdEdge[];
  };
  allTrips: {
    edges: ITripEdge[];
  };
  allTaxonomy: {
    edges: ITaxonomyEdge[];
  };
}

const allDataQuery = `
  query AllDataQuery {
    allTaxonomy: allYaml(filter: { fields: { type: { eq: "taxonomy" } } } ) {
      edges {
        node {
          key
          name
          description
          bannerImage {
            childImageSharp {
              fluid(maxWidth: 1920) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
            publicURL
          }
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
            publicURL
          }
          fields {
            path
            taxonomy
          }
        }
      }
    }
    allSeasons: allYaml(filter: { fields: { type: { eq: "trip" } }, published: { eq: true } } )  {
      group(field: season) {
        field
        fieldValue
        totalCount
      }
    }
    allDestinations: allYaml(filter: { fields: { type: { eq: "trip" } }, published: { eq: true } } )  {
      group(field: destination) {
        field
        fieldValue
        totalCount
      }
    }
    allActivities: allYaml(filter: { fields: { type: { eq: "trip" } }, published: { eq: true } } )  {
      group(field: activity) {
        field
        fieldValue
        totalCount
      }
    }    
    allYYYYMM: allMdx(filter: { fields: { type: { eq: "post" } }, frontmatter: { published: { eq: true } } } ) {
      group(field: fields___yyyymm) {
        field
        fieldValue
        totalCount
      }
    }
    allCategories: allMdx(filter: { fields: { type: { eq: "post" } }, frontmatter: { published: { eq: true } } } ) {
      group(field: frontmatter___category) {
        field
        fieldValue
        totalCount
      }
    }
    allTags: allMdx(filter: { fields: { type: { eq: "post" } }, frontmatter: { published: { eq: true } } } ) {
      group(field: frontmatter___tag) {
        field
        fieldValue
        totalCount
      }
    }      
    allMarkdown: allMdx(filter: { frontmatter: { published: { eq: true } } } ) {
      edges {
        node {
          id
          fields {
            path
            type
          }
          frontmatter {
            title
          }
        }
      }
    }
    allTrips: allYaml(filter: { fields: { type: { eq: "trip" } }, published: { eq: true } } )  {
      edges {
        node {
          id
          fields {
            path
          }
          title
          description
          excerpt
          featuredImage {
            childImageSharp {
              fluid {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
            publicURL
          }
          destination
          activity
          season
          altitude
          accomodation
          groupSize
          difficultyLevel
          fitnessLevel
          showPrice
          lowestPrice {
            price
            salePrice
          }
          currency
          enableSale
          isDatesOnRequest
          isShowNights
          days
          startFinishDates {
            startDate
            finishDate
            isSale
          }
        }
      }
    }
  }
`;

const tripTemplate = resolve('./src/components/trip/templates/trip.tsx');
const tripsTemplate = resolve('./src/components/trip/templates/trips.tsx');
const seasonTemplate = resolve('./src/components/trip/templates/trips-season.tsx');
const destinationTemplate = resolve('./src/components/trip/templates/trips-destination.tsx');
const activityTemplate = resolve('./src/components/trip/templates/trips-activity.tsx');
const searchTemplate = resolve('./src/components/trip/templates/trips-search/index.ts');

const pageTemplate = resolve('./src/templates/page.tsx');

const postTemplate = resolve('./src/components/post/templates/post.tsx');
const postsTemplate = resolve('./src/components/post/templates/posts.tsx');
const categoryTemplate = resolve('./src/components/post/templates/posts-category.tsx');
const tagTemplate = resolve('./src/components/post/templates/posts-tag.tsx');
const archiveTemplate = resolve('./src/components/post/templates/archive-posts.tsx');

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql<IQueryResult>(allDataQuery);

  if (result.errors) {
    // result.errors.forEach(e => console.error(e.toString()));
    reporter.panicOnBuild('=======Error while running GraphQL query.=========');
    throw result.errors;
  }

  if (result.data === undefined) {
    return null;
  }

  /************  TAXONOMY  ************/
  console.log('========================');
  console.log('TAXONOMY');
  const taxonomy = buildTaxonomyLookup(result.data.allTaxonomy.edges);
  console.log('OK');

  const helper = new CreateHelper(taxonomy, siteConfig.pageSize, createPage);

  /************  TRIPS  ************/
  const trips = result.data.allTrips.edges;
  // INDIVIDUAL TRIP PAGE
  trips.map((edge, i, arr) => helper.createSinglePage(edge, i, arr, tripTemplate, true));

  // TRIPS SEARCH INDEX
  helper.createSearchIndex(trips);

  // TRIPS INDEX
  helper.createPaginationPages(tripsTemplate, trips.length, siteConfig.tripsUrlBase, {});
  // TRIP TAXES
  helper.createTaxonomyPage(result.data.allSeasons.group, seasonTemplate, 'season');
  helper.createTaxonomyPage(result.data.allDestinations.group, destinationTemplate, 'destination');
  helper.createTaxonomyPage(result.data.allActivities.group, activityTemplate, 'activity');

  helper.createSearchPage(
    searchTemplate,
    `${siteConfig.tripsUrlBase}/search`,
    result.data.allSeasons.group,
    result.data.allDestinations.group,
    result.data.allActivities.group,
  );

  /************  PAGES  ************/
  result.data.allMarkdown.edges
    .filter((item) => item.node.fields.type === 'page')
    .map(({ node }: IMdEdge) => {
      console.log('========================');
      console.log('createPages: ' + node.fields.path);
      createPage({
        path: node.fields.path,
        component: pageTemplate,
        context: {
          id: node.id,
        },
      });
      console.log('OK');
    });

  /************  POSTS  ************/
  const posts = result.data.allMarkdown.edges.filter((item) => item.node.fields.type === 'post');
  // INDIVIDUAL POST PAGE
  posts.map((edge, i, arr) => helper.createSinglePage(edge, i, arr, postTemplate, false));
  // POSTS INDEX
  helper.createPaginationPages(postsTemplate, posts.length, siteConfig.blogUrlBase, {});
  // POST TAXES
  helper.createTaxonomyPage(result.data.allCategories.group, categoryTemplate, 'category');
  helper.createTaxonomyPage(result.data.allTags.group, tagTemplate, 'tag');
  // YEAR-MONTH ARCHIVE
  result.data.allYYYYMM.group.map(({ totalCount, fieldValue }: IGroup) =>
    helper.createPaginationPages(archiveTemplate, totalCount, `/blog/${postArchiveHelper.getPath(fieldValue)}`, {
      termKey: fieldValue,
    }),
  );
  return null;
};
