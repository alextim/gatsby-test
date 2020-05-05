import fs from 'fs';

import siteConfig from '../../data/site-config';
import { sanitizeKeys } from '../../helpers/taxonomy-helpers';
import Utils from '../../lib/utils';
import { IEscTrip } from '../../components/trip/trip.d';

function createSearchIndex(this: any, trips: Array<any>) {
  console.log('========================');
  console.log(siteConfig.searchIndexFileName);
  const tripsIndex = trips.reduce((o, { node }: any) => {
    const {
      slug,
      path,
      title,
      description,
      // metaTitle,
      // metaDescription,
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
    } = node as IEscTrip;
    o.push({
      slug,
      path,
      title,
      description: description && Utils.stripHtmlTags(description),
      // metaTitle,
      // metaDescription,
      excerpt,
      featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : undefined,

      groupSize,
      season: season && sanitizeKeys(this._taxonomy.season, season),
      destination: destination && sanitizeKeys(this._taxonomy.destination, destination),
      activity: activity && sanitizeKeys(this._taxonomy.activity, activity),
      difficultyLevel,

      showPrice,
      lowestPrice,
      currency,
      enableSale,

      isDatesOnRequest,
      isShowNights,
      days,
      startFinishDates,
    });
    return o;
  }, new Array<any>());
  fs.writeFileSync(`public/${siteConfig.searchIndexFileName}`, JSON.stringify(tripsIndex));
  console.log('OK');
}

export default createSearchIndex;
