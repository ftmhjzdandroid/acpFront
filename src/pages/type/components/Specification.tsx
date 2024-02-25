import React from 'react'
import { Input, Typography } from '../../../components/atoms'
import Checkbox from 'antd/es/checkbox/Checkbox'


export const Specification = () => {
  return (
    <div className='w-[550px]'> 
   <div className="flex justify-between gap-5">
   <div className="flex flex-col my-5 w-1/2">
        <div className="flex ">
          <Typography type="p" className="pt-3 text-neutral-500">
            نام
          </Typography>
          <Typography type="p" className="pt-3 text-red-500">
            *
          </Typography>
        </div>
        <Input />
      </div>
      <div className="flex flex-col my-5 w-1/2">
        <div className="flex">
          <Typography type="p" className="pt-3 text-neutral-500">
            نماد
          </Typography>
          <Typography type="p" className="pt-3 text-red-500">
            *
          </Typography>
        </div>
        <Input />
      </div>
   </div>
      <div className="flex flex-col my-5 ">
        <Typography type="p" className="pt-3 text-neutral-500">
          توضیحات
        </Typography>
        <Input placeholder="توضیحات" />
      </div>
      <div className="flex justify-between w-3/4 my-5 ">
        <Typography type="p" className="pt-3 text-neutral-500">
          شاخه انتخاب شده
        </Typography>

        <Typography type="p" className="pt-3 text-neutral-500">
          شاخه اصلی
        </Typography>
      </div>

  <div className="flex justify-between w-3/4 my-5 ">
  <Typography type='p'>اعتبار</Typography>
  <Checkbox/>
  </div>
  
  </div>
  )
}
