import { ArrowDown2 } from "iconsax-react";
import { Box, Typography } from "../../atoms";
import { Avatar } from "../avatar";

export interface UserProfileModel {
  userImage: string | undefined;

  fullName: string | undefined;

  viewMode: "navbar" | "hamburgerMenu";
  partnerName: string;
  onClick?: () => void;
}
const UserProfile = ({
  userImage,
  fullName,
  viewMode,
  partnerName,
  onClick = () => { },
}: UserProfileModel) => {
  const viewModeHandle = () => {
    if (viewMode === "navbar") return "hidden lg:flex";
    else return "flex";
  };
  return (
    <Box
      className={`${viewModeHandle()} items-center gap-3 pr-4 py-2 h-12 ${viewMode === "navbar" && "border-r"
        } border-gray-200`}
      onClick={onClick}
    >
      <Avatar src={userImage} />
      <Box className="flex flex-col">
        <Typography type="h3" className="th-text-neutral-50 font-medium">
          {fullName}
        </Typography>
        <Typography type="h4" className="text-gray-400 font-medium">
          {partnerName}
        </Typography>
      </Box>
      <ArrowDown2 className="th-text-neutral-50" size={14} />
    </Box>
  );
};

export default UserProfile;
