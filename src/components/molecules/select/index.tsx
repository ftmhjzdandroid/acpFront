import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../../hook";
import { Loading } from "../../atoms/loading";
import {
  IInputAnimatedProps,
  InputAnimatedPlaceHolder,
} from "../input/input-animated";
import { ArrowDown2 } from "iconsax-react";

interface IProps<T, S, G> {
  data?: T[];
  groups?: G[];
  pin?: S[];
  onEnter?: (text: string) => void;
  onChangeText?: (text: string) => void;
  onClickOnRightIcon?: (text: string) => void;
  onClickItem?: (item: T) => void;
  onClickGroup?: (item: G) => void;
  value?: string;
  isLoading?: boolean;
  closeAfterClick?: boolean;
  rightIcon?: React.ReactNode;
  keys?: { [key: string]: string };
  inputProps?: IInputAnimatedProps;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: {
    empty?: string;
    input?: string;
  };
  icons?: React.ReactNode;
  rendersGroup?: (item: G, index?: number) => React.ReactNode;
  renders?: (
    item: T,
    index?: number,
    category?: G,
    value?: string
  ) => React.ReactNode;
  type?: "single" | "multi";
  onClickTextField?: () => void;
  onFocus?: () => void;
  useForPackages?: boolean;
}

export const Select = <T, S, G extends { items: any[]; key?: string }>(
  props: IProps<T, S, G>
) => {
  const {
    isLoading,
    closeAfterClick = true,
    placeholder,
    rightIcon,
    onClickItem = () => { },
    onClickOnRightIcon = () => { },
    onEnter = () => { },
    onChangeText = () => { },
    keys,
    renders = () => { },
    rendersGroup = () => { },
    data = [],
    groups = [],
    pin = [],
    icons,
    type = "single",
    inputProps,
    inputRef = useRef<HTMLInputElement>(null),
    onClickTextField,
    onFocus = () => { },
    useForPackages = false,
  } = props;

  const [status, setStatus] = useState<"close" | "open" | "pin">("close");
  const [activeGroup, setActiveGroup] = useState<G>();

  const handleClickOutside = () => {
    setStatus("close");
  };

  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  const onFocusHandle = () => {
    if (isLoading === true) setStatus("open");
    onFocus();
  };

  useEffect(() => {
    if (!groups || groups.length === 0) return;
    setActiveGroup(groups[0] ?? []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  const onKeyDown = (key: string) => {
    if (key === "Escape") setStatus("close");
  };

  const onClick = () => {
    if (data.length > 0 || groups.length > 0) {
      setStatus("open");
    }
    if (onClickTextField) {
      onClickTextField();
    }
  };

  const openPin = () => {
    if (status !== "close") {
      setStatus("close");
    } else setStatus("pin");
  };

  const onClickOnIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClickOnRightIcon(inputRef?.current?.value ?? "");
  };
  return (
    <div className="relative" ref={ref}>
      <div className="relative">
        {rightIcon && (
          <span
            onClick={onClickOnIcon}
            className="absolute cursor-pointer right-1 top-0 h-full w-8 flex items-center justify-center z-10"
          >
            {rightIcon}
          </span>
        )}
        <InputAnimatedPlaceHolder
          {...inputProps}
          refInput={inputRef}
          id={inputProps?.id}
          name={inputProps?.name}
          onBlur={inputProps?.onBlur}
          placeholder={placeholder?.input}
          className={`${rightIcon ? "px-8" : "pl-10 pr-5"} ${inputProps?.className
            }`}
          value={props.value}
          onEnter={onEnter}
          onChangeText={onChangeText}
          onKeyDown={onKeyDown}
          onClick={onClick}
          onFocus={onFocusHandle}
        />
        <div className="absolute left-2 top-0 h-full flex items-center justify-center cursor-pointer">
          {icons}
          {isLoading === true ? (
            <Loading className="w-6" />
          ) : (
            <>
              {!inputProps?.disabled &&
                (data.length > 0 || groups.length > 0) && (
                  <ArrowDown2
                    onClick={() =>
                      setStatus((prev) => (prev === "close" ? "open" : "close"))
                    }
                    className="w-5"
                    fill="grey"
                  ></ArrowDown2>
                )}
            </>
          )}
        </div>
      </div>

      {groups.length > 0 && status === "open" && (
        <ul className="absolute left-0 w-full th-bg-color z-40  max-h-[15rem] border rounded-lg shadow overflow-y-auto">
          <li className="flex sticky top-0 z-10 w-full th-bg-card-to-card ">
            {groups.map((group, indexGroup) => {
              return (
                <div
                  key={indexGroup}
                  onClick={() => setActiveGroup(group)}
                  className={`${activeGroup?.key === group.key
                    ? "th-bg-color"
                    : "th-bg-card-to-card"
                    } px-1 cursor-pointer`}
                >
                  <>{rendersGroup(group, indexGroup)}</>
                </div>
              );
            })}
          </li>
          {activeGroup &&
            activeGroup.items &&
            activeGroup.items.map((active, index) => {
              return (
                <li onClick={() => setStatus("close")} key={index}>
                  <>
                    {renders(
                      active,
                      index,
                      activeGroup,
                      inputRef?.current?.value
                    )}
                  </>
                </li>
              );
            })}
        </ul>
      )}

      {data.length > 0 && status === "open" && (
        <ul className="absolute left-0 w-full bg-[#FFFFFF] z-40  max-h-[15rem] border rounded-lg shadow overflow-y-auto">
          <>
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    onClickItem(item);
                    setStatus("close");
                  }}
                  className={`flex items-center p-1 ${useForPackages && "even:bg-gray-100"
                    } w-full  cursor-pointer`}
                >
                  <>{renders(item, index)}</>
                </li>
              );
            })}
          </>
        </ul>
      )}
    </div>
  );
};
