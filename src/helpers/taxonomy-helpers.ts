import taxonomy from '../data/taxonomy';

import getKeyByValue from '../lib/getKeyByValue';
import translit from '../lib/translit';
import slugify from '../lib/slugify';

const getSafeCategorySlug = (s: string): string => {
  const key = getKeyByValue(taxonomy.category, s.toLowerCase());
  const path = key || s;
  return slugify(translit(path, 1));
};

function getCategoryUrlAndNames(
  cats: string[],
  base: string,
): Array<{
  name: string;
  url: string;
}> {
  return cats.map((cat) => ({ name: cat, url: `/${base}/${getSafeCategorySlug(cat)}` }));
}

const getTaxonomyByName = (name: string) => taxonomy[name];

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
export { getSafeCategorySlug, getCategoryUrlAndNames, getTaxonomyByName, sanitizeKeys };
