import React, { useState } from 'react'
import { useCustomNav } from '../../../hook/useNavigate';
import { Stepper } from '../../../components/templates/stepper';
import { Specification } from './Specification';
type prop ={
    close : ()=> void
  }
export const Modaltypeitems = (props : prop) => {
    const [activeStep, setActiveStep] = useState(0);
    const navigate = useCustomNav();
    
        const steps = [
          {
            title: "مشخصات",
            content: <Specification/>,
            summary: <p></p>,
          },
          {
            title: "انتساب ویژگی اضافه",
            content: <></>,
            summary: <p></p>,
          }
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
    <div>
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
  /></div>
  )
}
