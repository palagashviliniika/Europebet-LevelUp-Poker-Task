import React from 'react'
import RuleItem from './RuleItem'

export default function Rules() {
  return (
    <div>
        <h1 className='text-white text-lg font-semibold'>
            წესები და პირობები
        </h1>

        <div>
            <RuleItem >
                როდის იწყება და რა ფორმატით გაიმართება აქცია
            </RuleItem>
            <RuleItem >
                როგორ მივიღო აქციაში მონაწილეობა?
            </RuleItem>
            <RuleItem >
                სხვადასვა
            </RuleItem>
        </div>
    </div>
  )
}
