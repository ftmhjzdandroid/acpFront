import DateObject from "react-date-object";
import { convertToEnDigit } from "./convert.to.en-digit";

export const convertPerDigitToDateValue = (perDigit: string): string => {
  let dateVal: DateObject = new DateObject(convertToEnDigit(perDigit));

  return dateVal.format("YYYY/MM/DD");
};
