export const convertToDateFormat=(date:string):string=>{
    return date.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3");
}