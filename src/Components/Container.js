import React from 'react'
import LeadeboardItem from './LeadeboardItem'

export default function Container() {
  return (
    <div className='w-full mt-[1.6vw] rounded-2xl bg-main-black-containers '>
        <div className='rounded-t-2xl border-solid border-2 border-main-black-containers flex justify-center'>
            <h1 className='text-white text-lg font-semibold py-[0.9vw]'>
                1₾ რეიკი = 1 ქულას
            </h1>
        </div>

        <div className='bg-main-black-subContainers rounded-b-2xl border-solid border-2 border-main-black-icons'>
            <div className='flex justify-center'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-white text-base font-semibold py-[0.9vw]'>
                        ჰოლდემის TOP20 ლიდერბორდი
                    </h1>
                    <div>
                        <img src='/example-icon.png' alt='example' />
                    </div>
                </div>
            </div>

            <div className='bg-main-black-icons rounded-xl mx-[1.3vw]'>
                <div className='text-main-black-text text-sm flex justify-around gap-[12.5vw] pt-[1.7vw] pr-[6.5vw] pl-[2.2vw]'>
                    <p>
                        ადგილი
                    </p>
                    <div className='flex items-center gap-1.5'>
                        <img src='/example-icon.png' alt='voucher' />
                        <p>
                            ვაუჩერი
                        </p>
                        {/* <img src='/voucher.svg' alt='voucher' className='filter-white' /> */}
                    </div>
                    <p>
                        პრიზი
                    </p>
                </div>
                <div className='flex flex-col items-center mt-[1vw] mx-[1.7vw] gap-1'>
                    <LeadeboardItem />
                    <LeadeboardItem />
                    <LeadeboardItem />
                </div>
            </div>
        </div>
    </div>
  )
}
