import React from 'react'

export default function PopupHeader({onClose}) {
  return (
    <div>
        <img src="/banner.jpg" alt='banner' className='rounded-t-xl relative' />
        <div 
            className='bg-main-black-icons w-[1.8vw] h-[1.8vw] rounded-full flex justify-center absolute top-[0.85vw] right-[0.85vw] cursor-pointer'
            onClick={onClose}
        >
            <img src='/close.svg' alt='close' className='filter-white w-[0.95vw]'/>
        </div>

        <div className='bg-main-black-icons max-w-[20vw] rounded-full text-white p-[0.2vw] flex gap-[0.6vw] absolute top-[0.85vw] left-[0.85vw]'>
            <div className='bg-main-black-buttons max-w-[5.5vw] rounded-full flex justify-center'>
                <p className='text-white px-[0.3vw] text-[0.7vw]'>სლოტები</p>
            </div>
            <p className='text-[0.8vw] pr-[0.6vw]'>10 იანვარი - 12 მარტი</p>
        </div>
    </div>
)
}
