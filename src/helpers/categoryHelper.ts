import categories from '../data/category';

import translit from './../lib/translit';
import slugify from './../lib/slugify';

const getSafeCategorySlug = (s: string): string => {
  let path;
  for (const cat of categories) {
    if (cat.value.toLowerCase() === s.toLowerCase()) {
      path = cat.key;
    }
  }
  path = path || s;
  const trans = translit(path, 1);
  const slug = slugify(trans);
  return slug;
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
