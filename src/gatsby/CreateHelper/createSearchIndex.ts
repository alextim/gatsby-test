import fs from 'fs';

import siteConfig from '../../data/site-config';
import Utils from '../../lib/utils';
import { IEscTrip } from '../../components/trip/trip.d';

function createSearchIndex(this: any, trips: Array<{ node: IEscTrip }>) {
  console.log('========================');
  console.log(siteConfig.searchIndexFileName);
  const tripsIndex = trips.reduce(
    (
      o,
      {
        node: {
          slug,
          path,
          title,
          description, // metaDescription, // metaTitle,
          excerpt,
          featuredImage,
          groupSize,
          season,
          destination,
          activity,
          difficultyLevel,
          showPrice,
          lowestPrice,
          currency,
          enableSale,
          isDatesOnRequest,
          isShowNights,
          days,
          startFinishDates,
        },
      },
    ) => {
      const item = {
        slug,
        path,
        title,
        description: description && Utils.stripHtmlTags(description),
        // metaTitle,
        // metaDescription,
        excerpt,
        featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : undefined,

        groupSize,
        season,
        destination,
        activity,
        difficultyLevel,

        showPrice,
        lowestPrice,
        currency,
        enableSale,

        isDatesOnRequest,
        isShowNights,
        days,
        startFinishDates,
      };
      o.push(item);
      return o;
    },
    new Array<any>(),
  );
  fs.writeFileSync(`public/${siteConfig.searchIndexFileName}`, JSON.stringify(tripsIndex));
  console.log('OK');
}

export default createSearchIndex;
