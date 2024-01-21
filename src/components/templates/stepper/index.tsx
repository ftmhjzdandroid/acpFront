import { IStepsModel } from "./stepsModel";
import { ProgressStep } from "./progress-step";
import { useState } from "react";
import { useEffect } from "react";

type StepperProps = {
  stepperMode?: "horizontal" | "vertical";
  steps: IStepsModel[];
  nextButtonTitle: string;
  prevButtonTitle: string;
  lastStepButtonTitle: string;
  color?: string;
  btnColor?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  onLastStepButton?: () => void;
  activeStep: number;
  setActiveStep?: () => void;
  lastStepLoading?: boolean;
};

export const Stepper = ({
  stepperMode,
  steps,
  nextButtonTitle,
  prevButtonTitle,
  lastStepButtonTitle,
  color,
  onClickNext,
  onClickPrev,
  onLastStepButton,
  activeStep = 0,
  lastStepLoading,
}: StepperProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 740;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <ProgressStep
      stepNumber={activeStep}
      stepperMode={width < breakpoint ? "horizontal" : stepperMode}
      steps={steps}
      nextButtonTitle={nextButtonTitle}
      prevButtonTitle={prevButtonTitle}
      lastStepButtonTitle={lastStepButtonTitle}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onLastStepButton={onLastStepButton}
      lastStepLoading={lastStepLoading}
      color={color}
    />
  );
};
