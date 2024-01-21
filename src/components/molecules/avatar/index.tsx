import React from "react";
import { Box, IImageProps, Image } from "../../atoms";
import { Profile, ProfileCircle } from "iconsax-react";
interface IProps extends IImageProps {
  fill?: string;
}
export const Avatar = (props: IProps) => {
  const { src } = props;
  if (!src)
    return (
      <Box className="bg-neutral-200 rounded-full p-2">
        <Profile
          className="w-6 h-6 lg:w-[30px] lg:h-[30px] text-neutral-500"
          variant="Bulk"
        />
      </Box>
    );
  return (
    <Image {...props} className={`${props.className} w-10 h-10 rounded-full`} />
  );
};
