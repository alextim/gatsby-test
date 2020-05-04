import fs from 'fs';

import siteConfig from '../../data/site-config';
import { sanitizeKeys } from '../../helpers/taxonomy-helpers';
import Utils from '../../lib/utils';
import { ITrip } from '../../components/trip/trip';

function createSearchIndex(this: any, trips: Array<any>) {
  console.log('========================');
  console.log(siteConfig.searchIndexFileName);
  const tripsIndex = trips.reduce((o, edge: any) => {
    const {
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

      priceMode,
      currency,
      enableSale,
      priceList,

      isDatesOnRequest,
      duration,
      isShowNights,
      dates,
      itinerary,
    } = edge.node as ITrip;
    o.push({
      path: edge.node.fields.path,
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

      priceMode,
      currency,
      enableSale,
      priceList,

      isDatesOnRequest,
      duration: itinerary && itinerary.dayItems ? itinerary.dayItems.length : duration,
      isShowNights,
      dates: dates,
    });
    return o;
  }, new Array<any>());
  fs.writeFileSync(`public/${siteConfig.searchIndexFileName}`, JSON.stringify(tripsIndex));
  console.log('OK');
}

export default createSearchIndex;
