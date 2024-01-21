import React, { ReactNode } from "react";
import { Box } from "../box";
interface IProps {
  children?: ReactNode;
  beforeIcon?: ReactNode;
  afterIcon?: ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
  onClick?: () => void;
}

export const Badge = (props: IProps) => {
  const {
    children,
    className,
    beforeIcon = <></>,
    afterIcon = <></>,
    style,
    onClick = () => {},
  } = props;
  return (
    <Box onClick={onClick} className={`bade-outline-color ${className}`} style={style}>
      {beforeIcon}
      {children}
      {afterIcon}
    </Box>
  );
};
