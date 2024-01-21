import { Button } from "../../../molecules";
import { ActiveStep } from "../active-step";
import { CompletedStep } from "../completed-step";
import { DeActiveStep } from "../deActive-step";
import { ProgressEdge } from "../progressEdge";
import { IStepsModel } from "../stepsModel";

type ProgressStepProps = {
  stepperMode: "horizontal" | "vertical" | undefined;
  stepNumber: number;
  steps: IStepsModel[];
  nextButtonTitle: string;
  prevButtonTitle: string;
  lastStepButtonTitle: string;
  color?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  onLastStepButton?: () => void;
  lastStepLoading?: boolean;
};

export const ProgressStep = ({
  stepperMode,
  stepNumber,
  steps,
  nextButtonTitle,
  prevButtonTitle,
  lastStepButtonTitle,
  color,
  onClickNext,
  onClickPrev,
  onLastStepButton,
  lastStepLoading,
}: ProgressStepProps) => {
  const progressStepsHandle = () => {
    const newStep = steps.map((item, index) => ({
      ...item,
      stepIndex: index,
      currentStep: Boolean(stepNumber === index),
      completed: Boolean(stepNumber > index),
    }));
    return newStep;
  };

  const lastChild = stepNumber + 1 === steps.length;
  const checkStepperMode = (isActive: boolean, completed: boolean) => {
    return (
      <ProgressEdge
        lastChild={lastChild && isActive}
        mode={isActive || completed ? "active" : "deActive"}
        stepperMode={stepperMode}
        color={color}
        completed={completed}
        isActive={isActive}
      />
    );
  };

  const stepperBtns = () => {
    return (
      <div
        className={`flex gap-2 justify-end mr-5 ${
          stepperMode === "vertical" ? "border-r-2" : ""
        }`}
      >
        {stepNumber !== 0 && (
          <Button variant="outline" onClick={onClickPrev}>
            {prevButtonTitle}
          </Button>
        )}
        <Button
          isLoading={lastStepLoading}
          variant="primary"
          onClick={
            stepNumber === steps.length - 1 ? onLastStepButton : onClickNext
          }
        >
          {stepNumber === steps.length - 1
            ? lastStepButtonTitle
            : nextButtonTitle}
        </Button>
      </div>
    );
  };

  const progressHandler = (
    stepCounter: number,
    status: "active" | "deActiv" | "completed",
    title: string
  ) => {
    switch (status) {
      case "active":
        return (
          <>
            <ActiveStep
              checkAvtiveStepperMode={checkStepperMode(true, false)}
              stepCounter={stepCounter}
              stepperMode={stepperMode}
              steps={steps}
              color={color}
              title={title}
            />
            {stepperMode === "vertical" && stepperBtns()}
          </>
        );
      case "deActiv":
        return (
          <>
            <DeActiveStep
              stepCounter={stepCounter}
              stepperMode={stepperMode}
              steps={steps}
              color={color}
              title={title}
            />
          </>
        );
      case "completed":
        return (
          <>
            <CompletedStep
              checkAvtiveStepperMode={checkStepperMode(false, true)}
              stepCounter={stepCounter}
              stepperMode={stepperMode}
              steps={steps}
              color={color}
              title={title}
            />
          </>
        );
    }
  };

  return (
    <>
      <div
        className={`md:flex md:flex-col ${
          stepperMode === "horizontal" ? "justify-center mb-24 relative" : ""
        }`}
      >
        <div
          className={`${
            stepperMode === "horizontal"
              ? "flex justify-center items-center"
              : "md:inline hidden"
          } md:pr-10 md:mt-5`}
        >
          {progressStepsHandle().map((item) => (
            <>
              {item.completed
                ? progressHandler(item.stepIndex, "completed", item.title ?? "")
                : item.currentStep
                ? progressHandler(item.stepIndex, "active", item.title ?? "")
                : progressHandler(item.stepIndex, "deActiv", item.title ?? "")}
            </>
          ))}
        </div>
        {stepperMode === "horizontal" && (
          <div className="flex flex-col p-10 w-full">
            {steps[stepNumber]?.content ?? <></>}
            <div className="mt-5">{stepperBtns()}</div>
          </div>
        )}
      </div>
    </>
  );
};
