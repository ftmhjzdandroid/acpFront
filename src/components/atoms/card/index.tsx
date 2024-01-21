import React from "react";
interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  padding?: string;
}

export const Card = (props: IProps) => {
  const { children, className = "", onClick = () => { }, padding } = props;
  return (
    <div
      className={`bg-[#FFFFFF] shadow break-all ${padding ?? "p-3 md:p-5"
        }  rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
