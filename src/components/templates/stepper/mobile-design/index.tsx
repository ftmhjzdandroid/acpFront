import { Typography } from "../../../atoms/typography";
import { IStepsModel } from "../stepsModel";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

type StepperOfMobileProps = {
  steps: IStepsModel[];
  stepNumber: number;
  color?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
};

export const StepperOfMobile = (props: StepperOfMobileProps) => {
  const { steps, stepNumber, color, onClickNext, onClickPrev } = props;
  return (
    <>
      <div className="p-5 md:hidden">
        <div className="flex justify-center my-5">
          <div
            className={`flex w-56 justify-between items-center py-3 px-4 text-white rounded-md shadow bg-green-600 `}
          >
            {stepNumber !== steps.length - 1 && (
              <div
                className="flex items-center cursor-pointer"
                onClick={onClickNext}
              >
                <ArrowRight2 />
                <Typography type="h3">ادامه</Typography>
              </div>
            )}
            <Typography type="h3">{`${stepNumber + 1} / ${
              steps.length
            }`}</Typography>
            {stepNumber !== 0 && (
              <div
                className="flex items-center cursor-pointer"
                onClick={onClickPrev}
              >
                <Typography type="h3">بازگشت</Typography>
                <ArrowLeft2 />
              </div>
            )}
          </div>
        </div>
        {steps[stepNumber]?.content ?? <></>}
      </div>
    </>
  );
};
