import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

export interface IAction {
  title: string;
  url: string;
}

export interface IActions {
  primary: IAction;
  secondary?: IAction;
}

export type FeatureItemType = {
  title: string;
  text: string;
  url: string;
  icon: IconName | [IconPrefix, IconName];
  color?: string;
};

/*
export interface ICTASettings {
  title: string;
  subTitle?: string;
  text: string;
  buttons: IActions;
}

export interface IStickyTrip {
  title: string;
  subTitle?: string;
  text: string;
  // TODO: url
  trip: string;
}

export interface IFeaturesSettings {
  title: string;
  subTitle?: string;
  text?: string;
  items: Array<FeatureItemType>;
}

export interface ILatestPostsCards {
  title: string;
  actions: IActions;
}
*/
