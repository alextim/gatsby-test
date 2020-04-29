import { ILink } from '../lib/types';
import { ITaxNode, Taxonomy, TermMap } from '../types/types';
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
              slug: edge.node.fields.slug,
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

const _sanitizeKeys = (tax: TermMap, keys: Array<string>): Array<string> => {
  const result = new Array<string>();

  new Set(keys.map((key) => key.toLowerCase())).forEach((item) => {
    if (tax[item]) {
      result.push(item);
    } /* else {
      const key = getKeyByValue(tax, item);
      if (key && !unique.has(key)) {
        result.push(key);
      }
    } */
  });

  return result;
};

const sanitizeKeys = (taxonomy: string | TermMap, keys: Array<string>): Array<string> =>
  _sanitizeKeys(typeof taxonomy === 'string' ? getTaxonomyByName(taxonomy) : taxonomy, keys);

const getTaxUrlAndNames = (taxonomyName: string, keys: string[]): Array<ILink> => {
  const tax = getTaxonomyByName(taxonomyName);
  const sanitized = _sanitizeKeys(tax, keys);

  return sanitized.map((key) => ({ name: tax[key].name, url: tax[key].slug }));
};

export { buildTaxonomyLookup, getTaxUrlAndNames, getTaxonomyByName, getTerm, getTermName, sanitizeKeys };
