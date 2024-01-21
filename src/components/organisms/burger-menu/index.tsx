import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../services/hooks";
import { RoutesType } from "../../../hook/useNavigate";
import { Typography } from "../../atoms";
import { onOpenBurgerMenu } from "../../../services/slices/burgerMenu";
import UserProfile from "../../molecules/user-profile";
import useUser from "../../../providers/user-data";
import {
  Book1,
  LogoutCurve,
  MessageQuestion,
  Messages3,
  Notification,
} from "iconsax-react";
interface Iprops {
  onUpdate?: () => void;
}
const BergerMenu = (props: Iprops) => {
  const dispatch = useAppDispatch();
  const userInfo = useUser();
  const storedTheme =
    localStorage.getItem("acpTheme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "purple");
  if (storedTheme)
    document.documentElement.setAttribute("data-theme", storedTheme);
  const links: {
    id: number;
    icon: React.ReactNode;
    name: string;
    route: RoutesType;
  }[] = [
      {
        id: 1,
        name: "اعلانات",
        icon: <Notification className="text-blue-600" size={20} />,
        route: "/notice",
      },
      {
        id: 2,
        name: "آموزش",
        route: "/education",
        icon: <Book1 className="text-teal-600" size={20} />,
      },
      {
        id: 3,
        name: "گفتگو",
        route: "/conversation",
        icon: <Messages3 className="th-text-color" size={20} />,
      },
      {
        id: 4,
        name: "سوالات متداول",
        route: "/cummon-questions",
        icon: <MessageQuestion className="text-pink-600" size={20} />,
      },
    ];

  const logOut = () => {
    window.localStorage.removeItem("S3OJWT");
    const location = window.location;
    location.href = `${location.protocol}//${location.host}/sso/?mode=logout&sourceApp=${location}`;
  };

  const [mode, setMode] = useState<"normal" | "switch-user" | "setting">(
    "normal"
  );

  return (
    <div className="sticky top-0 w-64 h-screen px-3 pt-2 border-l-2 th-card-bg-color delay-150 transition duration-300 translate-x-0">
      {mode == "normal" && (
        <>
          <div className="space-y-2 my-2 border-b-2">
            <UserProfile
              viewMode="hamburgerMenu"
              fullName={userInfo.authValidate?.fullName ?? "یافت نشد"}
              partnerName={userInfo.authValidate?.partnerName ?? "یافت نشد"}
              userImage={userInfo.authValidate?.cpartyImage ?? "یافت نشد"}
            />
          </div>
          <div className="space-y-2 my-2">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.route}
                style={({ isActive }) => ({
                  color: isActive ? "#3568d4" : "",
                })}
                onClick={() =>
                  dispatch(onOpenBurgerMenu({ burgerMenuIsOpen: false }))
                }
              >
                <Typography
                  type="h3"
                  className="my-1 flex cursor-pointer items-center th-text-color gap-3 py-1.5 px-2  "
                >
                  {item.icon}
                  {item.name}
                </Typography>
              </NavLink>
            ))}
          </div>
          <Typography
            onClick={logOut}
            type="h3"
            className="my-1 flex cursor-pointer items-center th-text-color gap-3 py-1.5 px-2"
          >
            <LogoutCurve className="text-gray-600 rotate-180" size={20} />
            خروج
          </Typography>
        </>
      )}
    </div>
  );
};

export default BergerMenu;
