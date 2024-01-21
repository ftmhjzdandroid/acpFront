import { Typography } from "../../../atoms/typography";
import { ReactNode } from "react";
import { IStepsModel } from "../stepsModel";

type ActiveStepProps = {
  stepperMode: "horizontal" | "vertical" | undefined;
  stepCounter: number;
  checkAvtiveStepperMode: ReactNode;
  steps: IStepsModel[];
  color?: string;
  title: string;
};

export const ActiveStep = (props: ActiveStepProps) => {
  const {
    stepperMode,
    stepCounter,
    checkAvtiveStepperMode,
    steps,
    color,
    title,
  } = props;

  return (
    <>
      {/* <div className="flex flex-col items-center">
        <div
          className={`flex ${
            stepperMode === "vertical"
              ? " items-center gap-4"
              : `p-1.5 md:p-3 h-[1.875rem] md:h-12 justify-center bg-green-600 rounded-full gap-1 md:gap-2 `
          }`}
        >
          {stepperMode === "vertical" ? (
            <div
              className={` text-white w-10 h-10 items-center justify-center flex rounded-full bg-green-600`}
            >
              {stepCounter + 1}
            </div>
          ) : (
            <div className="h-[1.125rem] w-[1.125rem] md:h-6 md:w-6 bg-white rounded-full"></div>
          )}
          <Typography
            type="h4"
            className={`${
              stepperMode === "vertical" ? "text-green-600" : "text-white"
            }`}
          >
            {steps[stepCounter]?.title ?? ""}
          </Typography>
        </div>
        {title}
      </div> */}
      <div className="flex flex-col items-center">
        <div
          className={`flex border-2 border-emerald-500 items-center ${
            stepperMode === "vertical"
              ? "gap-4"
              : "h-[1.875rem] w-[1.875rem] md:h-12 md:w-12 px-3 py-2 md:p-3 bg-zinc-50 rounded-full justify-center"
          }`}
        >
          {stepperMode === "vertical" && (
            <div className="bg-zinc-50 rounded-full h-10 w-10 text-neutral-500 flex justify-center items-center">
              {String(stepCounter + 1)}
            </div>
          )}
          <Typography
            type="h2"
            className={`${
              stepperMode === "vertical"
                ? "text-emerald-500 "
                : "text-neutral-500"
            } font-bold`}
          >
            {stepperMode === "vertical"
              ? steps[stepCounter].title ?? ""
              : stepCounter + 1}
          </Typography>
        </div>
        <Typography className="mt-2 text-neutral-500 font-medium" type="h3">
          {title}
        </Typography>
      </div>
      <div className="flex">
        <div
          className={
            stepCounter === steps.length && stepperMode === "horizontal"
              ? "hidden"
              : "flex"
          }
        >
          {checkAvtiveStepperMode}
        </div>
        {stepperMode === "vertical" && (
          <div className="px-14 py-3 w-full">
            {steps[stepCounter].content ?? <></>}
          </div>
        )}
      </div>
    </>
  );
};
