import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TreeDataModel } from "../../models/treeModel/tree-infoModel";
import { targetsInitialValues, newNoticeInitialData } from "./default-values";
import { CpartyDataType } from "../cparty/model";
import { onSelectDataHandler } from "./utils/onTreeData-Selector";
import {
  AttachmentType,
  ContentType,
  IGeoType,
  MetaInfoType,
  NotificationModel,
  PartnerDataType,
  ReceiversTargetType,
  TargetType,
} from "../../models";

export interface NotificationState {
  notificationList: NotificationModel[];
  newNotice: NotificationModel;
  editMode: boolean;
}

const initialState: NotificationState = {
  notificationList: [],
  newNotice: newNoticeInitialData,
  editMode: false,
};
//*****************************************************************************************************************************************
const targetsUpdater = (
  data: TreeDataModel[],
  sourceData: TreeDataModel[]
): TreeDataModel[] => {
  let updatedData: TreeDataModel[] = [];
  data.map((item) => {
    if (updatedData.length === 0)
      updatedData = onSelectDataHandler(!item.isSelected, item, sourceData);
    else updatedData = onSelectDataHandler(!item.isSelected, item, updatedData);
  });
  return updatedData;
};
//*****************************************************************************************************************************************
const removeDataHandller = <T extends { id: number | string }>(
  id: number | string,
  data: T[]
): T[] => {
  return data.filter((item) => item.id !== id);
};
//*****************************************************************************************************************************************
export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    changeEditMode: (state, action: PayloadAction<{ isEnabled: boolean }>) => {
      state.editMode = action.payload.isEnabled;
    },
    changeActiveMode: (state, action: PayloadAction<{ isActive: boolean }>) => {
      state.newNotice.isActive = action.payload.isActive;
    },
    addToNewNotification: (
      state,
      action: PayloadAction<{
        notification: NotificationModel;
      }>
    ) => {
      state.newNotice = { ...action.payload.notification };
    },
    addToMetaInfo: (
      state,
      action: PayloadAction<{ metaInfo: MetaInfoType }>
    ) => {
      state.newNotice.metaInfo = action.payload.metaInfo;
    },
    addToTargetList: (state, action: PayloadAction<TargetType>) => {
      state.newNotice.targets = action.payload;
    },
    updateTargetsTypeDataState: (
      state,
      action: PayloadAction<{
        targetType: "partner" | "cparty" | "license";
        selectedTargets: ReceiversTargetType[];
      }>
    ) => {
      switch (action.payload.targetType) {
        case "partner": {
          state.newNotice.targets.partnerTypes = action.payload.selectedTargets;
          break;
        }
        case "cparty": {
          state.newNotice.targets.cpartyTypes = action.payload.selectedTargets;
          break;
        }
        case "license": {
          state.newNotice.targets.licenseTypes = action.payload.selectedTargets;
          break;
        }
        default:
          break;
      }
    },
    addToNotice: (state, action: PayloadAction<{ content: ContentType }>) => {
      state.newNotice.content = action.payload.content;
    },
    addToAttachment: (
      state,
      action: PayloadAction<{ attachment: AttachmentType[] }>
    ) => {
      state.newNotice.attachments = action.payload.attachment;
    },
    addToGeoInfo: (
      state,
      action: PayloadAction<{ selectedGeoInfo: IGeoType }>
    ) => {
      state.newNotice.targets.geoIds = [
        ...state.newNotice.targets.geoIds,
        action.payload.selectedGeoInfo,
      ];
    },
    removeItemFromGeoInfo: (
      state,
      action: PayloadAction<{ id: number | string }>
    ) => {
      state.newNotice.targets.geoIds = removeDataHandller(
        action.payload.id,
        state.newNotice.targets.geoIds
      );
    },
    removeAllGeoInfo: (state) => {
      state.newNotice.targets.geoIds = [];
    },
    addToPartner: (state, action: PayloadAction<PartnerDataType>) => {
      state.newNotice.targets.partners = [
        ...state.newNotice.targets.partners,
        action.payload,
      ];
    },
    addToCparty: (state, action: PayloadAction<CpartyDataType>) => {
      state.newNotice.targets.cparties = [
        ...state.newNotice.targets.cparties,
        action.payload,
      ];
    },
    removeItemFromPartner: (
      state,
      action: PayloadAction<{ itemId: string }>
    ) => {
      state.newNotice.targets.partners =
        state.newNotice.targets.partners.filter(
          (p) => p.itemId !== action.payload.itemId
        );
    },
    removeItemFromCparty: (
      state,
      action: PayloadAction<{ itemId: string }>
    ) => {
      state.newNotice.targets.cparties =
        state.newNotice.targets.cparties.filter(
          (c) => c.itemId !== action.payload.itemId
        );
    },
    removeAllPartner: (state) => {
      state.newNotice.targets.partners = [];
    },
    removeAllReceivers: (state) => {
      state.newNotice.targets = targetsInitialValues;
    },
    removeCurrentNotice: (state) => {
      state.newNotice = newNoticeInitialData;
    },
  },
});

export const {
  addToMetaInfo,
  addToTargetList,
  updateTargetsTypeDataState,
  addToNewNotification,
  addToGeoInfo,
  addToPartner,
  addToCparty,
  addToNotice,
  removeCurrentNotice,
  removeItemFromGeoInfo,
  removeItemFromPartner,
  removeItemFromCparty,
  removeAllGeoInfo,
  removeAllPartner,
  removeAllReceivers,
  addToAttachment,
  changeEditMode,
  changeActiveMode,
} = notificationSlice.actions;

export const notificationState = (state: RootState) => state.notification;

export default notificationSlice.reducer;
