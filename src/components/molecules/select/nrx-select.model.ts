export interface NrxSelectModel<T = any> {
  id?: string;
  label: string;
  value?: string;
  main: T;
  children?: NrxSelectModel<T>[];
}
