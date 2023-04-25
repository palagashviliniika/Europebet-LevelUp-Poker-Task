import React from 'react'

export default function PrizeItem({icon, prize}) {
  return (
    <div className='bg-main-black-prize w-full flex items-center gap-4 mt-3 text-white py-4 px-5 rounded-xl relative overflow-hidden'>
        <img src={icon} alt='icon' />
        <h1 className='w-3/4'>
             {prize}
        </h1>
        <div className='bg-main-orange shadow-main-orange shadow-lg -rotate-90 w-12 h-2 rounded-b-md absolute left-[-24px]'></div>
    </div>
  )
}
