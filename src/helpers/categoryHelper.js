import categories from './../data/categories'

const translit = require('./../lib/translit')
const slugify = require('./../lib/slugify')

const getSafeCategorySlug = s => {
    let path
    for (let i=0; i < categories.length; i++) {
        if (categories[i].name.toLowerCase() === s.toLowerCase()) {
            path = categories[i].key
        }
    }
    path = path || s
    const trans = translit(path, 1)
    const slug = slugify(trans)
    return slug
}


const getCategoryUrlAndNames = (cats, base) => 
    cats.map( cat => ({ name: cat, url: `/${base}/${getSafeCategorySlug(cat)}` }) )


export { getCategoryUrlAndNames }