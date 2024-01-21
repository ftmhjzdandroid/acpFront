export namespace NationalCodeStorage {
  export const get = () => {
    const codes = JSON.parse(localStorage.getItem("nationalCodes") ?? "[]") as string[];
    return codes;
  };
  const save = (codes: string[]) => {
    localStorage.setItem("nationalCodes", JSON.stringify(codes));
  };
  export const remove = (national_number: string) => {
    const nationalCodes = get();
    const codes = nationalCodes.filter(f => f !== national_number);
    save(codes);
    return codes;
  };
  export const add = (national_number: string) => {
    const codes = remove(national_number);
    codes.unshift(national_number);
    save(codes);
    return codes;
  };
}
