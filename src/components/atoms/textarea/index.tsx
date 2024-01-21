import React, { useEffect } from "react";
import { useDebounce } from "../../../hook";
import { debounceTime, DefualtClassInput } from "../input";

interface IProps {
  placeholder?: string;
  className?: string;
  isError?: boolean;
  value?: string;
  id?: string;
  refInput?: React.LegacyRef<HTMLTextAreaElement>;
  onChangeText?: (text: string) => void;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
  disabled?: boolean;
  onClick?: () => void;
  maxLength?: number;
  letterCounter?: boolean;
}

export const TextArea = (props: IProps) => {
  const {
    placeholder,
    isError,
    onChangeText = () => { },
    value,
    id,
    name,
    onBlur,
    disabled,
    onClick,
    maxLength = 1000,
    letterCounter,
  } = props;
  let { className } = props;

  const [state, setState] = React.useState<string>(value ?? "");
  const debounce = useDebounce(state, debounceTime);

  useEffect(() => {
    // if(!value) return;
    setState(value ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  useEffect(() => {
    onChangeText(debounce);
  }, [debounce]);

  if (isError) className += " border-red-600";
  else className += " ";

  return (
    <div className="relative">
      <textarea
        className={`${className} ${DefualtClassInput} ${letterCounter && "pb-10"} bg-[#FFFFFF]`}
        id={id}
        name={name}
        value={value ? value : state}
        placeholder={placeholder}
        ref={props.refInput}
        onBlur={onBlur}
        maxLength={maxLength}
        onChange={(e) => setState(e.target.value)}
        disabled={disabled}
        onClick={onClick}
      />
      {letterCounter && <span className="flex items-center text-neutral-400 text-xs absolute left-3 bottom-3">{maxLength}/{value ? value.length : state.length}</span>}
    </div>
  );
};
