import { ILink } from '../lib/types';
import { ITaxNode, Taxonomy } from '../types/types';
import useTaxonomy from '../helpers/hooks/useTaxonomy';

interface ITaxEdge {
  node: ITaxNode;
}
const buildTaxonomyLookup = (edges: Array<ITaxEdge>): Taxonomy => {
  const tax = new Set<string>();
  edges.forEach((edge) => tax.add(edge.node.fields.taxonomy));

  return [...tax].reduce(
    (o: {}, taxonomyName: string) => ({
      ...o,
      [taxonomyName]: edges
        .filter((edge) => edge.node.fields.taxonomy === taxonomyName)
        .reduce(
          (o: {}, edge) => ({
            ...o,
            [edge.node.key]: {
              name: edge.node.name,
              path: edge.node.fields.path,
              description: edge.node.description,
              bannerImage: edge.node.bannerImage,
              featuredImage: edge.node.featuredImage,
              taxonomyName: taxonomyName,
            },
          }),
          {},
        ),
    }),
    {},
  );
};
const buildTaxonomyLookupNode = (nodes: Array<ITaxNode>): Taxonomy => {
  const tax = new Set<string>();
  nodes.forEach((node) => tax.add(node.fields.taxonomy));

  return [...tax].reduce(
    (o: {}, taxonomyName: string) => ({
      ...o,
      [taxonomyName]: nodes
        .filter((node) => node.fields.taxonomy === taxonomyName)
        .reduce(
          (o: {}, node) => ({
            ...o,
            [node.key]: {
              name: node.name,
              path: node.fields.path,
              description: node.description,
              bannerImage: node.bannerImage,
              featuredImage: node.featuredImage,
              taxonomyName: taxonomyName,
            },
          }),
          {},
        ),
    }),
    {},
  );
};

const getTaxonomyByName = (taxonomyName: string) => {
  const edges = useTaxonomy();
  const tax = buildTaxonomyLookup(edges)[taxonomyName];
  if (!tax) {
    throw new Error(`Unknown taxonomy name: "${taxonomyName}"`);
  }
  return tax;
};

const getTerm = (key: string, taxonomyName: string) => {
  const tax = getTaxonomyByName(taxonomyName);
  return tax[key];
};

const getTermName = (key: string, taxonomyName: string) => {
  const term = getTerm(key, taxonomyName);
  return term.name;
};

const getTaxUrlAndNames = (taxonomyName: string, keys: string[]): Array<ILink> => {
  const tax = getTaxonomyByName(taxonomyName);
  return keys.map((key) => ({ name: tax[key].name, url: tax[key].path }));
};

const prepareDestinations = (
  data: { allTaxonomyYaml: { edges: Array<any> }; allTrips: { edges: Array<any> } },
  destinations: Array<string> = [],
  limit = 0,
) => {
  const tax = buildTaxonomyLookup(data.allTaxonomyYaml.edges)['destination'];
  const tripEdges = data.allTrips.edges;

  const a1 = destinations.length > 0 ? destinations : data.allTaxonomyYaml.edges.map((e) => e.node.key);
  /* destination should contain at least one trip */
  const a2 = a1.filter((item) => tripEdges.some((e) => e.node.destination.some((d: string) => d === item)));
  const a3 = limit === 0 ? a2 : a2.slice(0, limit);

  const tripsCount = tripEdges.length;

  return a3.map((key) => {
    let path;
    let n = 0;
    for (let i = 0; i < tripsCount; i++) {
      if (tripEdges[i].node.destination.some((d: string) => d === key)) {
        if (n === 0) {
          path = tripEdges[i].node.fields.path;
        }
        n = n + 1;
        if (n === 2) {
          break;
        }
      }
    }
    const img = tax[key].featuredImage;
    return {
      title: tax[key].name,
      path: n > 1 ? tax[key].path : path /* if destination has only one trip then goto directly to trip page */,
      featuredImage: img ? img.childImageSharp.fluid : undefined,
    };
  });
};
export {
  buildTaxonomyLookup,
  buildTaxonomyLookupNode,
  getTaxUrlAndNames,
  getTaxonomyByName,
  getTerm,
  getTermName,
  prepareDestinations,
};
