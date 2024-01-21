import React from "react";
import { Typography } from "../typography";
interface IProps {
  message?: string;
}

const SuspenseLoading = (props: IProps) => {
  const { message } = props;
  return (
    <div className="flex h-screen items-center justify-center">
      <Typography>{message ?? "در حال بارگذاری ..."}</Typography>
    </div>
  );
};

export default SuspenseLoading;
