import React from 'react'

export default function SimilarItem({img, title, description, color}) {
  return (
    <div className='flex flex-col relative text-white w-1/4'>
        <img src={img} alt='service' />
        <div className={`bg-gradient-to-t ${color} to-transparent w-full h-1/2 absolute bottom-0 rounded flex flex-col pt-10 px-4 text-sm`}>
            <h1 className='font-semibold'>
                {title}
            </h1>
            <p className='pt-2'>
                {description}
            </p>
        </div>
    </div>
  )
}
