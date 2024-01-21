export interface ResponseModel<T = any> {
  info?: T;
  resMessage?: string;
  resCode?: number;
}
