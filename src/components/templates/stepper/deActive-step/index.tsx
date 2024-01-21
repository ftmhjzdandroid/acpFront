import { Typography } from "../../../atoms/typography";
import { IStepsModel } from "../stepsModel";
import { ProgressEdge } from "../progressEdge";

type DeActiveStepStepProps = {
  stepperMode: "horizontal" | "vertical" | undefined;
  stepCounter: number;
  steps: IStepsModel[];
  color?: string;
  title: string;
};

export const DeActiveStep = (props: DeActiveStepStepProps) => {
  const { stepperMode, stepCounter, steps, color, title } = props;
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center ${
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
                ? "text-green-600 "
                : "text-neutral-500"
            } font-bold`}
          >
            {stepperMode === "vertical"
              ? steps[stepCounter].title ?? ""
              : stepCounter + 1}
          </Typography>
        </div>
        <Typography className="text-neutral-500 font-medium mt-2" type="h3">
          {title}
        </Typography>
      </div>
      {stepCounter < 4 && (
        <ProgressEdge mode="deActive" stepperMode={stepperMode} />
      )}
    </>
  );
};
