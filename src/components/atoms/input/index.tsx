import React, { useEffect } from "react";
import { useDebounce } from "../../../hook";

export type IInputProps = {
  refInput?: React.LegacyRef<HTMLInputElement>;
  type?: "number" | "text";
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  className?: string;
  isError?: boolean;
  isDigit?: boolean;
  name?: string;
  autocomplete?: "on" | "off";
  maxLength?: number;
  debounceTime?: number;
  onEnter?: (text: string) => void;
  onKeyDown?: (key: string) => void;
  onChangeText?: (text: string) => void;
  onClick?: () => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onFocus?: () => void;
  id?: string;
  dir?: "ltr" | "rtl";
  disabled?: boolean;
};
// & InputHTMLAttributes<HTMLInputElement>
export const DefualtClassInput =
  "py-3 px-4 border w-full rounded-lg outline-none transition duration-300 text-sm";
export const debounceTime = 20;
export const Input = (props: IInputProps) => {
  const {
    onChangeText = () => { },
    onEnter = () => { },
    placeholder,
    value,
    readOnly,
    onClick = () => { },
    onBlur = () => { },
    onKeyDown,
    isError,
    refInput,
    type = "text",
    isDigit,
    autocomplete,
    name,
    maxLength,
    id,
    onFocus,
    debounceTime: debounceTimeFromProps,
    dir = "rtl",
    disabled,
  } = props;

  let { className = "" } = props;

  const [state, setState] = React.useState<string>(value ?? "");
  // const debounce = useDebounce(state, debounceTimeFromProps ?? debounceTime);

  const onChangeTextCheck = (text: string) => {
    if (isDigit) {
      const result = text.replace(/\D/g, "");
      onChangeText(result);
      setState(result);
      return;
    }
    onChangeText(text);
    setState(text);
  };

  const onkeyDownEnterCheck = (key: string) => {
    if (key === "Enter") onEnter(state);
  };

  useEffect(() => {
    // if(!value) return;
    setState(value ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // useEffect(() => {
  //   onChangeText(debounce);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [debounce]);

  if (isError) className += " border-red-600";
  else className += " border-br ";

  className += " bg-[#FFFFFF] border-[#CACACA] font-semibold text-xs md:text-sm";

  return (
    <input
      disabled={disabled}
      id={id}
      ref={refInput}
      maxLength={maxLength}
      nrx-test="input"
      value={readOnly ? state : value}
      // value={state}
      onClick={onClick}
      readOnly={readOnly}
      type={type}
      dir={dir}
      placeholder={placeholder}
      name={name}
      onKeyDown={(e) => {
        if (onKeyDown) onKeyDown(e.key);
        onkeyDownEnterCheck(e.key);
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={autocomplete}
      onChange={(e) => onChangeTextCheck(e.target.value)}
      className={`${DefualtClassInput} ${className.trim()}`}
    />
  );
};
