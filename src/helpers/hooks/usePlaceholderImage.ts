import { useStaticQuery, graphql } from 'gatsby';

const usePlaceholderImage = () => {
  const q = graphql`
    query PlaceholderImageQuery {
      placeholderImage: file(relativePath: { eq: "trip-ph.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const data = useStaticQuery(q);

  return data.placeholderImage.childImageSharp.fluid;
};

export default usePlaceholderImage;
