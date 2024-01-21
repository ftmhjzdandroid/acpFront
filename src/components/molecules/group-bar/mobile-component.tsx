import { ArrowDown2 } from "iconsax-react"
import { Box, Typography } from "../../atoms"

interface IProps {
    tabGroupList: {
        title: string;
        onClick: () => void;
        isActive: boolean;
    }[];
    dataType: "group" | "single";
    handlePopoverRender: (type: "group" | "single") => JSX.Element;
}
export const MobileGroupTab = ({ tabGroupList, dataType, handlePopoverRender }: IProps) => {
    return (
        <Box className='md:hidden flex items-center justify-between border-b pb-2.5 mt-3.5 relative'>
            {tabGroupList.map((tabGroup, index) =>
                <Box key={index} className='flex items-center gap-1.5' onClick={tabGroup.onClick}>
                    {tabGroup.isActive &&
                        <Box className='w-1 h-1 bg-blue-600 rounded-full'></Box>
                    }
                    <Typography type='h4' className='font-medium'>{tabGroup.title}</Typography>
                    <ArrowDown2 size={16} className='font-bold' />
                </Box>
            )}

            {
                handlePopoverRender(dataType)
            }
        </Box>
    )
}