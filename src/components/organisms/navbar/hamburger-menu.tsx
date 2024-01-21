import { RoutesType } from "../../../hook/useNavigate";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import {
  burgerMenuState,
  onOpenBurgerMenu,
} from "../../../services/slices/burgerMenu";
import { Add, HambergerMenu } from "iconsax-react";
import { Box, Typography } from "../../atoms";

interface IProps {
  onRoute?: (route: RoutesType) => void;
  children: React.ReactNode;
  appName: string;
}
const HamburgerMenu = (props: IProps) => {
  const { children } = props;
  const { burgerMenuIsOpen } = useAppSelector(burgerMenuState);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(onOpenBurgerMenu({ burgerMenuIsOpen: false }));
  };

  return (
    <>
      <Box
        className="flex items-center justify-center lg:hidden cursor-pointer mx-2"
        onClick={() => dispatch(onOpenBurgerMenu({ burgerMenuIsOpen: true }))}
      >
        <HambergerMenu size={24} className="text-blue-800" />
      </Box>
      <Typography className="text-blue-800 font-bold lg:hidden" type="h2">
        {props.appName}
      </Typography>
      <Box
        className={`fixed inset-0 w-full z-40 ${
          burgerMenuIsOpen ? "" : "pointer-events-none opacity-0"
        }`}
      >
        <Box
          className={`h-full w-min z-30 relative delay-150 transition duration-300 overflow-y-auto  ${
            burgerMenuIsOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Box className="overflow-y-auto h-screen w-min shadow-lg relative">
            <Add
              size={24}
              className="rotate-45 absolute top-1 left-1 cursor-pointer fill-gray-600 z-10"
              onClick={onClose}
            />
            {children}
          </Box>
        </Box>
        <Box
          className={`fixed inset-0 w-full z-20 transition-all duration-1000 delay-150 ease-in-out ${
            burgerMenuIsOpen ? "bg-black bg-opacity-40" : "bg-transparent"
          }`}
          onClick={onClose}
        ></Box>
      </Box>
    </>
  );
};
export default HamburgerMenu;
