import { StringMap } from '../lib/types';
import { Taxonomy } from '../types/types';
// import getKeyByValue from '../lib/getKeyByValue';
import useTaxonomy from '../helpers/hooks/useTaxonomy';

const buildTaxonomyLookup = (edges: any): Taxonomy => {
  const tax = new Set<string>();
  edges.forEach((e: any) => tax.add(e.node.fields.taxonomy));

  const a = [...tax];
  const o = a.reduce(
    (o: {}, term: string) => ({
      ...o,
      [term]: edges
        .filter((e: any) => e.node.fields.taxonomy === term)
        .reduce((o: {}, e: any) => ({ ...o, [e.node.key]: e.node.value }), {}),
    }),
    {},
  );
  return o as Taxonomy;
};

const getTaxonomyByName = (taxonomyName: string) => {
  const edges = useTaxonomy();
  const tax = buildTaxonomyLookup(edges)[taxonomyName];
  if (!tax) {
    throw new Error(`Unknown taxonomy name: "${taxonomyName}"`);
  }
  return tax;
};

const getTermName = (key: string, taxonomyName: string) => {
  const tax = getTaxonomyByName(taxonomyName);
  return tax[key];
};

const _sanitizeKeys = (tax: StringMap, keys: Array<string>): Array<string> => {
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

const getTaxUrlAndNames = (
  taxonomyName: string,
  keys: string[],
): Array<{
  name: string;
  url: string;
}> => {
  const tax = getTaxonomyByName(taxonomyName);
  const sanitized = _sanitizeKeys(tax, keys);

  return sanitized.map((key) => ({ name: tax[key], url: `/${name}/${key}` }));
};

export { buildTaxonomyLookup, getTaxUrlAndNames, getTaxonomyByName, getTermName, sanitizeKeys };
