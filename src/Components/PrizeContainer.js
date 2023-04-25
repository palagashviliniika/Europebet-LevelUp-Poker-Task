import React from 'react'
import PrizeItem from './PrizeItem'
import prizesArr from '../prizesArr.json'

export default function PrizeContainer() {
    const Prizes = prizesArr.map(item => {
        return(
            <PrizeItem key={item.id} icon={item.icon} prize={item.prize} />
        )
    })

    return (
        <div className='bg-main-black-icons rounded-xl mx-[1.3vw] pb-3 mb-5'>
            <div className='flex flex-col items-center mt-[1vw] mx-[1.7vw] gap-1 max-h-[20.5vw]'>
                {Prizes}
            </div>
        </div>
  )
}
