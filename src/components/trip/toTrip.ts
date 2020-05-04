const toTrip = (node: any) => {
  const { path } = node.fields;
  const {
    slug,
    title,
    description,
    // metaTitle,
    // metaDescription,
    excerpt,
    featuredImage,

    groupSize,
    destination,
    activity,
    difficultyLevel,

    priceMode,
    currency,
    enableSale,
    priceList,

    isDatesOnRequest,
    isShowNights,
    dates,
    duration,
    itinerary,
  } = node;

  return {
    slug,
    path,

    title,
    description,
    // metaTitle,
    // metaDescription,
    excerpt,
    featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null,

    groupSize,
    destination,
    activity,
    difficultyLevel,

    priceMode,
    currency,
    enableSale,
    priceList,

    duration,
    isShowNights,
    isDatesOnRequest,
    dates,
    itinerary,
  };
};

export default toTrip;
