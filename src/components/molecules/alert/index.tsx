import React from "react";
import { Typography } from "../../atoms/typography";

type AlertType = "E" | "W" | "I" | "S";
interface Iprops {
  data: {
    type?: AlertType;
    text?: string;
  }[];
}

export const Alert = (props: Iprops) => {
  const { data } = props;

  const alertType = (type?: AlertType) => {
    const className: string[] = ["rounded-lg py-2 px-3 my-2 text-base mb-2"];
    switch (type) {
      case "W":
        className.push("th-alert-w-color th-alert-w-text-color");
        break;
      case "E":
        className.push("th-alert-e-color th-alert-e-text-color");
        break;
      case "S":
        className.push("th-alert-s-color th-alert-s-text-color");
        break;
      default:
        className.push("th-alert-i-color th-alert-i-text-color");
        break;
    }
    return className.join(" ");
  };

  return (
    <>
      {data.map((alert, index) => {
        return (
          <div key={index} className={alertType(alert.type)} role="alert">
            <p className="text-[12px] md:text-[14px]">{alert.text}</p>
          </div>
        );
      })}
    </>
  );
};
