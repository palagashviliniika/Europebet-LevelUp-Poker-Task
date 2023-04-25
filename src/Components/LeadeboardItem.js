import React from 'react'

export default function LeadeboardItem({place, voucher, prize}) {
  return (
    <div className='bg-main-black-leaderboard w-full rounded-[4vw] font-semibold border-solid border-2 border-main-black-containers text-white flex justify-around items-center gap-[10vw] py-[0.75vw]'>
        <div className='bg-main-black-containers border-solid border-2 border-main-black-containers rounded-full flex justify-center items-center w-[1.5vw] h-[1.5vw]'>
            <p className='text-sm'>
                {place}
            </p>
        </div>
        <p className='text-sm font-bold'>
            {voucher}
        </p>
        <div>
            <p className='text-sm'>
                {prize}
            </p>
        </div>
    </div>
  )
}
