import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between align-middle bg-pri-pink px-12 py-16'>
        <div className=' w-1/3 px-8'>
            <p className=' font-semibold text-2xl mb-4'>Alphacrunch</p>
            <p>Alphacrunch is a company duly registered with RC Number: 1775651 under the Laws of the Federal Republic of Nigeria</p>
            
        </div>
        <div className=' flex justify-evenly space-x-6 w-9/12 px-8'>
            <div>
                Company support
            </div>
            <div>
                Company support
            </div>
            <div>
                Company support
            </div>
            <div>
                Company support
            </div>
            
        </div>
    </div>
  )
}

export default Footer