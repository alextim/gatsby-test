import { useStaticQuery, graphql } from 'gatsby';

const useDefaultBannerImage = () => {
  const q = graphql`
    query {
      bannerImage: file(relativePath: { eq: "gnifetti-alps-italy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const data = useStaticQuery(q);

  return data.bannerImage.childImageSharp.fluid;
};

export default useDefaultBannerImage;
