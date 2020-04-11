import { useStaticQuery, graphql } from 'gatsby';

const useAllYYYYMM = (): string[] => {
  const data = useStaticQuery(graphql`
    query AllYYYMMQuery {
      allMdx {
        group(field: fields___yyyymm) {
          field
          fieldValue
          totalCount
        }
      }
    }
  `);
  return data.allMdx.group.map((group: { fieldValue: string }) => group.fieldValue);
};

export default useAllYYYYMM;
