import taxonomy from '../data/taxonomy';

import getKeyByValue from './../lib/getKeyByValue';
import translit from './../lib/translit';
import slugify from './../lib/slugify';

const getSafeCategorySlug = (s: string): string => {
  const key = getKeyByValue(taxonomy.category, s.toLowerCase());
  const path = key || s;
  return slugify(translit(path, 1));
};

function getCategoryUrlAndNames(
  cats: readonly string[],
  base: string,
): Array<{
  name: string;
  url: string;
}> {
  return cats.map((cat) => ({ name: cat, url: `/${base}/${getSafeCategorySlug(cat)}` }));
}

export { getSafeCategorySlug, getCategoryUrlAndNames };
