import React, { ReactFragment, useEffect, useState } from "react";
import { Typography } from "../../atoms";
interface IProps<T> {
  data?: T[];
  className?: string;
  activeIndex?: number;
  children?: ((tab?: T) => JSX.Element) | ReactFragment;
  onClick?: (tab?: T) => void;
  isActivateOrderTab?: boolean;
  tabName?: string;
}

const Tab = <
  T extends { title: string; key: string; icon: React.ReactElement }
>(
  props: IProps<T>
) => {
  const {
    children,
    className,
    data = [],
    onClick = () => {},
    activeIndex = 0,
    isActivateOrderTab,
    tabName,
  } = props;
  const [activeTab, setActiveTab] = useState<T>(
    activeIndex != -1 ? data[activeIndex] : data[0]
  );

  useEffect(() => {
    // example of data about tabs name [{"key": "order","title": "تجویز","route": "order"},]
    if (isActivateOrderTab && tabName !== "order") setActiveTab(data[0]);
  }, [isActivateOrderTab]);

  if (data.length === 0) return <></>;
  return (
    <>
      <ul className={`border-b-2 flex items-center mb-4 ${className}`}>
        {data.map((tab, index) => {
          return (
            <li
              key={index}
              className="text-center px-4 cursor-pointer"
              onClick={() => {
                setActiveTab(tab);
                onClick(tab);
              }}
            >
              <a
                className={`${
                  tab?.key === activeTab?.key
                    ? "text-[#3D4FBD] border-b-2 border-[#3D4FBD]"
                    : ""
                }  transition-colors duration-500 py-1 md:py-2 block`}
              >
                <div className="flex gap-2 items-center">
                  {tab.icon}
                  <Typography type="h4">{tab.title}</Typography>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      {children &&
        (typeof children === "object" ? children : children(activeTab))}
    </>
  );
};

export default Tab;
