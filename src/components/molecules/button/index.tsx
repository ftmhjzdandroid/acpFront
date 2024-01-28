import React from "react";
import { Typography } from "../../atoms";
import { Loading } from "../../atoms/loading";

export interface IButtonprops {
   btnType?: "fill" | "border" | "none";
   size?: "xs" | "small" | "medium" | "large";
   label?: string;
   rightIcon?: React.ReactNode;
   leftIcon?: React.ReactNode;
   style?:
      | "primary"
      | "secondary"
      | "natural"
      | "info"
      | "success"
      | "warning"
      | "danger";
   className?: string;
   isLoading?: boolean;
   disable?: boolean;
   onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
   type?: "button" | "submit" | "reset";
}

export const Button = ({
   btnType = "fill",
   size = "medium",
   label,
   rightIcon,
   leftIcon,
   style = "primary",
   isLoading,
   disable,
   onClick = () => {},
   type,
   ...props
}: IButtonprops) => {
   let { className = " " } = props;

   const getBtnStyle = (): string => {
      switch (style) {
         case "primary":
            switch (btnType) {
               case "fill":
                  return ` ${
                     disable
                        ? "bg-primary-400"
                        : "bg-primary-800 hover:bg-primary-700"
                  }  text-natural-50 `;
               case "border":
                  return ` border ${
                     disable
                        ? "border-primary-400 text-primary-400"
                        : "border-primary-800 text-primary-800 hover:border-primary-700 hover:text-primary-700 hover:bg-primary-100"
                  } bg-natural-50 `;
               case "none":
                  return ` ${
                     disable
                        ? "text-primary-400"
                        : "text-primary-800 hover:text-primary-700"
                  } `;
            }
         case "secondary":
            switch (btnType) {
               case "fill":
                  return ` ${
                     disable
                        ? "bg-secondary-400"
                        : "bg-secondary-800 hover:bg-secondary-700"
                  } text-natural-50 `;
               case "border":
                  return ` border ${
                     disable
                        ? "border-secondary-400 text-secondary-400"
                        : "border-secondary-800 text-secondary-800 hover:border-secondary-700 hover:text-secondary-700 hover:bg-secondary-100"
                  } bg-natural-50 `;
               case "none":
                  return ` ${
                     disable
                        ? "text-secondary-400"
                        : "text-secondary-800 hover:text-secondary-700"
                  } `;
            }
         case "natural":
            switch (btnType) {
               case "fill":
                  return ` ${
                     disable
                        ? "bg-natural-200 text-natural-400"
                        : "bg-natural-200 text-natural-600 hover:bg-natural-300 hover:text-natural-700"
                  } `;
               case "border":
                  return ` border ${
                     disable
                        ? "border-natural-300 text-natural-300"
                        : "border-natural-200 text-natural-700 hover:border-natural-300 hover:text-natural-600"
                  } bg-natural-50`;
               case "none":
                  return ` ${
                     disable
                        ? "text-natural-300"
                        : "text-natural-600 hover:text-natural-700"
                  } `;
            }
         case "danger":
            switch (btnType) {
               case "fill":
                  return ` ${
                     disable
                        ? "bg-danger-300 "
                        : "bg-danger-700 hover:bg-danger-600"
                  } text-natural-50 `;
               case "border":
                  return ` border ${
                     disable
                        ? "border-danger-300 text-danger-300"
                        : "border-danger-700 text-danger-700 hover:border-danger-600 hover:text-danger-600"
                  } bg-danger-50 `;
               case "none":
                  return ` ${
                     disable
                        ? "text-danger-300"
                        : "text-danger-700 hover:text-danger-600"
                  } `;
            }
         case "success":
            switch (btnType) {
               case "fill":
                  return ` ${
                     disable
                        ? "bg-success-300 "
                        : "bg-success-700 hover:bg-success-600"
                  }  text-natural-50 `;
               case "border":
                  return ` border ${
                     disable
                        ? "border-success-300 text-success-300"
                        : "border-success-700 text-success-700 hover:border-success-600 hover:text-success-600"
                  } bg-success-50 `;
               case "none":
                  return ` ${
                     disable
                        ? "text-success-300"
                        : "text-success-700 hover:text-success-600"
                  } `;
            }
         case "info":
            switch (btnType) {
               case "fill":
                  return ` ${
                     disable ? "bg-info-300 " : "bg-info-700 hover:bg-info-600"
                  } text-natural-50 `;
               case "border":
                  return ` border ${
                     disable
                        ? "border-info-300 text-info-300"
                        : "border-info-700 text-info-700 hover:border-info-600 hover:text-info-600"
                  } bg-info-50 `;
               case "none":
                  return ` ${
                     disable
                        ? "text-info-300"
                        : "text-info-700 hover:text-info-600"
                  } `;
            }
         case "warning":
            switch (btnType) {
               case "fill":
                  return ` ${
                     disable
                        ? "bg-warning-300"
                        : "bg-warning-700 hover:bg-warning-600"
                  } text-natural-50 `;
               case "border":
                  return ` border ${
                     disable
                        ? "border-warning-300 text-warning-300"
                        : "border-warning-700 text-warning-700 hover:border-warning-600 hover:text-warning-600"
                  } bg-warning-50 `;
               case "none":
                  return ` ${
                     disable
                        ? "text-warning-300"
                        : "text-warning-700 hover:text-warning-600"
                  } `;
            }
         default:
            return "";
      }
   };

   let loadingColor: "white" | "black" | "primary" = "white";
   let variant: "Button01" | "Button02" | "Button03";

   switch (size) {
      case "xs":
         className += ` ${getBtnStyle()} py-4 px-7`;
         variant = "Button03";
         loadingColor = "primary";
         break;
      case "small":
         className += ` ${getBtnStyle()}`;
         variant = "Button02";
         loadingColor = "primary";
         break;
      case "medium":
         className += ` ${getBtnStyle()} py-6 px-7`;
         variant = "Button02";
         loadingColor = "primary";
         break;
      case "large":
         className += ` ${getBtnStyle()} py-8 px-7`;
         variant = "Button02";
         loadingColor = "primary";
         break;
   }

   return (
      <button
         onClick={onClick}
         disabled={isLoading || disable}
         type={type ?? "button"}
         //note:radius size
         className={` ${className} rounded-lg ${
            isLoading || disable ? " cursor-not-allowed gap-2 " : " "
         } `}
         data-cy='aviButton'
      >
         <div className='flex items-center gap-2'>
            {rightIcon &&
               (isLoading ? (
                  <span
                     className={`flex items-center justify-center transition-opacity duration-300 opacity-${
                        isLoading ? 1 : 0
                     }`}
                  >
                     <Loading color={loadingColor} />
                  </span>
               ) : (
                  //note:fix the size of this icon
                  <span> {rightIcon} </span>
               ))}
            <Typography>{label}</Typography>
            {leftIcon &&
               (isLoading ? (
                  <span
                     className={`flex items-center justify-center transition-opacity duration-300 opacity-${
                        isLoading ? 1 : 0
                     }`}
                  >
                     <Loading color={loadingColor} />
                  </span>
               ) : (
                  <span> {leftIcon} </span>
               ))}
         </div>
      </button>
   );
};