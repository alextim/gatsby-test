import taxonomy from '../data/taxonomy';

import getKeyByValue from '../lib/getKeyByValue';
import translit from '../lib/translit';
import slugify from '../lib/slugify';

const getSafeCategorySlug = (s: string): string => {
  const key = getKeyByValue(taxonomy.category, s.toLowerCase());
  const path = key || s;
  return slugify(translit(path, 1));
};

const getTaxonomyByName = (name: string) => taxonomy[name];

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
export { getSafeCategorySlug, getTaxUrlAndNames, getTaxonomyByName, sanitizeKeys };
