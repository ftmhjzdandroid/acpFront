import React from "react";
interface IProps {
  className?: string;
  children?: React.ReactNode;
}
export const Container = (props: IProps) => {
  const { children, className = "" } = props;
  return (
    <div className={`container mx-auto px-3 ${className}`}>{children}</div>
  );
};
