import React from 'react'

export default function Navigator({page, setPage}) {
    function changePage(pg){
        setPage(pg)
    }

    return (
        <div className='bg-main-black-containers flex justify-between rounded-xl'>
            <div 
                className={`${page === 1 ? 'bg-main-orange' : 'bg-main-black-containers'} w-4/12 flex items-center flex-col text-white py-[1.17vw] rounded-xl cursor-pointer`}
                onClick={() => changePage(1)}
            >
                <p className='text-[0.53vw]'>1 - 29 აპრილი</p>
                <h4 className='font-bold text-[0.75vw]'>Cash Games</h4>
            </div>
            <div 
                className={`${page === 2 ? 'bg-main-orange' : 'bg-main-black-containers'} w-4/12 flex items-center flex-col text-white py-[1.17vw] rounded-xl cursor-pointer`}
                onClick={() => changePage(2)}
            >
                <p className='text-[0.53vw]'>13 - 29 აპრილი</p>
                <h4 className='font-bold text-[0.75vw]'>Spring Series</h4>
            </div>
            <div 
                className={`${page === 3 ? 'bg-main-orange' : 'bg-main-black-containers'} w-4/12 flex items-center flex-col text-white py-[1.17vw] rounded-xl cursor-pointer`}
                onClick={() => changePage(3)}
            >
                <p className='text-[0.53vw]'>30 აპრილი</p>
                <h4 className='font-bold text-[0.75vw]'>Final Stage</h4>
            </div>
        </div>
  )
}
