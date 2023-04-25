import React from 'react'
import LeadeboardItem from './LeadeboardItem'
import leaderboardArr from '../leaderboardArr.json'

export default function LeaderboardContainer() {
    const leaderboardItems = leaderboardArr.map(item => {
        return(
            <LeadeboardItem key={item.id} place={item.id} voucher={item.voucher} prize={item.prize}/>
        )
    })

    return (
        <div className='bg-main-black-icons rounded-xl mx-[1.3vw] pb-3 mb-5'>
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
            <div className='flex flex-col items-center mt-[1vw] mx-[1.7vw] gap-1 max-h-[20.5vw] overflow-y-scroll scroll-smooth'>
                {leaderboardItems}
            </div>
        </div>
    )
}
