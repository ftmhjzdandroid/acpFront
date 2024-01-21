import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
interface AcpProviderProps {
  children: React.ReactNode;
}
const AcpProvider = (props: AcpProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};
export default AcpProvider;
