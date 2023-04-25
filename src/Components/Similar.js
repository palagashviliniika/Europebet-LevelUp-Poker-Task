import React from 'react'
import SimilarItem from './SimilarItem'
import services from '../services.json'

export default function Similar() {
    const ServicesItems = services.map(item => {
        return(
            <SimilarItem key={item.id} img={item.img} title={item.title} description={item.description} color={item.color} />
        )
    })

  return (
    <div className='mt-10 overflow-auto'>
        <h1 className='text-white text-lg font-semibold'>
            მსგავსი აქციები
        </h1>

        <div className='flex gap-3 max-w-full overflow-auto scrollbar-hide'>
            {ServicesItems}
        </div>
    </div>
  )
}
