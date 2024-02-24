import React from 'react'
import { Input, Typography } from '../../../components/atoms'
import Checkbox from 'antd/es/checkbox/Checkbox'


export const Specification = () => {
  return (
    <div className='w-[700px]'> 
        <div className="grid grid-cols-2 my-5 ">
    <Typography type="p" className="pt-3 text-neutral-500">
      نام
    </Typography>
    <Input />
  </div>
  <div className="grid grid-cols-2 my-5 ">
    <Typography type="p" className="pt-3 text-neutral-500">
      نماد
    </Typography>
    <Input />
  </div>
  <div className="grid grid-cols-2 my-5 ">
    <Typography type="p" className="pt-3 text-neutral-500">
      توضیحات
    </Typography>
    <Input placeholder="توضیحات" />
  </div>
  <div className="grid grid-cols-2 my-5 ">
    <Typography type="p" className="pt-3 text-neutral-500">
      شاخه انتخاب شده
    </Typography>

    <select
      name="cars"
      id="cars"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value=" ..">شاخه اصلی</option>
      <option value="saab">فرغی</option>
      <option value="mercedes">....</option>
      <option value="audi">.....</option>
    </select>
  </div>
  <div className="grid grid-cols-2 my-5 ">
  <Typography type='p'>اعتبار</Typography>
  <Checkbox/>
  </div>
  
  </div>
  )
}
