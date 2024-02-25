import * as yup from "yup";

// note validation
export const noteYup = yup.object({
  firstName: yup.string().required("پرکردن این فیلد اجباری است"),
  symbol: yup.string().required("پرکردن این فیلد اجباری است"),
});
export const typenoteYup = yup.object({
  firstName: yup.string().required("پرکردن این فیلد اجباری است"),
  symbol: yup.string().required("پرکردن این فیلد اجباری است"),
  older: yup.string().required("پرکردن این فیلد اجباری است"),
});