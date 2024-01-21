import React from "react";
export interface IImageProps {
  src?: string;
  className?: string;
  onClick?: () => void;
}
export const Image = (props: IImageProps) => {
  return <img {...props} />;
};
