const categories = require('./../data/categories').categories;

const translit = require('./../lib/translit');
const slugify = require('./../lib/slugify');

const getSafeCategorySlug = s => {
    let path;
    for (let i=0; i < categories.length; i++) {
        if (categories[i].name.toLowerCase() === s.toLowerCase()) {
            path = categories[i].key;
        }
    }
    path = path || s;
    const trans = translit(path, 1);
    const slug = slugify(trans);
    return slug;
};


function getCategoryUrlAndNames (cats, base) {
    return cats.map( cat => ({ name: cat, url: `/${base}/${getSafeCategorySlug(cat)}` }) );
}


module.exports = { getSafeCategorySlug, getCategoryUrlAndNames };