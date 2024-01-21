import { Typography } from "../../../atoms/typography";
import { ReactNode } from "react";
import { IStepsModel } from "../stepsModel";
import { TickCircle } from "iconsax-react";

type CompletedStepProps = {
  stepperMode: "horizontal" | "vertical" | undefined;
  stepCounter: number;
  checkAvtiveStepperMode: ReactNode;
  steps: IStepsModel[];
  summary?: JSX.Element;
  color?: string;
  title: string;
};

export const CompletedStep = (props: CompletedStepProps) => {
  const {
    stepperMode,
    stepCounter,
    checkAvtiveStepperMode,
    steps,
    summary,
    color,
    title,
  } = props;

  return (
    <>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <div
            className={`${
              stepperMode === "vertical" ? "flex items-center gap-4" : ""
            }`}
          >
            <div
              className={`flex items-center justify-center rounded-full bg-emerald-500 ${
                stepperMode === "vertical"
                  ? "w-10 h-10"
                  : "md:p-1 flex-col h-[1.875rem] w-[1.875rem] md:h-12 md:w-12"
              }`}
            >
              <TickCircle className="text-white md:w-9 md:h-9 w-7 h-7" />
            </div>
            {stepperMode === "vertical" && (
              <Typography type="h4" className="text-emerald-500">
                {steps[stepCounter]?.title ?? ""}
              </Typography>
            )}
            {summary}
          </div>
          <Typography className="text-emerald-500 font-medium mt-2" type="h3">
            {title}
          </Typography>
        </div>
        <div>{checkAvtiveStepperMode}</div>
      </div>
    </>
  );
};
