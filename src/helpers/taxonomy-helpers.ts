import { ILink } from '../lib/types';
import { ITaxNode, Taxonomy, TermMap } from '../types/types';
import useTaxonomy from '../helpers/hooks/useTaxonomy';

interface ITaxEdge {
  node: ITaxNode;
}
const buildTaxonomyLookup = (edges: Array<ITaxEdge>): Taxonomy => {
  const tax = new Set<string>();
  edges.forEach((e) => tax.add(e.node.fields.taxonomy));

  return [...tax].reduce(
    (o: {}, taxonomyName: string) => ({
      ...o,
      [taxonomyName]: edges
        .filter((e) => e.node.fields.taxonomy === taxonomyName)
        .reduce(
          (o: {}, e) => ({
            ...o,
            [e.node.key]: {
              name: e.node.name,
              slug: e.node.fields.slug,
              description: e.node.description,
              bannerImage: e.node.bannerImage,
              featuredImage: e.node.featuredImage,
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
  const unique = new Set(keys.map((key) => key.toLowerCase()));
  const result = new Array<string>();

  unique.forEach((item) => {
    const value = tax[item];
    if (value) {
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

const sanitizeKeys = (taxonomyName: string, keys: Array<string>): Array<string> =>
  _sanitizeKeys(getTaxonomyByName(taxonomyName), keys);

const getTaxUrlAndNames = (taxonomyName: string, keys: string[]): Array<ILink> => {
  const tax = getTaxonomyByName(taxonomyName);
  const sanitized = _sanitizeKeys(tax, keys);

  return sanitized.map((key) => ({ name: tax[key].name, url: tax[key].slug }));
};

export { buildTaxonomyLookup, getTaxUrlAndNames, getTaxonomyByName, getTerm, getTermName, sanitizeKeys };
