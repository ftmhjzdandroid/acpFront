import React from "react";
import { useOutsideClick } from "../../../hook";
interface IProps {
  children?: React.ReactNode;
  handleClickOutside?: () => void;
  ref?: React.LegacyRef<HTMLDivElement> | undefined;
  refInput?: React.LegacyRef<HTMLInputElement>;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  id?: string;
  dir?: "ltr" | "rtl";
  title?: string;
  style?: React.CSSProperties | undefined;
}

export const Box = (props: IProps) => {
  const {
    children,
    onMouseEnter,
    onMouseLeave,
    className = "",
    handleClickOutside = () => {},
    title = "",
    style,
    ref,
    onClick = () => {},
  } = props;
  const refOutside = useOutsideClick<HTMLDivElement>(handleClickOutside);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      ref={ref ? ref : refOutside}
      title={title}
      style={style}
      onClick={(e) => onClick(e)}
      {...props}
    >
      {children}
    </div>
  );
};
