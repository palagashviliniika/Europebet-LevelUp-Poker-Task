import React from 'react'

export default function RuleItem({children}) {
  return (
    <div className='flex justify-between bg-main-black-icons rounded-lg my-2 py-5 px-6'>
        <h1 className='text-white'>
            {children}
        </h1>
        <img src='/close.svg' alt='close' className='filter-white w-[0.95vw]'/>
    </div>
  )
}
