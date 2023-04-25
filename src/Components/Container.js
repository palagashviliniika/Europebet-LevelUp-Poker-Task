import React from 'react'
import LeaderboardContainer from './LeaderboardContainer'
import PrizeContainer from './PrizeContainer'

export default function Container() {
  return (
    <div className='w-full mt-[1.6vw] rounded-2xl bg-main-black-containers relative overflow-hidden'>
        <div className='rounded-t-2xl border-solid border-2 border-main-black-containers flex flex-col items-center'>
            <h1 className='text-white text-lg font-semibold py-[0.9vw]'>
                1₾ რეიკი = 1 ქულას
            </h1>
            <div className='bg-main-orange shadow-main-orange shadow-lg w-1/4 h-2 rounded-b-md absolute top-[-4px]'>
                
            </div>
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

            {/* LeaderBoard */}
            <LeaderboardContainer />
            <PrizeContainer />
            <LeaderboardContainer />
            <PrizeContainer />

            <p className='text-white text-sm text-center mb-3'>
            * ლიდერბორდის შედეგები განახლდება <span className='text-main-orange underline'>პოკერის ლობიში</span>
            </p>
        </div>

    </div>
  )
}
