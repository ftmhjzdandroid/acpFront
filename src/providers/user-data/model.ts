/* eslint-disable @typescript-eslint/naming-convention */
export interface notSeenBillStatModel {
  billType: "N";
  shouldNavigateToBill: boolean;
  type: string;
  cnt: number;
}

export type FilterModel = {
  id: number;
  tag: string;
  label: string;
  checked: boolean;
};
export interface AuthValidateModel {
  fullName?: string;
  gender?: "M" | "F";
  partnerName?: string;
  partnerImage?: string;
  cpartyImage?: string;
  cpartyToken?: string;
  partnerNN?: string;
  partnerId?: string;
  orderableServiceList?: string[];
  deliverableServiceList?: string[];
  /**
   * فیلتر مربوط به تب تجویز - قسمت دارو
   */
  prescribeDrugFilters?: FilterModel[];
  /**
   * تب مربوط به تب تجویز  - قسمت خدمات
   */
  prescribeServiceFilters?: FilterModel[];

  /**
   * تب مربوط به ارائه
   */
  presentationFilters?: FilterModel[];
  /**
   * تب مربوط به ارجاع به
   */
  referralToFilters?: FilterModel[];
  /**
   * تولید تب های مربوط به تجویز و ارائه
   */
  tabs?: { key: "order" | "deliver" | "refer" | "diagnosis"; title: string; route: string }[];
  notSeenBillStat?: notSeenBillStatModel[];
  preferencesData?: any;
  accessNodes?: string[];
}
