import { createContext, useContext } from "react";
import { AuthValidateModel } from "./model";

/**
 * دلیل انتخاب
 * any
 * برای این قست برای این است که فعلا مدل برگشتی برای این قسمت مشخص نشده است
 */
const User = createContext<{
  authValidate?: AuthValidateModel | undefined;
  preferencesData?: any;
}>({});

interface IProps {
  data?: AuthValidateModel | undefined;
  preferencesData?: any;

  accessNodes?: string[];
  children: React.ReactNode;
}
export function UserProvider(props: IProps) {
  const { children, data, preferencesData, accessNodes = [] } = props;

  const values = {
    authValidate: data,
    preferencesData: preferencesData,
    accessNodes,
  };

  return <User.Provider value={values}>{children}</User.Provider>;
}
export default function useUser() {
  return useContext(User);
}
