<h1 align="center">
  Test
</h1>


## Error: unknown fragment ...GatsbyImageSharpFluid
`gatsby-node.ts`
```
bannerImage {
  childImageSharp {
    fluid(maxWidth: 1920) {
      ...GatsbyImageSharpFluid
    }
  }
}
```
Solution:
```
bannerImage {
  childImageSharp {
    fluid(maxWidth: 1920) {
      src
      srcSet
      aspectRatio
      sizes
      base64
    }
  }
  publicURL
}
```
Source: [Problems with 'gatsby-image' and their workarounds](https://theleakycauldronblog.com/blog/problems-with-gatsby-image-and-their-workarounds)