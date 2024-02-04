import React, { ReactFragment, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps<T> {
    data?: T[];
    className?: string;
    activeIndex?: number;

    children?: ((tab?: T) => JSX.Element) | ReactFragment;
    onClick?: (tab?: T) => void;
    itemClassName?: string;
    selectedItemClassName?: string;
}

const TabBar = <T extends { title: string, key: string, name?: string }>(props: IProps<T>) => {
    const { children, className, data = [], onClick = () => { }, activeIndex = 0, itemClassName, selectedItemClassName } = props;

    const [activeTab, setActiveTab] = useState<T>(data[activeIndex]);

    if (data.length === 0) return <></>;
const navigate = useNavigate();
    return (
        <>
            <ul
                className={`border-b-2 border-[#E1E4E8] flex md:gap-3 items-center justify-start mb-4 flex-wrap ${className}`}
            >
                {data.map((tab, index) => {
                    return (
                        <li
                            key={index}
                            className={`${tab.key === activeTab.key ? "border-b-4 border-[#225CAE] !text-[#3568D4] md:font-bold" : ""
                                }  text-sm md:text-base transition-colors duration-500 py-1 md:py-2 text-[#777B82] cursor-pointer px-5 select-none md:font-bold
                                ${tab.key === activeTab.key ? selectedItemClassName : itemClassName}
                                `}
                            onClick={() => {
                                setActiveTab(tab);
                                onClick(tab);
                            }}
                        >
                            {tab.title}
                        </li>
                    );
                })}
            </ul>
            {children && (typeof children === "object" ? children : children(activeTab))}
        </>
    );
};

export default TabBar;
