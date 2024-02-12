import React from 'react'
import ShowServisList from './components/ShowServisList'

export default function Mprice() {
  const list = [
    {
      center : "545",
      state : "کشور",
      city : "",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "",
      colleague : "",
      anes : "20000",
      tech : "20000",
      pro : "20000",
      goveranes : "20000",
      govertech : "20000",
      goverpro : "20000"
    },
    {
      center : "545",
      state : "کشور",
      city : "",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "",
      colleague : "",
      anes : "20000",
      tech : "20000",
      pro : "20000",
      goveranes : "20000",
      govertech : "20000",
      goverpro : "20000"
    },
    {
      center : "545",
      state : "کشور",
      city : "",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "",
      colleague : "",
      anes : "20000",
      tech : "20000",
      pro : "20000",
      goveranes : "20000",
      govertech : "20000",
      goverpro : "20000"
    },
  ]

  return (
   <>
    {list.map((item,index)=>( 
      <ShowServisList key={index} index={index} item={item}/>
    ))}
    </>
  )
}
