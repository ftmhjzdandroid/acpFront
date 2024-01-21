import React from "react";

interface IProps {
  className?: string;
  onClick?: () => void;
  src:string
}
export const Logo = (props:IProps) => {
  const {className, onClick, src} = props;
  
  return (
    <img
      onClick={onClick}
      className={className}
      src={src}
    />
  );
};
