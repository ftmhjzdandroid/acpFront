import React, { useState } from 'react'
import { Stepper } from '../../../../../components/templates/stepper';
import { Typography } from '../../../../../components/atoms';
import MedisineProperty from '../../../../medisine/pages/editingservises/medisine-property';
import MedisineTypeAssignmet from '../../../../medisine/pages/editingservises/medisine-type-assignment';
import { ArrowLeft } from 'iconsax-react';
import { useCustomNav } from '../../../../../hook/useNavigate';

export default function Addservises() {
    const [activeStep, setActiveStep] = useState(0);
const navigate = useCustomNav();

    const steps = [
      {
        title: "اطلاعات عمومی",
        content: <MedisineProperty />,
        summary: <p></p>,
      },
      {
        title: "انتساب نوع خدمات ",
        content: <MedisineTypeAssignmet />,
        summary: <p></p>,
      },
      {
        title: "مقدار دهی به ویژگی ها",
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
       <div className='flex w-full items-center justify-between'>
       <Typography type="h3" className="p-5 text-blue-900">
           افزودن خدمت جدید
        </Typography>
        <ArrowLeft color='#3949AB' className='cursor-pointer' onClick={()=>navigate.back()}/>
       </div>
       <hr />
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
  
