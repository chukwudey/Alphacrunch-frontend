import React from 'react'

const PaymentSteps = (props) => {
    const {title, description, icon, position} = props;
  return (
    <div className=' flex justify-start items-start space-x-6 mb-8'>
      <div className=' md:w-14'>
        <img src={icon} alt=""/>
      </div>
      <div className=' text-left'>
        <p className=' text-lg font-bold mb-2 font-Space-Grotesk'>{position}. {title}</p>
        <p className=' text-xs md:text-sm text-gray-500 w-2/3'>{description}</p>
      </div>
    </div>
  )
}

export default PaymentSteps
