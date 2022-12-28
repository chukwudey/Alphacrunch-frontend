import React from 'react'

const FeaturesCard = (props) => {
    const {image, title, description} = props
  return (
    <div className=' bg-black text-white pl-8 py-7 ease-in-out pr-12 m-4 w-4/5 rounded-2xl transform hover:skew-y-1 hover:shadow-lg hover:text-yellow-400'>
      <div className=' mb-2'>
        <img src={image} alt={title}/>
      </div>
      <p className=' text-2xl font-semibold mb-4'>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default FeaturesCard
