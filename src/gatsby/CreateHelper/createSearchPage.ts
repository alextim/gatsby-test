import { IGroup } from '../../types/types';

function createSearchPage(
  this: any,
  component: string,
  path: string,
  seasons: Array<IGroup>,
  destinations: Array<IGroup>,
  activities: Array<IGroup>,
) {
  console.log('========================');
  console.log(`createSearchPage: ${path}`);
  this._createPage({
    path: path,
    component,
    context: {
      pathname: path,
      seasons: seasons
        .filter(({ fieldValue }: IGroup) => this._taxonomy['season'][fieldValue])
        .map(({ fieldValue }: IGroup) => ({ key: fieldValue, value: this._taxonomy['season'][fieldValue].name })),
      destinations: destinations
        .filter(({ fieldValue }: IGroup) => this._taxonomy['destination'][fieldValue])
        .map(({ fieldValue }: IGroup) => ({
          key: fieldValue,
          value: this._taxonomy['destination'][fieldValue].name,
        })),
      activities: activities
        .filter(({ fieldValue }: IGroup) => this._taxonomy['activity'][fieldValue])
        .map(({ fieldValue }: IGroup) => ({
          key: fieldValue,
          value: this._taxonomy['activity'][fieldValue].name,
        })),
    },
  });
  console.log('OK');
}

export default createSearchPage;
