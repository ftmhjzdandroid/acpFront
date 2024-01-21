import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "../../atoms";

interface IProps<T> {
  data: T[];
  className?: string;
  onClick?: (tab?: T) => void;
  children?: ((tab?: T) => JSX.Element) | ReactNode;
  itemClassName?: string;
  selectedItemClassName?: string;
}

const TabBar = <T extends { title: string; key: string; name?: string; route?: string }>(props: IProps<T>) => {
  const { children, className, data = [], itemClassName, selectedItemClassName, onClick = () => { } } = props;
  const pathName = location.href;
  const index = data.findIndex(d => pathName.includes(d.route ?? ""));
  const [activeTab, setActiveTab] = useState(data[index]?.title ?? data[0]?.title);
  const navigate = useNavigate();

  if (data.length === 0) return <></>;

  return (
    <>
      <Box className={`hidden lg:flex w-1/2 md:gap-3 items-center justify-end flex-wrap mb-4 ${className}`} >
        {data.map((tab, index) => {
          return (
            <div className="">
              <Typography
                key={index}
                type="h3"
                className={` transition-colors duration-500 mt-5 cursor-pointer px-5 select-none font-semibold ${activeTab === tab.title ? "th-text-neutral-50 ".concat(selectedItemClassName ?? "") : "th-text-neutral-200 ".concat(itemClassName ?? "")}`}
                onClick={() => {
                  setActiveTab(tab.title)
                  onClick(tab);
                  navigate(tab?.route ?? "/");
                }}
              >
                {tab.title}
              </Typography>
              <div className="relative"><Box className={`absolute left-2 top-[20.5px] h-[5px] w-5/6 rounded-t transition-colors duration-200 ${activeTab === tab.title ? "th-bg-neutral-50" : ""}`}></Box></div>
            </div>
          );
        })}
      </Box >
      {children}
    </>
  );
};

export default TabBar;
