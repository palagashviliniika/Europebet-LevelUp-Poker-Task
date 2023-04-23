import React from 'react'

export default function LeadeboardItem() {
  return (
    <div className='bg-main-black-leaderboard w-full rounded-[4vw] border-solid border-2 border-main-black-containers text-white flex justify-around items-center gap-[10vw] py-[0.75vw]'>
        <div className='bg-main-black-containers border-solid border-2 border-main-black-containers rounded-full flex justify-center w-[1.5vw] h-[1.5vw]'>
            <p className='text-sm'>
                1
            </p>
        </div>
        <p className='text-sm'>
            money
        </p>
        <div>
            <p className='text-sm'>
                A კატეგორიის საგზური
            </p>
        </div>
    </div>
  )
}
