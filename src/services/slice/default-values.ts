import { NotificationModel, TargetType } from "../../models";

export const newNoticeInitialData: NotificationModel = {
  metaInfo: {
    targetApps: [],
    validFrom: "",
    title: "",
    tags: [],
    validTo: "",
  },
  attachments: [],
  itemId: "",
  isPin: false,
  creationDate: "",
  isActive: true,
  targets: {
    partnerTypes: [],
    partners: [],
    cpartyTypes: [],
    cparties: [],
    licenseTypes: [],
    geoIds: [],
  },
  content: {
    body: "",
    subtitle: "",
  },
};

export const targetsInitialValues: TargetType = {
  partnerTypes: [],
  cpartyTypes: [],
  licenseTypes: [],
  geoIds: [],
  cparties: [],
  partners: [],
};
