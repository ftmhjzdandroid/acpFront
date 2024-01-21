import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authValidate";
import { initializeApi } from "./initialize";
import burgerMenuSlideReducer from "./slices/burgerMenu";
import notificationSliceReducer from "./slice/notification-stepper";
import { geoApi } from "./geo";
import { tagListApi } from "./tag-info";
import { ownerShipApi } from "./ownership";
import { cpartyApi } from "./cparty";
import { partnerApi } from "./partner";
import { partnerType } from "./partnerType";
import { cpartyType } from "./cpartyType";
import { licenseType } from "./licenseType";
import { saveNotificationApi } from "./notification";
import { downloadAttachApi } from "./attachments";
import { folderApi } from "./folders";

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuSlideReducer,
    notification: notificationSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [initializeApi.reducerPath]: initializeApi.reducer,
    [geoApi.reducerPath]: geoApi.reducer,
    [cpartyApi.reducerPath]: cpartyApi.reducer,
    [tagListApi.reducerPath]: tagListApi.reducer,
    [ownerShipApi.reducerPath]: ownerShipApi.reducer,
    [partnerApi.reducerPath]: partnerApi.reducer,
    [partnerType.reducerPath]: partnerType.reducer,
    [cpartyType.reducerPath]: cpartyType.reducer,
    [licenseType.reducerPath]: licenseType.reducer,
    [folderApi.reducerPath]: folderApi.reducer,
    [saveNotificationApi.reducerPath]: saveNotificationApi.reducer,
    [downloadAttachApi.reducerPath]: downloadAttachApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      initializeApi.middleware,
      geoApi.middleware,
      folderApi.middleware,
      cpartyApi.middleware,
      partnerApi.middleware,
      tagListApi.middleware,
      ownerShipApi.middleware,
      partnerType.middleware,
      cpartyType.middleware,
      licenseType.middleware,
      downloadAttachApi.middleware,
      saveNotificationApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
