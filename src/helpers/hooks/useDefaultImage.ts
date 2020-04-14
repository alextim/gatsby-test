import { useStaticQuery, graphql } from 'gatsby';

//const defaultImagePath = 'default.png';
// gnifetti-alps-italy.jpg

const useDefaultImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gnifetti-alps-italy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return data.placeholderImage.childImageSharp.fluid;
};

export default useDefaultImage;
