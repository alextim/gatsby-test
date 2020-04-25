import { useStaticQuery, graphql } from 'gatsby';
import { getTaxonomyByName } from '../taxonomy-helpers';

const useAllCategories = (): string[] => {
  const data = useStaticQuery(graphql`
    query AllCategoriesQuery {
      allMdx {
        group(field: frontmatter___category) {
          field
          fieldValue
          totalCount
        }
      }
    }
  `);
  const tax = getTaxonomyByName('category');
  return data.allMdx.group
    .filter((group: { fieldValue: string }) => tax[group.fieldValue])
    .map((group: { fieldValue: string }) => group.fieldValue);
};

export default useAllCategories;
