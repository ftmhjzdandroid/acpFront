import { NrxSelectModel } from "./nrx-select.model";

export const convertToNrxSelectModel = <T>(
  data: T[],
  keys?: { [key: string]: string }
): NrxSelectModel<T>[] => {
  if (!keys) return [];

  const map = data.map((m: any) => {
    return {
      label: m[keys.label] ?? "-",
      value: m[keys.value],
      id: m[keys.id],
      main: m,
      // checked: m['selected'],
    };
  });
  return map;
};
