import { useStaticQuery, graphql } from 'gatsby';

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

  return data.allMdx.group.map((group: { fieldValue: string }) => group.fieldValue);
};

export default useAllCategories;
