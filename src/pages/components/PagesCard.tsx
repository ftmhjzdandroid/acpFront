import React from 'react'
type Text ={
  text : string
}
export default function PagesCard(pepos : Text) {
  return (
    <div className="w-full rounded overflow-hidden shadow-2xl border border-slate-200  p-3 min-h-screen">
      {pepos.text}
  </div>
  )
}
