import React from 'react'

const StatisticsOption = (props) => {
  return (
    <div className=' flex p-2 space-x-4 my-4'>
      <div>
        <img src={props.image} alt={props.name}/>
      </div>
      <div>
        <p className=' text-2xs font-inter font-bold text-gray-700'>{props.name}</p>
        <p className=' font-Space-Grotesk font-bold'>{props.amount}</p>
      </div>
    </div>
  )
}

export default StatisticsOption;
