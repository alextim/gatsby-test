import { useStaticQuery, graphql } from 'gatsby';
import { FluidImage } from '../../types/types';

interface ISlideItem {
  title: string;
  description?: string;
  featuredImage?: FluidImage;
  action?: {
    caption: string;
    url: string;
  };
}

const useHomePageSettings2 = (): Array<{ node: ISlideItem }> => {
  const data = useStaticQuery(graphql`
    query HomePageSettingsQuery {
      allYaml(filter: { fields: { type: { eq: "home" } } }) {
        edges {
          node {
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            action {
              caption
              url
            }
          }
        }
      }
    }
  `);

  return data.allYaml.edges;
};

export default useHomePageSettings2;
