export const persianDateToEnglish = (date: any) => {
  if(!date) return "";
  return date.replace(/[۰-۹]/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
};
