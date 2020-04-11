export interface IAction {
  title: string;
  url: string;
}

export interface IActions {
  primary: IAction;
  secondary?: IAction;
}


export interface ICTASettings {
  title: string;
  subTitle?: string;
  text: string;
  buttons: IActions;
}

export interface IStickyNews {
  title: string;
  subTitle?: string;
  text: string;
  // TODO: url
  trip: string;
}

export interface IFeatureItem {
  title: string;
  text: string;
  url: string;
  icon: string | [string, string];
  color?: string;
}

export interface IFeaturesSettings {
  title: string;
  subTitle?: string;
  text?: string;
  items: IFeatureItem[];
}

export interface ILatestNewsCards {
  title: string;
  buttons: {
    primary: IActions;
  };
}