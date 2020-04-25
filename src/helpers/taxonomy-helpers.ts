import taxonomy from '../data/taxonomy';
//import useTaxonomy from '../helpers/hooks/useTaxonomy';
import getKeyByValue from '../lib/getKeyByValue';

const createTaxonomy = (edges: any) => {
  // const edges = useTaxonomy();
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
  return o;
};

const getTaxonomyByName = (name: string) => {
  /*
  const edges = useTaxonomy();
  const tax = new Set<string>();
  edges.forEach((e: any) => tax.add(e.node.fields.taxonomy));
  if (!tax.has(name)) {
    throw new Error(`Unknown taxonomy name: "${name}"`);
  }
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
  console.log(o);
  */
  return taxonomy[name];
  /*
  const edges = useTaxonomy();
  const taxonomy = new Set();

  edges.forEach(({ node }: any) => taxonomy.add(node.fields.taxonomy));
  if (!taxonomy.has(name)) {
    throw new Error(`Unknown taxonomy name: "${name}"`);
  }

  const obj = edges.reduce((o: {}, e: any) => ({ ...o, [e.node.key]: e.node.value }), {});

  return obj;
  */
};

function getTaxUrlAndNames(
  name: string,
  keys: string[],
): Array<{
  name: string;
  url: string;
}> {
  const tax = getTaxonomyByName(name);
  return keys.map((key) => ({ name: tax[key], url: `/${name}/${key}` }));
}

const sanitizeKeys = (name: string, keys: Array<string>): Array<string> => {
  const tax = getTaxonomyByName(name);
  const unique = new Set(keys.map((key) => key.toLowerCase()));
  const result = new Array<string>();

  unique.forEach((item) => {
    const value = tax[item];
    if (value) {
      result.push(item);
    } else {
      const key = getKeyByValue(tax, item);
      if (key && !unique.has(key)) {
        result.push(key);
      }
    }
  });

  return result;
};
export { createTaxonomy, getTaxUrlAndNames, getTaxonomyByName, sanitizeKeys };
