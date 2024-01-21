export namespace URLS {
  /***************************************************************************************************
   * Validation and Initialize
   */
  export const INIT = "./v1/services/app/init";
  export const VALIDATE = "./v1/services/auth/validate";

  //**************************************************************************************************
  /**
   * Notification
   */
  //**************************************************************************************************
  export const GEOINFO = "./v1/services/geoInfo/fetch";
  export const TAG_LIST = "./v1/services/tag/list";
  export const OWNERSHIP = "./v1/services/ownership/fetch";
  export const SUB_OWNERSHIP = "./v1/services/subownership/fetch";
  export const CPARTY_SEARCH = "./v1/services/cparty/search";
  export const PARTNER_SEARCH = "./v1/services/partner/search";
  export const PARTNER_TYPE = "./v1/services/partnertype/search";
  export const CPARTY_TYPE = "./v1/services/cpartyType/search";
  export const LICENSE_TYPE = "./v1/services/licenseType/search";
  export const SAVE_NOTIC = "./v1/services/notification/save";
  export const UPDATE_NOTIC = "./v1/services/notification/update";
  export const FETCH_NOTIC = "./v1/services/notification/search";
  export const DELETE_NOTIC = "./v1/services/notification/delete";
  export const ACTIVE_NOTIC = "./v1/services/notification/activate";
  export const PIN_NOTIC = "./v1/services/notification/pin";
  export const DOWNLOAD_ATTACHMENT = "./v1/services/attachment/download";
  export const FETCH_NOTICE_DETAIL = "./v1/services/notification/detail/fetch";
  /******************************************************************************************************
   * Questions Faq and Folder
   */
  //******************************************************************************************************
  export const SAVE_FOLDER = "./v1/services/faq/folder/save";
  export const UPDATE_FOLDER = "./v1/services/faq/folder/update";
  export const FETCH_FOLDER = "./v1/services/faq/folder/fetch";
  export const DELETE_FOLDER = "./v1/services/faq/folder/delete";
  export const SAVE_FAQ = "./v1/services/faq/save";
  export const UPDATE_FAQ = "./v1/services/faq/update";
  export const FETCH_FAQ = "./v1/services/faq/fetch";
  export const DELETE_FAQ = "./v1/services/faq/delete";
  export const MOVE_FAQ = "./v1/services/faq/move";
}
