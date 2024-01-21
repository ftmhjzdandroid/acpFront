import { useEffect, useState } from "react";
import { Typography } from "../../atoms";
import { ArrowRotateLeft, Moon, Sun1 } from "iconsax-react";

export type ModeModel = "normal" | "switch-user" | "setting";
interface IProps {
  onRenderPage?: () => void;
  onMode: (newMode: ModeModel) => void;
  storedTheme: string;
  className?: string;
  showHeader: boolean;
}

const Setting = (props: IProps) => {
  const { onRenderPage = () => { }, onMode, storedTheme } = props;

  const [fontSize, setFontSize] = useState("16px");

  type ThemeModel = "dark" | "purple" | "green" | "orange" | "blue";
  const [theme, setTheme] = useState<string>(storedTheme);

  const changeTheme = (mode: ThemeModel) => {
    onRenderPage();
    setTheme(mode);
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("acpTheme", mode);
  };

  const htmlTag = document.getElementById("htmlTag");

  const changeRange = (value: string) => {
    setFontSize(`${value}px`);
    if (htmlTag) htmlTag.style.fontSize = `${value}px`;
  };

  const resetTodefault = () => {
    if (htmlTag) {
      setFontSize(`16px`);

      htmlTag.style.fontSize = "16px";
    }
  };
  return (
    <>
      <div
        className={`w-full ${props.showHeader ? "mt-6  h-screen" : ""} border-[1px] th-border-color border-solid border-gray-100 rounded-md z-40 ${props.className
          }`}
      >
        {props.showHeader && (
          <div className="flex items-center justify-between border-solid border-b-[1px] th-border-color border-gray-100 p-2 mb-2">
            <Typography type="h3" className="th-primary-color font-bold mx-1 cursor-pointer">
              تنظیمات
            </Typography>
          </div>
        )}
        <div className="p-2">
          <div className="mt-3 pb-3 w-full flex justify-between items-center border-solid border-b-[1px] th-border-color border-gray-100">
            <Typography type="h3" className="font-medium">
              تم اپلیکیشن
            </Typography>
            <span onClick={() => changeTheme("purple")} className="w-6 h-6 bg-[#a24ea6] rounded-full"></span>
            <span onClick={() => changeTheme("green")} className="w-6 h-6 bg-[#007f5f] rounded-full"></span>
            <span onClick={() => changeTheme("orange")} className="w-6 h-6 bg-[#F68217] rounded-full"></span>
            <span onClick={() => changeTheme("blue")} className="w-6 h-6 bg-[#2563eb] rounded-full"></span>
            {/* {theme !== "dark" ? (
              <Moon onClick={() => changeTheme("dark")} className="cursor-pointer" fontSize={30} />
            ) : (
              <Sun1 onClick={() => changeTheme("purple")} className="cursor-pointer" fontSize={30} />
            )} */}
          </div>
          {/* <div className="mt-2 md:hidden lg:block">
            <Typography type="h3" className="font-medium">
              اندازه فونت
            </Typography>
            <div className="flex justify-between mt-2 items-center ">
              <ArrowRotateLeft onClick={resetTodefault} className="th-text-color cursor-pointer ml-1" fontSize={20} />
              <Typography type={"p"} className="px-0.5">
                25
              </Typography>

              <input
                id="myRange"
                type="range"
                min="10"
                max="25"
                defaultValue="16"
                className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent th-border-color bg-neutral-200 th-primary-accent-color"
                onChange={e => changeRange(e.target.value)}
              />
              <Typography type={"p"} className="px-0.5">
                {fontSize.substring(0, 2)}
              </Typography>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Setting;
