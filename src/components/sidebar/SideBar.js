import React from 'react';
import { product_name } from '../../constants/details';

const SideBar = () => {
  return (
    <div className=' bg-pri-pink w-1/5 h-screen'>
        <h2 className=' mt-4 text-4xl text-center font-bold font-Space-Grotesk'>{product_name}</h2>
    </div>
  )
}

export default SideBar;
