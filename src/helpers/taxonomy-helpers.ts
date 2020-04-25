import { Taxonomy } from '../types/types';
import getKeyByValue from '../lib/getKeyByValue';
import useTaxonomy from '../helpers/hooks/useTaxonomy';

const createTaxonomy = (edges: any): Taxonomy => {
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

const getTaxonomyByName = (name: string) => {
  const edges = useTaxonomy();
  const tax = createTaxonomy(edges)[name];
  if (!tax) {
    throw new Error(`Unknown taxonomy name: "${name}"`);
  }
  return tax;
};

const sanitizeKeys = (name: string, keys: Array<string>): Array<string> => {
  const tax = getTaxonomyByName(name);
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

function getTaxUrlAndNames(
  name: string,
  keys: string[],
): Array<{
  name: string;
  url: string;
}> {
  const sanitized = sanitizeKeys(name, keys);
  const tax = getTaxonomyByName(name);
  return sanitized.map((key) => ({ name: tax[key], url: `/${name}/${key}` }));
}

export { createTaxonomy, getTaxUrlAndNames, getTaxonomyByName, sanitizeKeys };
