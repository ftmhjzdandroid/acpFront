import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "../../atoms";

interface IProps<T> {
    data?: T[];
    className?: string;
    onClick?: (tab?: T) => void;
    children?: ((tab?: T) => JSX.Element);
    itemClassName?: string;
    selectedItemClassName?: string;
    icon?: React.ReactNode
}

export const TabView = <
    T extends { title: string; key: string; name?: string; route?: string ;icon?: React.ReactNode}
>(
    props: IProps<T>
) => {
    const {
        children,
        className,
        data = [],
        itemClassName,
        selectedItemClassName,
        onClick = () => { },
        icon
    } = props;

    if (data.length === 0) return <></>;

    // const [searchParams] = useSearchParams();
    // const paramMode = searchParams.get("mode");

    return (
        <>
            <ul
                className={`border-b border-natural-300 w-full flex gap-5 items-center justify-start mb-4 flex-wrap px-4 ${className}`}
            >
                {data.map((tab, index) => {
                    return (
                        <NavLink
                            to={tab.route ?? "/"}
                            key={index}
                            className={({ isActive }) =>
                                `${isActive
                                    ? "border-b-2 border-[#3949AB] text-[#3949AB]"
                                    : ""
                                } duration-500 py-1 md:py-2 text-natural-600 cursor-pointer select-none
                                ${isActive
                                    ? selectedItemClassName
                                    : itemClassName
                                }
                `
                            }
                            onClick={() => {
                                onClick(tab);
                            }}
                        >
                            <div className="flex items-center gap-3">
                                {icon ? icon : null}
                                <Typography>{tab.title}</Typography>
                            </div>
                        </NavLink>
                    );
                })}
            </ul>
            {children}
        </>
    );
};