import { useState } from "react";
import { Typography } from "../../../../components/atoms";
import { Stepper } from "../../../../components/templates/stepper";
import MedisineProperty from "./medisine-property";
import MedisineTypeAssignmet from "./medisine-type-assignment";

export const EditMedisineStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "اطلاعات خدمت",
      content: <MedisineProperty />,
      summary: <p></p>,
    },
    {
      title: "انتساب نوع پروانه ",
      content: <MedisineTypeAssignmet />,
      summary: <p></p>,
    },
  ];

  const handleNext = () => setActiveStep(activeStep + 1);
  const handlePrev = () => setActiveStep(activeStep - 1);

  const handleSubmit = () => {
    handleNext();
  };

  const onRegister = () => {
    console.log("Done");
  };

  return (
    <>
      <Typography type="h3" className="p-5">
        ویرایش خدمت
      </Typography>
      <Stepper
        color="green"
        steps={steps}
        activeStep={activeStep}
        nextButtonTitle="مرحله بعد"
        prevButtonTitle="مرحله قبل"
        lastStepButtonTitle="ثبت"
        stepperMode="horizontal"
        onClickNext={handleSubmit}
        onClickPrev={handlePrev}
        onLastStepButton={onRegister}
        lastStepLoading={false}
      />
    </>
  );
};
