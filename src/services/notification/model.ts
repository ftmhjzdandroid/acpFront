import { IGeoType } from "../../models";
import { InformationLabelModel } from "../../models/notice";

export interface ICPModel {
  name: string;
  itemId: string;
}
export interface IPartnerModel {
  partnerName: string;
  address: string;
  partnerItemId: string;
}
export interface ICpartyModel {
  cpartyName: string;
  nationalNumber: string;
  cpartyItemId: string;
}

export interface ITargetsModel {
  geoIds: IGeoType[];
  partnerTypes: ICPModel[];
  cpartyTypes: ICPModel[];
  licenseTypes: ICPModel[];
  partners: IPartnerModel[];
  cparties: ICpartyModel[];
}
export interface TargetAppsDataModel {
  id: number;
  name: string;
}
export interface ISaveNoticModel {
  metaInfo: {
    title: string;
    validTo: string;
    validFrom: string;
    tags: InformationLabelModel[];
    targetApps: TargetAppsDataModel[];
  };
  targets: ITargetsModel;
  attachments: {
    fileName: string;
    fileExt: string;
    fileId?: string;
    base64?: string;
  }[];
  content: {
    body: string;
    subtitle: string;
  };
  isActive: boolean;
  isPin?: boolean;
  creationDate?: string;
  itemId?: string;
  appSymbol?: "HITRX" | "PSC" | "MDP";
}

export interface IFetchNoticModel {
  searchClasue: {
    keyword: string;
  };
  pageNumber: string | number;
  pageSize: number;
}

export interface IPinNoticModel {
  itemIds: string[];
  status: boolean;
}
