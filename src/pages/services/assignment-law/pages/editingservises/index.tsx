import React, { useState } from "react";
import { Stepper } from "../../../../../components/templates/stepper";
import ServicesProperty from "./services-property";
import { Typography } from "../../../../../components/atoms";
import ServicesTypeAssignmet from "./services-type-assignment";

export const EditServicesStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "اطلاعات خدمت",
      content: <ServicesProperty />,
      summary: <p></p>,
    },
    {
      title: "انتساب نوع پروانه ",
      content: <ServicesTypeAssignmet />,
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
