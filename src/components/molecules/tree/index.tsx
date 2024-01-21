import React, { useEffect } from "react";
import cx from "classnames";
import TreeView, { EventCallback, INode, flattenTree } from "react-accessible-treeview";
import { Box, Typography } from "../../atoms";
import { IFlatMetadata } from "react-accessible-treeview/dist/TreeView/utils";
import { ArrowUp2, DirectNormal, Folder2, FolderOpen, MinusSquare, TickSquare } from "iconsax-react";
import { ReceiversTargetType } from "../../../models";
import { onToggleHaandle } from "../../../pages/notifications/create-notification/utils";

interface IProps {
    baseData: ReceiversTargetType[];
    onSelect: (selectedNodes: ReceiversTargetType[]) => void;
    selectedNodesState: ReceiversTargetType[];
}

interface ICheckBoxProps {
    variant?: "all" | "none" | "some";
    isOpen?: boolean;
    className?: string;
    onClick?: EventCallback;
}

const MultiSelectCheckboxDisabled = ({ baseData, onSelect, selectedNodesState }: IProps) => {
    const selectedNodesId = selectedNodesState.map(p => p.id);
    const folder: any = {
        id: "0",
        name: "",
        children: baseData
    }
    const data = flattenTree(folder);

    const singleNodeSelectionHandle = (element: INode<IFlatMetadata>, callbackFunction: () => void) => {
        onSelect(onToggleHaandle(element, baseData, selectedNodesState));
        callbackFunction();
    }

    const iconStyle = "text-blue-800 w-4 h-4 md:w-5 md:h-5 cursor-pointer";
    const UnTickSquare = ({ onClick }: ICheckBoxProps) => (
        <Box
            className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] border border-blue-800 rounded hover:shadow cursor-pointer ml-[3px]"
            onClick={onClick}
        ></Box>
    );

    const CheckBoxIcon = ({ variant, ...rest }: ICheckBoxProps) => {
        switch (variant) {
            case "all":
                return <TickSquare size={21} color="#1E40AF" variant="Bold" className=" cursor-pointer " {...rest} />;
            case "none":
                return <UnTickSquare {...rest} />;
            case "some":
                return <MinusSquare color="#1E40AF" className=" cursor-pointer " size={20} {...rest} />;
            default:
                return null;
        }
    };

    const ArrowIcon = ({ isOpen, className }: ICheckBoxProps) => {
        const baseClass = "arrow";
        const classes = cx(
            baseClass,
            { [`${baseClass}--closed`]: !isOpen },
            { [`${baseClass}--open`]: isOpen },
            className
        );
        return <ArrowUp2
            className={`transform duration-300 ${isOpen ? "rotate-1" : "rotate-[-180deg] "
                } ${iconStyle} `.concat(classes)}

        />;
    }
    return (
        <div className="checkbox">
            <TreeView
                data={data}
                aria-label="Checkbox tree"
                multiSelect
                propagateSelect
                propagateSelectUpwards
                togglableSelect
                nodeRenderer={({
                    element,
                    isBranch,
                    isExpanded,
                    isSelected,
                    isDisabled,
                    isHalfSelected,
                    getNodeProps,
                    level,
                    handleSelect,
                    handleExpand,
                    dispatch,
                }) => {
                    useEffect(() => {
                        if (selectedNodesId.filter(idValue => idValue === element.id.toString()).length === 0) {
                            dispatch({ type: "DESELECT", id: element.id, multiSelect: true })
                        } else {
                            dispatch({
                                type: "SELECT_MANY",
                                ids: selectedNodesId,
                                select: true,
                                multiSelect: true,
                            });
                        }
                    }, [selectedNodesId])
                    return (
                        <>
                            <div
                                {...getNodeProps({ onClick: handleExpand })}
                                style={{
                                    marginRight: level > 1 ? 10 * (level + 1) : 0,
                                    opacity: isDisabled ? 0.5 : 1,
                                }}
                                className="flex justify-between items-center border border-gray-100 shadow p-3 rounded-md hover:border hover:border-blue-500 hover:text-blue-500 mt-3"
                            >
                                <Box className="flex items-center gap-1" onClick={(e) => {
                                    if (!isBranch) {
                                        onSelect(onToggleHaandle(element, baseData, selectedNodesState))
                                        handleSelect(e);
                                        e.stopPropagation();
                                    }
                                }}>
                                    <CheckBoxIcon
                                        className="checkbox-icon "
                                        onClick={(e) => {
                                            onSelect(onToggleHaandle(element, baseData, selectedNodesState));
                                            handleSelect(e);
                                            if (!isSelected) {
                                                dispatch({ type: "EXPAND", id: element.id })
                                            }
                                            e.stopPropagation();
                                        }}
                                        variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
                                    />
                                    {isBranch ?
                                        (
                                            <>
                                                {isExpanded ? <FolderOpen color="#1E40AF" size={21} /> : <Folder2 color="#1E40AF" size={21} />}
                                            </>
                                        )
                                        :
                                        (<DirectNormal color="#1E40AF" size={21} />)
                                    }
                                    <Typography
                                        type="h4"
                                        className="name mr-1 font-medium cursor-pointer select-none"
                                        onClick={() => !isBranch ? singleNodeSelectionHandle(element, () => {
                                            dispatch({ type: "DESELECT", id: element.id, multiSelect: true })
                                        }) : () => { }}
                                    >
                                        {element.name}
                                    </Typography>
                                </Box>
                                {isBranch && <ArrowIcon isOpen={isExpanded} className={`${isExpanded ? "rotate-0" : "rotate-180"}`} />}
                            </div>
                        </>
                    )
                }}
            />
        </div>
    );
}
export default MultiSelectCheckboxDisabled;