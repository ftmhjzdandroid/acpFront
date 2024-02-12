import React from 'react'
import { Typography } from '../../../components/atoms'
import { Checkbox } from 'antd'
import { ArrowCircleLeft } from 'iconsax-react'
import { Button } from '../../../components/molecules'


export default function Filteritems() {
  return (
    <div className='p-1'>
        <div className='flex items-center justify-between w-full'><Typography type='h2'>فیلترها</Typography><ArrowCircleLeft className='cursor-pointer' /></div>
        <div className="flex items-center gap-3 mt-4"> <Checkbox /> <Typography>انخاب همه</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>حذف همه</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>خدمات مشترک ازمایشگاه و مطب</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>خدمات مشترک ازمایشگاه وپرتوپزشکی</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>sericeTest</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>خدمات مشترک مطب و پرتوپزشکی</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>ویزیت</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>پرونده الکترونیک سلانت</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>کتاب ارژش نسبی</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>خدمات مشترک دندان پذشکی وپرتوپزشکی</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>جراحی بیمارستانی</Typography></div>
        <div className="flex items-center gap-3 my-1"> <Checkbox /> <Typography>خدمات دندان پزشکی</Typography></div>
        <div className="flex items-center gap-3 mb-4"> <Checkbox /> <Typography>خدمات عمومی</Typography></div>
        <div className="flex items-center gap-3 mb-4"> <Checkbox /> <Typography>پزشک</Typography></div>

    <Button variant='none' className='text-blue-800'>اعمال فیلتر ها</Button>
    </div>
  )
}
